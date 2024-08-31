import React from "react";
import "./Footers.css";
const Footers = () => {
  return (
    <div className="container mt-5 footer">
      <div className="footer-logo">
        <img
          className=""
          src="https://online-payment-react-website.vercel.app/assets/logo.efc6c435.svg"
        ></img>
        <p>A new way to make the payments easy, reliable and secure.</p>
      </div>
      <div>
        <ul>
          <li>
            <h6>Usefull Link</h6>
          </li>
          <li className="subclass">Content</li>
          <li className="subclass">How it Works</li>
          <li className="subclass">Create</li>
          <li className="subclass">Explore</li>
          <li className="subclass">Terms & Services</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <h6>Community</h6>
          </li>
          <li className="subclass">Help Center</li>
          <li className="subclass">Partners</li>
          <li className="subclass">Suggestions</li>
          <li className="subclass">Blog</li>
          <li className="subclass">Newsletters</li>
        </ul>
      </div>
      <div>
        <ul className="partner">
          <li>
            <h6>Partner</h6>
          </li>
          <li className="subclass">Our partner</li>
          <li className="subclass">Become a partner</li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Footers;
