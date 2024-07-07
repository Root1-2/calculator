export function Button({ children, className, style, onClick }) {
  return (
    <button
      className={`${className}`}
      style={style}
      onClick={(e) => onClick(children)}
    >
      {children}
    </button>
  );
}
