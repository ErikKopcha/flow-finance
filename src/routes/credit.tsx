import { createFileRoute } from '@tanstack/react-router'

import { CreditPage } from '@/pages/credit/CreditPage'

export const Route = createFileRoute('/credit')({
  component: CreditPage,
})
