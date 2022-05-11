import type { FC, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { em } from 'polished';

interface WithChildrenProp {
  children: ReactNode;
}

type PointerListItemProps = WithChildrenProp & HTMLAttributes<HTMLLIElement>;

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

const PointerListItem: FC<PointerListItemProps> = ({ children, ...props }) => {
  return <Item {...props}>{children}</Item>
};

type PointerListProps = FC<WithChildrenProp & HTMLAttributes<HTMLUListElement>> & {
  Item: typeof PointerListItem;
};

export const PointerList: PointerListProps = ({ children, ...props }) => {
  return <ul {...props}>{children}</ul>
};

PointerList.Item = PointerListItem;
