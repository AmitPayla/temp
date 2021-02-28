import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { toast } from 'react-toastify';
import axios  from 'axios'
import '../../index.css'
class Team extends Component {
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
    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="team-newslater-bg" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/4.png)'}}>
			  {/* team area end */}
			  <div className="team-area pd-top-70">
			    <div className="container">
			      <div className="row justify-content-center">
			        <div className="col-lg-6">
			          <div className="section-title text-center">
			            <h2 className="title">Our Team</h2>
			            <p>Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula. Quisque quis pharetra felis. Ut quis consequat orci, at consequat felis.</p>
			          </div>
			        </div>
			      </div>
			      <div className="row">
			        <div className="col-lg-3 col-sm-6">
			          <div className="single-team text-center">
			            <div className="thumb">
			              <img className="team-img" src={publicUrl+"assets/img/mukul.jpg"} alt="team" />
			            </div>
			            <h3 className="name"><a href="#">Mukul Sagwal</a></h3>
			            <span>Graphic Designer</span>
			            <ul className="team-social">
			              <li><a href="#"><i className="fa fa-facebook" /></a></li>
			              <li><a href="#"><i className="fa fa-twitter" /></a></li>
			              <li><a href="#"><i className="fa fa-instagram" /></a></li>
			              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
			            </ul>
			          </div>
			        </div>
			        <div className="col-lg-3 col-sm-6">
			          <div className="single-team text-center">
			            <div className="thumb">
			              <img className="team-img" src={publicUrl+"assets/img/Ayush.jpg"} alt="team" />
			            </div>
			            <h3 className="name"><a href="#">Ayush Gupta</a></h3>
			            <span>Destination Expert</span>
			            <ul className="team-social">
			              <li><a href="#"><i className="fa fa-facebook" /></a></li>
			              <li><a href="#"><i className="fa fa-twitter" /></a></li>
			              <li><a href="#"><i className="fa fa-instagram" /></a></li>
			              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
			            </ul>
			          </div>
			        </div>
			        <div className="col-lg-3 col-sm-6">
			          <div className="single-team text-center">
			            <div className="thumb">
			              <img className="team-img" src={publicUrl+"assets/img/shivika.jpg"} alt="team" />
			            </div>
			            <h3 className="name"><a href="#">Shivika Garg</a></h3>
			            <span>Marketing Head</span>
			            <ul className="team-social">
			              <li><a href="#"><i className="fa fa-facebook" /></a></li>
			              <li><a href="#"><i className="fa fa-twitter" /></a></li>
			              <li><a href="#"><i className="fa fa-instagram" /></a></li>
			              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
			            </ul>
			          </div>
			        </div>
			        <div className="col-lg-3 col-sm-6">
			          <div className="single-team text-center">
			            <div className="thumb">
			              <img className="team-img" src={publicUrl+"assets/img/hardik.jpg"} alt="team" />
			            </div>
			            <h3 className="name"><a href="#">Hardik Arora</a></h3>
			            <span>Destination Expert</span>
			            <ul className="team-social">
			              <li><a href="#"><i className="fa fa-facebook" /></a></li>
			              <li><a href="#"><i className="fa fa-twitter" /></a></li>
			              <li><a href="#"><i className="fa fa-instagram" /></a></li>
			              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
			            </ul>
			          </div>
			        </div>
					<div className="col-lg-3 col-sm-6">
			          <div className="single-team text-center">
			            <div className="thumb">
			              <img className="team-img" src={publicUrl+"assets/img/tarun.jpg"} alt="team" />
			            </div>
			            <h3 className="name"><a href="#">Tarun Aggarwal</a></h3>
			            <span>Sales VP</span>
			            <ul className="team-social">
			              <li><a href="#"><i className="fa fa-facebook" /></a></li>
			              <li><a href="#"><i className="fa fa-twitter" /></a></li>
			              <li><a href="#"><i className="fa fa-instagram" /></a></li>
			              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
			            </ul>
			          </div>
			        </div>
					<div className="col-lg-3 col-sm-6">
			          <div className="single-team text-center">
			            <div className="thumb">
			              <img className="team-img" src={publicUrl+"assets/img/team/4.png"} alt="team" />
			            </div>
			            <h3 className="name"><a href="#">Tulip Chatterjee</a></h3>
			            <span>Sales Team Lead</span>
			            <ul className="team-social">
			              <li><a href="#"><i className="fa fa-facebook" /></a></li>
			              <li><a href="#"><i className="fa fa-twitter" /></a></li>
			              <li><a href="#"><i className="fa fa-instagram" /></a></li>
			              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
			            </ul>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			  {/* team area end */}
			  {/* newslatter area Start */}
			  <div className="newslatter-area pd-top-80">
			    <div className="container">
			      <div className="newslatter-area-wrap border-tp-solid">
			        <div className="row">
			          <div className="col-xl-3 col-lg-6 col-md-5 offset-xl-2">
			            <div className="section-title mb-md-0">
			              <h2 className="title">Newsletter</h2>
			              <p>Sign up to receive the best offers</p>
			            </div>
			          </div>
			          <div className="col-xl-4 col-lg-6 col-md-7 align-self-center offset-xl-1">
			            <div className="input-group newslatter-wrap">
			              <div className="input-group-prepend">
			                <span className="input-group-text"><i className="fa fa-envelope" /></span>
			              </div>
			              <input type="text" className="form-control" value={this.state.email} onChange={e => this.setState({email:e.target.value})}  placeholder="Email" />
			              <div className="input-group-append">
			                <button className="btn btn-yellow" type="button" onClick={this.onSubscribe.bind(this)}>Subscribe</button>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			  {/* newslatter area End */}
			</div>

        }
}

export default Team