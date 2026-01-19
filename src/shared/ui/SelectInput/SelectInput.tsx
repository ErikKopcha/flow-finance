import styles from './SelectInput.module.scss'

type SelectInputProps = {
  label: string
  options: string[]
}

export function SelectInput({ label, options }: SelectInputProps) {
  return (
    <label className={styles.field}>
      {label}
      <select className={styles.select}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}
