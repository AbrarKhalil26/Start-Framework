import React from "react";

export const Modal = ({ modalImage, setModalImage }) => {
  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setModalImage(null);
    }
  };
  return (
    <div
      className={`modal position-fixed top-0 start-0 end-0 bottom-0 bg-primary bg-opacity-25 ${
        modalImage ? "d-flex" : "d-none"
      } justify-content-center align-items-center`}
      onClick={handleCloseModal}
    >
      <img src={modalImage} alt="img-product" className="w-50 rounded" />
    </div>
  );
};
