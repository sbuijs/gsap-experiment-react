//React -----------------------------------------
import { useEffect, useRef } from "react";

//styling ---------------------------------------
import './parallax-two.scss';

//gsap ------------------------------------------
import { gsap } from "gsap"
import scrollTrigger from "gsap/ScrollTrigger";


export const ParallaxTwo = ({ parallaxTwo }) => {
  gsap.registerPlugin(scrollTrigger);

  useEffect(() => {
    gsap.to("#parallax-background", {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-element-images",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true
      },
    })
  });
  useEffect(() => {
    gsap.to("#parallax-image-1", {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-element-images",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true
      },
    })
  });
  useEffect(() => {
    gsap.to("#parallax-image-2", {
      xPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-element-images",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true
      },
    })
  });



  return (
    <section className="parallax-element-images">
      <div className="div">
        <div id="parallax-background" className="parallax-bg" data-speed=".5">
          <div className="image" style={{
            backgroundImage: `url( 
                ${process.env.PUBLIC_URL + parallaxTwo.backgroundImage}
                )`}}></div>
        </div>
        <div id="parallax-image-1" className="parallax-bg" data-speed=".10">
          <div className="image" style={{
            backgroundImage: `url( 
                ${process.env.PUBLIC_URL + parallaxTwo.layerOne}
                )`}}></div>
        </div>
        <div id="parallax-image-2" className="parallax-bg" data-speed=".20>">
          <div className="image" style={{
            backgroundImage: `url( 
                ${process.env.PUBLIC_URL + parallaxTwo.layerTwo}
                )`}}></div>
        </div>
      </div>
    </section>
  )
}