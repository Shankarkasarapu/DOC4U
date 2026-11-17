import React, { useEffect, useRef, useState } from 'react';
import { subscribeLoading } from '../data/loadingBus';
import '../styles/loading.css';

export const Spinner = ({ size = '', className = '' }) => (
  <span className={`d4u-spinner ${size ? `d4u-spinner--${size}` : ''} ${className}`} role="status" aria-label="Loading" />
);

// Page / section loader (route changes, big data areas)
export const PageLoader = ({ label = 'Loading...', inline = false }) => (
  <div className={`d4u-pageloader ${inline ? 'd4u-pageloader--inline' : ''}`} role="status" aria-live="polite">
    <Spinner size="lg" />
    <span>{label}</span>
  </div>
);

// Drop-in for button content: <Button loading={x}>  ->  spinner + text while busy
export const BtnLabel = ({ loading, children, loadingText }) =>
  loading ? (<><Spinner size="sm" />{loadingText || children}</>) : children;

/* ---------- skeleton building blocks ---------- */
export const Sk = ({ className = '', style }) => <span className={`sk ${className}`} style={style} aria-hidden="true" />;

// Matches the doctor card used on /doctors-list so the layout does not jump
export const DoctorCardSkeleton = () => (
  <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3" aria-hidden="true">
    <div className="sk-card">
      <Sk className="sk--img" />
      <div style={{ paddingTop: 15 }}>
        <Sk className="sk--line w-75p" />
        <Sk className="sk--line w-50p" />
        <Sk className="sk--line w-35p" />
        <div className="row row-sm" style={{ marginTop: 18 }}>
          <div className="col-6"><Sk style={{ height: 36 }} /></div>
          <div className="col-6"><Sk style={{ height: 36 }} /></div>
        </div>
      </div>
    </div>
  </div>
);

export const DoctorGridSkeleton = ({ count = 8 }) => (
  <div className="row" role="status" aria-label="Loading doctors">
    {Array.from({ length: count }, (_, i) => <DoctorCardSkeleton key={i} />)}
  </div>
);

// Horizontal scroller variant for the home page
export const DoctorScrollerSkeleton = ({ count = 4 }) => (
  <div className="d-flex px-4" style={{ gap: 16, overflow: 'hidden' }} role="status" aria-label="Loading doctors">
    {Array.from({ length: count }, (_, i) => (
      <div key={i} className="col-11 col-sm-7 col-md-5 col-lg-4 col-xl-3 flex-shrink-0" aria-hidden="true">
        <div className="sk-card" style={{ marginBottom: 0 }}>
          <Sk className="sk--img" />
          <div style={{ paddingTop: 15 }}>
            <Sk className="sk--line w-75p" />
            <Sk className="sk--line w-50p" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Generic list rows (appointments, dependants, invoices...)
export const ListSkeleton = ({ rows = 4 }) => (
  <div role="status" aria-label="Loading">
    {Array.from({ length: rows }, (_, i) => (
      <div className="sk-row" key={i} aria-hidden="true">
        <Sk className="sk--circle" style={{ width: 52, height: 52, flex: 'none' }} />
        <div className="sk-grow">
          <Sk className="sk--line w-50p" />
          <Sk className="sk--line w-75p" style={{ marginBottom: 0 }} />
        </div>
        <Sk style={{ width: 90, height: 34, flex: 'none' }} />
      </div>
    ))}
  </div>
);

/* ---------- top progress bar ---------- */
// Shows while any axios request is running, and also while a lazy route chunk loads.
export const TopProgress = ({ routeLoading = false }) => {
  const [pending, setPending] = useState(0);
  const [width, setWidth] = useState(0);
  const [active, setActive] = useState(false);
  const timer = useRef(null);
  const hideTimer = useRef(null);

  useEffect(() => subscribeLoading(setPending), []);

  const busy = pending > 0 || routeLoading;

  useEffect(() => {
    clearInterval(timer.current);
    clearTimeout(hideTimer.current);
    if (busy) {
      setActive(true);
      setWidth((w) => (w < 12 ? 12 : w));
      // creep towards 90% while waiting, never reaching 100% until done
      timer.current = setInterval(() => setWidth((w) => (w < 90 ? w + (90 - w) * 0.12 : w)), 250);
    } else if (active) {
      setWidth(100);
      hideTimer.current = setTimeout(() => { setActive(false); setWidth(0); }, 350);
    }
    return () => { clearInterval(timer.current); clearTimeout(hideTimer.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [busy]);

  return (
    <div className={`d4u-progress ${active ? 'is-active' : ''}`} role="progressbar" aria-hidden={!active} aria-label="Loading">
      <div className="d4u-progress__bar" style={{ width: `${width}%` }} />
    </div>
  );
};
