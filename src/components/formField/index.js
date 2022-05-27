import "./styles.css";
export const FormField = ({
  id,
  label,
  placeholder,
  type,
  required,
  handleChange,
  value,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className="input-form"
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};
