import styles from './InfoCard.module.scss'

type InfoCardProps = {
  title: string
  meta?: string
  icon?: React.ReactNode
  trailing?: React.ReactNode
  children?: React.ReactNode
}

export function InfoCard({ title, meta, icon, trailing, children }: InfoCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerMeta}>
          {icon ? <div className={styles.icon}>{icon}</div> : null}
          <div>
            <div>{title}</div>
            {meta ? <div className={styles.meta}>{meta}</div> : null}
          </div>
        </div>
        {trailing}
      </div>
      {children ? <div className={styles.body}>{children}</div> : null}
    </article>
  )
}
