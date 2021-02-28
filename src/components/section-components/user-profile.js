import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Input from '../ui/input/input';
import {toast} from 'react-toastify';  
import axios  from 'axios'
import { useTable } from 'react-table'
import OrderList from './OrderList';
import LeadList from './LeadList';

class UserProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form : {
				firstname: {
					elementType: 'input',
					elementConfig: {
						type: 'text',
						placeholder: ''
					},
					label:'First Name',
					value: localStorage.getItem('firstName'),
					classSize: 'col-md-6',
					validation: {
						required: true
					},
					valid: true,
					touched: true
				},
				lastname: {
					elementType: 'input',
					elementConfig: {
						type: 'text',
						placeholder: ''
					},
					label:'Last Name',
					value: localStorage.getItem('lastName'),
					classSize: 'col-md-6',
					validation: {
						required: true
					},
					valid: true,
					touched: true
				},
				phone: {
					elementType: 'input',
					elementConfig: {
						type: 'text',
						placeholder: ''
					},
					label:'Phone',
					value: localStorage.getItem('phone'),
					classSize: 'col-md-6',
					validation: {
						required: true,
						minLength: true
					},
					valid: true,
					touched: true
				},
				email: {
					elementType: 'input',
					elementConfig: {
						type: 'email',
						placeholder: ''
					},
					label:'Email',
					value: localStorage.getItem('email'),
					classSize: 'col-md-6',
					validation: {
						required: true
					},
					valid: true,
					touched: true
				},
				country: {
					elementType: 'input',
					elementConfig: {
					type: 'text',
					placeholder: ''
					},
					label:'Country',
					value: localStorage.getItem('country'),
					classSize: 'col-md-6',
					validation: {
					required: true
					},
					valid: true,
					touched: true
				}
			},
      		formIsValid: true,
			formpass : {
				oldPassword: {
					elementType: 'input',
					elementConfig: {
						type: 'text',
						placeholder: ''
					},
					label:'Old Password',
					value: '',
					classSize: 'col-md-7',
					validation: {
						required: true
					},
					valid: false,
					touched: false
				},
				password: {
					elementType: 'input',
					elementConfig: {
						type: 'text',
						placeholder: ''
					},
					label:'New Password',
					value: '',
					classSize: 'col-md-7',
					validation: {
						required: true
					},
					valid: false,
					touched: false
				},
				passwordConfirm: {
					elementType: 'input',
					elementConfig: {
						type: 'text',
						placeholder: ''
					},
					label:'Confirm New Password',
					value: '',
					classSize: 'col-md-7',
					validation: {
						required: true,
						minLength: true
					},
					valid: false,
					touched: false
				}
			},
      		formpassIsValid: false
	   }
	}
	
	checkValidation(value, rules) {
		let isValid = true;
		if (!rules) {
		  return true;
		}
		if (rules.required) {
		  isValid = value.trim() !== '' && isValid;
		}
		if (rules.minLength) {
		  isValid = value.length >= rules.minLength  && isValid;
		}
		if (rules.maxLength) {
		  isValid = value.length <= rules.maxLength  && isValid;
		}
		return isValid;
	  }
	  inputBlurHandler(event,key) {
		const updatedForm = {
		  ...this.state.form
		}
		const updatedFormElement = {
		  ...updatedForm[key]
		};
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = this.checkValidation(updatedFormElement.value, updatedFormElement.validation);
		updatedFormElement.touched = true;
		updatedForm[key] = updatedFormElement;
	
		let formIsValid = true;
		for (let ele in updatedForm) {
		  formIsValid = updatedForm[ele].valid && formIsValid;
		}
		this.setState({form: updatedForm, formIsValid: formIsValid});
	  }
	  inputPassBlurHandler(event,key) {
		const updatedForm = {
		  ...this.state.formpass
		}
		const updatedFormElement = {
		  ...updatedForm[key]
		};
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = this.checkValidation(updatedFormElement.value, updatedFormElement.validation);
		updatedFormElement.touched = true;
		updatedForm[key] = updatedFormElement;
	
		let formIsValid = true;
		for (let ele in updatedForm) {
		  formIsValid = updatedForm[ele].valid && formIsValid;
		}
		this.setState({formpass: updatedForm, formpassIsValid: formIsValid});
	  }
	  inputChangedHandler(event,key){
		const updatedForm = {
		  ...this.state.form
		}
		const updatedFormElement = {
		  ...updatedForm[key]
		};
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = this.checkValidation(updatedFormElement.value, updatedFormElement.validation);
		updatedFormElement.touched = true;
		updatedForm[key] = updatedFormElement;
	
		let formIsValid = true;
		for (let ele in updatedForm) {
		  formIsValid = updatedForm[ele].valid && formIsValid;
		}
		this.setState({form: updatedForm, formIsValid: formIsValid});
	  }
	  inputPassChangedHandler(event,key){
		const updatedForm = {
		  ...this.state.formpass
		}
		const updatedFormElement = {
		  ...updatedForm[key]
		};
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = this.checkValidation(updatedFormElement.value, updatedFormElement.validation);
		updatedFormElement.touched = true;
		updatedForm[key] = updatedFormElement;
	
		let formIsValid = true;
		for (let ele in updatedForm) {
		  formIsValid = updatedForm[ele].valid && formIsValid;
		}
		this.setState({formpass: updatedForm, formpassIsValid: formIsValid});
	  }
	 handleSubmit(event) {
		event.preventDefault();
		
		let formData = {};
		for (let ele in this.state.form) {
			if(ele != 'email'){
				formData[ele] = this.state.form[ele].value;
			}
		}
		const $ = window.$;
					var preLoder = $("#preloader");
					preLoder.fadeIn(0);
			
			const headers = {
			  'Content-Type': 'application/json',
			  'Authorization': `Bearer ${localStorage.getItem('token')}`
			}
					axios.patch(process.env.REACT_APP_CLIENT_ID+"auth/users/updateme",formData, { headers: headers})
					.then(response => {
						localStorage.setItem('firstName',response.data.data.user.firstName);
						localStorage.setItem('lastName',response.data.data.user.lastName);
						localStorage.setItem('email',response.data.data.user.email);
						localStorage.setItem('phone',response.data.data.user.phone);
						localStorage.setItem('country',response.data.data.user.country);
						toast('Profile Updated Successfully!') ;
						preLoder.fadeOut(0);
					})
					.catch(error => {
						console.log(error);
						preLoder.fadeOut(0);
			  			toast('Something wrong, please try again!');
					})
	  }
	  handlePassSubmit() {
		//event.preventDefault();
		
		let formData = {};
		for (let ele in this.state.formpass) {
		  formData[ele] = this.state.formpass[ele].value;
		}
		console.log(formData);
	
		const $ = window.$;
					var preLoder = $("#preloader");
					preLoder.fadeIn(0);
			
			const headers = {
			  'Content-Type': 'application/json',
			  'Authorization': `Bearer ${localStorage.getItem('token')}`
			}
					axios.patch(process.env.REACT_APP_CLIENT_ID+"auth/users/updatepassword",formData, { headers: headers})
					.then(response => {
						toast('Password Updated Successfully!') ;

						 const updatedForm = {
							...this.state.formpass
						}
						  let updatedFormElement = {
							...updatedForm['oldPassword']
						  };
						  updatedFormElement.value = '';
						  updatedForm['oldPassword'] = updatedFormElement;

						 updatedFormElement = {
							...updatedForm['password']
						  };
						  updatedFormElement.value = '';
						  updatedForm['password'] = updatedFormElement;

						 updatedFormElement = {
							...updatedForm['passwordConfirm']
						  };
						  updatedFormElement.value = '';
						  updatedForm['passwordConfirm'] = updatedFormElement;
					  
						  this.setState({formpass: updatedForm, formpassIsValid: false});
						
						preLoder.fadeOut(0);
					})
					.catch(error => {
						console.log(error);
						preLoder.fadeOut(0);
			  toast('Something wrong, please try again!');
					})
	  }
	logout() {
		localStorage.clear();
		window.location.replace("/");
	}

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
		let formElementArray = [];
        for (let key in this.state.form) {
          formElementArray.push({
            id: key,
            config: this.state.form[key]
          })
        }
		let formPassElementArray = [];
        for (let key in this.state.formpass) {
			formPassElementArray.push({
            id: key,
            config: this.state.formpass[key]
          })
        }

    return  <div className="user-profile-area pd-top-120">
			  <div className="container">
			    <div className="row">
			      <div className="col-xl-10 col-lg-12">
			        <div className="row">
			          <div className="col-lg-4">
			            <ul className="nav nav-tabs tp-tabs style-two">
			              <li className="nav-item">
			                <a className="nav-link active" data-toggle="tab" href="#tabs_1"><i className="fa fa-user" />Profile</a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" data-toggle="tab" href="#tabs_2"><i className="fa fa-check-square-o" />Verifications</a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" data-toggle="tab" href="#tabs_3"><i className="fa fa-cog" />Change Password</a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" data-toggle="tab" href="#tabs_4"><i className="fa fa-recycle" />Enquiry</a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" data-toggle="tab" href="#tabs_5"><i className="fa fa-credit-card-alt" />Orders</a>
			              </li>
			              {/* <li className="nav-item">
			                <a className="nav-link" data-toggle="tab" href="#tabs_6"><i className="fa fa-star-o" />Reviews</a>
			              </li> */}
			              <li className="text-center">
			                <button className="btn btn-yellow" onClick={this.logout.bind(this)}><i className="fa fa-sign-in" aria-hidden="true" /> <span>Log Out</span></button>
			              </li>
			            </ul>
			          </div>
			          <div className="col-xl-7 col-lg-8 offset-xl-1">
			            <div className="tab-content user-tab-content">
			              <div className="tab-pane fade show active" id="tabs_1">
			                <div className="user-details">
			                  <h3 className="user-details-title">Profile</h3>
			                  {/* <div className="tp-img-upload"> */}
			                   {/*  <div className="tp-avatar-preview">
			                      <div id="tp_imagePreview" style={{backgroundImage: 'url('+publicUrl+'assets/img/team/1.png)'}}>
			                      </div>
			                    </div> */}
			                    {/* <div className="tp-avatar-edit"> */}
			                      {/* <input type="file" id="tp_imageUpload" accept=".png, .jpg, .jpeg" />
			                      <label className="btn btn-transparent" htmlFor="tp_imageUpload"><i className="fa fa-picture-o" />Change Photo</label> */}
			                      {/* <h4 className="name">{this.state.username}</h4>
			                    </div> */}
			                 {/*  </div> */}
			                  <form className="tp-form-wrap" onSubmit={this.handleSubmit.bind(this)}>
			                    <div className="row">
			                     {/*  <div className="col-md-6">
			                        <label className="single-input-wrap style-two">
			                          <span className="single-input-title">First Name</span>
			                          <input type="text" name="first-name" />
			                        </label>
			                      </div> */}
								  {
                            formElementArray.map(formElement => (
                                <div className={formElement.config.classSize} key={formElement.id}>
                                  <label className="single-input-wrap style-two">
                                    <span className="single-input-title">{formElement.config.label}</span>
                                    <Input elementType={formElement.config.elementType} elementConfig={formElement.config.elementConfig} 
                                      value={formElement.config.value} changed={(e) => this.inputChangedHandler(e, formElement.id)} 
                                      blurred={(e) => this.inputBlurHandler(e, formElement.id)}></Input>
                                     {!formElement.config.valid && formElement.config.touched &&
                                    <span className='error text-danger'>Please enter {formElement.id}</span>}
                                  </label>
                                 
                                </div>
                            ))
                          }
			                     {/*  <div className="col-md-6">
			                        <label className="single-input-wrap style-two">
			                          <span className="single-input-title">Last Number</span>
			                          <input type="text" name="last-name"/>
			                        </label>
			                      </div> */}
			                     {/*  <div className="col-lg-12">
			                        <label className="single-input-wrap style-two">
			                          <span className="single-input-title">Tell us about yourself.</span>
			                          <textarea defaultValue={""} name="message" />
			                        </label>
			                      </div> */}
								  {/*  <div className="col-md-6">
			                        <label className="single-input-wrap style-two">
			                          <span className="single-input-title">Email Address</span>
			                          <input type="text" name="email" />
			                        </label>
			                      </div> */}
			                     {/*  <div className="col-md-6">
			                        <label className="single-input-wrap style-two">
			                          <span className="single-input-title">Phone No</span>
			                          <input type="text" name="phone" />
			                        </label>
			                      </div>
			                      <div className="col-md-6">
			                        <label className="single-input-wrap style-two">
			                          <span className="single-input-title">Country</span>
			                          <input type="text"  name="country"/>
			                        </label>
			                      </div> */}
			                      <div className="col-12">
			                        <input className="btn btn-yellow mt-3 text-center" disabled={!this.state.formIsValid} type="submit" />
			                      </div>
			                    </div>
			                  </form>
			                </div>
			              </div>
			              <div className="tab-pane fade" id="tabs_2">
			                <div className="user-verification">
			                  <div className="row">
			                    <div className="col-lg-7">
			                      <h3 className="user-details-title">Verification</h3>
			                      <div className="notice"><i className="fa fa-exclamation-triangle" /> Your email hasn't been verified.</div>
			                      <span>imshuvo97@gmail.com</span>
			                    </div>
			                  </div>
			                </div>
			              </div>
			              <div className="tab-pane fade" id="tabs_3">
			                <div className="user-settings">
			                  <h3 className="user-details-title">Change Password</h3>
			                  <div className="row">
			                   {/*  <div className="col-lg-7">
			                      <label className="single-input-wrap style-two">
			                        <input type="text" placeholder="Old password" />
			                      </label>
			                    </div> */}
								{
                            formPassElementArray.map(formElement => (
                                <div className={formElement.config.classSize} key={formElement.id}>
                                  <label className="single-input-wrap style-two">
                                    <span className="single-input-title">{formElement.config.label}</span>
                                    <Input elementType={formElement.config.elementType} elementConfig={formElement.config.elementConfig} 
                                      value={formElement.config.value} changed={(e) => this.inputPassChangedHandler(e, formElement.id)} 
                                      blurred={(e) => this.inputPassBlurHandler(e, formElement.id)}></Input>
                                     {!formElement.config.valid && formElement.config.touched &&
                                    <span className='error text-danger'>Please enter {formElement.config.label}</span>}
                                  </label>
                                 
                                </div>
                            ))
                          }
			                    {/* <div className="col-lg-7">
			                      <label className="single-input-wrap style-two">
			                        <input type="text" placeholder="New password" />
			                      </label>
			                    </div>
			                    <div className="col-lg-7">
			                      <label className="single-input-wrap style-two">
			                        <input type="text" placeholder="Confirm New password" />
			                      </label>
			                    </div> */}
								<div className="col-12">
			                        <button className="btn btn-yellow mt-3 text-center"  disabled={!this.state.formpassIsValid} type="button" onClick={this.handlePassSubmit.bind(this)}>Submit</button>
			                    </div>
			                  </div>
			                </div>
			              </div>
			              <div className="tab-pane fade" id="tabs_4">
			                <div className="user-recent-view">
			                  <h3 className="user-details-title">Enquiry</h3>
			                  <div className="row">
			                    {/* <div className="col-sm-6">
			                      <div className="single-destinations-list style-two">
			                        <div className="thumb">
			                          <img src={publicUrl+"assets/img/destination-list/4.png"} alt="list" />
			                        </div>
			                        <div className="details">
			                          <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Maldives</p>
			                          <h4 className="title"><a href="#">Hurawalhi Island</a></h4>
			                          <p className="content">7Days Tour on 2 person</p>
			                          <div className="tp-price-meta">
			                            <h2>620 <small>$</small></h2>
			                          </div>
			                        </div>
			                      </div>
			                    </div> */}
			                    {/* <div className="col-sm-6">
			                      <div className="single-destinations-list style-two">
			                        <div className="thumb">
			                          <img src={publicUrl+"assets/img/destination-list/5.png"} alt="list" />
			                        </div>
			                        <div className="details">
			                          <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Indonesia</p>
			                          <h4 className="title"><a href="#">Bali Province</a></h4>
			                          <p className="content">4days 2 person</p>
			                          <div className="tp-price-meta">
			                            <h2>780 <small>$</small></h2>
			                          </div>
			                        </div>
			                      </div>
			                    </div> */}
								<LeadList/>
			                  </div>
			                
							</div>
			              </div>
			              <div className="tab-pane fade" id="tabs_5">
			                <div className="user-payment-method">
			                  <div className="location-review-area">
			                    <h3 className="user-details-title">Orders</h3>
			                   {/*  <form className="tp-form-wrap bg-gray tp-form-wrap-one">
			                      <div className="row">
			                        <div className="col-lg-7">
			                          <label className="single-input-wrap">
			                            <span className="single-input-title">Credit card number</span>
			                            <input type="text" />
			                          </label>
			                          <label className="single-input-wrap">
			                            <span className="single-input-title">Card holder name</span>
			                            <input type="text" />
			                          </label>
			                          <label className="single-input-wrap">
			                            <span className="single-input-title">Expiry date (Example: 01/17)</span>
			                            <input type="text" />
			                          </label>
			                          <label className="single-input-wrap">
			                            <span className="single-input-title">Issuing bank</span>
			                            <input type="text" />
			                          </label>
			                        </div>
			                        <div className="col-lg-5">
			                          <div className="user-payment-card">
			                            <img src={publicUrl+"assets/img/others/16.png"} alt="img" />
			                            <span>Available payment method:</span>
			                            <div className="payment-card">
			                              <i className="fa fa-cc-paypal" />
			                              <i className="fa fa-cc-visa" />
			                              <i className="fa fa-cc-mastercard" />
			                              <i className="fa fa-credit-card-alt" />
			                            </div>
			                            <a className="btn btn-transparent" href="#">Cancel</a>
			                            <a className="btn btn-yellow" href="#">Save</a>
			                          </div>
			                        </div>
			                      </div>
			                    </form> */}
			                  <OrderList/>
							  </div>
			                </div>
			              </div>
			              <div className="tab-pane fade" id="tabs_6">
			                <div className="user-tour-details">
			                  <h3 className="user-details-title">Reviews</h3>
			                  <span className="user-tour-details-title">Reviews About You</span>
			                  <span>| Reviews By You</span>
			                  <div className="comments-area tour-details-review-area">
			                    <ul className="comment-list mb-0">
			                      <li>
			                        <div className="single-comment-wrap">
			                          <div className="thumb">
			                            <img src={publicUrl+"assets/img/client/2.png"} alt="img" />
			                          </div>
			                          <div className="content">
			                            <h4 className="title">Tyler Bailey</h4>
			                            <span className="date">13 August 2019</span>
			                            <div className="tp-review-meta">
			                              <i className="ic-yellow fa fa-star" />
			                              <i className="ic-yellow fa fa-star" />
			                              <i className="ic-yellow fa fa-star" />
			                              <i className="ic-yellow fa fa-star" />
			                              <i className="ic-yellow fa fa-star" />
			                            </div>
			                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
			                          </div>
			                        </div>
			                      </li>
			                    </ul>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div> 
			    </div>
			  </div>
			</div>

        }
}

export default UserProfile