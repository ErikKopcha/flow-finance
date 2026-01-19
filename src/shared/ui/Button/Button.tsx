import styles from './Button.module.scss'

type ButtonVariant = 'primary' | 'secondary' | 'danger'

type ButtonSize = 'default' | 'small'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: ButtonVariant
  size?: ButtonSize
}

export function Button({ children, onClick, variant = 'primary', size = 'default' }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${variant !== 'primary' ? styles[variant] : ''} ${
        size === 'small' ? styles.small : ''
      }`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
