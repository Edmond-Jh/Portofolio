import React from "react";
import { Route, Routes } from "react-router";

import "./App.css";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <div className="art-content">
              {/* <!-- curtain --> */}
              <div className="art-curtain"></div>

              {/* <!-- top background --> */}
              <div
                className="art-top-bg"
                style="background-image: url(img/bg.jpg)"
              >
                {/* <!-- overlay --> */}
                <div className="art-top-bg-overlay"></div>
                {/* <!-- overlay end --> */}
              </div>
              {/* <!-- top background end --> */}

              {/* <!-- swup container --> */}
              <div className="transition-fade" id="swup">
                {/* <!-- scroll frame --> */}
                <div id="scrollbar" className="art-scroll-frame">
                  {/* <!-- container --> */}
                  <div className="container-fluid">
                    {/* <!-- row --> */}
                    <div className="row p-60-0 p-lg-30-0 p-md-15-0">
                      {/* <!-- col --> */}
                      <div className="col-lg-12">
                        {/* <!-- banner --> */}
                        <div
                          className="art-a art-banner"
                          style="background-image: url(img/bg.jpg)"
                        >
                          {/* <!-- banner back --> */}
                          <div className="art-banner-back"></div>
                          {/* <!-- banner dec --> */}
                          <div className="art-banner-dec"></div>
                          {/* <!-- banner overlay --> */}
                          <div className="art-banner-overlay">
                            {/* <!-- main title --> */}
                            <div className="art-banner-title">
                              {/* <!-- title --> */}
                              <h1 className="mb-15">
                                Discover my Amazing <br />
                                Art Space!
                              </h1>
                              {/* <!-- suptitle --> */}
                              <div className="art-lg-text art-code mb-25">
                                &lt;<i>code</i>&gt; I build
                                <span
                                  className="txt-rotate"
                                  data-period="2000"
                                  data-rotate='[ "web interfaces.", "ios and android applications.", "design mocups.", "automation tools." ]'
                                ></span>
                                &lt;/<i>code</i>&gt;
                              </div>
                              <div className="art-buttons-frame">
                                {/* <!-- button --> */}
                                <a
                                  href="/portfolio-3-col-masonry.html"
                                  className="art-btn art-btn-md"
                                >
                                  <span>Explore now</span>
                                </a>
                              </div>
                            </div>
                            {/* <!-- main title end --> */}
                            {/* <!-- photo --> */}
                            <img
                              src="img/face-2.png"
                              className="art-banner-photo"
                              alt="Your Name"
                            />
                          </div>
                          {/* <!-- banner overlay end --> */}
                        </div>
                        {/* <!-- banner end --> */}
                      </div>
                      {/* <!-- col end --> */}
                    </div>
                    {/* <!-- row end --> */}
                  </div>
                  {/* <!-- container end --> */}

                  {/* <!-- container --> */}
                  <div className="container-fluid">
                    {/* <!-- row --> */}
                    <div className="row p-30-0">
                      {/* <!-- col --> */}
                      <div className="col-md-3 col-6">
                        {/* <!-- couner frame --> */}
                        <div className="art-counter-frame">
                          {/* <!-- counter --> */}
                          <div className="art-counter-box">
                            {/* <!-- counter number --> */}
                            <span className="art-counter">10</span>
                            <span className="art-counter-plus">+</span>
                          </div>
                          {/* <!-- counter end --> */}
                          {/* <!-- title --> */}
                          <h6>Years Experience</h6>
                        </div>
                        {/* <!-- couner frame end --> */}
                      </div>
                      {/* <!-- col end --> */}

                      {/* <!-- col --> */}
                      <div className="col-md-3 col-6">
                        {/* <!-- couner frame --> */}
                        <div className="art-counter-frame">
                          {/* <!-- counter --> */}
                          <div className="art-counter-box">
                            {/* <!-- counter number --> */}
                            <span className="art-counter">143</span>
                          </div>
                          {/* <!-- counter end --> */}
                          {/* <!-- title --> */}
                          <h6>Completed Projects</h6>
                        </div>
                        {/* <!-- couner frame end --> */}
                      </div>
                      {/* <!-- col end --> */}

                      {/* <!-- col --> */}
                      <div className="col-md-3 col-6">
                        {/* <!-- couner frame --> */}
                        <div className="art-counter-frame">
                          {/* <!-- counter --> */}
                          <div className="art-counter-box">
                            {/* <!-- counter number --> */}
                            <span className="art-counter">114</span>
                          </div>
                          {/* <!-- counter end --> */}
                          {/* <!-- title --> */}
                          <h6>Happy Customers</h6>
                        </div>
                        {/* <!-- couner frame end --> */}
                      </div>
                      {/* <!-- col end --> */}

                      {/* <!-- col --> */}
                      <div className="col-md-3 col-6">
                        {/* <!-- couner frame --> */}
                        <div className="art-counter-frame">
                          {/* <!-- counter --> */}
                          <div className="art-counter-box">
                            {/* <!-- counter number --> */}
                            <span className="art-counter">20</span>
                            <span className="art-counter-plus">+</span>
                          </div>
                          {/* <!-- counter end --> */}
                          {/* <!-- title --> */}
                          <h6>Honors and Awards</h6>
                        </div>
                        {/* <!-- couner frame end --> */}
                      </div>
                      {/* <!-- col end --> */}
                    </div>
                    {/* <!-- row end --> */}
                  </div>
                  {/* <!-- container end --> */}

                  {/* <!-- container --> */}
                  <div className="container-fluid">
                    {/* <!-- row --> */}
                    <div className="row">
                      {/* <!-- col --> */}
                      <div className="col-lg-12">
                        {/* <!-- section title --> */}
                        <div className="art-section-title">
                          {/* <!-- title frame --> */}
                          <div className="art-title-frame">
                            {/* <!-- title --> */}
                            <h4>My Services</h4>
                          </div>
                          {/* <!-- title frame end --> */}
                        </div>
                        {/* <!-- section title end --> */}
                      </div>
                      {/* <!-- col end --> */}

                      {/* <!-- col --> */}
                      <div className="col-lg-4 col-md-6">
                        {/* <!-- service --> */}
                        <div className="art-a art-service-icon-box">
                          {/* <!-- service content --> */}
                          <div className="art-service-ib-content">
                            {/* <!-- title --> */}
                            <h5 className="mb-15">Web Development</h5>
                            {/* <!-- text --> */}
                            <div className="mb-15">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Delectus esse commodi deserunt
                              vitae, vero quasi! Veniam quaerat tenetur pariatur
                              doloribus.
                            </div>
                            {/* <!-- button --> */}
                            <div className="art-buttons-frame">
                              <a
                                href="/contact.html"
                                className="art-link art-color-link art-w-chevron"
                              >
                                Order now
                              </a>
                            </div>
                          </div>
                          {/* <!-- service content end --> */}
                        </div>
                        {/* <!-- service end --> */}
                      </div>
                      {/* <!-- col end --> */}

                      {/* <!-- col --> */}
                      <div className="col-lg-4 col-md-6">
                        {/* <!-- service --> */}
                        <div className="art-a art-service-icon-box">
                          {/* <!-- service content --> */}
                          <div className="art-service-ib-content">
                            {/* <!-- title --> */}
                            <h5 className="mb-15">UI/UX Design</h5>
                            {/* <!-- text --> */}
                            <div className="mb-15">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Delectus esse commodi deserunt
                              vitae, vero quasi! Veniam quaerat tenetur pariatur
                              doloribus.
                            </div>
                            {/* <!-- button --> */}
                            <div className="art-buttons-frame">
                              <a
                                href="/contact.html"
                                className="art-link art-color-link art-w-chevron"
                              >
                                Order now
                              </a>
                            </div>
                          </div>
                          {/* <!-- service content end --> */}
                        </div>
                        {/* <!-- service end --> */}
                      </div>
                      {/* <!-- col end --> */}

                      {/* <!-- col --> */}
                      <div className="col-lg-4 col-md-6">
                        {/* <!-- service --> */}
                        <div className="art-a art-service-icon-box">
                          {/* <!-- service content --> */}
                          <div className="art-service-ib-content">
                            {/* <!-- title --> */}
                            <h5 className="mb-15">Sound Design</h5>
                            {/* <!-- text --> */}
                            <div className="mb-15">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Delectus esse commodi deserunt
                              vitae, vero quasi! Veniam quaerat tenetur pariatur
                              doloribus.
                            </div>
                            {/* <!-- button --> */}
                            <div className="art-buttons-frame">
                              <a
                                href="/contact.html"
                                className="art-link art-color-link art-w-chevron"
                              >
                                Order now
                              </a>
                            </div>
                          </div>
                          {/* <!-- service content end --> */}
                        </div>
                        {/* <!-- service end --> */}
                      </div>
                      {/* <!-- col end --> */}

                      {/* <!-- col --> */}
                      <div className="col-lg-4 col-md-6">
                        {/* <!-- service --> */}
                        <div className="art-a art-service-icon-box">
                          {/* <!-- service content --> */}
                          <div className="art-service-ib-content">
                            {/* <!-- title --> */}
                            <h5 className="mb-15">Game Design</h5>
                            {/* <!-- text --> */}
                            <div className="mb-15">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Delectus esse commodi deserunt
                              vitae, vero quasi! Veniam quaerat tenetur pariatur
                              doloribus.
                            </div>
                            {/* <!-- button --> */}
                            <div className="art-buttons-frame">
                              <a
                                href="/contact.html"
                                className="art-link art-color-link art-w-chevron"
                              >
                                Order now
                              </a>
                            </div>
                          </div>
                          {/* <!-- service content end --> */}
                        </div>
                        {/* <!-- service end --> */}
                      </div>
                      {/* <!-- col end --> */}

                      {/* <!-- col --> */}
                      <div className="col-lg-4 col-md-6">
                        {/* <!-- service --> */}
                        <div className="art-a art-service-icon-box">
                          {/* <!-- service content --> */}
                          <div className="art-service-ib-content">
                            {/* <!-- title --> */}
                            <h5 className="mb-15">Advertising</h5>
                            {/* <!-- text --> */}
                            <div className="mb-15">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Delectus esse commodi deserunt
                              vitae, vero quasi! Veniam quaerat tenetur pariatur
                              doloribus.
                            </div>
                            {/* <!-- button --> */}
                            <div className="art-buttons-frame">
                              <a
                                href="/contact.html"
                                className="art-link art-color-link art-w-chevron"
                              >
                                Order now
                              </a>
                            </div>
                          </div>
                          {/* <!-- service content end --> */}
                        </div>
                        {/* <!-- service end --> */}
                      </div>
                      {/* <!-- col end --> */}
                    </div>
                    {/* <!-- row end --> */}
                  </div>
                  {/* <!-- container end --> */}

                  {/* <!-- container --> */}
                  <div className="container-fluid">
                    {/* <!-- row --> */}
                    <div className="row p-0-0">
                      {/* <!-- col --> */}
                      <div className="col-lg-12">
                        {/* <!-- section title --> */}
                        <div className="art-section-title">
                          {/* <!-- title frame --> */}
                          <div className="art-title-frame">
                            {/* <!-- title --> */}
                            <h4>Price Plans</h4>
                          </div>
                          {/* <!-- title frame end --> */}
                        </div>
                        {/* <!-- section title end --> */}
                      </div>
                      {/* <!-- col end --> */}

                      {/* <!-- col --> */}
                      <div className="col-lg-4">
                        {/* <!-- price --> */}
                        <div className="art-a art-price">
                          {/* <!-- price body --> */}
                          <div className="art-price-body">
                            <h5 className="mb-30">Starter Price</h5>
                            {/* <!-- price cost --> */}
                            <div className="art-price-cost">
                              <div className="art-number">
                                FREE<sup>*</sup>
                              </div>
                            </div>
                            {/* <!-- price cost end --> */}
                            {/* <!-- price list --> */}
                            <ul className="art-price-list">
                              {/* <!-- list item --> */}
                              <li>Ui Design</li>
                              {/* <!-- list item --> */}
                              <li>Web Development</li>
                              {/* <!-- list item --> */}
                              <li className="art-empty-item">Logo design</li>
                              {/* <!-- list item --> */}
                              <li className="art-empty-item">
                                SEO optimization
                              </li>
                              {/* <!-- list item --> */}
                              <li className="art-empty-item">
                                Wordpress integration
                              </li>
                            </ul>
                            {/* <!-- price list end --> */}
                            {/* <!-- button --> */}
                            <a
                              href="/contact.html"
                              className="art-link art-color-link art-w-chevron"
                            >
                              Order now
                            </a>
                            <div className="art-asterisk">
                              <sup>*</sup>Free only when ordering paid services
                            </div>
                          </div>
                          {/* <!-- price body end --> */}
                        </div>
                        {/* <!-- price end --> */}
                      </div>
                      {/* <!-- grid --> */}

                      {/* <!-- col --> */}
                      <div className="col-lg-4">
                        {/* <!-- price --> */}
                        <div className="art-a art-price art-popular-price">
                          {/* <!-- price body --> */}
                          <div className="art-price-body">
                            <h5 className="mb-30">Hourly payment</h5>
                            {/* <!-- price cost --> */}
                            <div className="art-price-cost">
                              <div className="art-number">
                                <span>$</span>29<span>h</span>
                              </div>
                            </div>
                            {/* <!-- price cost end --> */}
                            {/* <!-- price list --> */}
                            <ul className="art-price-list">
                              {/* <!-- list item --> */}
                              <li>Ui Design</li>
                              {/* <!-- list item --> */}
                              <li>Web Development</li>
                              {/* <!-- list item --> */}
                              <li>Logo design</li>
                              {/* <!-- list item --> */}
                              <li className="art-empty-item">
                                SEO optimization
                              </li>
                              {/* <!-- list item --> */}
                              <li className="art-empty-item">
                                Wordpress integration
                              </li>
                            </ul>
                            {/* <!-- price list end --> */}
                            {/* <!-- button --> */}
                            <a
                              href="/contact.html"
                              className="art-link art-color-link art-w-chevron"
                            >
                              Order now
                            </a>
                          </div>
                          {/* <!-- price body end --> */}
                        </div>
                        {/* <!-- price end --> */}
                      </div>
                      {/* <!-- col end --> */}

                      {/* <!-- col --> */}
                      <div className="col-lg-4">
                        {/* <!-- price --> */}
                        <div className="art-a art-price">
                          {/* <!-- price body --> */}
                          <div className="art-price-body">
                            <h5 className="mb-30">Full time</h5>
                            {/* <!-- price cost --> */}
                            <div className="art-price-cost">
                              <div className="art-number">
                                <span>$</span>2999<span>m</span>
                              </div>
                            </div>
                            {/* <!-- price cost end --> */}
                            {/* <!-- price list --> */}
                            <ul className="art-price-list">
                              {/* <!-- list item --> */}
                              <li>Ui Design</li>
                              {/* <!-- list item --> */}
                              <li>Web Development</li>
                              {/* <!-- list item --> */}
                              <li>Logo design</li>
                              {/* <!-- list item --> */}
                              <li>SEO optimization</li>
                              {/* <!-- list item --> */}
                              <li>Wordpress integration</li>
                            </ul>
                            {/* <!-- price list end --> */}
                            {/* <!-- button --> */}
                            <a
                              href="/contact.html"
                              className="art-link art-color-link art-w-chevron"
                            >
                              Order now
                            </a>
                          </div>
                          {/* <!-- price body end --> */}
                        </div>
                        {/* <!-- price end --> */}
                      </div>
                      {/* <!-- col end --> */}
                    </div>
                    {/* <!-- row end --> */}
                  </div>
                  {/* <!-- container end --> */}

                  {/* <!-- container --> */}
                  <div className="container-fluid">
                    {/* <!-- row --> */}
                    <div className="row">
                      {/* <!-- col --> */}
                      <div className="col-lg-12">
                        {/* <!-- section title --> */}
                        <div className="art-section-title">
                          {/* <!-- title frame --> */}
                          <div className="art-title-frame">
                            {/* <!-- title --> */}
                            <h4>Recommendations</h4>
                          </div>
                          {/* <!-- title frame end --> */}
                        </div>
                        {/* <!-- section title end --> */}
                      </div>
                      {/* <!-- col end --> */}

                      {/* <!-- col --> */}
                      <div className="col-lg-12">
                        {/* <!-- slider container --> */}
                        <div
                          className="swiper-container art-testimonial-slider"
                          style="overflow: visible"
                        >
                          {/* <!-- slider wrapper --> */}
                          <div className="swiper-wrapper">
                            {/* <!-- slide --> */}
                            <div className="swiper-slide">
                              {/* <!-- testimonial --> */}
                              <div className="art-a art-testimonial">
                                {/* <!-- testimonial body --> */}
                                <div className="testimonial-body">
                                  {/* <!-- photo --> */}
                                  <img
                                    className="art-testimonial-face"
                                    src="img/testimonials/face-1.jpg"
                                    alt="face"
                                  />
                                  {/* <!-- name --> */}
                                  <h5>Paul Trueman</h5>
                                  <div className="art-el-suptitle mb-15">
                                    Template author
                                  </div>
                                  {/* <!-- text --> */}
                                  <div className="mb-15">
                                    Working with Artur has been a pleasure.
                                    Better yet - I alerted them of a minor issue
                                    before going to sleep. The issue was fixed
                                    the next morning. I couldn't ask for better
                                    support. Thank you Artur! This is easily a 5
                                    star freelancer.
                                  </div>
                                </div>
                                {/* <!-- testimonial body end --> */}
                                {/* <!-- testimonial footer --> */}
                                <div className="art-testimonial-footer">
                                  <div className="art-left-side">
                                    {/* <!-- star rate --> */}
                                    <ul className="art-star-rate">
                                      <li>
                                        <i className="fas fa-star"></i>
                                      </li>
                                      <li>
                                        <i className="fas fa-star"></i>
                                      </li>
                                      <li>
                                        <i className="fas fa-star"></i>
                                      </li>
                                      <li>
                                        <i className="fas fa-star"></i>
                                      </li>
                                      <li>
                                        <i className="fas fa-star"></i>
                                      </li>
                                    </ul>
                                    {/* <!-- star rate end --> */}
                                  </div>
                                  <div className="art-right-side"></div>
                                </div>
                                {/* <!-- testimonial footer end --> */}
                              </div>
                              {/* <!-- testimonial end --> */}
                            </div>
                            {/* <!-- slide end --> */}

                            {/* <!-- slide --> */}
                            <div className="swiper-slide">
                              {/* <!-- testimonial --> */}
                              <div className="art-a art-testimonial">
                                {/* <!-- testimonial body --> */}
                                <div className="testimonial-body">
                                  {/* <!-- photo --> */}
                                  <img
                                    className="art-testimonial-face"
                                    src="img/testimonials/face-2.jpg"
                                    alt="face"
                                  />
                                  {/* <!-- name --> */}
                                  <h5>Paul Trueman</h5>
                                  <div className="art-el-suptitle mb-15">
                                    Template author
                                  </div>
                                  {/* <!-- text --> */}
                                  <div className="mb-15">
                                    Working with Artur has been a pleasure.
                                    Better yet - I alerted them of a minor issue
                                    before going to sleep. The issue was fixed
                                    the next morning. I couldn't ask for better
                                    support. Thank you Artur! This is easily a 5
                                    star freelancer.
                                  </div>
                                </div>
                                {/* <!-- testimonial body end --> */}
                                {/* <!-- testimonial footer --> */}
                                <div className="art-testimonial-footer">
                                  <div className="art-left-side">
                                    {/* <!-- star rate --> */}
                                    <ul className="art-star-rate">
                                      <li>
                                        <i className="fas fa-star"></i>
                                      </li>
                                      <li>
                                        <i className="fas fa-star"></i>
                                      </li>
                                      <li>
                                        <i className="fas fa-star"></i>
                                      </li>
                                      <li>
                                        <i className="fas fa-star"></i>
                                      </li>
                                      <li className="art-empty-item">
                                        <i className="fas fa-star"></i>
                                      </li>
                                    </ul>
                                    {/* <!-- star rate end --> */}
                                  </div>
                                  <div className="art-right-side"></div>
                                </div>
                                {/* <!-- testimonial footer end --> */}
                              </div>
                              {/* <!-- testimonial end --> */}
                            </div>
                            {/* <!-- slide end --> */}

                            {/* <!-- slide --> */}
                            <div className="swiper-slide">
                              {/* <!-- testimonial --> */}
                              <div className="art-a art-testimonial">
                                {/* <!-- testimonial body --> */}
                                <div className="testimonial-body">
                                  {/* <!-- photo --> */}
                                  <img
                                    className="art-testimonial-face"
                                    src="img/testimonials/face-3.jpg"
                                    alt="face"
                                  />
                                  {/* <!-- name --> */}
                                  <h5>Paul Trueman</h5>
                                  <div className="art-el-suptitle mb-15">
                                    Template author
                                  </div>
                                  {/* <!-- text --> */}
                                  <div className="mb-15">
                                    Working with Artur has been a pleasure.
                                    Better yet - I alerted them of a minor issue
                                    before going to sleep. The issue was fixed
                                    the next morning. I couldn't ask for better
                                    support. Thank you Artur! This is easily a 5
                                    star freelancer.
                                  </div>
                                </div>
                                {/* <!-- testimonial body end --> */}
                                {/* <!-- testimonial footer --> */}
                                <div className="art-testimonial-footer">
                                  <div className="art-left-side">
                                    {/* <!-- star rate --> */}
                                    <ul className="art-star-rate">
                                      <li>
                                        <i className="fas fa-star"></i>
                                      </li>
                                      <li>
                                        <i className="fas fa-star"></i>
                                      </li>
                                      <li>
                                        <i className="fas fa-star"></i>
                                      </li>
                                      <li>
                                        <i className="fas fa-star"></i>
                                      </li>
                                      <li>
                                        <i className="fas fa-star"></i>
                                      </li>
                                    </ul>
                                    {/* <!-- star rate end --> */}
                                  </div>
                                  <div className="art-right-side"></div>
                                </div>
                                {/* <!-- testimonial footer end --> */}
                              </div>
                              {/* <!-- testimonial end --> */}
                            </div>
                            {/* <!-- slide end --> */}

                            {/* <!-- slide --> */}
                            <div className="swiper-slide">
                              {/* <!-- testimonial --> */}
                              <div className="art-a art-testimonial">
                                {/* <!-- testimonial body --> */}
                                <div className="testimonial-body">
                                  {/* <!-- photo --> */}
                                  <img
                                    className="art-testimonial-face"
                                    src="img/testimonials/face-4.jpg"
                                    alt="face"
                                  />
                                  {/* <!-- name --> */}
                                  <h5>Paul Trueman</h5>
                                  <div className="art-el-suptitle mb-15">
                                    Template author
                                  </div>
                                  {/* <!-- text --> */}
                                  <div className="mb-15">
                                    Working with Artur has been a pleasure.
                                    Better yet - I alerted them of a minor issue
                                    before going to sleep. The issue was fixed
                                    the next morning. I couldn't ask for better
                                    support. Thank you Artur! This is easily a 5
                                    star freelancer.
                                  </div>
                                </div>
                                {/* <!-- testimonial body end --> */}
                                {/* <!-- testimonial footer --> */}
                                <div className="art-testimonial-footer">
                                  <div className="art-left-side">
                                    {/* <!-- star rate --> */}
                                    <ul className="art-star-rate">
                                      <li>
                                        <i className="fas fa-star"></i>
                                      </li>
                                      <li>
                                        <i className="fas fa-star"></i>
                                      </li>
                                      <li>
                                        <i className="fas fa-star"></i>
                                      </li>
                                      <li>
                                        <i className="fas fa-star"></i>
                                      </li>
                                      <li>
                                        <i className="fas fa-star"></i>
                                      </li>
                                    </ul>
                                    {/* <!-- star rate end --> */}
                                  </div>
                                  <div className="art-right-side"></div>
                                </div>
                                {/* <!-- testimonial footer end --> */}
                              </div>
                              {/* <!-- testimonial end --> */}
                            </div>
                            {/* <!-- slide end --> */}
                          </div>
                          {/* <!-- slider wrapper end --> */}
                        </div>
                        {/* <!-- slider container end --> */}
                      </div>
                      {/* <!-- col end --> */}

                      {/* <!-- col --> */}
                      <div className="col-lg-12">
                        {/* <!-- slider navigation --> */}
                        <div className="art-slider-navigation">
                          {/* <!-- left side --> */}
                          <div className="art-sn-left">
                            {/* <!-- slider pagination --> */}
                            <div className="swiper-pagination"></div>
                          </div>
                          {/* <!-- left side end --> */}

                          {/* <!-- right side --> */}
                          <div className="art-sn-right">
                            {/* <!-- slider navigation --> */}
                            <div className="art-slider-nav-frame">
                              {/* <!-- prev --> */}
                              <div className="art-slider-nav art-testi-swiper-prev">
                                <i className="fas fa-chevron-left"></i>
                              </div>
                              {/* <!-- next --> */}
                              <div className="art-slider-nav art-testi-swiper-next">
                                <i className="fas fa-chevron-right"></i>
                              </div>
                            </div>
                            {/* <!-- slider navigation --> */}
                          </div>
                          {/* <!-- right side end --> */}
                        </div>
                        {/* <!-- slider navigation end --> */}
                      </div>
                      {/* <!-- col end --> */}
                    </div>
                    {/* <!-- row end --> */}
                  </div>
                  {/* <!-- container end --> */}

                  {/* <!-- container --> */}
                  <div className="container-fluid">
                    {/* <!-- row --> */}
                    <div className="row">
                      {/* <!-- col --> */}
                      <div className="col-6 col-lg-3">
                        {/* <!-- brand --> */}
                        <img
                          className="art-brand"
                          src="img/brands/1.png"
                          alt="brand"
                        />
                      </div>
                      {/* <!-- col end --> */}

                      {/* <!-- col --> */}
                      <div className="col-6 col-lg-3">
                        {/* <!-- brand --> */}
                        <img
                          className="art-brand"
                          src="img/brands/2.png"
                          alt="brand"
                        />
                      </div>
                      {/* <!-- col end --> */}

                      {/* <!-- col --> */}
                      <div className="col-6 col-lg-3">
                        {/* <!-- brand --> */}
                        <img
                          className="art-brand"
                          src="img/brands/3.png"
                          alt="brand"
                        />
                      </div>
                      {/* <!-- col end --> */}

                      {/* <!-- col --> */}
                      <div className="col-6 col-lg-3">
                        {/* <!-- brand --> */}
                        <img
                          className="art-brand"
                          src="img/brands/1.png"
                          alt="brand"
                        />
                      </div>
                      {/* <!-- col end --> */}
                    </div>
                    {/* <!-- row end --> */}
                  </div>
                  {/* <!-- container end --> */}

                  {/* <!-- container --> */}
                  <div className="container-fluid">
                    {/* <!-- footer --> */}
                    <footer>
                      {/* <!-- copyright --> */}
                      <div>© 2020 Artur Carter</div>
                      {/* <!-- author ( Please! Do not delete it. You are awesome! :) --> */}
                      <div>
                        Template author:&#160;
                        <a
                          href="https://themeforest.net/user/millerdigitaldesign"
                          target="_blank"
                        >
                          Nazar Miller
                        </a>
                      </div>
                    </footer>
                    {/* <!-- footer end --> */}
                  </div>
                  {/* <!-- container end --> */}
                </div>
                {/* <!-- scroll frame end --> */}
              </div>
              {/* <!-- swup container end --> */}
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
