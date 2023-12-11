import React, { Component } from 'react'

export default class Slider extends Component {
  render() {
    return (
        <div class="hero_area">
        <section class="slider_section ">
        <div id="customCarousel1" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container ">
                <div class="detail-box">
                  <h1>
                    We Build <br />
                    The Things Architects <br />
                    Dream Up
                  </h1>
                  <div class="btn-box">
                    <a href="" class="btn1">
                      Read More
                    </a>
                    <a href="" class="btn2">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container ">
                <div class="detail-box">
                  <h1>
                    We Build <br />
                    The Things Architects <br />
                    Dream Up
                  </h1>
                  <div class="btn-box">
                    <a href="" class="btn1">
                      Read More
                    </a>
                    <a href="" class="btn2">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container ">
                <div class="detail-box">
                  <h1>
                    We Build <br />
                    The Things Architects <br />
                    Dream Up
                  </h1>
                  <div class="btn-box">
                    <a href="" class="btn1">
                      Read More
                    </a>
                    <a href="" class="btn2">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel_btn-box">
            <a class="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
