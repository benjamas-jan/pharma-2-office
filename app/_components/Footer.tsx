export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              Wellness <span>Plus</span>
            </div>
            <p className="footer-desc">
              สั่งยาสำหรับตู้ยาสำนักงาน โดยบริษัท Wellness Plus จำกัด —
              ดำเนินกิจการร้านยามหานครในเขตลาดกระบัง มีเภสัชกรประจำ
              ออกใบกำกับภาษีเต็มรูปทุก order
            </p>
          </div>
          <div className="footer-col">
            <h4>บริการ</h4>
            <ul>
              <li>
                <a href="#packages">บริการของเรา</a>
              </li>
              <li>
                <a href="#process">วิธีสั่งยา</a>
              </li>
              <li>
                <a href="#faq">คำถามที่พบบ่อย</a>
              </li>
              <li>
                <a href="#contact">เริ่มสั่งยา</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>ติดต่อ</h4>
            <ul>
              <li>LINE OA: @pharma</li>
              <li>
                <a href="tel:0925436660">092-543-6660</a>
              </li>
              <li>เขตลาดกระบัง กทม.</li>
              <li>จ.–ส. 10:00–20:00</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© {year} บริษัท Wellness Plus จำกัด · ร้านยามหานคร ใบอนุญาต ขย.1</div>
          <div>Powered by เภสัชกรประจำ ไม่ใช่ AI</div>
        </div>
      </div>
    </footer>
  );
}
