import React from "react";
import { Link } from "react-router-dom";

const index = (props) => {
  return (
    <header className="py-3 px-3 px-lg-0">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container px-0">
          <Link className="fw-medium navbar-brand me-5 fs-2" to="#">
            chilli
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav text-uppercase d-flex align-items-center ms-auto fw-bold">
              <li className="nav-item px-0 px-lg-4">
                <Link className="nav-link" aria-current="page" to="#">
                  work
                </Link>
              </li>
              <li className="nav-item px-0 px-lg-4">
                <Link className="nav-link" to="#">
                  about
                </Link>
              </li>
              <li className="nav-item px-0 px-lg-4">
                <Link className="nav-link" to="#">
                  news
                </Link>
              </li>
              <li className="nav-item px-0 px-lg-4">
                <Link className="nav-link line py-2 px-4" to="#">
                  contact
                </Link>
              </li>
              <li className="nav-item px-0 px-lg-4">
                <Link className="nav-link line py-2 px-4" to="#">
                  en
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default index;
