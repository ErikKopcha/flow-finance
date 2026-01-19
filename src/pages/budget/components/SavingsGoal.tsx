import localStyles from './SavingsGoal.module.scss'

import styles from '@/pages/dashboard/DashboardLayout.module.scss'
import { Button } from '@/shared/ui/Button'

type SavingsGoalProps = {
  onAdd?: () => void
  onEdit?: () => void
  onDelete?: () => void
}

export function SavingsGoal({ onAdd, onEdit, onDelete }: SavingsGoalProps) {
  return (
    <section className={styles.goalCard}>
      <div className={styles.goalCircle}>
        <div className={styles.goalArc} />
        <div>
          <div className={styles.goalValue}>75%</div>
          <div className={styles.goalMeta}>Funded</div>
        </div>
      </div>
      <h3 className={styles.sectionTitle}>Emergency Fund</h3>
      <p className={styles.goalMeta}>$15,000 / $20,000</p>
      <div className={localStyles.actions}>
        <Button size="small" onClick={onAdd}>
          Add Contribution
        </Button>
        <Button size="small" variant="secondary" onClick={onEdit}>
          Edit
        </Button>
        <Button size="small" variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </section>
  )
}
