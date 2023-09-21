import type { FC } from "react";
import styles from "./UiInput.module.scss";

interface UiInputProps {
  type: string;
  required: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UiInput: FC<UiInputProps> = ({
  type = "text",
  required = true,
  placeholder,
  value,
  onChange,
}) => (
  <input
    className={styles.input}
    type={type}
    required={required}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default UiInput;
