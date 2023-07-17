import React from "react";
import "../../Style.css";
import pic from "../../images/remove bg.png";
import {
  FaCalendar,
  FaSearchLocation,
  FaUserAlt,
  FaDollarSign,
} from "react-icons/fa";
import Counter from "../Counter/Counter";

const Banner = () => {
  return (
    <section id="banner" className="banner">
      <div className="container">
        <div className="banner-main">
          <div className="banner-left">
            <h1>We are Committed to Your Health</h1>
            <p className="title-p">
              Take a few minutes each and every day to ensure that your mind is
              nourished properly and positively. After all, a healthy mind leads
              to a happier view of life and with a happier view of life it is
              much easier to counter the negative impact other issues will have
              on us." – Catherine Pulsifer
            </p>
            <div className="short-cut-point">
              <div className="first">
                <h4>
                  {" "}
                  <FaCalendar />
                  Make An Appointment
                </h4>
                <p>Schedule With Your Favorite Doctor Anytime</p>
              </div>
              <div className="first">
                <h4>
                  <FaDollarSign />
                  Health Guarantee Forever
                </h4>
                <p>We Always Provide The Best Warranty For You</p>
              </div>
            </div>
            {/* ----------------------------- */}
            <div className="short-cut-point">
              <div className="first">
                <h4>
                  {" "}
                  <FaUserAlt />
                  Find Your Best Doctor
                </h4>
                <p>Schedule With Your Favorite Doctor Anytime</p>
              </div>
              <div className="first">
                <h4>
                  <FaSearchLocation />
                  Spread In Various Places
                </h4>
                <p>We Always Provide The Best Warranty For You</p>
              </div>
            </div>
            <button className="custom-btn mt">Make An Appointment</button>
          </div>
          {/* ----------------------------------right part--------------------------------------------------------- */}
          <div className="banner-right">
            <h1>
              Protect Your <span className="health">Health</span> And Take Care
              Of Your <span className="health">Health</span>
            </h1>
            <img src={pic} alt="" />
          </div>
        </div>
      </div>
      {/* ---------------------counter components----------------------------- */}
      <Counter />
    </section>
  );
};

export default Banner;
