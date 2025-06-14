export default function Input({ type, placeholder, name, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={className}
    />
  );
}
