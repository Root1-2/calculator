export function Display({ curOper, prevOper }) {
  return (
    <div className="display">
      <p>{prevOper}</p>
      <p>{curOper}</p>
    </div>
  );
}
