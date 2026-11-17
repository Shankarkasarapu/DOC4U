import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Slider.css';

/**
 * Lightweight, dependency-free scroll-snap slider.
 *  - native touch / trackpad swipe, keyboard arrows, prev/next buttons
 *  - optional auto-play that pauses on hover, focus, hidden tab and reduced-motion
 *  - dots reflect the current slide
 * Children are the slides; `perView` controls how many show at each breakpoint.
 */
const Slider = ({
  children,
  label = 'Carousel',
  autoPlay = 0,           // ms between slides; 0 = off
  dots = true,
  arrows = true,
  perView = { base: 1, sm: 2, lg: 3, xl: 4 },
  className = '',
}) => {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slides = React.Children.toArray(children);
  const count = slides.length;

  const slideEls = () => Array.from(trackRef.current?.children || []);

  const goTo = useCallback((i) => {
    const el = slideEls()[Math.max(0, Math.min(i, count - 1))];
    if (el) trackRef.current.scrollTo({ left: el.offsetLeft - trackRef.current.offsetLeft, behavior: 'smooth' });
  }, [count]);

  // Work out the current slide from scroll position (cheap, rAF-throttled)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const left = track.scrollLeft;
        let best = 0, bestDist = Infinity;
        slideEls().forEach((el, i) => {
          const d = Math.abs(el.offsetLeft - track.offsetLeft - left);
          if (d < bestDist) { best = i; bestDist = d; }
        });
        setIndex(best);
      });
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => { track.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, [count]);

  // Auto-play: respects hover/focus, hidden tabs and prefers-reduced-motion
  useEffect(() => {
    if (!autoPlay || count < 2 || paused) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = setInterval(() => {
      if (document.hidden) return;
      const track = trackRef.current;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      atEnd ? track.scrollTo({ left: 0, behavior: 'smooth' }) : goTo(index + 1);
    }, autoPlay);
    return () => clearInterval(id);
  }, [autoPlay, count, paused, index, goTo]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(index - 1); }
  };

  const pv = { base: 1, ...perView };
  const style = {
    '--pv-base': pv.base, '--pv-sm': pv.sm ?? pv.base, '--pv-md': pv.md ?? pv.sm ?? pv.base,
    '--pv-lg': pv.lg ?? pv.md ?? pv.sm ?? pv.base, '--pv-xl': pv.xl ?? pv.lg ?? pv.md ?? pv.sm ?? pv.base,
  };

  if (!count) return null;

  return (
    <div
      className={`d4u-slider ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      style={style}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKeyDown}
    >
      {arrows && count > 1 && (
        <>
          <button type="button" className="d4u-slider__btn d4u-slider__btn--prev" onClick={() => goTo(index - 1)} disabled={index === 0} aria-label="Previous slide">
            <i className="feather-chevron-left" aria-hidden="true" />
          </button>
          <button type="button" className="d4u-slider__btn d4u-slider__btn--next" onClick={() => goTo(index + 1)} aria-label="Next slide">
            <i className="feather-chevron-right" aria-hidden="true" />
          </button>
        </>
      )}

      <div className="d4u-slider__track" ref={trackRef} tabIndex={0}>
        {slides.map((slide, i) => (
          <div className="d4u-slider__slide" key={slide.key ?? i} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${count}`}>
            {slide}
          </div>
        ))}
      </div>

      {dots && count > 1 && (
        <div className="d4u-slider__dots">
          {slides.map((_, i) => (
            <button key={i} type="button" className={i === index ? 'is-active' : ''} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`} aria-current={i === index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
