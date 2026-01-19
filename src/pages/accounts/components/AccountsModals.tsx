import { Button } from '@/shared/ui/Button'
import { FormLayout } from '@/shared/ui/FormLayout'
import { ConfirmModal, Modal } from '@/shared/ui/Modal'
import { SelectInput } from '@/shared/ui/SelectInput'
import { TextInput } from '@/shared/ui/TextInput'

type AccountsModalsProps = {
  createOpen: boolean
  editOpen: boolean
  deleteOpen: boolean
  onClose: () => void
}

export function AccountsModals({ createOpen, editOpen, deleteOpen, onClose }: AccountsModalsProps) {
  return (
    <>
      <Modal
        title="Connect Account"
        subtitle="Link a bank provider."
        open={createOpen}
        onClose={onClose}
        footer={
          <>
            <Button variant="secondary" size="small" onClick={onClose}>
              Cancel
            </Button>
            <Button size="small">Connect</Button>
          </>
        }
      >
        <FormLayout>
          <SelectInput label="Provider" options={['Chase', 'BOA', 'Stripe']} />
          <TextInput label="Account Nickname" placeholder="Main Checking" />
        </FormLayout>
      </Modal>

      <Modal
        title="Edit Account"
        subtitle="Update account display name."
        open={editOpen}
        onClose={onClose}
        footer={
          <>
            <Button variant="secondary" size="small" onClick={onClose}>
              Cancel
            </Button>
            <Button size="small">Save</Button>
          </>
        }
      >
        <FormLayout>
          <TextInput label="Account Nickname" placeholder="Main Checking" />
        </FormLayout>
      </Modal>

      <ConfirmModal
        title="Delete Account"
        description="This will disconnect the account and its history."
        confirmLabel="Delete"
        open={deleteOpen}
        onClose={onClose}
      />
    </>
  )
}
