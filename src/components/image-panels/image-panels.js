//React -----------------------------------------
import { useEffect, useRef } from "react";

//styling ---------------------------------------
import './image-panels.scss';

//gsap ------------------------------------------
import { gsap } from "gsap"
import scrollTrigger from "gsap/ScrollTrigger";


export const ImagePanels = () => {
  gsap.registerPlugin(scrollTrigger);

  const imagePanels = useRef(".image-panels__panel");

  useEffect(() => {
    gsap.utils.toArray(imagePanels.current).forEach((panel, i) => {
      scrollTrigger.create({
        trigger: panel,
        start: "top top",
        endTrigger: ".images-flying-in",
        end: "top bottom",
        toggleActions: "play none none pause",
        pinSpacing: false,
        pin: true,
      })
    })
  }, []);


  return (
    <section className="image-panels">
      <div className="image-panels__panel" style={{
        backgroundImage: `url("https://picsum.photos/id/1021/4001/2116")`
      }} >
        <h3 className="image-panels__title">Non autem voluptas est veniam</h3>
      </div>
      <div className="image-panels__panel"
        style={{ backgroundImage: `url("https://picsum.photos/id/192/4001/2116")` }}>
        <h3 className="image-panels__title">Aut enim ad omnis esse</h3>
      </div>
      <div className="image-panels__panel"
        style={{ backgroundImage: `url("https://picsum.photos/id/272/4001/2116")` }}>
        <h3 className="image-panels__title">Aut optio voluptate sit enim</h3>
      </div>
    </section>
  )
}