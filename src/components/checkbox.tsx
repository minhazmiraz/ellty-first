import React from "react";
import checkboxActive from "../assets/icons/checkbox-878787.svg";
import checkboxGray from "../assets/icons/checkbox-E3E3E3.svg";
import checkmarkIconWhite from "../assets/icons/checkbox-FFFFFF.svg";

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  className = "",
  style,
}) => {
  const handleClick = () => {
    onChange?.(!checked);
  };

  const iconWrapperClass =
    "absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center";
  const iconBaseClass = "w-[17px] h-[12px] object-contain";
  const iconProps = { alt: "", width: 17, height: 12 };

  return (
    <div
      className={`relative w-[25px] h-[25px] cursor-pointer group ${className}`}
      style={style}
      onClick={handleClick}
    >
      <div className="absolute z-10 -left-[3px] -top-[3px] w-[31px] h-[31px] rounded-[8px] transition-colors opacity-0 border-[3px] border-[#2469f6] group-active:opacity-10" />

      <div
        className={`absolute left-0 top-0 w-[25px] h-[25px] rounded-md border box-border transition-colors ${
          checked
            ? "bg-[#2469F6] group-hover:bg-[#5087F8] group-active:bg-[#2469F6]"
            : "bg-white opacity-60 border-[#CDCDCD] group-hover:opacity-100 group-hover:border-[#BDBDBD]"
        }`}
      />

      {checked && (
        <div className={iconWrapperClass}>
          <img
            src={checkmarkIconWhite}
            {...iconProps}
            className={iconBaseClass}
          />
        </div>
      )}
      {!checked && (
        <>
          <div className={iconWrapperClass}>
            <img
              src={checkboxGray}
              {...iconProps}
              className={`${iconBaseClass} group-hover:opacity-100 group-active:opacity-0 opacity-0 transition-opacity`}
            />
          </div>
          <div className={iconWrapperClass}>
            <img
              src={checkboxActive}
              {...iconProps}
              className={`${iconBaseClass} group-active:opacity-100 opacity-0 transition-opacity`}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Checkbox;
