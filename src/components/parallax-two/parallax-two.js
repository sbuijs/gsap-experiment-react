//React -----------------------------------------
import { useEffect } from "react";

//styling ---------------------------------------
import './parallax-two.scss';

//gsap ------------------------------------------
import { gsap } from "gsap"
import scrollTrigger from "gsap/ScrollTrigger";


export const ParallaxTwo = ({ parallaxTwo }) => {
  gsap.registerPlugin(scrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".parallax-two .hero",
        start: "top center",
        end: "bottom top",
        scrub: true
      }
    });


    gsap.utils.toArray(".parallax-img").forEach(layer => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth)
      tl.to(layer, {
        y: movement,
        ease: "0.1",
      }, 0)
    });
  });

  return (
    <section className="parallax-two">
      <div className="hero">
        <div className="parallax-background" style={{
          backgroundImage: `url( 
                ${process.env.PUBLIC_URL + parallaxTwo.backgroundImage}
                )`}}>
        </div>

        <div className="parallax-img parallax-img--1"
          data-depth='.20' style={{
            backgroundImage: `url( 
                ${process.env.PUBLIC_URL + parallaxTwo.layerOne}
                )`}}>
        </div>
        <div className="parallax-img parallax-img--2"
          data-depth='0.15' style={{
            backgroundImage: `url( 
                ${process.env.PUBLIC_URL + parallaxTwo.layerTwo}
                )`}}>
        </div>
        <div className="parallax-img parallax-img--3"
          data-depth='0.3' style={{
            backgroundImage: `url( 
                ${process.env.PUBLIC_URL + parallaxTwo.layerThree}
                )`}}>
        </div>
      </div>
    </section>
  )
}