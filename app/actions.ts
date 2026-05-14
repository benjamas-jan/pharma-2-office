"use server";

import { Resend } from "resend";

// Resend's sandbox sender (onboarding@resend.dev) only delivers to the email
// that owns the Resend account — currently benjamasdee@gmail.com. Add
// chaivoot@gmail.com back once a custom domain is verified in Resend.
const LEAD_RECIPIENTS = ["benjamasdee@gmail.com"];
const DEFAULT_FROM = "Wellness Plus <onboarding@resend.dev>";

export type LeadFormState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      kind: "validation";
      fieldErrors: Partial<Record<"company" | "contact_name" | "phone", string>>;
    }
  | { status: "error"; kind: "server" };

const PHONE_REGEX = /^0[0-9]{9}$/;

function normalizePhone(raw: string): string {
  return raw.replace(/[\s-]/g, "");
}

export async function submitLead(
  _prev: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const company = String(formData.get("company") ?? "").trim();
  const contactName = String(formData.get("contact_name") ?? "").trim();
  const phoneRaw = String(formData.get("phone") ?? "").trim();
  const phone = normalizePhone(phoneRaw);

  const fieldErrors: Record<string, string> = {};
  if (!company) fieldErrors.company = "กรุณาระบุชื่อบริษัท";
  if (!contactName) fieldErrors.contact_name = "กรุณาระบุชื่อผู้ติดต่อ";
  if (!phone) {
    fieldErrors.phone = "กรุณาระบุเบอร์โทร";
  } else if (!PHONE_REGEX.test(phone)) {
    fieldErrors.phone = "เบอร์โทรไม่ถูกต้อง (10 หลัก ขึ้นต้นด้วย 0)";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", kind: "validation", fieldErrors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[lead] RESEND_API_KEY is not set");
    return { status: "error", kind: "server" };
  }

  const submittedAt = new Intl.DateTimeFormat("th-TH", {
    timeZone: "Asia/Bangkok",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());

  const subject = `[Wellness Plus] ลูกค้าใหม่: ${company}`;
  const text = `มีคนกรอกฟอร์มขอข้อมูลบริการตู้ยา

บริษัท: ${company}
ผู้ติดต่อ: ${contactName}
เบอร์โทร: ${phone}

เวลา: ${submittedAt}`;

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: process.env.LEAD_FROM_EMAIL ?? DEFAULT_FROM,
      to: LEAD_RECIPIENTS,
      subject,
      text,
    });

    if (result.error) {
      console.error("[lead] resend error:", result.error);
      return { status: "error", kind: "server" };
    }

    return { status: "success" };
  } catch (err) {
    console.error("[lead] unexpected error:", err);
    return { status: "error", kind: "server" };
  }
}
