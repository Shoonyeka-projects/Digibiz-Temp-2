import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
  
      <header className="header_section">
        <div className="header_top">
          <div className="container-fluid header_top_container">
            <Link to="/" className="navbar-brand">
              Tro<span>Weld</span>
            </Link>
            <div className="contact_nav">
              <Link to="/">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>Location</span>
              </Link>
              <Link to="/">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>Call : +01 123455678990</span>
              </Link>
              <Link to="/">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span>demo@gmail.com</span>
              </Link>
            </div>
            <div className="social_box">
              <Link to="/">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </Link>
              <Link to="/">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </Link>
              <Link to="/">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </Link>
              <Link to="/">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <Link to="/" className="navbar-brand navbar_brand_mobile">
                Tro<span>Weld</span>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/service" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <i className="fa fa-user" aria-hidden="true"></i>
              <span>Login</span>
            </Link>
          </li>
          <form className="form-inline">
            <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </ul>
      </div>
            </nav>
          </div>
        </div>
      </header>

    );
  }
}
