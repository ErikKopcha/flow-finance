import { createFileRoute } from '@tanstack/react-router'

import { DashboardOverviewPage } from '@/pages/dashboard/DashboardOverviewPage'

export const Route = createFileRoute('/dashboard')({
  component: DashboardOverviewPage,
})
