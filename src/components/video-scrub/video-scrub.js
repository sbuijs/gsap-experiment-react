//React -----------------------------------------


//styling ---------------------------------------
import './video-scrub.scss';

//gsap ------------------------------------------
import { gsap } from "gsap"
import scrollTrigger from "gsap/ScrollTrigger";



export const VideoScrub = ({ video }) => {
  gsap.registerPlugin(scrollTrigger);

  console.log(video.source);
  return (
    <section className="video-scrub">
      <div className="container">
        <div className="row justify-content-end mb-5 justify-content-center">
          <div className="col-12">
            <video src={video.source} playsInline="{true}" webkit-playsinline="true" preload="auto" muted="muted" className="video-background" >
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}