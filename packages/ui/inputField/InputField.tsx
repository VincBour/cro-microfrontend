import * as React from "react";
import { InputHTMLAttributes } from "react";
import "./InputField.css";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputField = ({
  name,
  required,
  value,
  label,
  ...rest
}: InputFieldProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "8px",
        width: "200px",
      }}
    >
      <label>{label}</label>
      <input
        type="text"
        name={name}
        required={required}
        value={value}
        {...rest}
      />
    </div>
  );
};

InputField.displayName = "InputField";
