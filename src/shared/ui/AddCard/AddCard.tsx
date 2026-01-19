import styles from './AddCard.module.scss'

type AddCardProps = {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  onClick?: () => void
}

export function AddCard({ title, subtitle, icon, onClick }: AddCardProps) {
  return (
    <article className={styles.card} role="button" tabIndex={0} onClick={onClick}>
      <div>
        <div className={styles.icon}>{icon ?? '+'}</div>
        <div className={styles.title}>{title}</div>
        {subtitle ? <div className={styles.subtitle}>{subtitle}</div> : null}
      </div>
    </article>
  )
}
