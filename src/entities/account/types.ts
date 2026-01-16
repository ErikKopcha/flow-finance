import type { ISODateString, UUID } from '@/shared/types/identifiers'

export type AccountType = 'cash' | 'card' | 'bank'

export type Account = {
  id: UUID
  name: string
  type: AccountType
  createdAt: ISODateString
}
