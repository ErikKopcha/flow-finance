import styles from './TransactionsFilters.module.scss'

import { Button } from '@/shared/ui/Button'
import { SearchBar } from '@/shared/ui/SearchBar'
import { SelectInput } from '@/shared/ui/SelectInput'

type TransactionsFiltersProps = {
  onCreate?: () => void
}

export function TransactionsFilters({ onCreate }: TransactionsFiltersProps) {
  return (
    <div className={styles.filters}>
      <SearchBar
        placeholder="Search transactions..."
        action={<Button onClick={onCreate}>Add Transaction</Button>}
      />
      <SelectInput label="Category" options={['All', 'Food', 'Housing', 'Transport']} />
    </div>
  )
}
