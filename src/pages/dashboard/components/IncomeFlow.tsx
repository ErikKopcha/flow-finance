import { Activity } from 'lucide-react'

import styles from './IncomeFlow.module.scss'

export function IncomeFlow() {
  return (
    <section className={styles.panel}>
      <div className={styles.header}>
        <Activity size={16} />
        Income Flow
      </div>
      <div className={styles.body}>
        <div className={styles.canvas}>
          <svg
            viewBox="0 0 1000 400"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient
                id="link-salary"
                gradientUnits="userSpaceOnUse"
                x1="120"
                x2="480"
                y1="125"
                y2="225"
              >
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#525252" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient
                id="link-freelance"
                gradientUnits="userSpaceOnUse"
                x1="120"
                x2="480"
                y1="300"
                y2="225"
              >
                <stop offset="0%" stopColor="#059669" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#525252" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient
                id="link-fixed"
                gradientUnits="userSpaceOnUse"
                x1="520"
                x2="880"
                y1="225"
                y2="100"
              >
                <stop offset="0%" stopColor="#525252" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#e11d48" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient
                id="link-life"
                gradientUnits="userSpaceOnUse"
                x1="520"
                x2="880"
                y1="225"
                y2="230"
              >
                <stop offset="0%" stopColor="#525252" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient
                id="link-save"
                gradientUnits="userSpaceOnUse"
                x1="520"
                x2="880"
                y1="225"
                y2="340"
              >
                <stop offset="0%" stopColor="#525252" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M120,125 C300,125 300,200 480,200 L480,250 C300,250 300,175 120,175 Z"
              fill="url(#link-salary)"
            />
            <path
              d="M120,280 C300,280 300,250 480,250 L480,270 C300,270 300,300 120,300 Z"
              fill="url(#link-freelance)"
            />
            <path
              d="M520,200 C700,200 700,80 880,80 L880,140 C700,140 700,225 520,225 Z"
              fill="url(#link-fixed)"
            />
            <path
              d="M520,225 C700,225 700,230 880,230 L880,270 C700,270 700,240 520,240 Z"
              fill="url(#link-life)"
            />
            <path
              d="M520,240 C700,240 700,320 880,320 L880,370 C700,370 700,270 520,270 Z"
              fill="url(#link-save)"
            />
            <rect x="110" y="125" width="10" height="50" rx="2" fill="#10b981" />
            <text x="100" y="155" textAnchor="end" fill="#d4d4d4" fontSize="12" fontWeight="500">
              Salary
            </text>
            <rect x="110" y="280" width="10" height="20" rx="2" fill="#059669" />
            <text x="100" y="295" textAnchor="end" fill="#d4d4d4" fontSize="12" fontWeight="500">
              Freelance
            </text>
            <rect x="480" y="200" width="40" height="70" rx="4" fill="#525252" opacity="0.8" />
            <rect x="880" y="80" width="10" height="60" rx="2" fill="#e11d48" />
            <text x="900" y="115" textAnchor="start" fill="#d4d4d4" fontSize="12" fontWeight="500">
              Fixed
            </text>
            <rect x="880" y="230" width="10" height="40" rx="2" fill="#f43f5e" />
            <text x="900" y="255" textAnchor="start" fill="#d4d4d4" fontSize="12" fontWeight="500">
              Lifestyle
            </text>
            <rect x="880" y="320" width="10" height="50" rx="2" fill="#f97316" />
            <text x="900" y="350" textAnchor="start" fill="#d4d4d4" fontSize="12" fontWeight="500">
              Savings
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
}
