export function Display({ curOper }) {
  return (
    <div className="display">
      <p>Previous Operand</p>
      <p>{curOper}</p>
    </div>
  );
}
