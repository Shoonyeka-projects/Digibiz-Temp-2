// Component_5.js
import React, { Component } from 'react';
import testimonialData from '../json/Comp_5.json'; // Import the testimonial data JSON file

export default class Component_5 extends Component {
  render() {
    const { heading, items } = testimonialData;

    return (
      <div>
        {/* Client section */}
        <section className="client_section layout_padding">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>{heading}</h2>
            </div>
            <div className="row">
              <div className="col-md-9 mx-auto">
                <div id="customCarousel2" className="carousel slide" data-ride="carousel">
                  <div className="row">
                    <div className="col-md-11">
                      <div className="carousel-inner">
                        {items.map((item, index) => (
                          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <div className="box">
                              <div className="client_id">
                                <div className="img-box">
                                  <img src={item.image} alt="" />
                                </div>
                                <h5>{item.name}</h5>
                              </div>
                              <div className="detail-box">
                                <p>{item.testimonial}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-1">
                      <ol className="carousel-indicators">
                        {items.map((_, index) => (
                          <li key={index} data-target="#customCarousel2" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End client section */}
      </div>
    );
  }
}
