import { useAddClassToRootNode } from '~/hooks/useAddClassToRootNode';
import { azeretMono } from './fonts';

export function Typeface() {
  useAddClassToRootNode(azeretMono.variable);

  return (
    <style jsx global>
      {`
        :root {
          --font-family: ${azeretMono.style.fontFamily};
        }
      `}
    </style>
  );
}
