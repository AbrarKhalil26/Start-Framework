import React from "react";
import { UnderlineTitle } from "../components/UnderlineTitle";

export const About = () => {
  return (
    <div className="bg-cyan text-light d-flex justify-content-center align-items-center py-5">
      <div className="container about d-flex flex-column align-items-center gap-4 p-5 my-5">
        <header>
          <h1 className="text-uppercase fw-bold mb-4">About component</h1>
          <UnderlineTitle color={"white"} />
        </header>
        <div className="row">
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
