import { useState } from 'react'

import { BudgetList } from './components/BudgetList'
import { BudgetModals } from './components/BudgetModals'
import { SavingsGoal } from './components/SavingsGoal'

import styles from '@/pages/dashboard/DashboardLayout.module.scss'
import { Button } from '@/shared/ui/Button'
import { DashboardShell } from '@/shared/ui/DashboardShell'

export function BudgetPage() {
  const [budgetCreateOpen, setBudgetCreateOpen] = useState(false)
  const [budgetEditOpen, setBudgetEditOpen] = useState(false)
  const [goalCreateOpen, setGoalCreateOpen] = useState(false)
  const [goalEditOpen, setGoalEditOpen] = useState(false)
  const [budgetDeleteOpen, setBudgetDeleteOpen] = useState(false)
  const [goalDeleteOpen, setGoalDeleteOpen] = useState(false)

  const closeAll = () => {
    setBudgetCreateOpen(false)
    setBudgetEditOpen(false)
    setGoalCreateOpen(false)
    setGoalEditOpen(false)
    setBudgetDeleteOpen(false)
    setGoalDeleteOpen(false)
  }

  return (
    <DashboardShell
      activePath="/budget"
      title="Budgets"
      description="Track monthly budgets and savings goals in one place."
    >
      <div className={styles.sectionTitleRow}>
        <h2 className={styles.sectionTitle}>Monthly Budgets</h2>
        <Button onClick={() => setBudgetCreateOpen(true)}>Add Budget</Button>
      </div>

      <BudgetList
        onEdit={() => setBudgetEditOpen(true)}
        onDelete={() => setBudgetDeleteOpen(true)}
      />
      <SavingsGoal
        onAdd={() => setGoalCreateOpen(true)}
        onEdit={() => setGoalEditOpen(true)}
        onDelete={() => setGoalDeleteOpen(true)}
      />
      <BudgetModals
        budgetCreateOpen={budgetCreateOpen}
        budgetEditOpen={budgetEditOpen}
        goalCreateOpen={goalCreateOpen}
        goalEditOpen={goalEditOpen}
        budgetDeleteOpen={budgetDeleteOpen}
        goalDeleteOpen={goalDeleteOpen}
        onClose={closeAll}
      />
    </DashboardShell>
  )
}
