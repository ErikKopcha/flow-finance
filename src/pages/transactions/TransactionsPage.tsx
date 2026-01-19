import { useState } from 'react'

import { TransactionsFilters } from './components/TransactionsFilters'
import { TransactionsModals } from './components/TransactionsModals'
import { TransactionsTable } from './components/TransactionsTable'

import { DashboardShell } from '@/shared/ui/DashboardShell'

export function TransactionsPage() {
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
      activePath="/transactions"
      title="Transactions"
      description="Review, filter, and categorize your latest activity."
    >
      <TransactionsFilters onCreate={() => setCreateOpen(true)} />
      <TransactionsTable onEdit={() => setEditOpen(true)} onDelete={() => setDeleteOpen(true)} />
      <TransactionsModals
        createOpen={createOpen}
        editOpen={editOpen}
        deleteOpen={deleteOpen}
        onClose={closeAll}
      />
    </DashboardShell>
  )
}
