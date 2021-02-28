import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Counter extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="counter-area bg-gray">
			  <div className="container">
			    <ul className="row">
			      <li className="col-lg-3 col-sm-6">
			        <div className="single-counting text-center">
			          <h2><img src={publicUrl+"assets/img/icons/10.png"} alt="img" /> <span className="count-nums">50</span><span>+</span></h2>
			          <span className="title">Travel Packages</span>
			        </div>
			      </li>
			      <li className="col-lg-3 col-sm-6">
			        <div className="single-counting text-center">
			          <h2><img src={publicUrl+"assets/img/office.png"} alt="img" height="42" /> <span className="count-nums">5</span></h2>
			          <span className="title">Branches All Over</span>
			        </div>
			      </li>
			      <li className="col-lg-3 col-sm-6">
			        <div className="single-counting text-center">
			          <h2><img src={publicUrl+"assets/img/support.png"} alt="img" height="42"/><span className="count-nums">15</span><span>+</span></h2>
			          <span className="title">Destination Experts</span>
			        </div>
			      </li>
			      <li className="col-lg-3 col-sm-6">
			        <div className="single-counting text-center">
			          <h2><img src={publicUrl+"assets/img/user.png"} alt="img"  height="42"/> <span className="count-nums">50</span><span>+</span></h2>
			          <span className="title">Customer</span>
			        </div>
			      </li>
			    </ul>
			  </div>
			</div>


        }
}

export default Counter