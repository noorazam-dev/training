"use client";
import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

export default function CurrentDate({ className }) {
  const today = new Date().toLocaleDateString();

  return (
    <div className={className}>
      <Text>Current Date: {today}</Text>
    </div>
  );
}
