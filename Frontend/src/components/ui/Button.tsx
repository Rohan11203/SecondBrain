import React, { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary" | "danger";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  className?: string;
}
const sizeStyles = {
  sm: "px-2 py-1 text-sm rounded-sm",
  md: "px-2 py-2 text-md rounded-2xl",
  lg: "px-8 py-4 text-xl rounded-xl"
}

const VarientStyles = {
  primary: "bg-gradient-to-t from-[#2d2d2d] to-[#3c3c3c] hover:bg-amber-700 text-white",
  secondary: "bg-gray-100 hover:bg-gray-200 border",
  danger: "bg-red-700 hover:bg-red-500 text-white"
}

export const Button = (props: ButtonProps) => {
  return (
    <>
      <button className={`cursor-pointer ${props.className} ${sizeStyles[props.size]} ${VarientStyles[props.variant]}`} onClick={props.onClick} >
        <div className="flex items-center">
          <div>
          {props.startIcon && 
            React.cloneElement(props.startIcon, {size: props.size})
          }
          </div>
          <div className="pr-2 pl-2">
          {props.text}
          </div>
          {props.endIcon && 
            React.cloneElement(props.endIcon, {size: props.size})
          }
        </div>
      </button>
    </>
  );
};
