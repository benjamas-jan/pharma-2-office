import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section className="form-section" id="contact">
      <div className="container">
        <div className="form-grid">
          <div className="form-side">
            <div className="section-eyebrow">เริ่มต้นง่าย ๆ</div>
            <h2>
              กรอกฟอร์ม
              <br />
              เภสัชกร <span className="accent">ติดต่อกลับ</span>
            </h2>
            <p>
              ใช้เวลาไม่ถึง 30 วินาที — ทีมงานจะแอด LINE OA @pharma
              และส่งรายการยาที่แนะนำสำหรับบริษัทคุณ ภายใน 1 วันทำการ
            </p>
            <div className="alt-contact">
              <div className="alt-contact-icon" aria-hidden="true">
                L
              </div>
              <div className="alt-contact-text">
                <div className="alt-contact-label">หรือแอด LINE OA โดยตรง</div>
                <div className="alt-contact-value">@pharma</div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
