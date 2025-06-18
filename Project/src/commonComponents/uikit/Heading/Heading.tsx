import React from "react";


export default function Heading({headingText, className}) {
  return (
    <h1 className={className}>{headingText}</h1>
  );
}
