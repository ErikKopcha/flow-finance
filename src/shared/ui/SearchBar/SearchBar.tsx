import styles from './SearchBar.module.scss'

type SearchBarProps = {
  placeholder?: string
  action?: React.ReactNode
}

export function SearchBar({ placeholder = 'Search...', action }: SearchBarProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.field}>
        <svg className={styles.icon} viewBox="0 0 24 24" fill="none">
          <path
            d="M21 21L16.65 16.65"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        <input className={styles.input} placeholder={placeholder} />
      </div>
      {action}
    </div>
  )
}
