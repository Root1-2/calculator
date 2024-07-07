import { useState } from "react";
import { ButtonList } from "./ButtonList";
import { Display } from "./Display";

export default function App() {
  const [curOper, setCurOper] = useState("");

  function handleClickDigit(digit) {
    setCurOper(digit);
  }

  return (
    <div className="calc">
      <Display curOper={curOper} />
      <ButtonList onClickDigit={handleClickDigit} />
    </div>
  );
}
