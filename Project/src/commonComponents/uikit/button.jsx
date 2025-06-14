import { Button } from "antd";

export default function ButtonComp({ name, className, icon }) {
  return (
    <Button type="default Button" className={className}>
      {icon}
      {name}
    </Button>
  );
}
