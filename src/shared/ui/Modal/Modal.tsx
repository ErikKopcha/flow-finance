import { useEffect, useRef } from 'react'

import styles from './Modal.module.scss'

type ModalProps = {
  title: string
  subtitle?: string
  children: React.ReactNode
  footer?: React.ReactNode
  open?: boolean
  onClose?: () => void
}

export function Modal({ title, subtitle, children, footer, open = false, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open || !modalRef.current) {
      return
    }

    const previouslyFocused = document.activeElement as HTMLElement | null
    const focusable = modalRef.current.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )
    focusable?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [open, onClose])

  return (
    <div
      className={`${styles.overlay} ${open ? '' : styles.hidden}`}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className={styles.modal} ref={modalRef} onClick={(event) => event.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          {subtitle ? <div className={styles.subtitle}>{subtitle}</div> : null}
        </div>
        <div className={styles.body}>{children}</div>
        {footer ? <div className={styles.footer}>{footer}</div> : null}
      </div>
    </div>
  )
}
