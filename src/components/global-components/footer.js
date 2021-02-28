import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Subscribe from '../section-components/subscribe';

class Footer_v1 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
  				<footer className="footer-area" style={{backgroundImage: 'url('+publicUrl+'assets/img/footer-background-img-1.jpg)'}}>

				  <div className="container">
				  <Subscribe />
					  
				    <div className="row">
				      <div className="col-lg-4 col-md-6">
				        <div className="footer-widget widget">
				          <div className="about_us_widget">
				            <Link to="/" className="footer-logo"> 
				              <img src={publicUrl+"assets/img/logo.png"} alt="footer logo" />
				            </Link>
				            <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.</p>
				            <ul className="social-icon">
				              <li>
				                <a className="facebook" href="https://www.facebook.com/flysquare.in/" target="_blank"><i className="fa fa-facebook  " /></a>
				              </li>
				             {/*  <li>
				                <a className="twitter" href="https://twitter.com/codingeeknet" target="_blank"><i className="fa fa-twitter  " /></a>
				              </li> */}
				              <li>
				                <a className="pinterest" href="https://instagram.com/flysquare.in?igshid=hf93jnwv6d6t" target="_blank"><i className="fa fa-instagram" /></a>
				              </li>
				            </ul>
				          </div>
				        </div>
				      </div>
				      <div className="col-lg-3 col-md-6">
				        <div className="footer-widget widget ">
				          <div className="widget-contact">
				            <h4 className="widget-title">Contact us</h4>
				            <p>
				              <i className="fa fa-map-marker" /> 
				              <span>FLYSQUARE<br/> E2/617,4TH Pusta | Sonia Vihar | East Delhi - 110094| INDIA</span>
				            </p>
				            <p className="location"> 
				              <i className="fa fa-envelope-o" />
				              <span>bookings@flysquare.in</span>
				            </p>
				            <p className="telephone">
				              <i className="fa fa-phone base-color" /> 
				              <span>
							  +919711677180, +919811984164
				              </span>
				            </p>
				          </div>
				        </div>
				      </div>
				      <div className="col-lg-2 col-md-6">
				        <div className="footer-widget widget">
				          <h4 className="widget-title">Quick Link</h4>
				          <ul className="widget_nav_menu  viaje-go-top">
				            <li><Link to="/">Home</Link></li>
				            <li><Link to="/about">About Us</Link></li>
				            <li><Link to="/destination-list">Destination</Link></li>
				            {/* <li><Link to="/tour-details">Tours</Link></li> */}
				            <li><Link to="/blog">Blog</Link></li>
				            <li><Link to="/contact">Contact</Link></li>
				          </ul>
				        </div>
				      </div>
				      <div className="col-lg-3 col-md-6">
				        <div className="footer-widget widget">
				          <h4 className="widget-title">Company</h4>
				          <ul className="widget_nav_menu  viaje-go-top">
				            <li><Link to="/cancellations">Cancellation and Refund Policy</Link></li>
				            <li><Link to="/privacy">Privacy policy</Link></li>
				            <li><Link to="/terms">Terms and conditions</Link></li>
				            <li><Link to="/covid">Covid guidelines</Link></li>
				          </ul>
				        </div>
				      </div>
				    </div>
				  </div>
				  <div className="copyright-inner">
				    <div className="copyright-text">
				      © FlySquare 2021, All rights reserved. {/* Powered with by <a href="https://codingeek.net/" target="_blank"><i className="fa fa-heart" /><span>Codingeek.</span></a> */}
				    </div>
				  </div>
				</footer>


        )
    }
}


export default Footer_v1