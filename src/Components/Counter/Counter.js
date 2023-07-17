import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../../Style.css";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="container">
      <div className="show-counter">
        {/* _______________________ */}
        <div className="single-counter">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="text">
              <span>
                {" "}
                +
                {counterOn && (
                  <CountUp start={0} end={250} duration={2} delay={0} />
                )}
              </span>
              <p>Best Doctor</p>
            </div>
          </ScrollTrigger>
        </div>

        {/* _______________________ */}
        <div className="single-counter">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="text">
              <span>
                {counterOn && (
                  <CountUp start={0} end={15} duration={2} delay={0} />
                )}
              </span>
              <p>Clinic Location</p>
            </div>
          </ScrollTrigger>
        </div>

        {/* _______________________ */}
        <div className="single-counter">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="text">
              <span>
                {counterOn && (
                  <CountUp start={0} end={20} duration={2} delay={0} />
                )}
              </span>
              <p>Surgery Room</p>
            </div>
          </ScrollTrigger>
        </div>

        {/* _______________________ */}
        <div className="single-counter">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="text">
              <span>
                {" "}
                +
                {counterOn && (
                  <CountUp start={300} end={1500} duration={2} delay={0} />
                )}
              </span>
              <p>Patient Capacty</p>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </div>
  );
};

export default Counter;
