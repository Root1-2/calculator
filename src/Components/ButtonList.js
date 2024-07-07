import { Button } from "./Button";

export function ButtonList({
  onClickDigit,
  onClickAC,
  onClickDEL,
  onClickOperator,
  onClickEqual,
}) {
  return (
    <>
      <Button
        onClick={onClickAC}
        className="clr"
        style={{ gridColumn: "span 2" }}
      >
        AC
      </Button>
      <Button onClick={onClickDEL} className="clr">
        DEL
      </Button>
      <Button onClick={onClickOperator} className="op">
        /
      </Button>
      <Button onClick={onClickDigit}>1</Button>
      <Button onClick={onClickDigit}>2</Button>
      <Button onClick={onClickDigit}>3</Button>
      <Button onClick={onClickOperator} className="op">
        *
      </Button>
      <Button onClick={onClickDigit}>4</Button>
      <Button onClick={onClickDigit}>5</Button>
      <Button onClick={onClickDigit}>6</Button>
      <Button onClick={onClickOperator} className="op">
        +
      </Button>
      <Button onClick={onClickDigit}>7</Button>
      <Button onClick={onClickDigit}>8</Button>
      <Button onClick={onClickDigit}>9</Button>
      <Button onClick={onClickOperator} className="op">
        -
      </Button>
      <Button onClick={onClickDigit}>.</Button>
      <Button onClick={onClickDigit}>0</Button>
      <Button
        onClick={onClickEqual}
        className="op"
        style={{ gridColumn: "span 2" }}
      >
        =
      </Button>
    </>
  );
}
