const reasons = [
  {
    title: "ใบอนุญาต ขย.1",
    desc:
      "บริษัท Wellness Plus ดำเนินกิจการร้านยาที่มีใบอนุญาต ขย.1 ผ่านการตรวจ GPP จาก อย. และมีเภสัชกรประจำ ตามมาตรฐานที่กฎหมายกำหนด",
  },
  {
    title: "ใกล้นิคมลาดกระบัง",
    desc:
      "ตั้งอยู่ในเขตลาดกระบัง — บริการครอบคลุมโรงงาน คลังสินค้า ออฟฟิศ และสถานศึกษาในพื้นที่ จัดส่งรวดเร็ว",
  },
  {
    title: "ใบกำกับภาษีเต็มรูป",
    desc:
      "ออกในนามบริษัท Wellness Plus จำกัด ถูกต้องตามกรมสรรพากร เบิกบริษัทได้ ลงบัญชีได้ ครบทุกครั้งที่สั่ง",
  },
  {
    title: "สื่อสารผ่าน LINE OA",
    desc:
      "ทุกอย่างจบที่ LINE OA @pharma — ขอเติมยา ปรึกษา รายงานสต็อก ใช้งานสะดวก ตอบกลับเร็วในเวลาทำการ",
  },
];

export function WhyUs() {
  return (
    <section className="why-bg">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">ทำไมเลือก Wellness Plus</div>
          <h2>
            ไม่ใช่แค่ร้านยา
            <br />
            <span className="accent">— เป็น Healthcare Partner</span>
          </h2>
          <p className="section-sub">
            เริ่มจากร้านยามหานครในเขตลาดกระบัง ที่ดูแลลูกค้ามายาวนาน
            วันนี้เราขยายบริการสำหรับองค์กรในนามบริษัท Wellness Plus จำกัด ด้วยจุดยืนเดิม —
            ดูแลแบบใส่ใจ มีเภสัชกรประจำ
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((r) => (
            <div className="why-item" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
