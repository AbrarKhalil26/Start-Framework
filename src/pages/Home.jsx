import React from "react";
import pictureUser from "../assets/avataaars.svg";
import { UnderlineTitle } from "../components/UnderlineTitle";

export const Home = () => {
  return (
    <div className="bg-cyan text-light d-flex justify-content-center align-items-center py-5">
      <div className="w-fit d-flex flex-column align-items-center gap-4 py-5">
        <img
          src={pictureUser}
          alt="user-picture"
          width={250}
          className="mb-2"
        />
        <header>
          <h1 className="text-uppercase fw-bold mb-4">Start Framework</h1>
          <UnderlineTitle color={"white"} />
        </header>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
};
