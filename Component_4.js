// Component_4.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import contactData from '../json/Comp_4.json'; // Import the contact data JSON file

export default class Component_4 extends Component {
  initMap = () => {
    // Add your map initialization code here
    const mapOptions = {
      center: { lat: 37.7749, lng: -122.4194 }, // Set your initial map center coordinates
      zoom: 16, // Set the initial zoom level
    };
  
    const map = new window.google.maps.Map(document.getElementById('googleMap'), mapOptions);
  
    // You can customize the map further based on your needs
  };

  componentDidMount() {
    this.initMap();
  }

  render() {
    const { labels, services } = contactData;

    return (
      <div>
        {/* Contact section */}
        <section className="contact_section">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>{labels.heading}</h2>
            </div>
            <div className="row">
              <div className="col-md-6 px-0">
                <div className="form_container">
                  <form action="">
                    <div className="form-row">
                      <div className="form-group col">
                        <input type="text" className="form-control" placeholder={labels.namePlaceholder} />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-lg-6">
                        <input type="text" className="form-control" placeholder={labels.phonePlaceholder} />
                      </div>
                      <div className="form-group col-lg-6">
                        <select name="" id="" className="form-control wide">
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col">
                        <input type="email" className="form-control" placeholder={labels.emailPlaceholder} />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col">
                        <input type="text" className="message-box form-control" placeholder={labels.messagePlaceholder} />
                      </div>
                    </div>
                    <div className="btn_box">
                      <button>
                        {labels.buttonText}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 px-0">
                <div className="map_container">
                  <div className="map">
                    <div id="googleMap" style={{ height: '400px' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End contact section */}
      </div>
    );
  }
}
