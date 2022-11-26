import React from "react";
import "./application.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gallery1 from '../../images/gallery1.jpg'
import gallery2 from '../../images/gallery2.jpg'
import gallery3 from '../../images/gallery3.jpg'

function Application() {
  return (
    <>
    <div className="application">
    <div className="fabContainer">
        <div className="fabTop">
          <div className="fabHeading">Gallery</div>
        </div>
      </div>
      <Carousel className="slide-main" animationHandler="fade" swipeable={false}>

        <div className="slideshow">
          <img src={gallery1} className="slideshow" />

        </div >
        <div className="slideshow">
          <img src={gallery2} className="slideshow" />

        </div>
        <div className="slideshow">
          <img src={gallery3} className="slideshow" />

        </div>
      </Carousel>
    </div>
    </>
  );
}

export default Application;
