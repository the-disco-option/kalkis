import React from "react";

type KeypadAction =
  | "one"
  | "two"
  | "three"
  | "four"
  | "five"
  | "six"
  | "seven"
  | "eight"
  | "nine"
  | "zero"
  | "multiply"
  | "divide"
  | "plus"
  | "minus"
  | "percent"
  | "decimal"
  | "clear"
  | "equals"
  | "backspace";

const SHORT_LABELS = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  zero: "0",
  multiply: "X",
  divide: "/",
  plus: "+",
  minus: "-",
  percent: "%",
  decimal: ",",
  clear: "C",
  equals: "=",
  backspace: "<-"
};

const KeypadButton = ({
  className = "",
  label = "",
  value = "zero",
  ...props
}: {
  className?: string;
  label: string;
  value: KeypadAction;
}) => (
  <button
    style={{ gridArea: value }}
    className={`keypad-button reset-button ${value} ${className}`}
    {...props}
    onClick={() => console.log(value)}
  >
    {label || value}
  </button>
);

export const Logo = () => {
  const labels = SHORT_LABELS;
  return (
    <div className="keypad-grid layout-keypad">
      <KeypadButton value={"one"} label={labels.one} />
      <KeypadButton value={"two"} label={labels.two} />
      <KeypadButton value={"three"} label={labels.three} />
      <KeypadButton value={"four"} label={labels.four} />
      <KeypadButton value={"five"} label={labels.five} />
      <KeypadButton value={"six"} label={labels.six} />
      <KeypadButton value={"seven"} label={labels.seven} />
      <KeypadButton value={"eight"} label={labels.eight} />
      <KeypadButton value={"nine"} label={labels.nine} />
      <KeypadButton value={"zero"} label={labels.zero} />
      <KeypadButton value={"clear"} label={labels.clear} />
      <KeypadButton value={"backspace"} label={labels.backspace} />
      <KeypadButton value={"plus"} label={labels.plus} />
      <KeypadButton value={"minus"} label={labels.minus} />
      <KeypadButton value={"divide"} label={labels.divide} />
      <KeypadButton value={"multiply"} label={labels.multiply} />
      <KeypadButton value={"equals"} label={labels.equals} />
      <KeypadButton value={"percent"} label={labels.percent} />
      <KeypadButton value={"decimal"} label={labels.decimal} />
    </div>
  );
};
