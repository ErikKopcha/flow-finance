import { Link } from '@tanstack/react-router'
import {
  ArrowLeftRight,
  ChevronDown,
  CreditCard,
  Landmark,
  Layers,
  LayoutDashboard,
  LogOut,
  PieChart,
  Plus,
  Settings,
  Wallet,
} from 'lucide-react'

import styles from './DashboardShell.module.scss'

import { Button } from '@/shared/ui/Button'

type DashboardShellProps = {
  activePath:
    | '/dashboard'
    | '/budget'
    | '/transactions'
    | '/categories'
    | '/accounts'
    | '/credit'
    | '/settings'
  title: string
  description: string
  children: React.ReactNode
}

export function DashboardShell({ activePath, title, description, children }: DashboardShellProps) {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandIcon}>
            <Wallet size={18} />
          </div>
          <span className={styles.brandText}>FlowFinance</span>
        </div>

        <nav className={styles.nav}>
          <Link
            to="/dashboard"
            className={`${styles.navItem} ${activePath === '/dashboard' ? styles.navItemActive : ''}`}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
          <Link
            to="/budget"
            className={`${styles.navItem} ${activePath === '/budget' ? styles.navItemActive : ''}`}
          >
            <PieChart size={18} />
            Budget &amp; Goals
          </Link>
          <Link
            to="/transactions"
            className={`${styles.navItem} ${activePath === '/transactions' ? styles.navItemActive : ''}`}
          >
            <ArrowLeftRight size={18} />
            Transactions
          </Link>
          <Link
            to="/categories"
            className={`${styles.navItem} ${activePath === '/categories' ? styles.navItemActive : ''}`}
          >
            <Layers size={18} />
            Categories
          </Link>
          <Link
            to="/accounts"
            className={`${styles.navItem} ${activePath === '/accounts' ? styles.navItemActive : ''}`}
          >
            <Landmark size={18} />
            Accounts
          </Link>
          <Link
            to="/credit"
            className={`${styles.navItem} ${activePath === '/credit' ? styles.navItemActive : ''}`}
          >
            <CreditCard size={18} />
            Credit &amp; Debt
          </Link>
        </nav>

        <div className={styles.sidebarFooter}>
          <Link
            to="/settings"
            className={`${styles.navItem} ${activePath === '/settings' ? styles.navItemActive : ''}`}
          >
            <Settings size={18} />
            Settings
          </Link>
          <button className={`${styles.navItem} ${styles.navItemDanger}`} type="button">
            <LogOut size={18} />
            Log Out
          </button>

          <div className={styles.profile}>
            <div className={styles.profileAvatar}>MK</div>
            <div className={styles.profileText}>
              <span className={styles.profileName}>Mykola K.</span>
              <span className={styles.profilePlan}>Pro Plan</span>
            </div>
          </div>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.headerTitle}>{title}</h1>
            <p className={styles.headerDescription}>{description}</p>
          </div>
          <div className={styles.headerActions}>
            <div className={styles.rangeToggle}>
              <button className={styles.rangeButton} type="button">
                Y
              </button>
              <button className={styles.rangeButton} type="button">
                Q
              </button>
              <button className={`${styles.rangeButton} ${styles.rangeButtonActive}`} type="button">
                M
              </button>
            </div>
            <button className={styles.dateButton} type="button">
              Dec 2025
              <ChevronDown size={16} />
            </button>
            <Button>
              <Plus size={16} />
              Add New
            </Button>
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.page}>{children}</div>
        </div>
      </main>
    </div>
  )
}
