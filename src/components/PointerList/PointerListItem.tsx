import type { ComponentPropsWithRef } from 'react';
import styled from 'styled-components';
import { em } from 'polished';

type PointerListItemProps = ComponentPropsWithRef<'li'>;

const Item = styled.li`
  &:not(:first-child) {
    margin-top: ${em(8)};
  }
  &:not(:last-child) {
    margin-bottom: ${em(8)};
  }
  &::marker {
    content: '👉 ';
  }
`;

export function PointerListItem({ children, ...props }: PointerListItemProps) {
  return <Item {...props}>{children}</Item>
}
