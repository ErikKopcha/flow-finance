import { Link } from '@tanstack/react-router'
import { ShieldCheck } from 'lucide-react'

import styles from './LoginPage.module.scss'

export function LoginPage() {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.brand}>
          <div className={styles.brandIcon}>
            <ShieldCheck size={20} />
          </div>
          <span className={styles.brandTitle}>FlowFinance</span>
        </div>

        <h1 className={styles.title}>Welcome back</h1>
        <p className={styles.subtitle}>Sign in to access your financial cockpit.</p>

        <form className={styles.form}>
          <label className={styles.inputGroup}>
            Email
            <input className={styles.input} type="email" placeholder="you@company.com" />
          </label>

          <label className={styles.inputGroup}>
            Password
            <input className={styles.input} type="password" placeholder="********" />
          </label>

          <div className={styles.rememberRow}>
            <label className={styles.checkbox}>
              <input type="checkbox" defaultChecked />
              Remember me
            </label>
            <a className={styles.link} href="/">
              Forgot password?
            </a>
          </div>

          <Link className={styles.submit} to="/dashboard">
            Sign In
          </Link>
        </form>

        <div className={styles.footer}>New here? Contact your admin for access.</div>
      </div>
    </div>
  )
}
