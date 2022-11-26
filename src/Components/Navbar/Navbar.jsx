import React from "react";
import "./navbar.css";
import logo from "../../../src/logo.png";
import title from "../../images/title.png";

function Navbar() {
  return (
    <>
      <div className="container">
        <div className="navContainer">
          <div className="navLeft">
            <div className="navItem">Home</div>
            <div className="navItem" onClick={() => window.scrollTo(0, 500)}>Fabrics</div>
            <div className="navItem" onClick={() => window.scrollTo(500, 1500)}>Specialization</div>
            <div className="navItem" onClick={() => window.scrollTo(1500, 3000)}>Gallery</div>
          </div>
          <div className="navCenter">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="navRight">
            <div className="navItem" onClick={() => window.scrollTo(3000, 3900)}>About</div>
            <div className="navItem" onClick={() => window.scrollTo(3900, 4300)}>Contact</div>
            <div className="navItem" onClick={() => window.open("https://www.instagram.com/vktfabs/", '_blank')}>Instagram</div>
            <div className="navItem" onClick={() => window.open("https://www.linkedin.com/company/vktfabs/", '_blank')}>LinkedIn</div>
            {/* <div className="navItem" onClick={() => window.open("mailto:vijay@vktfabs.com")}>Mail</div> */}
          </div>
        </div>
        <div className="centerContent">
          <img src={title} alt="" className="centerTitle" />
          {/* <h4 className="FabsBrief"><bold>F</bold>ashion <bold>A</bold>pparel <bold>B</bold>rands one stop <bold>S</bold>olution</h4> */}
          <h3 className="centerText">Finests Quality Fabrics</h3>

          <button className="centerBtn" onClick={() => window.scrollTo(0, 3500)}>
            Enquire Now
          </button>
        </div>
      </div>
      <div className="mobileNavContainer">
        <div className="mobileTopNav">

          {/* <div className="mobileNavItem">Blog</div> */}
          <img src={logo} alt="" className="mobileLogo" />
          {/* <div className="mobileNavItem">Gallery</div> */}
        </div>
        <div className="mobilecenterContent">
          <img
            src={title}
            alt=""
            className="mobilecenterTitle"
            style={{ width: "280px" }}
          />
          <h3 className="mobilecenterText">Finests Quality Fabrics</h3>
          <button className="mobilecenterBtn" onClick={() => window.scrollTo(0, 4500)}>
            Enquire Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
