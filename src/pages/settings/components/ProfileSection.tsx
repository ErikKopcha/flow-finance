import styles from '@/pages/dashboard/DashboardLayout.module.scss'
import { FormGrid, FormLayout } from '@/shared/ui/FormLayout'
import { SelectInput } from '@/shared/ui/SelectInput'
import { TextInput } from '@/shared/ui/TextInput'

export function ProfileSection() {
  return (
    <FormLayout>
      <h3 className={styles.settingsSectionTitle}>Profile</h3>
      <div className={styles.settingsProfile}>
        <div className={styles.settingsAvatar}>MK</div>
        <button className={styles.smallButton} type="button">
          Change Avatar
        </button>
      </div>
      <FormGrid>
        <TextInput label="First Name" defaultValue="Mykola" />
        <TextInput label="Last Name" defaultValue="K." />
        <SelectInput label="Timezone" options={['UTC+2', 'UTC+1', 'UTC']} />
      </FormGrid>
    </FormLayout>
  )
}
