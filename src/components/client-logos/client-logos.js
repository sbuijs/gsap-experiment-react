//React -----------------------------------------
import { useEffect, useRef } from "react";

//styling ---------------------------------------
import './client-logos.scss';

//gsap ------------------------------------------
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";


export const ClientLogos = ({ clients }) => {
    gsap.registerPlugin(ScrollTrigger);

    const clientLogosElement = useRef(".client-logos .client-logos__logo");

    useEffect(() => {
        gsap.from(clientLogosElement.current, {
            opacity: 0,
            stagger: 10,
            scrollTrigger: {
                trigger: ".client-logos",
                start: "top center",
                end: "end center",
                scrub: 1,
                toggleActions: "none none reverse none",
            },
        });
    }, []);

    return (
        <section className="client-logos">
            <div className="container">
                <div className="row">
                    {clients.map(function (client) {
                        return (
                            <div key={client.id}
                                className="col-3 justify-content-center d-flex align-center">
                                <div className="client-logos__logo">
                                    <img className="logo img-fluid"
                                        src={process.env.PUBLIC_URL + client.logoSource}
                                        alt="" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}