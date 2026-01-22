import { type RefCallback, useCallback, useEffect, useState } from 'react';

type handleMouseTrackingReturn = (event: MouseEvent) => void;

type UseMouseGradientReturn = [RefCallback<HTMLElement>];

/**
 * Updates CSS variables based on mouse position.
 * --mouse-x: horizontal position in pixels
 * --mouse-y: vertical position in pixels
 * --mouse-x-pct: horizontal position as a decimal (0 to 1)
 * --mouse-y-pct: vertical position as a decimal (0 to 1)
 */
function handleMouseTracking(root: HTMLElement): handleMouseTrackingReturn {
  // Viewport dimensions
  const width = root.clientWidth;
  const height = root.clientHeight;

  return function eventHandler(event) {
    // Current mouse coordinates
    const x = event.clientX;
    const y = event.clientY;
    const xPct = event.clientX / width;
    const yPct = event.clientY / height;
    // Map X position to a Hue (0-360)
    // Map Y position to a different Hue (0-360)
    // const hue1 = Math.floor(xPct * 360);
    const hue1 = Math.floor(xPct * 60 + 180);
    // const hue2 = Math.floor(yPct * 360);
    const hue2 = Math.floor(yPct * 60 + 180);
    // const hue2 = (hue1 + 180) % 360;

    // Update pixel values
    root.style.setProperty('--mouse-x', `${x}px`);
    root.style.setProperty('--mouse-y', `${y}px`);

    // Update percentage values (useful for transforms or gradients)
    root.style.setProperty('--mouse-x-pct', xPct.toFixed(3));
    root.style.setProperty('--mouse-y-pct', yPct.toFixed(3));

    root.style.setProperty('--hue-1', hue1.toString());
    root.style.setProperty('--hue-2', hue2.toString());
  }
}

let isListening = false;

export function useMouseGradient(): UseMouseGradientReturn {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const ref = useCallback<RefCallback<HTMLElement>>((node) => {
    if (node !== null) {
      setElement(node);
    }

    return () => {
      setElement(null)
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const root = element || document.documentElement;

    if (!isListening) {
      window.addEventListener('mousemove', handleMouseTracking(root));
      isListening = true;
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseTracking(root));
      isListening = false;
    }
  }, [element]);

  return [ref];
}
