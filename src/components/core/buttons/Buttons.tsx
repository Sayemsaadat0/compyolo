import React, { FC } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Buttons: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <>
      <button className="border p-10" {...props}>
        {label}
      </button>
    </>
  );
};

export default Buttons;
