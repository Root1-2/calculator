import { useState } from "react";
import { ButtonList } from "./ButtonList";
import { Display } from "./Display";

export default function App() {
  const [curOper, setCurOper] = useState("");
  const [prevOper, setPrevOper] = useState("");

  function handleClickDigit(digit) {
    setCurOper((prev) => {
      if (digit === "." && prev.includes(".")) {
        return prev;
      } else {
        return prev + digit;
      }
    });
  }

  function handleClickAC() {
    setCurOper("");
    setPrevOper("");
  }

  function handleClickDEL() {
    setCurOper((prev) => prev.slice(0, -1));
  }

  function handleOperator(operator) {
    setPrevOper(curOper + " " + operator);
  }

  return (
    <div className="calc">
      <Display curOper={curOper} prevOper={prevOper} />
      <ButtonList
        onClickDigit={handleClickDigit}
        onClickAC={handleClickAC}
        onClickDEL={handleClickDEL}
        onClickOperator={handleOperator}
      />
    </div>
  );
}
