import { Link } from "react-router-dom";

export default function DescriptionProdDetail() {
  return (
    <>
      <div className="desc-container">
        <div className="desc-heading">
          <ul>
            <li>
              <Link to="/">MÔ TẢ</Link>
            </li>
            <li>
              <Link to="/">CHÍNH SÁCH ĐỔI TRẢ</Link>
            </li>
          </ul>
        </div>
        <div className="desc-content">
          <span>Chi tiết sản phẩm: </span>
          <ul>
            <li>Chất liệu: vải cotton</li>
            <li>Dáng xuông rộng</li>
            <li>Mặt trước: hình in "Khét" giữa ngực áo</li>
            <li>Sử dụng công nghệ in lưới thân trước chất lương cao, hình in nét</li>
          </ul>
        </div>
      </div>
    </>
  );
}
