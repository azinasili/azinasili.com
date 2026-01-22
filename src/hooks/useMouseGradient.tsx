import { useEffect } from 'react';

/**
 * Updates CSS variables based on mouse position.
 * --mouse-x: horizontal position in pixels
 * --mouse-y: vertical position in pixels
 * --mouse-x-pct: horizontal position as a decimal (0 to 1)
 * --mouse-y-pct: vertical position as a decimal (0 to 1)
 */
export function useMouseGradient() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const root = document.documentElement;

    if (!root) {
      return;
    }

    function handleMouseTracking(event: MouseEvent) {
      // Viewport dimensions
      const width = window.innerWidth;
      const height = window.innerHeight;

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

    window.addEventListener('mousemove', handleMouseTracking);

    return () => {
      window.removeEventListener('mousemove', handleMouseTracking);
    }
  }, []);
}
