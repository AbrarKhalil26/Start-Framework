import React from "react";
import { FaStar } from "react-icons/fa";

export const UnderlineTitle = ({color}) => {
  return (
    <div className={`underline ${color == 'white'? 'bg-white': "bg-main"} position-relative mx-auto`}>
      <div className={`parent-star-icon ${color == 'white'? 'bg-cyan': 'bg-white'} position-absolute d-flex justify-content-center`}>
        <FaStar size={20} />
      </div>
    </div>
  );
};
