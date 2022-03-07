import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row py-2" data-masonry='{"percentPosition": true }'>
          <div className="col-6 col-lg-4 py-3">
            <div
              className="card card-hover border-0 bg-black"
              style={{ minHeight: "400px" }}
            >
              <div className="card-body">
                <p className="text-fade-1 fs-2">
                  We are <span className="text-white">Chilli</span>
                  <br /> a belgian
                  <br /> design agency
                  <br /> creating the finest{" "}
                  <span className="text-white text-border-bottom position-relative">
                    brands
                  </span>
                  &nbsp;&&nbsp;
                  <span className="text-white text-border-bottom position-relative">
                    websites
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-4 py-3">
            <div
              className="card card-hover border-0 bg-image-1"
              style={{ minHeight: "600px" }}
            ></div>
          </div>
          <div className="col-6 col-lg-4 py-3">
            <div
              className="card card-hover border-0 bg-gray-1"
              style={{ minHeight: "200px" }}
            >
              <div className="card-body fs-2">
                <h2 className="fw-bold text-white">logos...</h2>
                <p className="text-fade-1">
                  we made
                  <br /> with love
                </p>
                <Link className="fw-bold btn btn-border-white" to="#">
                  see them all
                </Link>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-4 py-3">
            <div
              className="card card-hover border-0 bg-image-3"
              style={{ minHeight: "600px" }}
            ></div>
          </div>
          <div className="col-6 col-lg-4 py-3">
            <div
              className="card card-hover border-0 bg-image-2"
              style={{ minHeight: "700px" }}
            ></div>
          </div>
          <div className="col-6 col-lg-4 py-3">
            <div
              className="card card-hover border-0 bg-gray-2"
              style={{ minHeight: "200px" }}
            >
              <div className="card-body fs-2">
                <h2 className="fw-bold text-black">websites</h2>
                <p className="text-fade-black-1">
                  we made
                  <br /> with passion
                </p>
                <Link className="fw-bold btn btn-border-black" to="#">
                  see them all
                </Link>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-4 py-3">
            <div
              className="card card-hover border-0 bg-image-5"
              style={{ minHeight: "500px" }}
            ></div>
          </div>
          <div className="col-6 col-lg-4 py-3">
            <div
              className="card card-hover border-0 bg-image-6"
              style={{ minHeight: "650px" }}
            ></div>
          </div>
          <div className="col-6 col-lg-4 py-3">
            <div
              className="card card-hover border-0 bg-image-4"
              style={{ minHeight: "550px" }}
            ></div>
          </div>

          <div className="col-6 col-lg-4 py-3">
            <div
              className="card card-hover border-0 bg-image-8"
              style={{ minHeight: "700px" }}
            ></div>
          </div>
          <div className="col-6 col-lg-4 py-3">
            <div
              className="card card-hover border-0 bg-image-9"
              style={{ minHeight: "550px" }}
            ></div>
          </div>
          <div className="col-6 col-lg-4 py-3">
            <div
              className="card card-hover border-0 bg-image-7"
              style={{ minHeight: "390px" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
