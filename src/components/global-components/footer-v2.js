import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios  from 'axios'

class Footer_v2 extends Component {
	constructor() {
		super();
		this.state = {
			email: ''
		}
	}
	onSubscribe() {
		if (this.ValidateEmail(this.state.email)) {
				const $ = window.$;
				var preLoder = $("#preloader");
				preLoder.fadeIn(0);
				let data = {
					'email': this.state.email
				}
				axios.post(process.env.REACT_APP_CLIENT_ID+"newsletter",data)
				.then(response => {
					console.log(response);
					if(response.data.isSuccess) {
						toast('Signed Up For Newsletter Successfully!', { autoClose: 2000 });
					}
					preLoder.fadeOut(0);
				})
				.catch(error => {
					console.log(error);
					preLoder.fadeOut(0);
					toast('Something Wrong, Please try again!', { autoClose: 2000 });
				})
		} else {
			toast('Please enter valid email!', { autoClose: 2000 });
		}
	}
	ValidateEmail(mail) {
		if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(mail))
		{
			return (true)
		}
			return (false)
		}
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
  				<footer className="footer-area style-two">
				  <div className="container">
				    <div className="row justify-content-center">
				      <div className="col-xl-5 col-lg-7">
				        <div className="section-title mb-4 text-center">
				          <h2 className="title">Newsletter</h2>
				          <p>Sign up to receive the best offers</p>
				        </div>
				        <div className="widget input-group newslatter-wrap">
				          <div className="input-group-prepend">
				            <span className="input-group-text"><i className="fa fa-envelope" /></span>
				          </div>
				          <input type="text" name="email" value={this.state.email} onChange={e => this.setState({email:e.target.value})} className="form-control" placeholder="Email" />
				          <div className="input-group-append">
				            <button className="btn btn-yellow" type="button" onClick={this.onSubscribe.bind(this)}>Subscribe</button>
				          </div>
				        </div>
				        <div className="about_us_widget text-center">
				          <Link to="/" className="footer-logo"> 
				            <img src={publicUrl+"assets/img/sticky-logo.png"} alt="footerlogo" />
				          </Link>
				          <p>Be the first to receive exclusive offers & latest news on our product and services directly in your inbox</p>
				        </div>
				      </div>  
				    </div>
				    <div className="row justify-content-center">
				      <div className="col-xl-9">
				        <div className="footer-widget widget text-center">
				          <div className="widget-contact d-inline-flex">
				            <p className="telephone text-left">
				              <i className="fa fa-phone base-color" /> 
				              <span>
							   +919711677180,<br/> +919811984164
				              </span>
				            </p>
				            <p className="location text-left"> 
				              <i className="fa fa-envelope-o" />
				              <span>bookings@flysquare.in</span>
				            </p>
				            <p className="text-left">
				              <i className="fa fa-map-marker" /> 
				              <span>FLYSQUARE<br/> E2/617,4TH Pusta | Sonia Vihar<br/> | East Delhi - 110094| INDIA</span>
				            </p>
				          </div>
				        </div>
				        <div className="footer-widget widget text-center">
				          <ul className="widget_nav_menu text-center viaje-go-top">
				            <li><Link to="/">Home</Link></li>
				            <li><Link to="/about">About Us</Link></li>
				            <li><Link to="/destination-list">Destination</Link></li>
				            {/* <li><Link to="/tour-details">Tours</Link></li> */}
				            <li><Link to="/blog">Blog</Link></li>
				            <li><Link to="/contact">Contact</Link></li>
				          </ul>
				        </div>
						<div className="footer-widget widget text-center">
				          <ul className="widget_nav_menu text-center viaje-go-top">
				            <li><Link to="/cancellations">Cancellation and Refund Policy</Link></li>
				            <li><Link to="/privacy">Privacy policy</Link></li>
				            <li><Link to="/terms">Terms and conditions</Link></li>
				            <li className="mt-2"><Link to="/covid">Covid guidelines</Link></li>
				          </ul>
				        </div>
				      </div> 
				    </div>
				  </div>
				  <div className="copyright-inner border-tp-solid">
				    <div className="container">
				      <div className="row">
				        <div className="col-lg-8 col-md-9">
				          <div className="copyright-text text-left">
						  © FlySquare 2021, All rights reserved. {/* Powered with by <a href="https://codingeek.net/" target="_blank"><i className="fa fa-heart" /><span>Codingeek.</span></a> */}
				          </div>
				        </div>
				        <div className="col-lg-4 col-md-3">
				          <ul className="social-icon float-lg-right">
				            <li>
				              <a className="facebook" href="https://www.facebook.com/flysquare.in/ " target="_blank"><i className="fa fa-facebook  " /></a>
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
				  </div>
				</footer>

        )
    }
}


export default Footer_v2