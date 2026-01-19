import { Button } from '@/shared/ui/Button'
import { FormLayout } from '@/shared/ui/FormLayout'
import { ConfirmModal, Modal } from '@/shared/ui/Modal'
import { SelectInput } from '@/shared/ui/SelectInput'
import { TextInput } from '@/shared/ui/TextInput'

type CategoriesModalsProps = {
  createOpen: boolean
  editOpen: boolean
  deleteOpen: boolean
  onClose: () => void
}

export function CategoriesModals({
  createOpen,
  editOpen,
  deleteOpen,
  onClose,
}: CategoriesModalsProps) {
  return (
    <>
      <Modal
        title="New Category"
        subtitle="Create a new spending category."
        open={createOpen}
        onClose={onClose}
        footer={
          <>
            <Button variant="secondary" size="small" onClick={onClose}>
              Cancel
            </Button>
            <Button size="small">Save Category</Button>
          </>
        }
      >
        <FormLayout>
          <TextInput label="Name" placeholder="Subscriptions" />
          <SelectInput label="Color" options={['Rose', 'Orange', 'Blue', 'Purple']} />
        </FormLayout>
      </Modal>

      <Modal
        title="Edit Category"
        subtitle="Adjust the category label or color."
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
          <TextInput label="Name" placeholder="Subscriptions" />
          <SelectInput label="Color" options={['Rose', 'Orange', 'Blue', 'Purple']} />
        </FormLayout>
      </Modal>

      <ConfirmModal
        title="Delete Category"
        description="Removing a category will not delete existing transactions."
        confirmLabel="Delete"
        open={deleteOpen}
        onClose={onClose}
      />
    </>
  )
}
