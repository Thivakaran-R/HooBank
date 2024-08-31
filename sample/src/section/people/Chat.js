import React from "react";
import "./Chat.css";

const Chat = () => {
  return (
    <div className="container mt-5 ">
      <div className="row avatar-main">
        <div className="col-lg-4 col-md-6 mb-4  avatar-card">
          <div className="card p-3 text-center h-100 bg-transparent border-0">
            <img
              src="https://online-payment-react-website.vercel.app/assets/quotes.a87d5e6d.svg"
              alt="quote"
              className="mb-3"
            />
            <p className="text-light">
              Money is only a tool. It will take you wherever <br />
              you wish, but it will not replace you as the driver.
            </p>
            <div className="d-flex align-items-start justify-content-start mt-4">
              <img
                src="https://online-payment-react-website.vercel.app/assets/people01.a772086b.png"
                alt="Herman Jensen"
                className="rounded-circle avatar"
              />
              <div className="ms-3 text-start">
                <h5 className="mb-0 text-light">Herman Jensen</h5>
                <p className=" mb-0 text-light">Founder & leader</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 avatar-card">
          <div className="card p-3 text-center h-100 bg-transparent border-0">
            <img
              src="https://online-payment-react-website.vercel.app/assets/quotes.a87d5e6d.svg"
              alt="quote"
              className="mb-3"
            />
            <p className="text-light">
              Money is only a tool. It will take you wherever
              <br />
              you wish, but it will not replace you as the driver.
            </p>
            <div className="d-flex align-items-start justify-content-start mt-4">
              <img
                src="https://online-payment-react-website.vercel.app/assets/people03.d9f4f98a.png"
                alt="Herman Jensen"
                className="rounded-circle avatar"
              />
              <div className="ms-3 text-start">
                <h5 className="mb-0 text-light">Kenn Gallagher</h5>
                <p className=" mb-0 text-light">Founder & leader</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 ">
          <div className="card p-3 text-center h-100 bg-transparent border-0">
            <img
              src="https://online-payment-react-website.vercel.app/assets/quotes.a87d5e6d.svg"
              alt="quote"
              className="mb-3"
            />
            <p className="text-light">
              Money is only a tool. It will take you wherever
              <br />
              you wish, but it will not replace you as the driver.
            </p>
            <div className="d-flex align-items-start justify-content-start mt-4">
              <img
                src="https://online-payment-react-website.vercel.app/assets/people02.ee8ce82b.png"
                alt="Herman Jensen"
                className="rounded-circle avatar"
              />
              <div className="ms-3 text-start">
                <h5 className="mb-0 text-light">Steve Mark</h5>
                <p className=" mb-0 text-light">Founder & leader</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
