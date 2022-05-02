import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';

const StyledFooter = styled.footer`
  font-size: ${em(12)};
`

const Footer: React.FC = () => (
  <StyledFooter>
    <p>&copy;{new Date().getFullYear()} Azin Asili. All Rights Reserved.</p>
  </StyledFooter>
);

export default Footer;
