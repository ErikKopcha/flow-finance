import cardStyles from './BudgetCard.module.scss'

import styles from '@/pages/dashboard/DashboardLayout.module.scss'
import { InfoCard } from '@/shared/ui/InfoCard'

type BudgetCardProps = {
  title: string
  value: string
  progress: string
  accent?: 'base' | 'orange'
  hint?: string
  actions?: React.ReactNode
}

export function BudgetCard({
  title,
  value,
  progress,
  accent = 'base',
  hint,
  actions,
}: BudgetCardProps) {
  const fillClass = progress === '100%' ? cardStyles.width100 : cardStyles.width75

  return (
    <InfoCard
      title={title}
      meta={value}
      icon={
        <span
          className={`${styles.budgetIcon} ${accent === 'orange' ? styles.budgetIconOrange : ''}`}
        >
          {title[0]}
        </span>
      }
      trailing={actions}
    >
      <div className={styles.progressBar}>
        <div
          className={`${styles.progressFill} ${accent === 'orange' ? styles.progressFillOrange : ''} ${cardStyles.progressFill} ${fillClass}`}
        />
      </div>
      {hint ? <div className={styles.progressHint}>{hint}</div> : null}
    </InfoCard>
  )
}
