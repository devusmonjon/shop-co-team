const SectionTitle = ({ title, className }) => {
  return (
    <h1
      title={title}
      className={`text-[30px] sm:text-[38px] md:text-[40px] lg:text-[48px] font-bold font-integral ${className}`}
    >
      {title}
    </h1>
  );
};

export default SectionTitle;
