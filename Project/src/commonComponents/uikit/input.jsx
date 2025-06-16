import { Input } from "antd";

export default function InputComp({ type, placeholder, name, className }) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      name={name}
      className={className}
    ></Input>
  );
}
