const SectionTitle = ({ title, className }) => {
  return (
    <h1
      title={title}
      className={`text-[48px] font-bold font-integral ${className}`}
    >
      {title}
    </h1>
  );
};

export default SectionTitle;
