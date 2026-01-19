import styles from '@/pages/dashboard/DashboardLayout.module.scss'
import { InfoCard } from '@/shared/ui/InfoCard'

type AccountCardProps = {
  title: string
  balance: string
  masked: string
}

export function AccountCard({ title, balance, masked }: AccountCardProps) {
  return (
    <InfoCard
      title={title}
      meta={masked}
      icon={<span className={styles.budgetIcon}>B</span>}
      trailing={<span className={styles.goalMeta}>Bank</span>}
    >
      <div className={styles.accountBalance}>{balance}</div>
    </InfoCard>
  )
}
