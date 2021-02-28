import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import dataService from '../shared/dataService';
import axios  from 'axios'
import {toast} from 'react-toastify';  

const validEmailRegex = RegExp(
	/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
const validateForm = errors => {
	let valid = true;
	Object.values(errors).forEach(val => val.length > 0 && (valid = false));
	return valid;
  };
class ModalLogin extends React.Component {
	constructor(props) {
		super(props);
		
        this.state = {
			isLogin: true,
			email: '',
			password: '',
			firstName: '',
			lastName: '',
			errors: {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
			},
			loginFailed: ''
	   }
		this.divRef = React.createRef();
	}
	close = () =>{
        dataService.setData(false);
	}
	signUpCheck() {
		this.setState({isLogin: false})
		//console.log(this.state.isLogin);
	}
	loginCheck() {
		this.setState({isLogin: true})
	}
	handleFNameChange(event) {
		let errors = this.state.errors;
		errors.firstName = 
		event.target.value.length < 1
            ? 'First Name is required'
            : '';
		this.setState({firstName: event.target.value});
	}
	handleLNameChange(event) {
		let errors = this.state.errors;
		errors.lastName = 
		event.target.value.length < 1
            ? 'Last Name is required'
            : '';
		this.setState({lastName: event.target.value});
	}
	handleEmailChange(event) {
		this.setState({loginFailed: ''});
		let errors = this.state.errors;
		errors.email = 
		event.target.value.length < 1
            ? 'Email is required'
			: '';
		errors.email = 
			validEmailRegex.test(event.target.value)
			  ? ''
			  : 'Email is invalid!';
		this.setState({email: event.target.value});
	}
	handlePasswordChange(event) {
		this.setState({loginFailed: ''});
		let errors = this.state.errors;
		errors.password = 
		event.target.value.length < 1
            ? 'Password is required'
			: '';
		errors.password = 
			event.target.value.length < 8
			  ? 'Password must be at least 5 characters long!'
			  : '';
		this.setState({password: event.target.value});
	}
	handleSubmit(event) {
		if(validateForm(this.state.errors)) {
		if(this.state.isLogin){
			if(this.state.email.length < 1 || this.state.password.length < 1) {
				let errors = this.state.errors;
				errors.email = 
				this.state.email.length < 1
					? 'Email is required'
					: '';
				this.setState({email: this.state.email});
				errors.password = 
				this.state.email.length < 1
					? 'Password is required'
					: '';
				this.setState({password: this.state.password});
			} else {
				console.log('3');
				const $ = window.$;
				var preLoder = $("#preloader");
				preLoder.fadeIn(0);
				let loginData = {
					'email': this.state.email,
					'password': this.state.password
				}
				axios.post(process.env.REACT_APP_CLIENT_ID+"auth/users/login",loginData)
				.then(response => {
					console.log(response);
					if(response.data.isSuccess) {
						toast('Login Successfully!');
						localStorage.setItem('token',response.data.data.token);
						localStorage.setItem('firstName',response.data.data.user.firstName);
						localStorage.setItem('lastName',response.data.data.user.lastName);
						localStorage.setItem('email',response.data.data.user.email);
						if(response.data.data.user.phone)
							localStorage.setItem('phone',response.data.data.user.phone);
						if(response.data.data.user.country)
							localStorage.setItem('country',response.data.data.user.country);
						this.setState({email: '', password: ''});
						window.location.reload();
					}
					preLoder.fadeOut(0);
					this.close();
				})
				.catch(error => {
					console.log(error);
					preLoder.fadeOut(0);
					this.setState({loginFailed: 'User Data Invalid!'});
				})
			}
		} else {
			if(this.state.firstName.length < 1 || this.state.lastName.length < 1 || this.state.email.length < 1 || this.state.password.length < 1) {
				let errors = this.state.errors;
				errors.firstName = 
				this.state.firstName.length < 1
					? 'First Name is required'
					: '';
				this.setState({firstName: this.state.firstName});
				errors.lastName = 
				this.state.lastName.length < 1
					? 'Last Name is required'
					: '';
				this.setState({email: this.state.lastName});
				errors.email = 
				this.state.email.length < 1
					? 'Email is required'
					: '';
				this.setState({email: this.state.email});
				errors.password = 
				this.state.email.length < 1
					? 'Password is required'
					: '';
				this.setState({password: this.state.password});
			} else {
				const $ = window.$;
				var preLoder = $("#preloader");
				preLoder.fadeIn(0);
				let signUpData = {
					'email': this.state.email,
					'password': this.state.password,
					"role": "user",
					"firstName": this.state.firstName,
					"lastName": this.state.lastName,
					"passwordConfirm": this.state.password
				}
				axios.post(process.env.REACT_APP_CLIENT_ID+"auth/users/signup",signUpData)
				.then(response => {
					console.log(response);
					toast('Sign Up Successfully!') ;
					if(response.data.isSuccess) {
						//localStorage.setItem('token',response.data.data.token);
						this.setState({email: '', password: '',firstName:'',lastName: ''});
						window.location.reload();
					}
					preLoder.fadeOut(0);
					this.close();
				})
				.catch(error => {
					console.log(error);
					preLoder.fadeOut(0);
					this.setState({loginFailed: 'User Data Invalid!'});
				})
			}
		}
		}else{
			console.info('Invalid Form')
		}
		event.preventDefault();
	}

    render() {
		const { isLogin,errors } = this.state
    return  <div className="modal" ref={this.divRef} >
				<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
					<h4 className="modal-title">Login & Sign Up</h4>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.close.bind(this)}><span aria-hidden="true">&times;</span></button>
					</div>
					<div className="modal-body">
					{this.state.loginFailed.length > 0 && 
					<div className="alert alert-danger" role="alert">
					{this.state.loginFailed}
					</div>}
					<form className="tp-form-wrap" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="row">
						{
						 !isLogin ?
						 <>
						<div className="col-lg-6">
                            <label className="single-input-wrap style-two">
                              <span className="single-input-title">First Name</span>
                              <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleFNameChange.bind(this)} onBlur={this.handleFNameChange.bind(this)} />
							  {errors.firstName.length > 0 && 
               					<span className='error text-danger'>{errors.firstName}</span>}
							</label>
                          </div>
						  <div className="col-lg-6">
                            <label className="single-input-wrap style-two">
                              <span className="single-input-title">Last Name</span>
                              <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleLNameChange.bind(this)} onBlur={this.handleLNameChange.bind(this)} />
							  {errors.lastName.length > 0 && 
               					<span className='error text-danger'>{errors.lastName}</span>}
							</label>
                          </div>
						  </>
						  :
						  null
						}
                          <div className="col-lg-12">
                            <label className="single-input-wrap style-two">
                              <span className="single-input-title">Email</span>
                              <input type="text" name="email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} onBlur={this.handleEmailChange.bind(this)}/>
							  {errors.email.length > 0 && 
               					<span className='error text-danger'>{errors.email}</span>}
							</label>
                          </div>
                          <div className="col-lg-12">
                            <label className="single-input-wrap style-two">
                              <span className="single-input-title">Password</span>
                              <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} onBlur={this.handlePasswordChange.bind(this)}/>
							  {errors.password.length > 0 && 
               					<span className='error text-danger'>{errors.password}</span>}
							</label>
                          </div>
                        </div>
                     
					  {
						 isLogin ?
						 (
							<> Not a Member?  <a href="#" onClick={this.signUpCheck.bind(this)} className="text-warning" role="button">Sign Up</a></>
						) 
						 : 
						 (<> Already a Member?  <a href="#" onClick={this.loginCheck.bind(this)} className="text-warning" role="button">Login</a></>)
					  }
					  <div className="modal-footer">
					<button type="button" className="btn btn-default" data-dismiss="modal"  onClick={this.close.bind(this)}>Close</button>
					{
						isLogin ?
						(<button type="submit" className="btn btn-yellow">Login</button>)
						:
						(<button type="submit" className="btn btn-yellow">Sign Up</button>)
					}
					
					</div>
					  </form>
					</div>
					
				</div>
				</div>
			</div>
		}
		
		componentDidMount(){
			dataService.getData().subscribe(message => {
				//console.log("1",message.value);
				if (message.value) {
					this.divRef.current.style.display = 'block';
					this.divRef.current.className = 'modal show';
				} else {
					this.divRef.current.style.display = 'none';
					this.divRef.current.className = 'modal';
				}
			});
				
		}
	
}

export default ModalLogin