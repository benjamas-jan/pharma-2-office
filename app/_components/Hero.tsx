export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">Wellness Plus — สำหรับองค์กร</div>
            <h1>
              สั่งยา <span className="accent">เข้าตู้ยา</span>
              <br />
              สำนักงาน
              <br />
              จากร้านยา ขย.1
            </h1>
            <p className="hero-sub">
              บริษัท Wellness Plus จำกัด — สั่งยาเติมตู้ยาบริษัทสะดวก ผ่าน LINE OA @pharma
              มีเภสัชกรประจำให้คำปรึกษา พร้อมออกใบกำกับภาษีเต็มรูปในนามบริษัทให้ทุก order
            </p>
            <div className="hero-ctas">
              <a href="#contact" className="btn-primary">
                เริ่มสั่งยา →
              </a>
              <a href="#packages" className="btn-secondary">
                ดูบริการทั้งหมด
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="visual-dot dot-1" />
            <div className="visual-dot dot-2" />
            <div className="visual-card card-1">
              <div className="card-label">ORDER #2401</div>
              <div className="card-title serif">รายการยาที่สั่ง</div>
              <div className="card-1-sub">สั่งผ่าน LINE OA @pharma</div>
              <div className="card-meta">จัดส่ง + ใบกำกับภาษี</div>
            </div>
            <div className="visual-card card-2">
              <div className="card-label">VERIFIED</div>
              <div className="card-title serif">ใบกำกับภาษีเต็มรูป</div>
              <div className="card-meta">ลงบัญชี · เบิกได้ · ตรวจสอบได้</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
