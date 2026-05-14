"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitLead, type LeadFormState } from "../actions";

const initialState: LeadFormState = { status: "idle" };

function fieldError(state: LeadFormState, field: "company" | "contact_name" | "phone") {
  if (state.status === "error" && state.kind === "validation") {
    return state.fieldErrors[field];
  }
  return undefined;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="form-submit" disabled={pending}>
      {pending ? "กำลังส่ง…" : "ส่งข้อมูล →"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitLead, initialState);

  if (state.status === "success") {
    return (
      <div className="form-card form-success" role="status" aria-live="polite">
        <div className="form-success-icon" aria-hidden="true">
          ✓
        </div>
        <h3>ขอบคุณครับ ทีมงานจะติดต่อกลับ</h3>
        <p>
          เราได้รับข้อมูลของคุณแล้ว เภสัชกรหรือทีมงานจะติดต่อกลับภายใน 1 วันทำการ
          เพื่อแอด LINE OA และส่งรายการยาที่แนะนำสำหรับบริษัทคุณ
        </p>
        <a
          className="form-success-line"
          href="https://line.me/R/ti/p/@pharma"
          target="_blank"
          rel="noopener noreferrer"
        >
          หรือแอด LINE OA @pharma
        </a>
      </div>
    );
  }

  const companyError = fieldError(state, "company");
  const contactNameError = fieldError(state, "contact_name");
  const phoneError = fieldError(state, "phone");
  const isServerError = state.status === "error" && state.kind === "server";

  return (
    <div className="form-card">
      <h3>ติดต่อเพื่อเริ่มสั่งยา</h3>
      <p className="form-card-sub">3 ช่องเท่านั้น — ไม่ต้องสมัครสมาชิก ไม่มีการตลาดตามรบกวน</p>

      <form action={formAction} noValidate>
        <div className="form-group">
          <label htmlFor="company">
            ชื่อบริษัท <span className="req">*</span>
          </label>
          <input
            id="company"
            type="text"
            name="company"
            placeholder="เช่น บริษัท เอ บี ซี จำกัด"
            required
            aria-invalid={companyError ? true : undefined}
            aria-describedby={companyError ? "company-error" : undefined}
          />
          {companyError ? (
            <span className="field-error" id="company-error">
              {companyError}
            </span>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="contact_name">
            ผู้ติดต่อ <span className="req">*</span>
          </label>
          <input
            id="contact_name"
            type="text"
            name="contact_name"
            placeholder="ชื่อ-นามสกุล ผู้ติดต่อ"
            required
            aria-invalid={contactNameError ? true : undefined}
            aria-describedby={contactNameError ? "contact-name-error" : undefined}
          />
          {contactNameError ? (
            <span className="field-error" id="contact-name-error">
              {contactNameError}
            </span>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            เบอร์โทร <span className="req">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="0XXXXXXXXX"
            inputMode="tel"
            autoComplete="tel"
            required
            pattern="0[0-9]{9}"
            aria-invalid={phoneError ? true : undefined}
            aria-describedby={phoneError ? "phone-error" : undefined}
          />
          {phoneError ? (
            <span className="field-error" id="phone-error">
              {phoneError}
            </span>
          ) : null}
        </div>

        <SubmitButton />

        <p className="form-disclaimer">ข้อมูลใช้สำหรับติดต่อกลับเท่านั้น เป็นไปตาม PDPA</p>

        {isServerError ? (
          <div className="form-error" role="alert">
            ขออภัย ลองอีกครั้ง หรือแอด LINE{" "}
            <a href="https://line.me/R/ti/p/@pharma" target="_blank" rel="noopener noreferrer">
              @pharma
            </a>
          </div>
        ) : null}
      </form>
    </div>
  );
}
