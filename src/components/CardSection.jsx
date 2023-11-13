import atmCard from "../assets/Card 17.png";
import OrangeButton from "./OrangeButton";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

import "../sass/components/CardSection.scss";

const CardSection = () => {
  useEffect(() => {
    if (window.innerWidth > 768) {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".card-section",
          start: "top top+=100",
        },
      });

      tl.to(".card", {
        y: -100,
        scale: 1.1,
        yoyo: true,
        repeat: -1,
        duration: 1.5,
      });
    }
  });

  return (
    <section className="card-section">
      <div className="container">
        <div className="img-container">
          <img src={atmCard} className="card" />
        </div>
        <div className="text-container">
          <h2>Introducing the Horizon Bank ATM Card</h2>
          <p>
            Enjoy secure cash withdrawals, effortless balance inquiries, and
            seamless transactions at a vast network of ATMs globally
          </p>
          <OrangeButton>Open Account</OrangeButton>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
