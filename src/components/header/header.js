//React -----------------------------------------
import { useEffect, useRef } from "react";

//styling ---------------------------------------
import './header.scss';

//gsap ------------------------------------------
import { gsap } from "gsap"
import scrollTrigger from "gsap/ScrollTrigger";

export const Header = ({ header }) => {
  gsap.registerPlugin(scrollTrigger);

  const headerBackground = useRef(null);
  const headerTitle = useRef(null);
  const headerBodyText = useRef(null);

  useEffect(() => {
    gsap.to(headerBackground.current, {
      scale: 1.1,
      rotationZ: 0.01,
      duration: 3,
      opacity: 1,
      scrollTrigger: {
        trigger: ".header",
        start: "top center",
        end: "center center",
        toggleActions: "play none none complete",
        scrub: true,
      }
    });
  }, []);

  useEffect(() => {
    gsap.from(headerTitle.current, {
      opacity: 0,
      delay: 1,
      y: '10%',
      ease: "power2.out",
      stagger: .2,
      scrollTrigger: {
        trigger: ".header__inner-line",
        start: "top center",
        end: "center center",
        toggleActions: "play none none complete",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(headerBodyText.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: ".header",
        start: "top center",
        end: "center center",
        toggleActions: "play none none complete",
        scrub: true,
      }
    });
  }, []);

  return (
    <section className="header">
      <div ref={headerBackground} className="header__background"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <div ref={headerTitle} className="header__title">
              <h1>
                <div className="header__line">
                  <div className="header__inner-line">
                    {header.titleFirstLine}
                  </div>
                </div>
                <div className="line">
                  <div className="header__inner-line">
                    {header.titleSecondLine}
                  </div>
                </div>
              </h1>
              <p ref={headerBodyText} className="header__body-text"> {header.bodyText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}