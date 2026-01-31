import { useCallback, useEffect, useState, type RefCallback } from 'react';

type TrackingEvent = MouseEvent | TouchEvent;

type HandleMouseTrackingReturn = (event: TrackingEvent) => void;

type useMouseTrackingReturn = [RefCallback<HTMLElement>];

/**
 * Updates CSS variables based on mouse position.
 * --mouse-x: horizontal position in pixels
 * --mouse-y: vertical position in pixels
 * --mouse-x-pct: horizontal position as a decimal (0 to 1)
 * --mouse-y-pct: vertical position as a decimal (0 to 1)
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

    const width = rect.width;
    const height = rect.height;
    const clientX = point.clientX;
    const clientY = point.clientY;

    // Current mouse coordinates
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const xPct = Math.max(0, Math.min(1, x / width));
    const yPct = Math.max(0, Math.min(1, y / height));

    // Get the center of the viewport
    const centerX = width / 2;
    const centerY = height / 2;

    // Calculate the distance from center to mouse
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Calculate the angle in radians and convert to degrees
    // We add 90 because CSS gradients start at the top (12 o'clock)
    const radians = Math.atan2(deltaY, deltaX);
    const degrees = radians * (180 / Math.PI) + 90;

    requestAnimationFrame(() => {
      // Update angle of mouse
      root.style.setProperty('--angle', `${degrees}deg`);

      // Update pixel values
      root.style.setProperty('--mouse-x', `${x.toFixed(2)}px`);
      root.style.setProperty('--mouse-y', `${y.toFixed(2)}px`);

      // Update percentage values (useful for transforms or gradients)
      root.style.setProperty('--mouse-x-pct', xPct.toFixed(3));
      root.style.setProperty('--mouse-y-pct', yPct.toFixed(3));
    });
  };
}

/**
 * Singleton pattern to ensure only one listener is active
 */
let isListening = false;

/**
 * React hook to track mouse movement and update CSS variables.
 */
export function useMouseTracking(): useMouseTrackingReturn {
  const [element, setElement] = useState<HTMLElement | null>(null);

  // Callback ref to set the target element
  const ref = useCallback<RefCallback<HTMLElement>>(node => {
    if (node !== null) {
      setElement(node);
    }

    return () => {
      setElement(null);
    };
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
    };
  }, [element]);

  return [ref];
}
