const packages = [
  {
    size: "— 01",
    name: "สั่งง่ายผ่าน LINE",
    forText: "@pharma — สั่งยาผ่านแชต",
    features: [
      "สั่งยาผ่าน LINE OA @pharma",
      "เภสัชกรช่วยเลือกยาที่เหมาะกับตู้บริษัท",
      "ยืนยันราคาก่อนจัดส่ง",
      "ตอบกลับในเวลาทำการ",
    ],
    featured: false,
  },
  {
    size: "— 02",
    name: "จัดส่งจากร้านยา ขย.1",
    forText: "ตรงจากร้านยามหานคร",
    features: [
      "ยาจากร้านที่มีใบอนุญาตขายยา",
      "ผ่านการตรวจ GPP จาก อย.",
      "เภสัชกรประจำตรวจก่อนส่ง",
      "จัดส่งในเขตลาดกระบังและพื้นที่ใกล้เคียง",
      "ระบุวันหมดอายุชัดเจน",
    ],
    featured: true,
  },
  {
    size: "— 03",
    name: "ใบกำกับภาษีเต็มรูป",
    forText: "ในนาม Wellness Plus จำกัด",
    features: [
      "ออกในนามบริษัท Wellness Plus จำกัด",
      "ถูกต้องตามกรมสรรพากร",
      "เบิกบริษัทได้ ลงบัญชีได้",
      "ส่งไฟล์ PDF ได้ทันที",
    ],
    featured: false,
  },
];

export function ServiceInclusions() {
  return (
    <section className="packages-bg" id="packages">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">สิ่งที่ได้กับ Wellness Plus</div>
          <h2>
            สั่งยา <span className="accent">เหมือน e-commerce</span> แต่มี
            <br />
            เภสัชกรประจำดูแล
          </h2>
          <p className="section-sub">
            ไม่มีค่าสมาชิก ไม่มีสัญญาผูกขาด — สั่งเมื่อต้องการ จ่ายตาม order แต่ละครั้ง
            ทุก order ได้ทั้งหมดนี้
          </p>
        </div>

        <div className="package-grid">
          {packages.map((p) => (
            <div className={p.featured ? "package featured" : "package"} key={p.size}>
              <div className="package-size">{p.size}</div>
              <div className="package-name serif">{p.name}</div>
              <div className="package-for">{p.forText}</div>
              <ul className="package-features">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="employee-benefit-box">
          <div className="benefit-eyebrow">โบนัสสำหรับลูกค้าองค์กร — เร็ว ๆ นี้</div>
          <div className="benefit-heading">
            ระบบดูแลสุขภาพ <span className="benefit-accent">ส่วนตัวพนักงาน</span>
          </div>
          <p className="benefit-desc">
            พนักงานของบริษัทลูกค้า Wellness Plus จะได้ใช้แอปติดตามสุขภาพส่วนตัว
            บันทึกการกินยา ความดัน น้ำตาล — เป็น personal tool ที่บริษัทมอบให้เป็นสวัสดิการ
          </p>
          <div className="benefit-privacy">
            <div className="benefit-privacy-icon" aria-hidden="true">
              🔒
            </div>
            <div className="benefit-privacy-text">
              <strong>ข้อมูลสุขภาพของพนักงาน — เป็นของพนักงานเท่านั้น</strong>
              <span>
                บริษัทและ HR ไม่สามารถเข้าถึงข้อมูลสุขภาพรายบุคคลได้
                เพื่อความเป็นส่วนตัวและสอดคล้องกับ PDPA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
