import { useEffect, useRef } from 'react';

export function useAddClassToRootNode(className: string | Array<string>): void {
  const classNameRef = useRef<string | Array<string>>('');

  useEffect(() => {
    classNameRef.current = Array.isArray(className) ? className.join(' ') : className;
  }, [className]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const currentClassName = classNameRef.current;
    const classNamesToAdd = Array.isArray(currentClassName) ? currentClassName : [currentClassName];

    classNamesToAdd.forEach(name => document.documentElement.classList.add(name));

    return () => {
      classNamesToAdd.forEach(name => document.documentElement.classList.remove(name));
    };
  }, []);
}
