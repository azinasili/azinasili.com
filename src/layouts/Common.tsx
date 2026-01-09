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

export function Common({ children }: CommonProps) {
  return <Wrapper>{children}</Wrapper>
}
