//React -----------------------------------------
import { useEffect, useRef } from "react";

//styling ---------------------------------------
import './images-flying-in.scss';

//gsap ------------------------------------------
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";


export const ImagesFlyingIn = ({ imagesFlyingIn }) => {
  gsap.registerPlugin(ScrollTrigger);

  const imageLeft = useRef(".image-animate-left");
  const imageRight = useRef(".image-animate-right");

  useEffect(() => {
    gsap.from(imageLeft.current, {
      scrollTrigger: {
        trigger: ".images-flying-in",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        toggleActions: "restart none reverse none",
      },
      x: '-200px',
      y: '200px',
      duration: 1.2,
    });
  }, []);

  useEffect(() => {
    gsap.from(imageRight.current, {
      scrollTrigger: {
        trigger: ".images-flying-in",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        toggleActions: "restart none reverse none",
      },
      x: '200px',
      y: '-200px',
      duration: 1.2,
    });
  }, []);


  return (
    <section className="images-flying-in">
      <div className="container-xl">
        <div className="row">
          <div className="col-9">
            <img className="image-animate-left img-fluid" alt="things"
              src={imagesFlyingIn.imageOne} width="1200" height="634" />
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-9">
            <img className="image-animate-right img-fluid" alt="things"
              src={imagesFlyingIn.imageTwo} width="1200" height="634" />
          </div>
        </div>
      </div>
    </section>
  )
}