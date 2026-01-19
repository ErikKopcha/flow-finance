import { Modal } from './Modal'

import { Button } from '@/shared/ui/Button'

type ConfirmModalProps = {
  title: string
  description: string
  confirmLabel?: string
  open?: boolean
  onClose?: () => void
}

export function ConfirmModal({
  title,
  description,
  confirmLabel = 'Delete',
  open = false,
  onClose,
}: ConfirmModalProps) {
  return (
    <Modal
      title={title}
      subtitle={description}
      open={open}
      onClose={onClose}
      footer={
        <>
          <Button variant="secondary" size="small" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="danger" size="small">
            {confirmLabel}
          </Button>
        </>
      }
    >
      <div />
    </Modal>
  )
}
