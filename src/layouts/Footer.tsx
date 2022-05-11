import type { FC } from 'react';
import styled from 'styled-components';
import { em } from 'polished';

const StyledFooter = styled.footer`
  font-size: ${em(12)};
  margin-bottom: 0;
`;

const StyledParagraph = styled.p`
  margin-bottom: 0;
  margin-top: 0;
`;

const Footer: FC = () => (
  <StyledFooter>
    <StyledParagraph>&copy;{new Date().getFullYear()} Azin Asili. All Rights Reserved.</StyledParagraph>
  </StyledFooter>
);

export default Footer;
