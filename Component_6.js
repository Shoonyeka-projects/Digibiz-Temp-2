// Component_6.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import infoData from '../json/Comp_6.json'; // Import the info data JSON file

export default class Component_6 extends Component {
  render() {
    const {
      logoText,
      logoSubtext,
      links,
      weldingText,
      socialMedia,
      weldingCenterText,
      contactLinks,
    } = infoData;

    return (
      <div>
        {/* Info section */}
        <section className="info_section">
          <div className="info_container layout_padding2">
            <div className="container">
              <div className="info_logo">
                <Link to="/" className="navbar-brand">
                  {logoText}<span>{logoSubtext}</span>
                </Link>
              </div>
              <div className="info_main">
                <div className="row">
                  {/* Links */}
                  <div className="col-md-3 col-lg-2">
                    <div className="info_link-box">
                      <h5>Useful Link</h5>
                      <ul>
                        {links.map((link, index) => (
                          <li key={index} className={link.to === '/' ? 'active' : ''}>
                            <Link to={link.to}>{link.text}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Welding Text */}
                  <div className="col-md-3">
                    <h5>Welding</h5>
                    <p>{weldingText}</p>
                  </div>

                  {/* Social Media */}
                  <div className="col-md-3 mx-auto">
                    <h5>Social Media</h5>
                    <div className="social_box">
                      {socialMedia.map((item, index) => (
                        <a key={index} href={item.url}>
                          <i className={`fa ${item.icon}`} aria-hidden="true"></i>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Welding Center Text */}
                  <div className="col-md-3">
                    <h5>Our Welding Center</h5>
                    <p>{weldingCenterText}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="info_bottom">
                <div className="row">
                  {/* Contact Links */}
                  <div className="col-lg-9">
                    <div className="info_contact">
                      <div className="row">
                        {contactLinks.map((contact, index) => (
                          <div key={index} className="col-md-4">
                            <Link to={contact.to} className="link-box">
                              <i className={`fa ${contact.icon}`} aria-hidden="true"></i>
                              <span>{contact.text}</span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Email Subscription Form */}
                  <div className="col-md-3">
                    <div className="info_form">
                      <form action="">
                        <input type="email" placeholder="Enter Your Email" />
                        <button>
                          <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End info section */}
      </div>
    );
  }
}
