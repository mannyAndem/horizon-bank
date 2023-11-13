import avatar from "../assets/avatar.png";
import "../sass/components/TestimonialCard.scss";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="details">
        <img src={avatar} />
        <div>
          <span>{testimonial.name}</span>
          <span>{testimonial.profession}</span>
        </div>
      </div>
      <p className="content">{testimonial.message}</p>
    </div>
  );
};

export default TestimonialCard;
