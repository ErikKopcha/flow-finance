import styles from './TextInput.module.scss'

type TextInputProps = {
  label: string
  defaultValue?: string
  placeholder?: string
  type?: string
}

export function TextInput({ label, defaultValue, placeholder, type = 'text' }: TextInputProps) {
  return (
    <label className={styles.field}>
      {label}
      <input
        className={styles.input}
        defaultValue={defaultValue}
        placeholder={placeholder}
        type={type}
      />
    </label>
  )
}
