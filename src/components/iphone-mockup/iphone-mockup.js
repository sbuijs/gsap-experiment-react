
//React -----------------------------------------
import { useEffect, useRef } from "react";

//styling ---------------------------------------
import './iphone-mockup.scss';

//gsap ------------------------------------------
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";


export const IphoneMockup = ({ iphone }) => {
  gsap.registerPlugin(ScrollTrigger);

  const iPhoneMockupImage = useRef(".iphone-mockup__image");
  const iPhoneMockupCicle = useRef(".iphone-mockup__circle");
  const iPhoneMockupText = useRef(".iphone-mockup__text");

  useEffect(() => {
    gsap.to(iPhoneMockupImage.current, {
      x: -175,
      rotate: -10,
      scale: 1,
      duration: 2,
      ease: "slow(0.7, 0.7, false)",
      scrollTrigger: {
        trigger: ".iphone-mockup",
        start: "30% center",
        end: "center center",
        toggleActions: "restart none reverse none",
        scrub: 1,
        // markers: true,
      }
    });
  }, []);

  useEffect(() => {
    gsap.to(iPhoneMockupCicle.current, {
      scale: 20,
      duration: 10,
      scrollTrigger: {
        trigger: ".iphone-mockup",
        start: "30% center",
        end: "center center",
        toggleActions: "restart none reverse none",
        scrub: 1,
      }
    });
  }, []);

  useEffect(() => {
    gsap.to(iPhoneMockupText.current, {
      x: 175,
      duration: 1,
      opacity: 1,
      ease: "slow(0.7, 0.7, false)",
      scrollTrigger: {
        trigger: ".iphone-mockup",
        start: "30% center",
        end: "center center",
        toggleActions: "restart none reverse none",
        scrub: 1,
      }
    });
  }, []);

  return (
    <section className="iphone-mockup">
      <div className="iphone-mockup__circle" ></div>
      <img className="iphone-mockup__image" src={process.env.PUBLIC_URL + iphone.image} alt="" />
      <div className="iphone-mockup__text">
        <h2>{iphone.title}</h2>
        <p>{iphone.subTitle}</p>
      </div>
    </section>
  )
}