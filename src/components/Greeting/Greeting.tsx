import React from 'react';
import styled from 'styled-components';

const GradientText = styled.span`
  background: linear-gradient(orange, tomato);
  background-clip: text;
  // This is not being auto-prefixed for some reason
  -webkit-background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
`;

const Greeting: React.FC = () => <h1>👋 <GradientText>Hi</GradientText></h1>;

export default Greeting;
