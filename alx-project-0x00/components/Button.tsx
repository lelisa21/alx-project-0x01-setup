import React from "react";
import { ButtonProps } from "@/interfaces";
const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  Small: "text-sm px-3 py-1.5 m-2",
  Medium: "text-base px-5 py-2.5 m-3",
  Large: "text-lg px-7 py-3.5 m-4",
};

const Button: React.FC<ButtonProps> = ({
  title,
  styles = "",
  size = "Medium",
  shapes = "rounded-md",
  className = "",
}) => {
  return (
    <button
      className={`
        bg-green-600 hover:bg-green-800 text-white font-semibold transition
        ${sizeClasses[size]} ${shapes} ${styles} ${className}
      `}
    >
      {title}
    </button>
  );
};

export default Button;
