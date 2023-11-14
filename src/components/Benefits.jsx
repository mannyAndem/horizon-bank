import RoundedOrangeSubtitle from "./RoundedOrangeSubtitle";
import lessTransactionImg from "../assets/less-transaction-fees.png";
import customerSupport from "../assets/customer-support.png";
import accountManagement from "../assets/account-management.png";
import instantTransactions from "../assets/instant-transactions.png";
import "../sass/components/Benefits.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

const Benefits = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".benefits-card", {
      scrollTrigger: {
        trigger: ".benefits-section",
        start: window.innerWidth > 768 && "top",
      },
      stagger: 0.5,
      y: 50,
      opacity: 0,
    });
  }, []);

  return (
    <section className="benefits-section">
      <RoundedOrangeSubtitle>Benefits</RoundedOrangeSubtitle>
      <h2>Experience the Future of Banking</h2>
      <div className="grid-container">
        {/* benfits card */}
        <div className="benefits-card">
          <img src={lessTransactionImg} alt="Less transaction fees" />

          <div className="text">
            <h3>Less Transaction Fees</h3>
            <p>
              Enjoy banking without the extra costs. With us, you'll face fewer
              transaction fees, saving you money every time you manage your
              finances.
            </p>
          </div>
        </div>
        <div className="benefits-card">
          <img src={customerSupport} alt="Better customer support" />

          <div className="text">
            <h3>24/7 Customer Support</h3>
            <p>
              At Horizon Bank, we are committed to delivering exceptional
              service whenever you need it, ensuring your peace of mind in every
              banking experience.
            </p>
          </div>
        </div>
        <div className="benefits-card">
          <img src={accountManagement} alt="Online account management" />

          <div className="text">
            <h3>Online Account Management</h3>
            <p>
              Experience banking on your terms, where convenience meets control,
              empowering you to make informed financial decisions with ease
            </p>
          </div>
        </div>
        <div className="benefits-card">
          <img src={instantTransactions} alt="Instant transactions" />

          <div className="text">
            <h3>Instant Transactions</h3>
            <p>
              Enjoy the convenience of immediate transactions, making your
              banking experience as swift and efficient as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
