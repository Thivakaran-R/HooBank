import React from "react";
import "./Reward.css";

const Reward = () => {
  return (
    <div className="container reward ">
      <div className="lreward d-inline">
        <h1 className="text-light">You do the business,</h1>
        <h1 className="text-light mt-4">We'll handle the money.</h1>
        <p className=" mt-4">
          With the right credit card, you can improve your financial life by
          <br></br>
          building credit, earning rewards and saving money. But with hundreds
          <br></br>
          of credit cards on the market.
        </p>
        <button>Get Started</button>
      </div>
      <div className="rreward ">
        <div className="reward2">
          <i class="bi bi-star-fill d-inline "></i>
          <div className="d-inline">
            <h5>Rewards</h5>
            <p>
              The best credit cards offer some tantalizing combinations of
              <br></br>
              promotions and prizes
            </p>
          </div>
        </div>
        <div className="secured">
          <i class="bi bi-shield-fill-check"></i>
          <div className="d-inline">
            <h5>100% Secured</h5>
            <p>
              The best credit cards offer some tantalizing combinations of
              <br></br>
              promotions and prizes
            </p>
          </div>
        </div>
        <div className="balance">
          <i class="bi bi-send-fill"></i>
          <div className="d-inline">
            <h5>Balance Transfer</h5>
            <p>
              The best credit cards offer some tantalizing combinations of
              <br></br>
              promotions and prizes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
