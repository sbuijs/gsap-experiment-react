//React -----------------------------------------
import { useEffect, useRef } from "react";

//styling ---------------------------------------
import './text-and-image.scss';

//gsap ------------------------------------------
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";


export const TextAndImage = ({ textAndImage }) => {
  gsap.registerPlugin(ScrollTrigger);

  const textAndImageImage = useRef(".text-and-image__image");

  useEffect(() => {
    gsap.from(textAndImageImage.current, {
      scrollTrigger: {
        trigger: ".text-and-image__image",
        start: "top top",
        endTrigger: ".big-title",
        end: "top bottom",
        pinSpacing: false,
        pin: true,
        toggleActions: "play none none pause",
      },
      duration: 1.5,
    });
  }, []);


  return (
    <section className="text-and-image">
      <div className="text-and-image__image"
        style={{ backgroundImage: `url(${textAndImage.imageSource})` }}>
      </div>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-8 col-lg-6 position-relative">
            <div className="text-and-image__text">
              <h1>{textAndImage.title}</h1>
              <p>{textAndImage.textOne}</p>
              <br />
              <br />
              <h2>{textAndImage.subTitleOne}</h2>
              <p>{textAndImage.subTextOne}</p>
              <br />
              <br />
              <h3>{textAndImage.subTitleTwo}</h3>
              <p>{textAndImage.subTextTwo}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}