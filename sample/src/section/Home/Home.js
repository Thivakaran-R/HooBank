import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="lhome mt-5">
        <div className="discount">
          <img
            src="https://online-payment-react-website.vercel.app/assets/Discount.61d9dc08.svg"
            className="px-0"
            alt="Discount Icon"
          />
          <p className="d-inline text-light">
            <b>20%</b> DISCOUNT FOR <b>1 MONTH</b> ACCOUNT
          </p>
        </div>
        <h1 className="text-light pt-4">The Next</h1>
        <h1 className="gen py-1 d-inline ">Generation</h1>
        <button className="text-light circular-btn ms-5">
          <span className="d-block">
            Get
            <i className="bi bi-arrow-up-right ms-2"></i>
          </span>
          Started
        </button>
        <h1 className="text-light mt-2">Payment Method</h1>
        <p className="ps-5 text-light mt-5 ">
          Our team of experts uses a methodology to identify the credit cards{" "}
          <br />
          most likely to fit your needs. We examine annual percentage rates,
          <br />
          annual fees.
        </p>
      </div>
      <div className="rhome ">
        <img src="https://online-payment-react-website.vercel.app/assets/robot.352cd501.png"></img>
      </div>
    </div>
  );
};

export default Home;
