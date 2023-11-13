import OrangeButton from "./OrangeButton";
import "../sass/components/OpenAccountSection.scss";

const OpenAccountSection = () => {
  return (
    <section className="open-account-section">
      <div>
        <h2>Enjoy Amazing Offers from Horizon Bank</h2>
        <p>
          With our cutting-edge technology, your funds move instantly, ensuring
          your money is where you need it, precisely when you need it.
        </p>
        <OrangeButton>Open Account</OrangeButton>
      </div>
    </section>
  );
};

export default OpenAccountSection;
