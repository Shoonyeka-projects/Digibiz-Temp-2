// Component_3.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serviceData from '../json/Comp_3.json'; // Import the service data JSON file

export default class Component_3 extends Component {
  render() {
    const { services } = serviceData;

    return (
      <div>
        <section className="service_section layout_padding">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                Our <span>Services</span>
              </h2>
            </div>
            <div className="row">
              {services.map((service, index) => (
                <div key={index} className="col-sm-6 col-md-4">
                  <div className="box">
                    <div className="img-box">
                      <img src={service.image} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>{service.title}</h5>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="btn-box">
              <Link to="/services">Read More</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
