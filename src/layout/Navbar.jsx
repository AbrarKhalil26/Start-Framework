import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  window.addEventListener("scroll", () => {
    if (scrollY > 0) setIsScroll(true);
    else setIsScroll(false);
  });
  
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-main transition fixed-top ${isScroll? 'py-2': 'py-4'}`}>
        <div className="container-fluid container-md">
          <Link
            className="navbar-brand text-light text-uppercase fw-bold fs-2"
            to="/"
          >
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <IoMenuOutline size={30} className="text-light" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center text-lg-start">
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link text-light text-uppercase fs-6 fw-bold"
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link text-light text-uppercase fs-6 fw-bold"
                  to="/portfolio"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link text-light text-uppercase fs-6 fw-bold"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
