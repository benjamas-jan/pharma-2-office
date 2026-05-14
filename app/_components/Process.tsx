const steps = [
  {
    num: "01",
    title: "กรอกฟอร์มขอข้อมูลครั้งแรก",
    desc:
      "กรอก 3 ช่อง (ชื่อบริษัท ผู้ติดต่อ เบอร์โทร) — ทีมงานจะติดต่อกลับเพื่อแอด LINE OA @pharma และส่งรายการยาที่แนะนำ",
  },
  {
    num: "02",
    title: "คุยกับเภสัชกรผ่าน LINE OA",
    desc:
      "เภสัชกรช่วยเลือกยาที่เหมาะกับตู้ยาในออฟฟิศของคุณ ตอบคำถามเรื่องการใช้งาน และให้ข้อมูลเพิ่มเติมตามต้องการ",
  },
  {
    num: "03",
    title: "สั่งซื้อ — ยืนยันราคา",
    desc:
      "เลือกรายการยาที่ต้องการ ยืนยันราคา จัดส่งและข้อมูลที่อยู่บริษัท ทีมงานเตรียมยาและเอกสารใบกำกับภาษี",
  },
  {
    num: "04",
    title: "รับยา + ใบกำกับภาษี",
    desc:
      "จัดส่งยาถึงบริษัทพร้อมใบกำกับภาษีเต็มรูปในนามบริษัท Wellness Plus จำกัด — เบิกได้ ลงบัญชีได้ทันที",
  },
  {
    num: "05",
    title: "สั่งซ้ำได้ผ่าน LINE",
    desc:
      "เมื่อยาในตู้ใกล้หมด ทักกลับใน LINE OA — ระบบจำรายการที่เคยสั่ง สั่งซ้ำได้เร็ว ไม่ต้องเริ่มใหม่",
  },
];

export function Process() {
  return (
    <section id="process">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">วิธีสั่งยา</div>
          <h2>
            สั่งครั้งแรก ใช้เวลา <span className="accent">ไม่ถึง 5 นาที</span>
          </h2>
          <p className="section-sub">
            ไม่ต้องสมัครสมาชิก ไม่ต้องเซ็นสัญญา — สั่งผ่าน LINE OA ได้ทันที
          </p>
        </div>

        <div className="process-list">
          {steps.map((s) => (
            <div className="process-step" key={s.num}>
              <div className="process-num">{s.num}</div>
              <div className="process-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
