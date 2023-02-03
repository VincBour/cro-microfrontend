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
    <div className="flex gap-4">
      <label className="w-full mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        className="text-sm text-gray-500 dark:text-gray-400"
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
