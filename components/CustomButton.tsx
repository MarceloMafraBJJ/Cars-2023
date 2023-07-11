"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";

interface ButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  rightIcon?: string;
  isDisabled?: boolean;
}

const CustomButton = ({
  title,
  containerStyles,
  textStyles,
  handleClick,
  btnType,
  rightIcon,
  isDisabled,
}: ButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <Image
          src={rightIcon}
          alt="icon"
          width={20}
          height={20}
          className="object-contain"
        />
      )}
    </button>
  );
};

export default CustomButton;
