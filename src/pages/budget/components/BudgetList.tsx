import { BudgetCard } from './BudgetCard'
import styles from './BudgetList.module.scss'

import { Button } from '@/shared/ui/Button'

type BudgetListProps = {
  onEdit?: () => void
  onDelete?: () => void
}

export function BudgetList({ onEdit, onDelete }: BudgetListProps) {
  return (
    <section className={styles.list}>
      <BudgetCard
        title="Housing & Utilities"
        value="$2,100 / $2,100"
        progress="100%"
        actions={
          <>
            <Button size="small" variant="secondary" onClick={onEdit}>
              Edit
            </Button>
            <Button size="small" variant="danger" onClick={onDelete}>
              Delete
            </Button>
          </>
        }
      />
      <BudgetCard
        title="Groceries"
        value="$450 / $600"
        progress="75%"
        accent="orange"
        hint="$150 left to spend"
        actions={
          <>
            <Button size="small" variant="secondary" onClick={onEdit}>
              Edit
            </Button>
            <Button size="small" variant="danger" onClick={onDelete}>
              Delete
            </Button>
          </>
        }
      />
    </section>
  )
}
