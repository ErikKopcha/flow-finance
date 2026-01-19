import { Button } from '@/shared/ui/Button'
import { FormLayout } from '@/shared/ui/FormLayout'
import { ConfirmModal, Modal } from '@/shared/ui/Modal'
import { TextInput } from '@/shared/ui/TextInput'

type CreditModalsProps = {
  createOpen: boolean
  editOpen: boolean
  deleteOpen: boolean
  onClose: () => void
}

export function CreditModals({ createOpen, editOpen, deleteOpen, onClose }: CreditModalsProps) {
  return (
    <>
      <Modal
        title="New Liability"
        subtitle="Record a new debt item."
        open={createOpen}
        onClose={onClose}
        footer={
          <>
            <Button variant="secondary" size="small" onClick={onClose}>
              Cancel
            </Button>
            <Button size="small">Save Liability</Button>
          </>
        }
      >
        <FormLayout>
          <TextInput label="Name" placeholder="Student Loan" />
          <TextInput label="Balance" placeholder="$0.00" />
        </FormLayout>
      </Modal>

      <Modal
        title="Edit Liability"
        subtitle="Update liability details."
        open={editOpen}
        onClose={onClose}
        footer={
          <>
            <Button variant="secondary" size="small" onClick={onClose}>
              Cancel
            </Button>
            <Button size="small">Save Changes</Button>
          </>
        }
      >
        <FormLayout>
          <TextInput label="Name" placeholder="Student Loan" />
          <TextInput label="Balance" placeholder="$8,200" />
        </FormLayout>
      </Modal>

      <ConfirmModal
        title="Delete Liability"
        description="Deleting a liability removes its history."
        confirmLabel="Delete"
        open={deleteOpen}
        onClose={onClose}
      />
    </>
  )
}
