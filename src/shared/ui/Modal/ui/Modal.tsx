import { useState, type PropsWithChildren, type ReactNode, useRef, useEffect, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames'
import cls from './Modal.module.scss';

const ANIMATION_DELAY = 300

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
}

export function Modal (props: PropsWithChildren<ModalProps>) {
  const { className, children, onClose, isOpen } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const handleOnClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timeoutRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleOnClose()
    }
  }, [handleOnClose])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timeoutRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (<div className={classNames({
    cls: cls.Modal,
    mods: {
      [cls.opened]: isOpen, [cls.isClosing]: isClosing
    },
    additional: []
  })}>
    <div className={cls.overlay} onClick={handleOnClose}>
      <div className={cls.content} onClick={onContentClick}>
        {children}
      </div>
    </div>
  </div>);
}
