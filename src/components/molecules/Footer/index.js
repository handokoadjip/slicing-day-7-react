import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center h-vh-50 pt-5">
          <div className="col-lg-12">
            <div className="wrapper">
              <div className="social-media mb-5 text-center">
                <p className="text-fade-black-1">Lorem ipsum dolor sit amet.</p>
                <div className="d-flex justify-content-center align-items-center mb-5">
                  <Link
                    className="text-decoration-none border-icon p-2 px-3 mx-3"
                    to="#"
                  >
                    <i className="wh-16px fab fa-twitter"></i>
                  </Link>
                  <Link
                    className="text-decoration-none border-icon p-2 px-3 mx-3"
                    to="#"
                  >
                    <i className="wh-16px fab fa-facebook-f"></i>
                  </Link>
                  <Link
                    className="text-decoration-none border-icon p-2 px-3 mx-3"
                    to="#"
                  >
                    <i className="wh-16px fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
              <div className="copyright d-block d-lg-flex justify-content-end align-items-center text-center border-fade-black-1 border-top py-5">
                <p className="px-2 m-0 fw-bold">
                  Chili - Lorem ipsum dolor sit amet.
                </p>
                <ul className="text-uppercase d-inline mp-0">
                  <li className="px-1 d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block"
                      to="#"
                    >
                      / v. 08.234.123.54.32
                    </Link>
                  </li>
                  <li className="px-1 d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block"
                      to="#"
                    >
                      / Lorem, ipsum.
                    </Link>
                  </li>
                  <li className="px-1 d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block"
                      to="#"
                    >
                      / Lorem, ipsum dolor.
                    </Link>
                  </li>
                  <li className="px-1 d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block"
                      to="#"
                    >
                      / Lorem ipsum dolor sit amet consectetur..
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
