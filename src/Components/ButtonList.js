import { Button } from "./Button";

export function ButtonList() {
  return (
    <>
      <Button className="clr" style={{ gridColumn: "span 2" }}>
        AC
      </Button>
      <Button className="clr">DEL</Button>
      <Button className="op">/</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button className="op">*</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button className="op">+</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button className="op">-</Button>
      <Button>.</Button>
      <Button>0</Button>
      <Button className="op" style={{ gridColumn: "span 2" }}>
        =
      </Button>
    </>
  );
}
