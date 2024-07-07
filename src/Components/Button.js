export function Button({ children, className, style, onClickDigit }) {
  return (
    <button
      className={`${className}`}
      style={style}
      onClick={(e) => onClickDigit(children)}
    >
      {children}
    </button>
  );
}
