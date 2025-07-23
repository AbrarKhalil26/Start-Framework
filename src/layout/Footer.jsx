import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiGlobalFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <>
      <div className="text-light bg-main w-100 text-center py-5">
        <div className="container">
          <div className="row py-4">
            <div className="col-md-6 col-lg-4">
              <div>
                <h3 className="text-uppercase mb-2">Location</h3>
                <p>2215 John Daniel Drive</p>
                <p className="m-0">Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div>
                <h3 className="text-uppercase mb-2">Around the web</h3>
                <ul className="social list-unstyled d-flex gap-2 justify-content-center">
                  <li className="border rounded-circle fs-5 d-flex justify-content-center align-items-center">
                    <FaFacebook />
                  </li>
                  <li className="border rounded-circle fs-5 d-flex justify-content-center align-items-center">
                    <FaTwitter />
                  </li>
                  <li className="border rounded-circle fs-5 d-flex justify-content-center align-items-center">
                    <FaLinkedinIn />
                  </li>
                  <li className="border rounded-circle fs-5 d-flex justify-content-center align-items-center">
                    <RiGlobalFill />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div>
                <h3 className="text-uppercase mb-2">ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-very-dark text-center py-4 text-light">Copyright © Your Website 2021</div>
    </>
  );
};
