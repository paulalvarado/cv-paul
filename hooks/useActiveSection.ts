import { useEffect, useState } from 'react';

/**
 * Devuelve el id de la sección que está en el área de lectura.
 * Observa contra el viewport con una banda en la parte alta (rootMargin),
 * que respeta el recorte del contenedor con scroll propio (<main>).
 */
export const useActiveSection = (ids: string[]): string => {
  const [active, setActive] = useState<string>(ids[0] ?? '');
  const key = ids.join(',');

  useEffect(() => {
    const elements = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActive((visible[0].target as HTMLElement).id);
      },
      { rootMargin: '-15% 0px -65% 0px', threshold: [0, 0.2, 0.5, 1] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [key]);

  return active;
};
