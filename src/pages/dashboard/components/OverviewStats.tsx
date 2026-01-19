import { ArrowUpRight, PiggyBank, TrendingDown, TrendingUp, Wallet } from 'lucide-react'

import styles from './OverviewStats.module.scss'

import { StatCard } from '@/shared/ui/StatCard/StatCard'

export function OverviewStats() {
  return (
    <section className={styles.grid}>
      <StatCard
        icon={<Wallet size={18} />}
        trend={
          <>
            +12.5%
            <ArrowUpRight size={12} />
          </>
        }
        label="Total Net Worth"
        value="$124,592"
        accent
      />
      <StatCard icon={<TrendingUp size={18} />} label="Monthly Income" value="$8,250" />
      <StatCard icon={<TrendingDown size={18} />} label="Monthly Expenses" value="$4,120" />
      <StatCard icon={<PiggyBank size={18} />} label="Savings Rate" value="50.1%" accent glow />
      <div className={styles.meta}>Updated 2 minutes ago</div>
    </section>
  )
}
