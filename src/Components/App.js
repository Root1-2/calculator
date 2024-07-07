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
    if (curOper === "") {
      return;
    }
    setPrevOper((prev) => prev + curOper + " " + operator + " ");
    setCurOper("");
  }

  function handleEqual() {
    if (curOper === "" || prevOper === "") {
      return;
    }

    const expression = prevOper + curOper;
    // console.log(expression);
    const result = eval(expression);
    setCurOper(result);
    setPrevOper("");
  }

  return (
    <div className="calc">
      <Display curOper={curOper} prevOper={prevOper} />
      <ButtonList
        onClickDigit={handleClickDigit}
        onClickAC={handleClickAC}
        onClickDEL={handleClickDEL}
        onClickOperator={handleOperator}
        onClickEqual={handleEqual}
      />
    </div>
  );
}
