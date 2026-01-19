import { BarChart2 } from 'lucide-react'

import styles from './NetWorthHistory.module.scss'

import { Panel } from '@/shared/ui/Panel'

export function NetWorthHistory() {
  return (
    <Panel
      title="Net Worth History"
      icon={<BarChart2 size={16} />}
      legend={
        <div className={styles.legend}>
          <span className={styles.legendDot} /> Assets
          <span className={styles.legendDotMuted} /> Liabilities
        </div>
      }
    >
      <svg viewBox="0 0 800 250" width="100%" height="100%">
        <defs>
          <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="0" y1="50" x2="800" y2="50" stroke="#262626" strokeDasharray="4" />
        <line x1="0" y1="125" x2="800" y2="125" stroke="#262626" strokeDasharray="4" />
        <line x1="0" y1="200" x2="800" y2="200" stroke="#262626" strokeDasharray="4" />
        <path
          d="M0,200 L100,180 L200,150 L300,160 L400,120 L500,100 L600,110 L700,60 L800,40 L800,250 L0,250 Z"
          fill="url(#chartGradient)"
        />
        <path
          d="M0,200 L100,180 L200,150 L300,160 L400,120 L500,100 L600,110 L700,60 L800,40"
          fill="none"
          stroke="#f97316"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="400" cy="120" r="4" fill="#0c0c0c" stroke="#f97316" strokeWidth="2" />
        <circle cx="700" cy="60" r="4" fill="#0c0c0c" stroke="#f97316" strokeWidth="2" />
      </svg>
      <div className={styles.labels}>
        <span>Jun</span>
        <span>Jul</span>
        <span>Aug</span>
        <span>Sep</span>
        <span>Oct</span>
        <span>Nov</span>
        <span>Dec</span>
      </div>
    </Panel>
  )
}
