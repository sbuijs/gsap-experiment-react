//React -----------------------------------------
import { useEffect, useRef } from "react";

//styling ---------------------------------------
import './video-scrub.scss';

//gsap ------------------------------------------
import { gsap } from "gsap"
import scrollTrigger from "gsap/ScrollTrigger";



export const VideoScrub = ({ video }) => {
  gsap.registerPlugin(scrollTrigger);


  return (
    <section className="video-scrub">
      <div className="container">
        <div className="row justify-content-end mb-5 justify-content-end">
          <div className="col-10 col-md-6">

          </div>
        </div>
      </div>
    </section>
  )
}