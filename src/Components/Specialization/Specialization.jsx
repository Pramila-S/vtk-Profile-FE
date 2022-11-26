import React from "react";
import { design, process } from "../../dummyData";
import "./specialization.css";
import design1 from "../../images/head.JPG";
import design2 from "../../images/design2.JPG";
import design3 from "../../images/design3.JPG";
import icon2 from "../../images/2.png";
import icon3 from "../../images/3.png";
import icon4 from "../../images/4.png";

function Specialization() {
  return (
    <>
      <div className="speContainer">
        <div className="speHead">
          <div className="speHeading">Our Specialization - Ikat</div>
        </div>
        <div className="speContent">
          <p className="spePara">
            Ikat is a method of colouring fabric in patterns by resist dyeing.
            The pattern is applied in parts of the yarns for the warp and/or
            weft are protected with a resist before dyeing. The dye then colours
            the yarn everywhere except under the binding. After dyeing, the
            bindings are removed and the pattern appears undyed on a coloured
            ground. When dyeing is complete, the yarn is then woven into fabric,
            often in a relatively simple structure and often in a density that
            highlights the warp.
          </p>
          <p className="speBold">
            Sounds easy when its read. It's a tedious process which were made
            only by artisans who are specialized in this.
          </p>
        </div>
        <div className="speProcess">
          <div className="fullContainer speImg">
            {process.map((item) => {
              return (
                <div className="img-container">
                  <img src={item.img} alt={item.title} className="img" />
                  <p className="fabTitle">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="speHead">
          <div className="speHeading">Our Ikat design</div>
        </div>
        <div className="speDesign">
          <div className="fullContainer speImg">
            <div className="img-container">
              <img src={design1} className="img" />
            </div>
            <div className="img-container">
              <img src={design2} className="img" />
            </div>
            <div className="img-container">
              <img src={design3} className="img" />
            </div>
          </div>
        </div>
        <div className="speIcons">
          <div className="speIconsContainer">
            <img
              src="https://bettercotton.org/wp-content/uploads/2021/05/logo_BC-greengradient.svg"
              alt=""
              className="speIC"
            />
            <img src={icon2} alt="" className="speIC" />
            <img
              src={icon3}
              alt=""
              className="speIC"
              style={{ width: "130px" }}
            />
            <img src={icon4} alt="" className="speIC" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Specialization;
