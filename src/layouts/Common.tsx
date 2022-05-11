import type { FC } from 'react';
import { memo } from 'react';
import styled from 'styled-components';

interface CommonProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 2em;
  grid-template-columns: minmax(auto, 63ch);
  grid-template-rows: auto 1fr auto;
  padding: 2em;
`;

const CommonInner: FC<CommonProps> = ({ children }) => <Wrapper>{children}</Wrapper>;

export const Common = memo(CommonInner);
