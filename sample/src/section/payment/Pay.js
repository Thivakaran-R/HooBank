import React from "react";
import "./Pay.css";

const Pay = () => {
  return (
    <div className="container">
      <div className="lpay ">
        <img src="https://online-payment-react-website.vercel.app/assets/bill.fd47dad8.png"></img>
      </div>
      <div className="">
        <h1 className="text-light">Easily control your,</h1>
        <h1 className="text-light mt-4">billing & invoicing.</h1>
        <p className=" mt-4 text-light">
          With the right credit card, you can improve your financial life by
          <br></br>
          building credit, earning rewards and saving money. But with hundreds
          <br></br>
          of credit cards on the market.
        </p>
        <img src="https://online-payment-react-website.vercel.app/assets/apple.994d47a8.svg" className="h-100 w-25 "></img>
        <img src="https://online-payment-react-website.vercel.app/assets/google.3035153f.svg" className="h-100 w-25 "></img>
      </div>
    </div>
  );
};

export default Pay;
