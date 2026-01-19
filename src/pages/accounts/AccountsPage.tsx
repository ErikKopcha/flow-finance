import { useState } from 'react'

import pageStyles from './AccountsPage.module.scss'
import { AccountCard } from './components/AccountCard'
import { AccountsModals } from './components/AccountsModals'

import styles from '@/pages/dashboard/DashboardLayout.module.scss'
import { AddCard } from '@/shared/ui/AddCard'
import { Button } from '@/shared/ui/Button'
import { DashboardShell } from '@/shared/ui/DashboardShell'

export function AccountsPage() {
  const [createOpen, setCreateOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)

  const closeAll = () => {
    setCreateOpen(false)
    setEditOpen(false)
    setDeleteOpen(false)
  }

  return (
    <DashboardShell
      activePath="/accounts"
      title="Accounts"
      description="Overview of your connected bank accounts."
    >
      <section className={styles.accountsGrid}>
        <div>
          <AccountCard title="Main Checking" balance="$4,250.00" masked="**** 4242" />
          <div className={pageStyles.actionRow}>
            <Button size="small" variant="secondary" onClick={() => setEditOpen(true)}>
              Edit
            </Button>
            <Button size="small" variant="danger" onClick={() => setDeleteOpen(true)}>
              Delete
            </Button>
          </div>
        </div>
        <div>
          <AccountCard title="Savings" balance="$12,840.00" masked="**** 8421" />
          <div className={pageStyles.actionRow}>
            <Button size="small" variant="secondary" onClick={() => setEditOpen(true)}>
              Edit
            </Button>
            <Button size="small" variant="danger" onClick={() => setDeleteOpen(true)}>
              Delete
            </Button>
          </div>
        </div>
        <AddCard
          title="Connect Account"
          subtitle="Securely link your provider"
          onClick={() => setCreateOpen(true)}
        />
      </section>
      <AccountsModals
        createOpen={createOpen}
        editOpen={editOpen}
        deleteOpen={deleteOpen}
        onClose={closeAll}
      />
    </DashboardShell>
  )
}
