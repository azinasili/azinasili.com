import styled from 'styled-components';

const GradientText = styled.span`
  background: linear-gradient(orange, tomato);
  background: linear-gradient(135deg, hsl(var(--hue-1), 70%, 60%), hsl(var(--hue-2), 70%, 60%));
  background-clip: text;
  // This is not being auto-prefixed for some reason
  -webkit-background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
`;

export function Greeting() {
  return <h1>👋 <GradientText>Hi</GradientText></h1>;
}
