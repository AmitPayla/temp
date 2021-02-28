import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class About extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div className="about-section pd-top-80">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 align-self-center">
                    <div className="section-title mb-lg-0">
                      <h2 className="title">Lets Go Travel <br /> with Us</h2>
                      <p>Flysquare.in is a largest travel platform based in delhi as a B2B & B2C Company. We provide our customers efficient and effective services. We believe in building a relationship with our customers and try to stand out with our innovative and unique ideas. Our holiday packages are well made and hold a high reputation among customers who have been travelling with us. Our mission is to ensure that our customers get the best experience and make unforgettable memories with us with full satisfaction.
                      <br></br>Vision<br></br>
                      Flysquare is running based on its growth & opportunities and to become the top travel agency and to provide its services at their best
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5 offset-lg-2">
                    <div className="thumb about-section-right-thumb">
                      <img src={publicUrl+"assets/img/others/9.png"} alt="img" />
                      <img className="about-absolute-thumb" src={publicUrl+"assets/img/others/10.png"} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

        }
}

export default About