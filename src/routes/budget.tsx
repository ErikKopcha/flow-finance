import { createFileRoute } from '@tanstack/react-router'

import { BudgetPage } from '@/pages/budget/BudgetPage'

export const Route = createFileRoute('/budget')({
  component: BudgetPage,
})
