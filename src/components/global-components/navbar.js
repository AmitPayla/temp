import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalLogin from '../section-components/modalLogin';
import dataService from '../shared/dataService';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import "../../index.css"
import Search from "../section-components/search-v2.js"


class Navbar extends Component {

	constructor() {
		super();
		this.state = {
			isLogined: false,
			isModalOpen: false,
			nextPage : '',
			visible : true,
			loading : false
		}
	  }
	  handleToggleModal() {
		dataService.setData(true);
	  }
	componentDidMount(){
		if (localStorage.hasOwnProperty("token")) {
			this.setState({isLogined: true});
		} else {
			this.setState({isLogined: false});
		}
	}

		 openModal = () =>{
				this.setState({
					isModalOpen : true
				})
			}
		handleCancel = () =>{
			this.setState({
				isModalOpen : false
			})
		}

		handleOk = () =>{
			this.setState({
				nextPage : ''
			})
		}
	

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
		let anchor = '#'
		const { isLogined } = this.state
        return (
			<div>
            <nav className="navbar navbar-area navbar-expand-lg nav-style-01 viaje-go-top">
			  <div className="container nav-container">
			    <div className="responsive-mobile-menu">
			      <div className="mobile-logo">
			        <Link to="/">
			          <img src={publicUrl+"assets/img/sticky-logo.png"} alt={ imgattr } />
			        </Link>
			      </div>
			      <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#tp_main_menu" aria-expanded="false" aria-label="Toggle navigation">
			        <span className="navbar-toggle-icon">
			          <span className="line" />
			          <span className="line" />
			          <span className="line" />
			        </span>
			      </button>
			      <div className="nav-right-content">
			        <ul className="pl-0">
			          <li className="top-bar-btn-booking">
			            <button className="btn btn-yellow" onClick={() => this.handleToggleModal()}>Login/Sign Up<i className="fa fa-paper-plane" /></button>
			          </li>
			         {/*  <li className="tp-lang">
			            <div className="tp-lang-wrap">
			              <select className="select single-select">
			                <option value={1}>ENG</option>
			                <option value={2}>BAN</option>
			                <option value={3}>Chinese</option>
			                <option value={3}>Spanish</option>
			              </select>
			            </div>
			          </li> */}
			          <li className="search">
			            <i className="ti-search" />
			          </li>
			          <li className="notification">
					  {
							!isLogined ? 
							<a className="" role="button" onClick={() => this.handleToggleModal()}>
								<i className="fa fa-user-o" />
						  	</a>
							: (<Link className="btn btn-yellow" to="/user-profile">My Account<i className="fa fa-paper-plane" /></Link>)
						}
			           
			          </li>
			        </ul>

			      </div>
				  
			    </div>
			    <div className="collapse navbar-collapse" id="tp_main_menu">
			      <div className="logo-wrapper desktop-logo">
			        <Link to="/" className="main-logo">
			          <img src={publicUrl+"assets/img/logo.png"} alt="logo" />
			        </Link>
			        <Link to="/" className="sticky-logo">
			          <img src={publicUrl+"assets/img/sticky-logo.png"} alt="logo" />
			        </Link>
			      </div>
			      <ul className="navbar-nav">
			        <li>
			          <Link to="/">Home</Link>
			        </li>
			        <li>
			          <Link to="/about" >About Us</Link>
			        </li>
			        <li>
			          <Link to="/destination-list">Destination</Link>
			        </li>
			        <li>
			          <a href="https://www.google.com" target="_blank">Blog</a>
			        </li>
			        <li>
			          <Link to="/contact">Contact</Link>
			        </li>
			      </ul>
			    </div>
			    <div className="nav-right-content">
			      <ul>
			        <li>
						{
							!isLogined ? 
							<button className="btn btn-yellow" onClick={() => this.handleToggleModal()}>Login/Sign Up <i className="fa fa-paper-plane" /></button>
							: (<Link className="btn" to="/user-profile">My Account<i className="fa fa-paper-plane" /></Link>)
						}
			        </li>
			        {/* <li className="tp-lang">
			          <div className="tp-lang-wrap">
			            <select className="select single-select">
			              <option value={1}>ENG</option>
			              <option value={2}>BAN</option>
			              <option value={3}>Chinese</option>
			              <option value={3}>Spanish</option>
			            </select>
			          </div>
			        </li> */}
					<li>
					<button className="btn" style={{borderRadius: '22px',background:'#0078a2',color:'#fff'}} onClick={this.openModal}><strong>Enquire Now</strong></button >
					</li>
			        <li className="search">
			          <i className="ti-search" />
			        </li>
			      </ul>
				 
				  
			    </div>
			  </div>
			</nav>
			<Modal
			 open={this.state.isModalOpen}
			 onClose={this.handleCancel}
			 className = "modals"
			 aria-labelledby="simple-modal-title"
			 aria-describedby="simple-modal-description"
		   
		  >
			  <div style={{background : 'rgb(239, 242, 241)',width:'100%' , height:'100%',padding: "12px", borderRadius:' 24px'}}>
			<Search  closeModal = {this.handleCancel} />
			</div>
		  </Modal>
			</div>
			
        )
    }
}

export default Navbar
