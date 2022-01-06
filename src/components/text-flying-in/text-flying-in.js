//React -----------------------------------------
import { useEffect, useRef } from "react";

//styling ---------------------------------------
import './text-flying-in.scss';

//gsap ------------------------------------------
import { gsap } from "gsap"
import scrollTrigger from "gsap/ScrollTrigger";


export const TextFlyingIn = ({ textFlyingIn }) => {
  gsap.registerPlugin(scrollTrigger);

  const textLeft = useRef(".text-animate-left");
  const textRight = useRef(".text-animate-right");

  useEffect(() => {
    gsap.from(textRight.current, {
      scrollTrigger: {
        trigger: ".client-logos",
        start: "bottom center",
        scrub: 1,
        toggleActions: "play none none pause",
      },
      x: '-100px',
      duration: 1.5,
      opacity: 0,
    });
  }, []);

  useEffect(() => {
    gsap.from(textLeft.current, {
      scrollTrigger: {
        trigger: ".client-logos",
        start: "bottom center",
        scrub: 1,
        toggleActions: "play none none pause",
      },
      x: '100px',
      duration: 1.5,
      opacity: 0
    });
  }, []);

  return (
    <section className="text-flying-in">
      <div className="container">
        <div className="row justify-content-end mb-5 justify-content-end">
          <div className="col-10 col-md-6">
            <div className="text-animate-left">
              <h4>
                {textFlyingIn[0].title}
              </h4>
              <p className="">{textFlyingIn[0].body}</p>
            </div>
          </div>
        </div>

        <div className="row row justify-content-start">
          <div className="col-10 col-md-6">
            <div className="text-animate-right">
              <h4>
                {textFlyingIn[1].title}
              </h4>
              <p className="">{textFlyingIn[1].body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}