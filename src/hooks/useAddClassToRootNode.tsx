import { useEffect } from 'react';

export function useAddClassToRootNode(className: string | Array<string>): void {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const isClassNameArray = Array.isArray(className);
    const classNamesToAdd = isClassNameArray ? className : [className];

    classNamesToAdd.forEach(name => document.documentElement.classList.add(name));

    return () => {
      classNamesToAdd.forEach(name => document.documentElement.classList.remove(name));
    };
  }, []);
}
