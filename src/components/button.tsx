import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children = "",
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row justify-center items-center px-5 py-2.5 gap-2.5 w-[340px] h-10 bg-[#FFCE22] hover:bg-[#FFD84D] active:bg-[#FFCE22] rounded border-none cursor-pointer mix-blend-normal flex-none order-0 grow-0 transition-colors ${className}`}
    >
      <span className="font-['Montserrat'] font-normal text-sm leading-[130%] text-[#1F2128] flex items-center">
        {children}
      </span>
    </button>
  );
};

export default Button;
