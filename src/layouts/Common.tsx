import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 63ch);
  grid-template-rows: auto 1fr auto;
  padding: 2em;
`;

export function Common({ children }: PropsWithChildren) {
  return <Wrapper>{children}</Wrapper>
}
