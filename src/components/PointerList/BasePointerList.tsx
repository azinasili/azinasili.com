import type { ComponentPropsWithRef } from 'react';

type BasePointerListProps = ComponentPropsWithRef<'ul'>;

export function BasePointerList({ children, ...props }: BasePointerListProps) {
  return <ul {...props}>{children}</ul>;
}
