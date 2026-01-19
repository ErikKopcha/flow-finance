import styles from './FormLayout.module.scss'

type FormLayoutProps = {
  children: React.ReactNode
}

export function FormLayout({ children }: FormLayoutProps) {
  return <div className={styles.form}>{children}</div>
}

type FormGridProps = {
  children: React.ReactNode
}

export function FormGrid({ children }: FormGridProps) {
  return <div className={styles.grid}>{children}</div>
}
