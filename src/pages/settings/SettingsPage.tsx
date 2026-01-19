import { ProfileSection } from './components/ProfileSection'

import styles from '@/pages/dashboard/DashboardLayout.module.scss'
import { DashboardShell } from '@/shared/ui/DashboardShell'

export function SettingsPage() {
  return (
    <DashboardShell
      activePath="/settings"
      title="Settings"
      description="Manage your profile, security, and preferences."
    >
      <section className={styles.settingsGrid}>
        <div className={styles.settingsMenu}>
          <button
            className={`${styles.settingsButton} ${styles.settingsButtonActive}`}
            type="button"
          >
            General
          </button>
          <button className={styles.settingsButton} type="button">
            Notifications
          </button>
          <button className={styles.settingsButton} type="button">
            Security
          </button>
        </div>

        <div className={styles.settingsPanel}>
          <ProfileSection />
        </div>
      </section>
    </DashboardShell>
  )
}
