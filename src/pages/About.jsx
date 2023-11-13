import aboutImg from "../assets/about-img.png";
import missionImg from "../assets/mission-img.png";
import Accordion from "../components/Accordion";
import RoundedOrangeSubtitle from "../components/RoundedOrangeSubtitle";
import OpenAccountSection from "../components/OpenAccountSection";
import "../sass/components/about.scss";

const About = () => {
  // questions for the accordion in the "Why Us section"
  const questions = [
    {
      id: 1,
      question: "What services do you offer for personal banking?",
      answer:
        "We offer some boring shit yunno. pinmpikntmuojpk mi4pktnmg5ipktm 3ojtgmr0ipkngmgrojk ngetojfnbmtujokn9e unmu9ojknourngmu9jgokn 95uoingm e0ourpingm5pritmw nwm0tnfm3joktngmv 3 uoipntmu4tnm3o nk n9oungmi0gknmg uopk3;ngmop3k;nm p3n m0p3ikntm0 ip3l m0pi ljnm0ip knm uoipm uoip nuoipknmop k;nmo jkn ioj bbtuyb uiyuj bnyuojb n8yuihn8y uhibny8u hn9u oihn8yuoihnm 9uoihn8yubn8y9uoikh ",
    },
    {
      id: 2,
      question: "Commitment to security",
      answer: "By signing up mf.",
    },
    {
      id: 3,
      question: "Tailored services",
      answer: "What you need a loan for? We both know you ain't paying up.",
    },
    {
      id: 4,
      question: "Community support",
      answer: "You login?",
    },
    {
      id: 5,
      question: "Expert focus",
      answer:
        "Do whatever tf you want man, you'll still lose your money someway, somehow.",
    },
  ];

  return (
    <div>
      <section className="section-with-special-heading">
        <div>
          <div>
            <hr />
            <span>About Us</span>
          </div>
          <div>
            <h1>
              We are more than just a financial institution. We are your trusted
              partner on your journey to financial success
            </h1>
            <p>
              Infinite Horizon Bank was founded with a visionary spirit and a
              mission to revolutionize the way people interact with their
              finances. Established in 2012, we embarked on a journey to create
              a banking experience that combines innovation, integrity, and
              personalized service.
            </p>
          </div>
        </div>
        <div className="img-container">
          <img
            src={aboutImg}
            alt="Colleagues in an office, focused on a computer screen"
          />
        </div>
      </section>
      <section className="section-with-special-heading">
        <div>
          <div>
            <hr />
            <span>Mission</span>
          </div>
          <div>
            <p>
              Our mission is to empower individuals, businesses, and communities
              by providing seamless access to innovative banking solutions. We
              strive to enhance financial well-being by offering personalized
              services, fostering financial literacy, and promoting economic
              growth within the regions we serve.
            </p>
            <p>
              To be the preferred banking partner, renowned for our commitment
              to excellence, innovation, and exceptional customer service. We
              aim to set new standards in the banking industry, continuously
              evolving to meet the changing needs of our diverse customer base.
            </p>
          </div>
        </div>
        <div className="img-container">
          <img src={missionImg} alt="Colleagues in keen conversation" />
        </div>
      </section>
      <section className="why-us-section">
        <div className="header">
          <RoundedOrangeSubtitle>Why Us</RoundedOrangeSubtitle>
          <h2>Why Choose Infinite Horizon Bank</h2>
        </div>
        <Accordion questions={questions} />
      </section>
      <OpenAccountSection />
    </div>
  );
};

export default About;
