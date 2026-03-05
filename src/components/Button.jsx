export default function Button({ text, onClick, type = "button", variant = "primary", disabled }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${variant}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}