import { Button } from "./Button";

export default function App() {
  return (
    <div>
      <Calculator />
    </div>
  );
}

function Calculator() {
  return (
    <div className="calc">
      <div className="display">
        <p>Previous Operand</p>
        <p>Current Operand</p>
      </div>
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
    </div>
  );
}
