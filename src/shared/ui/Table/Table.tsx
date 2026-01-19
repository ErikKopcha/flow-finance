import styles from './Table.module.scss'

type TableProps = {
  columns: string[]
  children: React.ReactNode
}

export function Table({ columns, children }: TableProps) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            {columns.map((column) => (
              <th key={column} className={styles.headCell}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

type TableRowProps = {
  children: React.ReactNode
}

export function TableRow({ children }: TableRowProps) {
  return <tr className={styles.row}>{children}</tr>
}

type TableCellProps = {
  children: React.ReactNode
  align?: 'left' | 'right'
}

export function TableCell({ children, align = 'left' }: TableCellProps) {
  return (
    <td className={`${styles.cell} ${align === 'right' ? styles.cellRight : ''}`}>{children}</td>
  )
}

type TitleCellProps = {
  icon: React.ReactNode
  title: string
  subtitle?: string
}

export function TitleCell({ icon, title, subtitle }: TitleCellProps) {
  return (
    <div className={styles.titleCell}>
      <div className={styles.icon}>{icon}</div>
      <div>
        <div>{title}</div>
        {subtitle ? <div className={styles.subtitle}>{subtitle}</div> : null}
      </div>
    </div>
  )
}

export function StatusBadge({ children }: { children: React.ReactNode }) {
  return <span className={styles.status}>{children}</span>
}

export function AmountCell({ children }: { children: React.ReactNode }) {
  return <span className={styles.amount}>{children}</span>
}
