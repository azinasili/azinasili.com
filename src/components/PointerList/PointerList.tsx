import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { em } from 'polished';

type WithChildrenProp = PropsWithChildren<unknown>;

type PointerListItemProps = WithChildrenProp & ComponentPropsWithoutRef<'li'>;

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

function PointerListItem({ children, ...props }: PointerListItemProps) {
  return <Item {...props}>{children}</Item>
}

type PointerListProps = FC<WithChildrenProp & ComponentPropsWithoutRef<'ul'>> & {
  Item: typeof PointerListItem;
};

export const PointerList: PointerListProps = ({ children, ...props }) => {
  return <ul {...props}>{children}</ul>
};

PointerList.Item = PointerListItem;
