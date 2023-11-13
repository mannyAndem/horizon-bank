import OrangeButton from "./OrangeButton";
import "../sass/components/Hero.scss";
import heroImg from "../assets/hero-img.png";
import RoundedOrangeSubtitle from "./RoundedOrangeSubtitle";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <RoundedOrangeSubtitle>Horizon Bank</RoundedOrangeSubtitle>
        <h1>Seamless, secure and smart banking solutions tailored for you</h1>
        <p>
          Welcome to a new era of banking, where Seamless, Secure, and Smart
          Banking Solutions are crafted exclusively for You
        </p>
        <OrangeButton>Open Account</OrangeButton>
      </div>
      <div className="img-container">
        <img src={heroImg} />
      </div>
    </section>
  );
};

export default Hero;
