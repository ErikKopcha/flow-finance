import styles from './Card.module.scss'

type CardProps = {
  title: string
  icon?: React.ReactNode
  meta?: string
  children?: React.ReactNode
}

export function Card({ title, icon, meta, children }: CardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        {icon ? <div className={styles.icon}>{icon}</div> : null}
        <div>
          <div>{title}</div>
          {meta ? <div className={styles.meta}>{meta}</div> : null}
        </div>
      </div>
      {children ? <div className={styles.body}>{children}</div> : null}
    </article>
  )
}
