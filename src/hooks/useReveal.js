import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref + boolean. Attach the ref to any element and it will
 * flip `visible` to true the first time the element scrolls into view —
 * used to drive the fade/slide-up reveal animation on each section.
 */
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
