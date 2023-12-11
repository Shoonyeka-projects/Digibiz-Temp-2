import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Component_2 extends Component {
  render() {
    return (
      <div>
  <section class="portfolio_section ">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Our Work Portfolio
        </h2>
      </div>
      <div class="carousel-wrap ">
        <div class="filter_box">
          <nav class="owl-filter-bar">
            <a href="#" class="item active" data-owl-filter="*">All</a>
            <a href="#" class="item" data-owl-filter=".decorative">DECORATIVE</a>
            <a href="#" class="item" data-owl-filter=".facade">FACADES </a>
            <a href="#" class="item" data-owl-filter=".perforated">PERFORATED
            </a>
            <a href="#" class="item" data-owl-filter=".railing">RAILINGS </a>
          </nav>
        </div>
      </div>
    </div>
    <div class="owl-carousel portfolio_carousel">
      <div class="item decorative">
        <div class="box">
          <div class="img-box">
            <img src="images/p1.jpg" alt="" />
            <div class="btn_overlay">
              <a href="" class="">
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="item facade">
        <div class="box">
          <div class="img-box">
            <img src="images/p2.jpg" alt="" />
            <div class="btn_overlay">
              <a href="" class="">
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="item perforated decorative">
        <div class="box">
          <div class="img-box">
            <img src="images/p3.jpg" alt="" />
            <div class="btn_overlay">
              <a href="" class="">
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="item railing">
        <div class="box">
          <div class="img-box">
            <img src="images/p1.jpg" alt="" />
            <div class="btn_overlay">
              <a href="" class="">
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      </div>
    );
  }
}
