import React from "react";
import { UnderlineTitle } from "../components/UnderlineTitle";
import port1 from "../assets/imgi_1_poert1.png";
import port2 from "../assets/imgi_2_port2.png";
import port3 from "../assets/imgi_3_port3.png";
import { Product } from "../components/Product";

export const Portfolio = ({ setModalImage }) => {
  const products = [
    {
      id: 1,
      img: port1,
    },
    {
      id: 2,
      img: port2,
    },
    {
      id: 3,
      img: port3,
    },
    {
      id: 4,
      img: port1,
    },
    {
      id: 5,
      img: port2,
    },
    {
      id: 6,
      img: port3,
    },
  ];

  return (
    <div className="text-semi-dark d-flex justify-content-center align-items-center py-4">
      <div className="container about d-flex flex-column align-items-center gap-4">
        <header>
          <h1 className="text-uppercase fw-bold mb-4">portfolio component</h1>
          <UnderlineTitle />
        </header>
        <div className="row g-5">
          {products.map((product) => (
            <Product product={product} setModalImage={setModalImage} />
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
};
