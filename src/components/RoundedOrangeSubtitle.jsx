import "../sass/components/RoundedOrangeSubtitle.scss";

const RoundedOrangeSubtitle = ({ children }) => {
  return (
    <div className="rounded-orange-subtitle">
      <span>{children}</span>
    </div>
  );
};

export default RoundedOrangeSubtitle;
