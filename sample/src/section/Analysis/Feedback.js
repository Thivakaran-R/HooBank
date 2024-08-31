import React from "react";
import "./Feedback.css";

const Feedback = () => {
  return (
    <div className="container mt-5">
      <div className="lfeedback ">
        <h1 className="d-inline text-light">
          What people are<br></br>
          Saying about us
        </h1>
      </div>
      <div className="rfeedback text-light pt-4  ">
        <p>
          With the right credit card, you can improve your financial life by
          <br></br>
          building credit.
        </p>
      </div>
    </div>
  );
};

export default Feedback;
