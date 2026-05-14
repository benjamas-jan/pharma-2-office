const problems = [
  {
    num: "— 01",
    title: (
      <>
        วิ่งซื้อยาเอง
        <br />
        เสียเวลาเสียค่าเดินทาง
      </>
    ),
    desc:
      "HR/Admin ต้องออกไปร้านยาเอง เลือกของ คำนวณราคา ขนกลับ — เวลาที่หายไปคือเวลาที่ควรใช้ทำงานจริง ๆ",
  },
  {
    num: "— 02",
    title: (
      <>
        อยากปรึกษาเภสัชกร
        <br />
        เรื่องยาในตู้บริษัท
      </>
    ),
    desc:
      "บริษัทที่ใส่ใจสุขภาพพนักงาน อยากได้คำแนะนำว่าควรมียาอะไรในตู้ และยาแต่ละตัวใช้ยังไง — ต้องการเภสัชกรที่ตอบได้",
  },
  {
    num: "— 03",
    title: (
      <>
        ไม่มีใบกำกับภาษี
        <br />
        เบิกบริษัทไม่ได้
      </>
    ),
    desc:
      "ซื้อจากร้านยาทั่วไป ได้ใบเสร็จธรรมดา ลงบัญชีไม่ได้ แผนกบัญชีตามเรื่อง ต้องไปขอใหม่ เสียเวลาทั้งระบบ",
  },
];

export function Problems() {
  return (
    <section className="problems" id="problem">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">ปัญหาที่บริษัทเจอ</div>
          <h2>
            <span className="accent">HR ไม่ควรเสียเวลา</span> วิ่งไปร้านยา
          </h2>
          <p className="section-sub">
            บริษัทที่ดูแลพนักงานเชิงรุก ต้องเติมยาในตู้ยาประจำ — เราออกแบบการสั่งยาให้ HR
            ใช้งานง่าย จบที่ LINE OA
          </p>
        </div>
        <div className="problem-grid">
          {problems.map((p) => (
            <div className="problem-card" key={p.num}>
              <div className="problem-num">{p.num}</div>
              <div className="problem-title">{p.title}</div>
              <p className="problem-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
