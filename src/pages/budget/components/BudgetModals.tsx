import { Button } from '@/shared/ui/Button'
import { FormLayout } from '@/shared/ui/FormLayout'
import { ConfirmModal, Modal } from '@/shared/ui/Modal'
import { SelectInput } from '@/shared/ui/SelectInput'
import { TextInput } from '@/shared/ui/TextInput'

type BudgetModalsProps = {
  budgetCreateOpen: boolean
  budgetEditOpen: boolean
  goalCreateOpen: boolean
  goalEditOpen: boolean
  budgetDeleteOpen: boolean
  goalDeleteOpen: boolean
  onClose: () => void
}

export function BudgetModals({
  budgetCreateOpen,
  budgetEditOpen,
  goalCreateOpen,
  goalEditOpen,
  budgetDeleteOpen,
  goalDeleteOpen,
  onClose,
}: BudgetModalsProps) {
  return (
    <>
      <Modal
        title="New Budget"
        subtitle="Create a monthly budget allocation."
        open={budgetCreateOpen}
        onClose={onClose}
        footer={
          <>
            <Button variant="secondary" size="small" onClick={onClose}>
              Cancel
            </Button>
            <Button size="small">Save Budget</Button>
          </>
        }
      >
        <FormLayout>
          <SelectInput label="Category" options={['Housing', 'Food', 'Transport']} />
          <TextInput label="Limit" placeholder="$0.00" />
        </FormLayout>
      </Modal>

      <Modal
        title="Edit Budget"
        subtitle="Update the budget limits."
        open={budgetEditOpen}
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
          <SelectInput label="Category" options={['Housing', 'Food', 'Transport']} />
          <TextInput label="Limit" placeholder="$2,000" />
        </FormLayout>
      </Modal>

      <Modal
        title="New Goal"
        subtitle="Define a savings goal."
        open={goalCreateOpen}
        onClose={onClose}
        footer={
          <>
            <Button variant="secondary" size="small" onClick={onClose}>
              Cancel
            </Button>
            <Button size="small">Create Goal</Button>
          </>
        }
      >
        <FormLayout>
          <TextInput label="Goal Name" placeholder="Emergency Fund" />
          <TextInput label="Target" placeholder="$20,000" />
        </FormLayout>
      </Modal>

      <Modal
        title="Edit Goal"
        subtitle="Adjust savings goal details."
        open={goalEditOpen}
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
          <TextInput label="Goal Name" placeholder="Emergency Fund" />
          <TextInput label="Target" placeholder="$20,000" />
        </FormLayout>
      </Modal>

      <ConfirmModal
        title="Delete Budget"
        description="Deleting a budget removes its history and limits."
        confirmLabel="Delete"
        open={budgetDeleteOpen}
        onClose={onClose}
      />

      <ConfirmModal
        title="Delete Goal"
        description="Deleting a goal removes its progress history."
        confirmLabel="Delete"
        open={goalDeleteOpen}
        onClose={onClose}
      />
    </>
  )
}
