import styles from './StatCard.module.scss'

type StatCardProps = {
  icon?: React.ReactNode
  trend?: React.ReactNode
  label: string
  value: string
  accent?: boolean
  glow?: boolean
}

export function StatCard({ icon, trend, label, value, accent, glow }: StatCardProps) {
  return (
    <article className={`${styles.card} ${glow ? styles.cardHover : ''}`}>
      {glow ? <div className={styles.cardGlow} /> : null}
      <div className={styles.cardRow}>
        <div className={`${styles.cardIcon} ${accent ? styles.cardIconAccent : ''}`}>{icon}</div>
        {trend ? <span className={styles.cardTrend}>{trend}</span> : null}
      </div>
      <h3 className={styles.cardLabel}>{label}</h3>
      <p className={`${styles.cardValue} ${accent ? styles.cardValueAccent : ''}`}>{value}</p>
    </article>
  )
}
