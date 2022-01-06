//React -----------------------------------------
import { useEffect, useRef } from "react";

//styling ---------------------------------------
import './big-title.scss';

//gsap ------------------------------------------
import { gsap } from "gsap"
import scrollTrigger from "gsap/ScrollTrigger";


export const BigTitle = ({ bigTitle }) => {
  gsap.registerPlugin(scrollTrigger);

  const BigTitleElement = useRef(".big-title");

  useEffect(() => {
    gsap.from(BigTitleElement.current, {
      duration: 1.5,
      scrollTrigger: {
        trigger: ".big-title",
        start: "20% center",
        end: "80% center",
        scrub: 1,
        toggleActions: "play none none pause",
        toggleClass: "highlighted",
      }
    });
  }, []);

  return (
    <section className="big-title">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2 className="big-title__title">
              {bigTitle.titlePartOne}
              <span className="big-title__title--highlight">
                {bigTitle.highlight}
              </span>
              {bigTitle.titlePartTwo}
            </h2>
          </div>
          <div className="col-12 col-md-5 offset-md-1">
            <p className="big-title__text"> {bigTitle.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}