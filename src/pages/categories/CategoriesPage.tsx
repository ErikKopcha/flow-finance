import { useState } from 'react'

import pageStyles from './CategoriesPage.module.scss'
import { CategoriesModals } from './components/CategoriesModals'

import styles from '@/pages/dashboard/DashboardLayout.module.scss'
import { AddCard } from '@/shared/ui/AddCard'
import { Button } from '@/shared/ui/Button'
import { DashboardShell } from '@/shared/ui/DashboardShell'

export function CategoriesPage() {
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
      activePath="/categories"
      title="Categories"
      description="Group spending patterns into meaningful buckets."
    >
      <section className={styles.categoryGrid}>
        <article className={styles.categoryCard}>
          <div className={styles.categoryIcon}>S</div>
          <h3 className={styles.sectionTitle}>Subscriptions</h3>
          <p className={styles.goalMeta}>12 Transactions</p>
          <div className={pageStyles.actionRow}>
            <Button size="small" variant="secondary" onClick={() => setEditOpen(true)}>
              Edit
            </Button>
            <Button size="small" variant="danger" onClick={() => setDeleteOpen(true)}>
              Delete
            </Button>
          </div>
        </article>

        <article className={styles.categoryCard}>
          <div className={styles.categoryIcon}>F</div>
          <h3 className={styles.sectionTitle}>Food & Dining</h3>
          <p className={styles.goalMeta}>28 Transactions</p>
          <div className={pageStyles.actionRow}>
            <Button size="small" variant="secondary" onClick={() => setEditOpen(true)}>
              Edit
            </Button>
            <Button size="small" variant="danger" onClick={() => setDeleteOpen(true)}>
              Delete
            </Button>
          </div>
        </article>

        <AddCard
          title="Add Category"
          subtitle="Create a new bucket"
          onClick={() => setCreateOpen(true)}
        />
      </section>
      <CategoriesModals
        createOpen={createOpen}
        editOpen={editOpen}
        deleteOpen={deleteOpen}
        onClose={closeAll}
      />
    </DashboardShell>
  )
}
