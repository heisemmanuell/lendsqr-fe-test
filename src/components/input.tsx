import inputStyle from '../scss/input.module.scss';

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error: string | null;
  onShowPassword?: () => void;
}

export default function Input({ 
  placeholder, 
  type,
  name,
  handleValue,
  value,
  error,
  onShowPassword }: InputProps){
  return(
    <div className={inputStyle.form_input}>
      <input 
        placeholder = {placeholder}
        type = {type}
        name = {name}
        value = {value}
        onChange = {handleValue}
      />
      {name === "password" && (
        <p
          className={inputStyle.toggle_visibility}
          onClick={onShowPassword}
        >
          {type === "password" ? "Show" : "Hide"}
        </p>
      )}
      {error && <p className={inputStyle.error_message}>{error}</p>}
    </div>
  )
}