import axios from 'axios';
import React, { useState } from 'react';
import ENDPOINT from '../data/ENDPOINT';
import SecurityHeaders from '../data/SecurityHeaders';
import ToastNotification from '../components/Modals/ToastNotification';
import './Contactus.css';

const SUBJECTS = [
  'Doctor consultation',
  'Appointment booking',
  'Payments & billing',
  'Technical support',
  'Feedback / suggestion',
  'Other',
];

const CONTACT_INFO = [
  { icon: 'feather-map-pin', title: 'Visit us', value: 'Rajam, Andhra Pradesh', href: 'https://www.google.com/maps/search/?api=1&query=Rajam%2C+Andhra+Pradesh' },
  { icon: 'feather-phone', title: 'Call us', value: '+91 123 456 5943', href: 'tel:+911234565943' },
  { icon: 'feather-mail', title: 'Email us', value: 'docforyouhelpdesk@gmail.com', href: 'mailto:docforyouhelpdesk@gmail.com' },
];

const EMPTY = { name: '', email: '', phone: '', services: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const validate = (v) => {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your name';
  if (!EMAIL_RE.test(v.email.trim())) e.email = 'Enter a valid email address';
  if (v.phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a valid 10-digit phone number';
  if (!v.services) e.services = 'Please choose a topic';
  if (v.message.trim().length < 10) e.message = 'Tell us a little more (at least 10 characters)';
  return e;
};

const Contactus = () => {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', isSuccess: true });

  const showToast = (message, isSuccess) => {
    setToast({ show: true, message, isSuccess });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 4000);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors(validate(next));   // live feedback once a field has been visited
  };

  const onBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate(values));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;                              // block double submits
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, phone: true, services: true, message: true });
    if (Object.keys(found).length) {
      showToast('Please fix the highlighted fields', false);
      return;
    }

    setLoading(true);
    try {
      const form = new FormData();
      form.append('name', values.name.trim());
      form.append('mail', values.email.trim());
      form.append('phone_no', values.phone.trim());
      form.append('services', values.services);
      form.append('message', values.message.trim());
      const res = await axios.post(ENDPOINT + 'send-messages', form, { ...SecurityHeaders, timeout: 20000 });
      if (res.data.status === 'success') {
        showToast('Thanks! Our team will reach you very soon.', true);
        setValues(EMPTY);
        setTouched({});
        setErrors({});
      } else {
        showToast(res.data.message || 'Could not send your message. Please try again.', false);
      }
    } catch (err) {
      showToast(err.response?.data?.message || 'Network problem. Please try again in a moment.', false);
    } finally {
      setLoading(false);                              // always stop the spinner, success or not
    }
  };

  const field = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange,
    onBlur,
    className: `form-control ${touched[name] && errors[name] ? 'is-invalid' : ''}`,
    'aria-invalid': Boolean(touched[name] && errors[name]),
    'aria-describedby': errors[name] ? `contact-${name}-err` : undefined,
  });
  const err = (name) =>
    touched[name] && errors[name] ? (
      <div className="invalid-feedback d-block" id={`contact-${name}-err`}>{errors[name]}</div>
    ) : null;

  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <span className="contact-hero__eyebrow">Get in touch</span>
          <h1>We'd love to hear from you</h1>
          <p>Questions about appointments, doctors or your account? Send us a message and we'll get back to you.</p>
        </div>
      </section>

      <section className="contact-page">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-5">
              <h2 className="contact-title">Contact information</h2>
              <p className="contact-sub">Reach us any way that suits you. We usually reply within one working day.</p>

              <ul className="contact-list">
                {CONTACT_INFO.map((c) => (
                  <li key={c.title}>
                    <a href={c.href} {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                      <span className="contact-list__icon"><i className={c.icon} aria-hidden="true" /></span>
                      <span>
                        <small>{c.title}</small>
                        <strong>{c.value}</strong>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="contact-note">
                <i className="feather-clock" aria-hidden="true" />
                <div>
                  <strong>Need urgent medical help?</strong>
                  <p className="mb-0">This form is not monitored for emergencies. Please contact your nearest hospital or local emergency number.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <form className="contact-form" onSubmit={onSubmit} noValidate>
                <h2 className="contact-title">Send us a message</h2>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="contact-name">Name</label>
                    <input {...field('name')} type="text" autoComplete="name" placeholder="Your full name" />
                    {err('name')}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="contact-email">Email address</label>
                    <input {...field('email')} type="email" autoComplete="email" placeholder="you@example.com" />
                    {err('email')}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="contact-phone">Phone number</label>
                    <input {...field('phone')} type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" />
                    {err('phone')}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="contact-services">Topic</label>
                    <select {...field('services')} className={`form-select ${touched.services && errors.services ? 'is-invalid' : ''}`}>
                      <option value="">Select a topic</option>
                      {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {err('services')}
                  </div>
                  <div className="col-12">
                    <label htmlFor="contact-message">Message</label>
                    <textarea {...field('message')} rows={5} maxLength={1000} placeholder="How can we help?" />
                    <div className="contact-count">{values.message.length}/1000</div>
                    {err('message')}
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary contact-submit" disabled={loading}>
                      {loading ? (<><span className="spinner-border spinner-border-sm me-2" aria-hidden="true" />Sending...</>) : 'Send message'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ToastNotification toast={toast} setToast={setToast} />
    </>
  );
};

export default Contactus;
