import type { ISODateString, UUID } from '@/shared/types/identifiers'
import type { Money } from '@/shared/types/money'

export type TransactionDirection = 'income' | 'expense'

export type Transaction = {
  id: UUID
  accountId: UUID
  categoryId: UUID
  direction: TransactionDirection
  amount: Money
  bookedAt: ISODateString
  description?: string
}
