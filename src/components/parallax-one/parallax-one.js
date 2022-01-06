//React -----------------------------------------
import { useEffect, useRef } from "react";

//styling ---------------------------------------
import './parallax-one.scss';

//gsap ------------------------------------------
import { gsap } from "gsap"
import scrollTrigger from "gsap/ScrollTrigger";


export const ParallaxOne = ({ parallaxOne }) => {
  gsap.registerPlugin(scrollTrigger);

  const parallaxElement = useRef(null);



  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".parallax-element",
      start: "top top",
      end: "bottom top",
      scrub: true,
    }
  });

  useEffect(() => {
    gsap.utils.toArray(".parallax-top-left").forEach(layer => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetWidth * depth)
      tl.to(layer, {
        x: movement,
        y: movement,
        ease: "0.1",
      }, 0)
    });
  });

  useEffect(() => {
    gsap.utils.toArray(".parallax-top-right").forEach(layer => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetWidth * depth)
      tl.to(layer, {
        x: -movement,
        y: movement,
        ease: "0.1",
      }, 0)
    });
  });

  useEffect(() => {
    gsap.utils.toArray(".parallax-bottom-left").forEach(layer => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetWidth * depth)
      tl.to(layer, {
        x: movement,
        y: -movement,
        ease: "0.1",
      }, 0)
    });
  });

  useEffect(() => {
    gsap.utils.toArray(".parallax-bottom-right").forEach(layer => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetWidth * depth)
      tl.to(layer, {
        x: -movement,
        y: -movement,
        ease: "0.1",
      }, 0)
    });
  });

  useEffect(() => {
    gsap.utils.toArray(".parallax-top").forEach(layer => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth)
      tl.to(layer, {
        y: movement,
        ease: "0.1",
      }, 0)
    });
  });

  useEffect(() => {
    gsap.utils.toArray(".parallax-bottom").forEach(layer => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth)
      tl.to(layer, {
        y: -movement,
        ease: "0.1",
      }, 0)
    });
  });
  useEffect(() => {
    gsap.utils.toArray(".layer-bg-cloud").forEach(layer => {
      tl.to(layer, {
        scale: 1.2,
        ease: "0.1",
      }, 0)
    });
  });
  useEffect(() => {
    gsap.to(".parallax-element__title", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".parallax-element__title",
        start: "top center",
        end: "bottom top",
        scrub: true,
        pin: true,
      }
    });
  });


  return (
    <section ref={parallaxElement} className="parallax-element">
      <div className="container-fluid">
        <div className="row">

          <div className="layer-bg layer parallax" data-depth='6'
            style={{
              backgroundImage: `url( 
                ${process.env.PUBLIC_URL + parallaxOne.backgroundImage}
                )`}}></div>

          <div className="layer-2 layer parallax parallax-top" data-depth='2'
            style={{
              backgroundImage: `url( 
                ${process.env.PUBLIC_URL + parallaxOne.layerTwo}
                )`}}></div>

          <div className="layer-1 layer parallax parallax-top-left" data-depth='2'
            style={{
              backgroundImage: `url( 
                ${process.env.PUBLIC_URL + parallaxOne.layerOne}
                )`}}></div>


          <div className="layer-3 layer parallax parallax-top-right" data-depth='2'
            style={{
              backgroundImage: `url( 
                ${process.env.PUBLIC_URL + parallaxOne.layerThree}
                )`}}></div>

          <div className="layer-5 layer parallax parallax-bottom" data-depth='2'
            style={{
              backgroundImage: `url( 
                ${process.env.PUBLIC_URL + parallaxOne.layerFive}
                )`}}></div>

          <div className="layer-4 layer parallax parallax-bottom-left" data-depth='2'
            style={{
              backgroundImage: `url( 
                ${process.env.PUBLIC_URL + parallaxOne.layerFour}
                )`}}></div>

          <div className="layer-6 layer parallax parallax-bottom-right" data-depth='2'
            style={{
              backgroundImage: `url( 
                ${process.env.PUBLIC_URL + parallaxOne.layerSix}
                )`}}></div>

          <div className="layer-bg-cloud layer parallax" data-depth='2'
            style={{
              backgroundImage: `url( 
                ${process.env.PUBLIC_URL + parallaxOne.backgroundImageTwo}
                )`}}></div>

          <div className="parallax-element__title">
            <h2>Eum ipsum deserunt ut consequatur delectus.</h2>
          </div>
        </div>
      </div>
    </section >
  )
}