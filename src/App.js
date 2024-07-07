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
      <button className="clr" style={{ gridColumn: "span 2" }}>
        AC
      </button>
      <button className="clr">DEL</button>
      <button className="op">/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className="op">*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className="op">+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className="op">-</button>
      <button>.</button>
      <button>0</button>
      <button className="op" style={{ gridColumn: "span 2" }}>
        =
      </button>
    </div>
  );
}
