import * as React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import '../styles/index.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import Logo from '../images/logo.svg';
import Line from '../images/line.svg';
import Instagram from '../images/instagram.svg';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <div className="wrapper">
          <div className="logo">
            <Link to="/">
              <Logo />
            </Link>
            <Line className="line" />
            <div className="tagline">TABLETOP DIY</div>
          </div>
          <div className="links">
            <div className="social-media">
              <a
                href="https://www.instagram.com/1d3trees/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-icon"
              >
                <Instagram />
              </a>
            </div>
            <nav className="desktop">
              <Link to="/">All posts</Link>
              <Link to="/minis">Minis</Link>
              <Link to="/terrain">Terrain</Link>
              <Link to="/about/">About</Link>
            </nav>
          </div>
          <nav className="mobile">
            <div className="menu-toggle">
              <input type="checkbox" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <div className="menu-wrapper">
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/1d3trees/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram />
                      <span>@1d3trees</span>
                    </a>
                  </li>
                  <li>
                    <Link to="/">All posts</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
