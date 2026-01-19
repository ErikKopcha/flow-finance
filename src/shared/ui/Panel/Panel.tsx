import styles from './Panel.module.scss'

type PanelProps = {
  title: string
  icon?: React.ReactNode
  legend?: React.ReactNode
  children: React.ReactNode
}

export function Panel({ title, icon, legend, children }: PanelProps) {
  return (
    <section className={styles.panel}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          {icon ? <span className={styles.titleIcon}>{icon}</span> : null}
          <h2 className={styles.title}>{title}</h2>
        </div>
        {legend}
      </div>
      <div className={styles.body}>{children}</div>
    </section>
  )
}
