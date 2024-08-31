import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Service.css";

const Service = () => {
  return (
    <div className="container service-div text-center text-md-start">
      <div className="row align-items-center">
        <div className="col-md-8">
          <h1>Let’s try our service now!</h1>
          <p>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="col-md-4 text-center text-md-end mt-3 mt-md-0">
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
