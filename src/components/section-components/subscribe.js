import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { toast } from 'react-toastify';
import axios  from 'axios'

class Subscribe extends Component {
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

    return  <div className="newslatter-area ">
				  <div className="container">
				    <div className="newslatter-area-wrap ">
				      <div className="row">
				        <div className="col-xl-3 col-lg-6 col-md-5 offset-xl-2">
				          <div className="section-title mb-md-0">
				            <h2 className="title">Newsletter</h2>
				            <p style={{color : 'white'}}>Sign up to receive the best offers</p>
				          </div>
				        </div>
				        <div className="col-xl-4 col-lg-6 col-md-7 align-self-center offset-xl-1">
				          	<form>
					          <div className="input-group newslatter-wrap">
					            <div className="input-group-prepend">
					              <span className="input-group-text"><i className="fa fa-envelope" /></span>
					            </div>
					            <input name="email" type="text" className="form-control" value={this.state.email} onChange={e => this.setState({email:e.target.value})} placeholder="Email" />
					            <div className="input-group-append">
					             <button type="button" className="btn btn-yellow vaijesubmit" onClick={this.onSubscribe.bind(this)}>Subscribe</button>
					            </div>
					          </div>
				            </form>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>

        }
}

export default Subscribe