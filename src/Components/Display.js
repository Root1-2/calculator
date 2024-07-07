export function Display({ curOper, prevOper }) {
  return (
    <div className="display">
      <p>{prevOper ? prevOper : "Empty"}</p>
      <p style={{ fontSize: "1.5rem" }}>{curOper}</p>
    </div>
  );
}
