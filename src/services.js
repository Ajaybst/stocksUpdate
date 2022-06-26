import React from "react";
import "./global.css";
import ppa from "./pp.png";
import ppb from "./clock.png";
import ppc from "./dice.png";
let Services = () => {
  return (
    <>
      <div className="serviceParent">
        <div className="servicesHeadingDiv">
          <h1>Services</h1>
          <p>We provide the best in class services for our cutomers.</p>
        </div>
        <div className="serviceContainers">
          <div className="container1">
            <div className="containerImage">
              <img src={ppa} alt="" className="ppImage" />
            </div>
            <div className="containerInfo">
              <h4>Spend Money</h4>
              <p>
                <p>
                  Track on all your daily expenses and make your day to daily
                  life easier.
                </p>
              </p>
            </div>
          </div>
          <div className="container2">
            <div className="containerImage">
              <img src={ppb} alt="" className="ppImageb" />
            </div>
            <div className="containerInfo">
              <h4>Set budget</h4>
              <p>
                <p>
                  Make a budget that fits right with you and can do most with
                  it.
                </p>
              </p>
            </div>
          </div>
          <div className="container3">
            <div className="containerImage">
              <img src={ppc} alt="" className="ppImageb" />
            </div>
            <div className="containerInfo">
              <h4>Security</h4>
              <p>
                We store all your card info and money safe to amke you relax and
                cozy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
