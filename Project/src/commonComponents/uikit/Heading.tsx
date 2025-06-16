import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

export default function Heading({headingText, className,level}) {
  return (
    <Title level={level} className={className}>{headingText}</Title>
  );
}
