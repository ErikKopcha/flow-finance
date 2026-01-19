import { useState } from 'react'

import { CreditModals } from './components/CreditModals'
import pageStyles from './CreditPage.module.scss'

import styles from '@/pages/dashboard/DashboardLayout.module.scss'
import { Button } from '@/shared/ui/Button'
import { DashboardShell } from '@/shared/ui/DashboardShell'

export function CreditPage() {
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
      activePath="/credit"
      title="Credit & Debt"
      description="Monitor credit health and track outstanding liabilities."
    >
      <section className={styles.creditGrid}>
        <article className={styles.creditCard}>
          <h3 className={styles.creditTitle}>Credit Health</h3>
          <div className={styles.gauge}>
            <div className={styles.gaugeInner}>
              <div>
                <div className={styles.gaugeValue}>785</div>
                <div className={styles.gaugeLabel}>Excellent</div>
              </div>
            </div>
          </div>
        </article>

        <article className={styles.debtCard}>
          <div className={styles.debtHeader}>
            <h3 className={styles.sectionTitle}>Liabilities</h3>
            <Button onClick={() => setCreateOpen(true)}>Add Liability</Button>
          </div>
          <div className={styles.debtItem}>
            <div className={styles.debtRow}>
              <div className={styles.debtTitle}>
                <span className={styles.debtIcon}>S</span>
                Student Loan
              </div>
              <span className={styles.debtAmount}>$8,200</span>
            </div>
            <div className={pageStyles.actionsRow}>
              <Button size="small" variant="secondary" onClick={() => setEditOpen(true)}>
                Edit
              </Button>
              <Button size="small" variant="danger" onClick={() => setDeleteOpen(true)}>
                Delete
              </Button>
            </div>
            <div className={styles.debtBar}>
              <div className={`${styles.debtFill} ${pageStyles.fill60}`} />
            </div>
          </div>

          <div className={styles.debtItem}>
            <div className={styles.debtRow}>
              <div className={styles.debtTitle}>
                <span className={styles.debtIcon}>C</span>
                Credit Card
              </div>
              <span className={styles.debtAmount}>$3,420</span>
            </div>
            <div className={pageStyles.actionsRow}>
              <Button size="small" variant="secondary" onClick={() => setEditOpen(true)}>
                Edit
              </Button>
              <Button size="small" variant="danger" onClick={() => setDeleteOpen(true)}>
                Delete
              </Button>
            </div>
            <div className={styles.debtBar}>
              <div className={`${styles.debtFill} ${pageStyles.fill45}`} />
            </div>
          </div>
        </article>
      </section>
      <CreditModals
        createOpen={createOpen}
        editOpen={editOpen}
        deleteOpen={deleteOpen}
        onClose={closeAll}
      />
    </DashboardShell>
  )
}
