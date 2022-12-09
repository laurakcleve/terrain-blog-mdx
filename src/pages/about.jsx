import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

function About() {
  return (
    <Layout>
      <SEO title="About" />
      <p>
        My name is Laura, and I like D&D and tabletop gaming. Building terrain
        and painting minis is my jam.
      </p>

      <p>Shoot me a message here:</p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/form-success"
      >
        <input type="hidden" name="form-name" value="contact" />

        <label htmlFor="name">
          <span>Name</span>
          <input type="text" name="name" />
        </label>

        <label htmlFor="email">
          <span>Email address</span>
          <input type="text" name="email" required />
        </label>

        <label htmlFor="message">
          <span>Message</span>
          <textarea name="message" required />
        </label>

        <button type="submit">Send</button>
      </form>
    </Layout>
  );
}

export default About;
