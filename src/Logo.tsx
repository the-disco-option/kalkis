import React from "react";

const KeypadButton = ({ className = "", label = "", value = "", ...props }) => (
  <button className={"keypad-button reset-button" + className} {...props}>
    {label || value}
  </button>
);

const NumberButton = ({ className = "", num = 0 }) => (
  <KeypadButton className={className} label={`${num}`} />
);

export const Logo = () => (
  <div className="keypad-grid">
    <NumberButton num={1} /> <NumberButton num={2} />
    <NumberButton num={3} /> <NumberButton num={4} />
    <NumberButton num={5} /> <NumberButton num={6} />
    <NumberButton num={7} />
    <NumberButton num={8} />
    <NumberButton num={9} />
    <NumberButton num={0} />
  </div>
);
