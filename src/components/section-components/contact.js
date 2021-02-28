import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import axios  from 'axios'
import Input from '../ui/input/input';
import {toast} from 'react-toastify';  

class Contact extends Component {
  constructor(props) {
		super(props);
		this.state = {
			form : {
          name: {
              elementType: 'input',
              elementConfig: {
                type: 'text',
                placeholder: ''
              },
              label:'Name',
              value: '',
              classSize: 'col-md-6',
              validation: {
                required: true
              },
              valid: false,
              touched: false
          },
          contact: {
              elementType: 'input',
              elementConfig: {
                type: 'text',
                placeholder: ''
              },
              label:'Contact',
              value: '',
              classSize: 'col-md-6',
              validation: {
                required: true,
                minLength: true
              },
              valid: false,
              touched: false
          },
          email: {
              elementType: 'input',
              elementConfig: {
                type: 'email',
                placeholder: ''
              },
              label:'Email',
              value: '',
              classSize: 'col-md-12',
              validation: {
                required: true
              },
              valid: false,
              touched: false
          },
          message: {
            elementType: 'textarea',
            elementConfig: {
              type: 'text',
              placeholder: ''
            },
            label:'Message',
            value: '',
            classSize: 'col-md-12',
            validation: {
              required: true
            },
            valid: false,
            touched: false
        }
      },
      formIsValid: false
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
  handleSubmit(event) {
    event.preventDefault();
    
    let formData = {};
    for (let ele in this.state.form) {
      formData[ele] = this.state.form[ele].value;
    }
    console.log(formData);

    const $ = window.$;
				var preLoder = $("#preloader");
				preLoder.fadeIn(0);
		
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
				axios.post(process.env.REACT_APP_CLIENT_ID+"contact-us",formData, { headers: headers})
				.then(response => {
					toast('Message Sent Successfully!') ;
					preLoder.fadeOut(0);
					this.close();
				})
				.catch(error => {
					console.log(error);
					preLoder.fadeOut(0);
          toast('Something wrong, please try again!');
				})
  }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let formElementArray = [];
        for (let key in this.state.form) {
          formElementArray.push({
            id: key,
            config: this.state.form[key]
          })
        }

    return	<div>
              <div className="contact-area pd-top-108">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-6">
                      <div className="section-title text-lg-center text-left">
                        <h2 className="title">Get In Touch!</h2>
                        <p>We are working 24x7, 7 days a week.</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-5 col-lg-6">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/Flysquare_Logo.png"} alt="img" />
                      </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6">
                      <form className="tp-form-wrap" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="row">
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
                              <span className="single-input-title">Phone</span> */}
                              {/* <input type="text" name="contact" value={this.state.contact} onChange={e => this.setState({contact:e.target.value})}/> */}
                            {/*   <Input inputtype="input" name="name" value={this.state.contact} onChange={e => this.setState({contact:e.target.value})}></Input>
                            </label>
                          </div>
                          <div className="col-lg-12">
                            <label className="single-input-wrap style-two">
                              <span className="single-input-title">Email</span>
                              {/* <input type="text" name="email" value={this.state.email} onChange={e => this.setState({email:e.target.value})}/> */}
                             {/*  <Input inputtype="input" name="name" value={this.state.email} onChange={e => this.setState({email:e.target.value})}></Input>
                            </label>
                          </div>
                          <div className="col-lg-12">
                            <label className="single-input-wrap style-two">
                              <span className="single-input-title">Message</span> */}
                              {/* <textarea name="message" value={this.state.message} onChange={e => this.setState({message:e.target.value})}/> */}
                              {/* <Input inputtype="textarea" name="name" value={this.state.message} onChange={e => this.setState({name:e.target.value})}></Input>
                            </label>
                          </div> */}
                          <div className="col-12">
                            <button type="submit" className="btn btn-yellow" disabled={!this.state.formIsValid}>Send Message</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-info-area pd-top-120">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8 order-lg-12">
                      <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55137.3051325513!2d-97.76825118838518!3d30.263256963734733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sbd!4v1572085289886!5m2!1sen!2sbd" />
                    </div>
                    <div className="col-xl-3 col-lg-4 order-lg-1">
                      <div className="contact-info bg-gray">
                        <p>
                          <i className="fa fa-map-marker" /> 
                          <span>FLYSQUARE, E2/617,4TH Pusta | Sonia Vihar | East Delhi - 110094| INDIA</span>
                        </p>
                        <p>
                          <i className="fa fa-globe" /> 
                          <span>Web: flysquare.in</span>
                        </p>
                        <p>
                          <i className="fa fa-envelope" /> 
                          <span>Email: <span>bookings@flysquare.in</span></span>
                        </p>
                        <p>
                          <i className="fa fa-phone" /> 
                          <span>
                            Tel: <span>(+91) 9711677180</span>, <br />
                            <span>(+91) 9811984164</span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        }
}

export default Contact