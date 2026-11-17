import React, { useCallback, useEffect, useState } from 'react';
import './ScrollArrows.css';

// Wraps an existing horizontally scrolling element and adds a prev/next button on each side.
// The scroller itself (and its card markup) is untouched: pass its ref and render it as children.
const ScrollArrows = ({ scrollRef, children, label = 'items' }) => {
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, [scrollRef]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return undefined;
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null;
    if (ro) { ro.observe(el); Array.from(el.children).forEach((c) => ro.observe(c)); }
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      if (ro) ro.disconnect();
    };
  }, [scrollRef, update, children]);

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector('.item');
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div className="scroll-arrows">
      <button type="button" className="scroll-arrows__btn scroll-arrows__btn--prev" onClick={() => scrollBy(-1)} disabled={!canPrev} aria-label={`Scroll ${label} left`}>
        <i className="feather-chevron-left" aria-hidden="true" />
      </button>
      {children}
      <button type="button" className="scroll-arrows__btn scroll-arrows__btn--next" onClick={() => scrollBy(1)} disabled={!canNext} aria-label={`Scroll ${label} right`}>
        <i className="feather-chevron-right" aria-hidden="true" />
      </button>
    </div>
  );
};

export default ScrollArrows;
