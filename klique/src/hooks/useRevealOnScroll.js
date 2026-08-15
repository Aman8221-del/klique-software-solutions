import { useEffect, useRef, useState } from "react";

/**
 * Single shared IntersectionObserver-driven reveal, replacing the
 * per-component observer that used to be duplicated across ~15 files.
 * Returns a ref to attach to the section and a boolean for the
 * `${isVisible ? "animate-in" : ""}` / `.reveal.in-view` pattern.
 */
export function useRevealOnScroll(threshold = 0.15) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, [threshold]);

  return [ref, isVisible];
}

/**
 * Page-level variant for components that mark up several `.reveal` /
 * `.reveal-l` / `.reveal-r` nodes directly in JSX (the pattern used by every
 * full page: About Us, Services, Contact, Career, Blog, and all 6 service
 * pages) rather than toggling a single section's visibility via state.
 * Replaces what used to be an identical ~15-line effect duplicated in each
 * of those files.
 */
export function usePageReveal(selector = '.reveal, .reveal-l, .reveal-r', options, deps = []) {
  useEffect(() => {
    window.scrollTo(0, 0);

    if (typeof IntersectionObserver === 'undefined') return undefined;

    const revealEls = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px', ...options }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => revealEls.forEach((el) => observer.unobserve(el));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector, ...deps]);
}
