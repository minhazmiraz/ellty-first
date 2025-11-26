import React from "react";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, className = "", style }) => {
  return (
    <div
      className={`flex flex-col items-start py-2.5 bg-white border border-[#EEEEEE] rounded-md ${className}`}
      style={{
        ...style,
        boxShadow:
          "0px 0px 4px rgba(20, 20, 20, 0.1), 0px 8px 15px rgba(20, 20, 20, 0.12)",
      }}
    >
      {children}
    </div>
  );
};

interface CardDividerProps {
  className?: string;
}

export const CardDivider: React.FC<CardDividerProps> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start gap-2.5 px-[15px] py-[10px] ${className}`}
    >
      <div className="w-full h-[0.7px] bg-[#CDCDCD]" />
    </div>
  );
};

export default Card;
