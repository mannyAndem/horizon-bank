import { useState } from "react";
import arrowIcon from "../assets/arrow-down (1).png";
import "../sass/components/Accordion.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

const Accordion = ({ questions }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".accordion-item", {
      scrollTrigger: {
        trigger: ".faqs-section",
      },

      stagger: 0.5,
      x: 500,
      opacity: 0,
    });
  }, []);

  const [activeFaq, setActiveFaq] = useState(null);

  const handleClick = (id) => {
    setActiveFaq((prev) => (prev == id ? null : id));
  };

  return (
    <ul className="accordion">
      {questions.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          active={item.id === activeFaq}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
};

export default Accordion;

const AccordionItem = ({ item, active, handleClick }) => {
  return (
    <li className="accordion-item">
      <div>
        <span className="number">{item.id}.</span>
        <div>
          <span>{item.question}</span>
          <img
            src={arrowIcon}
            onClick={() => handleClick(item.id)}
            role="button"
            className="accordion-btn"
          />
        </div>
      </div>
      <div className={active ? "expanded" : "not-expanded"}>
        <p>{item.answer}</p>
      </div>
    </li>
  );
};
