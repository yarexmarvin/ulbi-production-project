import type { PropsWithChildren, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode
  element?: HTMLElement
}

export function Portal (props: PropsWithChildren<PortalProps>) {
  const { children, element = document.body } = props;

  return createPortal(children, element)
}
