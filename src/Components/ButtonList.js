import { Button } from "./Button";

export function ButtonList({ onClickDigit }) {
  return (
    <>
      <Button className="clr" style={{ gridColumn: "span 2" }}>
        AC
      </Button>
      <Button className="clr">DEL</Button>
      <Button className="op">/</Button>
      <Button onClickDigit={onClickDigit}>1</Button>
      <Button onClickDigit={onClickDigit}>2</Button>
      <Button onClickDigit={onClickDigit}>3</Button>
      <Button className="op">*</Button>
      <Button onClickDigit={onClickDigit}>4</Button>
      <Button onClickDigit={onClickDigit}>5</Button>
      <Button onClickDigit={onClickDigit}>6</Button>
      <Button className="op">+</Button>
      <Button onClickDigit={onClickDigit}>7</Button>
      <Button onClickDigit={onClickDigit}>8</Button>
      <Button onClickDigit={onClickDigit}>9</Button>
      <Button className="op">-</Button>
      <Button onClickDigit={onClickDigit}>.</Button>
      <Button onClickDigit={onClickDigit}>0</Button>
      <Button className="op" style={{ gridColumn: "span 2" }}>
        =
      </Button>
    </>
  );
}
