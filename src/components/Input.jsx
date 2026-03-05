export default function Input({ label, value, onChange, type = "text", placeholder }) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <input
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}