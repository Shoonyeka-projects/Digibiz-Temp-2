import React, { Component } from 'react';
import textData from '../json/Comp_1.json';

export default class Component_1 extends Component {
  render() {
    return (
      <div>
        {textData.sections.map((section, index) => (
          <section key={index} className="about_section layout_padding">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <div className="heading_container">
                      <h2>{section.heading}</h2>
                    </div>
                    <p>
                      {section.content}
                    </p>
                    <a href="read-more-url-here">
                      Read More
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/about-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    );
  }
}
