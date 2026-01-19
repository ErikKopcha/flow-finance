import { Button } from '@/shared/ui/Button'
import { FormLayout } from '@/shared/ui/FormLayout'
import { ConfirmModal, Modal } from '@/shared/ui/Modal'
import { SelectInput } from '@/shared/ui/SelectInput'
import { TextInput } from '@/shared/ui/TextInput'

type TransactionsModalsProps = {
  createOpen: boolean
  editOpen: boolean
  deleteOpen: boolean
  onClose: () => void
}

export function TransactionsModals({
  createOpen,
  editOpen,
  deleteOpen,
  onClose,
}: TransactionsModalsProps) {
  return (
    <>
      <Modal
        title="New Transaction"
        subtitle="Record a new inflow or outflow."
        open={createOpen}
        onClose={onClose}
        footer={
          <>
            <Button variant="secondary" size="small" onClick={onClose}>
              Cancel
            </Button>
            <Button size="small">Save Transaction</Button>
          </>
        }
      >
        <FormLayout>
          <TextInput label="Payee" placeholder="e.g. Apple" />
          <TextInput label="Amount" placeholder="$0.00" />
          <SelectInput label="Category" options={['Food', 'Transport', 'Housing']} />
          <SelectInput label="Type" options={['Expense', 'Income']} />
        </FormLayout>
      </Modal>

      <Modal
        title="Edit Transaction"
        subtitle="Update details for this transaction."
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
          <TextInput label="Payee" placeholder="Apple Store" />
          <TextInput label="Amount" placeholder="$1,299.00" />
          <SelectInput label="Category" options={['Electronics', 'Food', 'Housing']} />
        </FormLayout>
      </Modal>

      <ConfirmModal
        title="Delete Transaction"
        description="This action removes the transaction permanently."
        confirmLabel="Delete"
        open={deleteOpen}
        onClose={onClose}
      />
    </>
  )
}
