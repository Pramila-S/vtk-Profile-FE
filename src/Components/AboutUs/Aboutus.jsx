import React from "react";
import "../AboutUs/about.css";
import about from "../../../src/images/about.jpg";

function Aboutus() {
  return (
    <>
      <div className="about" >
        <div className="aboutContainer">
          <div className="aboutLeft">
            <h2>About Us</h2>
            <h3>VKT Fabs Pvt Ltd</h3>
            <p>
              seeded in 2022 having more than 25+ years of experience in textile
              industry.
            </p>
            <p>
              Located in Tirunelveli Dist, Tamil Nadu a textile town
              situated on the banks of Cavery River. We remain dedicated to
              producing quality woven fabrics with cheese dyeing at the right
              price, fastest lead time and guranteed for quality!
            </p>
            <p>
              We have a present capacity of producing products that meet all
              performance requirements and the highest in quality standards of
              woven fabrics every day with the help of our weavers. A strong
              working relationship is formed with our customers from the
              development stage through to the finished products. This approach
              enables us to satisfy present and future requirements in
              fast-changing markets.
            </p>
          </div>
          <div className="aboutRight">
            <img src={about} alt="logo" className="aboutImg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
