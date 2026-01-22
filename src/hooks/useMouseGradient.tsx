import { useCallback, useEffect, useState, type RefCallback } from 'react';

type TrackingEvent = MouseEvent | TouchEvent;

type HandleMouseTrackingReturn = (event: TrackingEvent) => void;

type UseMouseGradientReturn = [RefCallback<HTMLElement>];

/**
 * Updates CSS variables based on mouse position.
 * --mouse-x: horizontal position in pixels
 * --mouse-y: vertical position in pixels
 * --mouse-x-pct: horizontal position as a decimal (0 to 1)
 * --mouse-y-pct: vertical position as a decimal (0 to 1)
 * --hue1: global theme value
 * --hue2: global theme value
 */
function handleMouseTracking(root: HTMLElement): HandleMouseTrackingReturn {
  const rect = root.getBoundingClientRect();

  return function eventHandler(event: TrackingEvent) {
    let point: MouseEvent | Touch;

    if ('touches' in event) {
      point = event.touches[0];
      // Note: touchmove can sometimes have empty touches if the finger is lifted
      if (!point) {
        return;
      }
    } else {
      point = event;
    }

    // Current mouse coordinates
    const x = point.clientX - rect.left;
    const y = point.clientX - rect.top;
    const xPct = Math.max(0, Math.min(1, x / rect.width));
    const yPct = Math.max(0, Math.min(1, y / rect.height));
    // Map X position to a Hue (0-360)
    // Map Y position to a different Hue (0-360)
    // const hue1 = Math.floor(xPct * 360);
    const hue1 = Math.floor(xPct * 60 + 180);
    // const hue2 = Math.floor(yPct * 360);
    const hue2 = Math.floor(yPct * 60 + 180);
    // const hue2 = (hue1 + 180) % 360;

    requestAnimationFrame(() => {
      // Update pixel values
      root.style.setProperty('--mouse-x', `${x.toFixed(2)}px`);
      root.style.setProperty('--mouse-y', `${y.toFixed(2)}px`);

      // Update percentage values (useful for transforms or gradients)
      root.style.setProperty('--mouse-x-pct', xPct.toFixed(3));
      root.style.setProperty('--mouse-y-pct', yPct.toFixed(3));

      // Update global theme values
      root.style.setProperty('--hue-1', hue1.toString());
      root.style.setProperty('--hue-2', hue2.toString());
    });
  }
}

/**
 * Singleton pattern to ensure only one listener is active
 */
let isListening = false;

/**
 * React hook to track mouse movement and update CSS variables.
 */
export function useMouseGradient(): UseMouseGradientReturn {
  const [element, setElement] = useState<HTMLElement | null>(null);

  // Callback ref to set the target element
  const ref = useCallback<RefCallback<HTMLElement>>((node) => {
    if (node !== null) {
      setElement(node);
    }

    return () => {
      setElement(null)
    }
  }, []);

  useEffect(() => {
    // Check document context, avoid running on server
    if (typeof window === 'undefined') {
      return;
    }

    // Use the provided element or fallback to document root
    const root = element || document.documentElement;

    if (!isListening) {
      window.addEventListener('mousemove', handleMouseTracking(root));
      window.addEventListener('touchmove', handleMouseTracking(root), { passive: false });
      isListening = true;
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseTracking(root));
      window.removeEventListener('touchmove', handleMouseTracking(root));
      isListening = false;
    }
  }, [element]);

  return [ref];
}
