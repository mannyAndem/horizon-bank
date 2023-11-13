import avatars from "../assets/avatars.png";
import RoundedOrangeSubtitle from "./RoundedOrangeSubtitle";
import "../sass/components/Testimonials.scss";
import Slider from "./Slider";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  // testimonials
  const testimonials = [
    {
      name: "Blacmeek Jaybee",
      profession: "Product Designer",
      message: `We take pride in providing a platform that caters to your financials
      needs. Here are some of the key features. We take pride in providing a
      platform that caters`,
    },
    {
      name: "Manny Andem",
      profession: "Frontend developer",
      message: `An amazing bank. The service and professionalism is absolutely top tier. Upon days of opening my account, an account rep met with me to set up an account that suits my needs.`,
    },
    {
      name: "Precious Ojogu",
      profession: "Backend dev",
      message: `We take pride in providing a platform that caters to your financials
      needs. Here are some of the key features. We take pride in providing a
      platform that caters`,
    },
  ];

  const testimonialCards = testimonials.map((testimonial) => (
    <TestimonialCard testimonial={testimonial} />
  ));

  return (
    <section className="testimonials-section">
      <div className="header">
        <RoundedOrangeSubtitle>Testimonials</RoundedOrangeSubtitle>
        <h2>What Our Customers Say</h2>
      </div>
      <div className="testimonial-body">
        <div className="users-container">
          <img src={avatars} />
          <span>
            More than 100k plus
            <br />
            users worldwide
          </span>
        </div>
        <div className="slider-container">
          <Slider content={testimonialCards} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
