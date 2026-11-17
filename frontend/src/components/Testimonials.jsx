import React from 'react';
import Slider from './Slider';
import './Testimonials.css';

// Content lives in data, not in four copy-pasted blocks of markup.
const TESTIMONIALS = [
  {
    name: 'Sai Rohith', place: 'Parvathipuram', image: 'assets/img/clients/client-01.jpg',
    text: 'DOC4U exceeded my expectations in healthcare. The seamless booking process, coupled with the expertise of the doctors, made my experience exceptional. Their commitment to quality care and convenience truly sets them apart. I highly recommend DOC4U for anyone seeking reliable and accessible healthcare services.',
  },
  {
    name: 'Gowri Shankar', place: 'Vizag', image: 'assets/img/clients/client-03.jpg',
    text: "As a busy professional, I don't have time to wait on hold or play phone tag to schedule doctor appointments. Thanks to DOC4U, booking appointments has never been easier! The user-friendly interface allows me to quickly find available appointment slots that fit my schedule and book them with just a few clicks. It's a game-changer for anyone looking to streamline their healthcare management.",
  },
  {
    name: 'Panduranga Praveen', place: 'Kakinada', image: 'assets/img/clients/client-02.jpg',
    text: 'As a student, managing my time can be challenging, especially when it comes to scheduling doctor appointments around my studies. Thanks to DOC4U, I no longer have to waste time on long calls or wait for availability. The simple and intuitive platform makes it easy to find appointment slots that fit into my busy schedule. I can book appointments quickly, allowing me to focus more on my academic commitments without the hassle of healthcare scheduling.',
  },
  {
    name: 'Niya Patel', place: 'New York', image: 'assets/img/clients/client-11.jpg',
    text: 'As a parent, coordinating doctor appointments for my family can be overwhelming. DOC4U has simplified the process and made scheduling appointments a breeze! I love being able to see all available appointment times in one place and book appointments for multiple family members with ease. Plus, the automatic reminders ensure we never miss an appointment. I highly recommend DOC4U to other busy parents!',
  },
];

const Testimonials = () => (
  <Slider label="Patient testimonials" autoPlay={6000} perView={{ base: 1, lg: 2 }} className="d4u-testimonials">
    {TESTIMONIALS.map((t) => (
      <figure className="d4u-testimonial" key={t.name}>
        <i className="fas fa-quote-left d4u-testimonial__quote" aria-hidden="true" />
        <blockquote>{t.text}</blockquote>
        <figcaption>
          <img src={t.image} alt="" width="52" height="52" loading="lazy" decoding="async" />
          <span>
            <strong>{t.name}</strong>
            <small>{t.place}</small>
          </span>
        </figcaption>
      </figure>
    ))}
  </Slider>
);

export default Testimonials;
