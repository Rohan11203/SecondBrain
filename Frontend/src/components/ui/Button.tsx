import React, { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  className?: string;
}
const sizeStyles = {
  sm: "px-2 py-1 text-sm rounded-sm",
  md: "px-4 py-2 text-md rounded-md",
  lg: "px-8 py-4 text-xl rounded-xl"
}

const VarientStyles = {
  primary: "bg-amber-500 hover:bg-amber-700 text-white",
  secondary: "bg-gray-300 hover:bg-gray-500 text-gray-800"
}

export const Button = (props: ButtonProps) => {
  return (
    <>
      <button className={` ${props.className} ${sizeStyles[props.size]} ${VarientStyles[props.variant]}`} onClick={props.onClick} >
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
