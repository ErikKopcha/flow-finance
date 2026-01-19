import { IncomeFlow } from './components/IncomeFlow'
import { NetWorthHistory } from './components/NetWorthHistory'
import { OverviewStats } from './components/OverviewStats'
import { SpendingBreakdown } from './components/SpendingBreakdown'
import styles from './DashboardOverviewPage.module.scss'

import { DashboardShell } from '@/shared/ui/DashboardShell'

export function DashboardOverviewPage() {
  return (
    <DashboardShell
      activePath="/dashboard"
      title="Overview"
      description="Welcome back, here's your financial flow for December."
    >
      <OverviewStats />

      <section className={styles.analysisGrid}>
        <NetWorthHistory />
        <SpendingBreakdown />
      </section>

      <IncomeFlow />
    </DashboardShell>
  )
}
