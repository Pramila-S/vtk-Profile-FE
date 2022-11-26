import React from "react";
import { fabrics, sampleFabrics } from "../../dummyData";
import "./fabrics.css";

function Fabrics() {
  return (
    <div className="fabContainer">
      <div className="fabTop">
        <div className="fabHeading">Fabrics</div>
      </div>
      <div className="fabCenter">
        <div className="fullContainer">
          {sampleFabrics.map((item) => {
            return (
              <div className="img-container">
                <img
                  src={item.img}
                  alt=""
                  className="img"
                />
                <p className="fabTitle">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="fabBtn">
        <button>See More</button>
      </div>
    </div>
  );
}

export default Fabrics;
