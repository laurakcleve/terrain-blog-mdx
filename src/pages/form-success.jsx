import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Check from '../images/check.svg';

const FormSuccess = () => (
  <Layout>
    <div className="success-message">
      <Check className="check" />
      Thanks! Your message was sent successfully.
    </div>
    <div className="back">
      <Link to="/about">Back</Link>
    </div>
  </Layout>
);

export default FormSuccess;
