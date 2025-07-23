import { FaPlus } from "react-icons/fa6";

export const Product = ({ product, setModalImage }) => (
  <div className="col-md-6 col-lg-4" key={product.id}>
    <div
      className="product rounded position-relative"
      onClick={() => setModalImage(product.img)}
    >
      <img src={product.img} alt="img" className="img-fluid rounded" />
      <div className="parent-plus-icon rounded position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
        <FaPlus color="white" size={90} />
      </div>
    </div>
  </div>
);
