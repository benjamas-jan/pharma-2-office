export function Nav() {
  return (
    <nav>
      <div className="container nav-inner">
        <div className="logo">
          Wellness <span>Plus</span>
        </div>
        <div className="nav-links nav-mobile">
          <a href="#problem">ปัญหาที่เจอ</a>
          <a href="#packages">บริการ</a>
          <a href="#process">ขั้นตอน</a>
          <a href="#faq">คำถาม</a>
          <a href="#contact" className="nav-cta">
            เริ่มสั่งยา
          </a>
        </div>
      </div>
    </nav>
  );
}
