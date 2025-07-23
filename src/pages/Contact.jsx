import React from "react";
import { UnderlineTitle } from "../components/UnderlineTitle";

export const Contact = () => {
  return (
    <div className="text-semi-dark d-flex justify-content-center align-items-center py-4">
      <div className="container-fluid container-md about d-flex flex-column align-items-center gap-4">
        <header>
          <h1 className="text-uppercase fw-bold mb-4">Contact component</h1>
          <UnderlineTitle />
        </header>
        <form className="d-flex flex-column gap-4 my-4 w-100 w-md-50">
          <input className="border-0 border-bottom rounded p-3 w-100" type="text" placeholder="userName"/>
          <input className="border-0 border-bottom rounded p-3 w-100" type="text" placeholder="userAge"/>
          <input className="border-0 border-bottom rounded p-3 w-100" type="email" placeholder="userEmail"/>
          <input className="border-0 border-bottom rounded p-3 w-100" type="password" placeholder="userPassword"/>
          <button className="text-white bg-cyan border-0 rounded py-2 px-4 w-fit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
