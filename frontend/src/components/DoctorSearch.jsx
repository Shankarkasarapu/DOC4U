import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ENDPOINT from '../data/ENDPOINT';
import { Spinner } from './Loaders';
import SecurityHeaders from '../data/SecurityHeaders';
import './DoctorSearch.css';

const todayISO = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().split('T')[0];
};

// Any one field is enough: doctor/speciality, location, or date.
const DoctorSearch = ({ initial = {}, onSearch, compact = false }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState(initial.q || '');
  const [location, setLocation] = useState(initial.location || '');
  const [date, setDate] = useState(initial.date || '');
  const [doctors, setDoctors] = useState([]);
  const [loadingOpts, setLoadingOpts] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.post(ENDPOINT + 'get-doctors', new FormData(), SecurityHeaders);
        if (res.data.status === 'success') setDoctors(res.data.data);
      } catch (e) {
        console.error('Could not load doctors for search', e);
      } finally {
        setLoadingOpts(false);
      }
    };
    load();
  }, []);

  // Locations are built from the doctors themselves, so the dropdown never drifts from the data.
  const locations = useMemo(
    () => [...new Set(doctors.map((d) => (d.location || '').trim()).filter(Boolean))].sort(),
    [doctors]
  );
  const suggestions = useMemo(
    () => [...new Set(doctors.flatMap((d) => [d.name, d.speciality]).filter(Boolean))].sort(),
    [doctors]
  );

  const submit = (e) => {
    e.preventDefault();
    const values = { q: query.trim(), location, date };
    if (onSearch) return onSearch(values);
    const params = new URLSearchParams();
    Object.entries(values).forEach(([k, v]) => v && params.set(k, v));
    navigate(`/doctors-list${params.toString() ? `?${params}` : ''}`);
  };

  const clear = () => {
    setQuery(''); setLocation(''); setDate('');
    if (onSearch) onSearch({ q: '', location: '', date: '' });
  };

  return (
    <form className={`doc-search ${compact ? 'doc-search--compact' : ''}`} role="search" onSubmit={submit}>
      <div className="doc-search__field">
        <label htmlFor="ds-q"><i className="feather-search" /> Doctor or speciality</label>
        <input id="ds-q" type="text" list="ds-suggestions" value={query} autoComplete="off"
          onChange={(e) => setQuery(e.target.value)} placeholder="e.g. Dentist, Dr. Raghav" />
        <datalist id="ds-suggestions">{suggestions.map((s) => <option key={s} value={s} />)}</datalist>
      </div>
      <div className="doc-search__field">
        <label htmlFor="ds-loc"><i className="feather-map-pin" /> Location</label>
        <select id="ds-loc" value={location} onChange={(e) => setLocation(e.target.value)} disabled={loadingOpts}>
          <option value="">{loadingOpts ? "Loading locations..." : "All locations"}</option>
          {locations.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
      </div>
      <div className="doc-search__field">
        <label htmlFor="ds-date"><i className="feather-calendar" /> Date</label>
        <input id="ds-date" type="date" min={todayISO()} value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="doc-search__actions">
        <button type="submit" className="btn btn-primary" disabled={loadingOpts}>{loadingOpts ? <Spinner size="sm" /> : "Search"}</button>
        {(query || location || date) && (
          <button type="button" className="btn btn-link" onClick={clear}>Clear</button>
        )}
      </div>
    </form>
  );
};

export default DoctorSearch;
