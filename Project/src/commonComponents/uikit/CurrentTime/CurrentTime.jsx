"use client";
import React, { useEffect, useState } from "react";
import {  Typography } from "antd";

const { Text } = Typography;

export default function CurrentTime({ className }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const pad = (n) => (n < 10 ? `0${n}` : n);
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
      date.getSeconds()
    )}`;
  };

  return (
    <div className={className}>
      <Text>Current Time: {formatTime(currentTime)}</Text>
    </div>
  );
}
