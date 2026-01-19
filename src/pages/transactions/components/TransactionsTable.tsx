import styles from './TransactionsTable.module.scss'

import { Button } from '@/shared/ui/Button'
import { AmountCell, StatusBadge, Table, TableCell, TableRow, TitleCell } from '@/shared/ui/Table'

type TransactionsTableProps = {
  onEdit?: () => void
  onDelete?: () => void
}

export function TransactionsTable({ onEdit, onDelete }: TransactionsTableProps) {
  return (
    <Table columns={['Transaction', 'Category', 'Status', 'Date', 'Amount', 'Actions']}>
      <TableRow>
        <TableCell>
          <TitleCell icon="A" title="Apple Store" subtitle="Hardware" />
        </TableCell>
        <TableCell>Electronics</TableCell>
        <TableCell>
          <StatusBadge>Completed</StatusBadge>
        </TableCell>
        <TableCell>Dec 12, 2025</TableCell>
        <TableCell align="right">
          <AmountCell>-$1,299.00</AmountCell>
        </TableCell>
        <TableCell align="right">
          <div className={styles.actions}>
            <Button variant="secondary" size="small" onClick={onEdit}>
              Edit
            </Button>
            <Button variant="danger" size="small" onClick={onDelete}>
              Delete
            </Button>
          </div>
        </TableCell>
      </TableRow>
    </Table>
  )
}
