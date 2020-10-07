import React from "react";
import BaseInput from "./BaseInput";
import FormGroup from "./FormGroup";
import InputProps from "./InputProps";
import Label from "./Label";

const Input: React.FC<InputProps> = ({
  label,
  value,
  id,
  onChange,
  placeholder,
  type = "text",
  ...props
}: InputProps) => {
  const preset = id || "wc-" + Math.floor(Math.random() * 1e12).toString(16);
  return (
    <FormGroup>
      {label && <Label htmlFor={preset}>{label}</Label>}
      <BaseInput
        value={value}
        onChange={onChange}
        id={label && preset}
        type={type}
        {...props}
      />
    </FormGroup>
  );
};

export default Input;
