import React from 'react';
import styled from 'styled-components';

const StyledChip = styled.div`
  background-color: red;
  position: relative;
`;

const Chip: React.FC = () => {
  return <StyledChip>a chip</StyledChip>;
};

export default Chip;
