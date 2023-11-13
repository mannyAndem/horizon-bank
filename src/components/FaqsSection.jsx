import RoundedOrangeSubtitle from "./RoundedOrangeSubtitle";
import "../sass/components/FaqsSection.scss";
import Accordion from "./Accordion";

const FaqsSection = () => {
  const questions = [
    {
      id: 1,
      question: "What services do you offer for personal banking?",
      answer:
        "We offer various services at Horizon. Account opening, savings and current accounts, fixed deposits, overdrafts and loans are amongs the numerous services we offer our customers.",
    },
    {
      id: 2,
      question: "How can I apply for a business account?",
      answer:
        "To apply for a business account, simply fill our online form and you will get an email with further instructions.",
    },
    {
      id: 3,
      question:
        "What types of loans do you offer, and what are the eligibility criteria?",
      answer:
        "We offer various loan tiers catering to the diverse needs of our customer base. Whatever your preference, you can be sure we have alon just for you.",
    },
    {
      id: 4,
      question: "How do I access my account online?",
      answer:
        "Once you have created an account, you can access your account information by logging into our website or using the horizon mobile app.",
    },
    {
      id: 5,
      question: "What investment options do you recommend for beginners?",
      answer:
        "Horizon doesn't just help you save your money, we assist you in growing it as well. Further information can be found on our investments page.",
    },
  ];

  return (
    <section className="faqs-section">
      <div className="header">
        <RoundedOrangeSubtitle>FAQs</RoundedOrangeSubtitle>
        <h2>Questions You Might Want To Ask</h2>
      </div>
      <Accordion questions={questions} />
    </section>
  );
};

export default FaqsSection;
