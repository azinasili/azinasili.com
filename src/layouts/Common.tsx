import React from 'react';
import styled from 'styled-components';

interface CommonProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 2em;
  grid-template-columns: minmax(auto, 63ch);
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  padding: 2em;
`;

const Common: React.FC<CommonProps> = ({ children }) => <Wrapper>{children}</Wrapper>;

export default React.memo(Common);
