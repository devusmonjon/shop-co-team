import React from "react";

const Button = ({
  children,
  className,
  onClick,
  onFocus,
  onBlur,
  variant,
  ...props
}) => {
  return (
    <button
      className={`${
        variant === "secondary"
          ? "rounded-[62px] px-[58px] py-[10px] border-2 border-[transparent] bg-[#F0F0F0] text-[#00000099] text-[16px] font-medium hover:bg-[#000] hover:text-[#fff] hover:border-black"
          : variant === "outline"
          ? "rounded-[62px] px-[58px] py-[10px] border-2 border-[#0000001a] text-[16px] font-medium hover:bg-[#000] hover:text-[#fff] hover:border-black"
          : ""
      } ${
        variant === "primary"
          ? "rounded-[62px] px-[58px] py-[10px] border-2 border-[#000] bg-[#000] text-[#fff] text-[16px] font-medium hover:bg-transparent hover:text-[#000]"
          : ""
      } outline-none focus:ring-2 focus:ring-[#000] focus:ring-offset-2 duration-300 ${className}`}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
