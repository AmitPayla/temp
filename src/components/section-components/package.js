import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import axios from 'axios'

class Package extends Component {
	constructor(props) {
        super(props)

        this.state = {
			destination1: {},
			destination2: {},
			destination3: {},
			destination4: {},
            errorMsg:''
        }
    }
    componentDidMount(){
        axios.get(process.env.REACT_APP_CLIENT_ID+"destinations")
            .then(response =>{
				if (response.data && response.data.data) {
					for (var i = 0; i < response.data.totalCount; i++) {
						if (i == 0) {
							this.setState({destination1: (response.data.data[i])})
						}
						if (i == 1) {
							this.setState({destination2: (response.data.data[i])})
						}
						if (i == 2) {
							this.setState({destination3: (response.data.data[i])})
						}
						if (i == 3) {
							this.setState({destination4: (response.data.data[i])})
						}
					}
				}
               
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMsg : 'Error retrieving data'})
            })
    }
    render() {

		let publicUrl = process.env.PUBLIC_URL+'/'
		const { destination1, destination2, destination3, destination4, errorMsg } = this.state

    return  <div className="package-area pd-top-108 mg-bottom-92">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-6 col-lg-8">
			        <div className="section-title text-center">
			          <h2 className="title wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">Best Packages For You</h2>
			          <p className="wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.2s">Hand picked Holiday packages that are current favourites of travellers like you whether Luxury or Eco friendly.</p>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-xl-3 col-sm-6">
			        <div className="single-package-card wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/destination-list/28.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="location">
			              <span className="location-name"><img src={publicUrl+"assets/img/icons/1.png"} alt="img" />{destination1.locationName}</span>
			              <span className="tp-review-meta float-right">
			                {/* <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" /> */}
							<i className={"fa fa-star " + (destination1.ratingsAverage >= 1 ? 'ic-yellow' : '')}/>
							<i className={"fa fa-star " + (destination1.ratingsAverage >= 2 ? 'ic-yellow' : '')}/>
							<i className={"fa fa-star " + (destination1.ratingsAverage >= 3 ? 'ic-yellow' : '')}/>
							<i className={"fa fa-star " + (destination1.ratingsAverage >= 4 ? 'ic-yellow' : '')}/>
							<i className={"fa fa-star " + (destination1.ratingsAverage >= 5 ? 'ic-yellow' : '')}/>
			                <span>{destination1.ratingsAverage}</span>
			              </span>
			            </div> 
			            <h3>{destination1.name}</h3> 
			            <ul className="package-meta font-weight-light">
			              <li className="tp-price-meta">
			                <p><i className="fa fa-clock-o" /></p>
			                <p>Duration</p>
			                <h2>{destination1.paxDay} Days</h2>
			              </li>
			              <li className="tp-price-meta">
			                <p><i className="fa fa-users" /></p>
			                <p>Person</p>
			                <h2>{destination1.paxPerson} Adult</h2>
			              </li>
			              <li className="tp-price-meta">
			                <p><i className="fa fa-tag" /></p>
			                <p>Price</p>
			                <h2>₹{destination1.price}</h2>
			              </li>
			            </ul>
			          </div>
			        </div>
			      </div>
			      <div className="col-xl-3 col-sm-6">
			        <div className="single-package-card wow animated fadeInUp" data-wow-duration="0.7s" data-wow-delay="0.2s">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/destination-list/29.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="location">
			              <span className="location-name"><img src={publicUrl+"assets/img/icons/1.png"} alt="img" />{destination2.locationName}</span>
			              <span className="tp-review-meta float-right">
			                {/* <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" /> */}
							<i className={"fa fa-star " + (destination2.ratingsAverage >= 1 ? 'ic-yellow' : '')}/>
							<i className={"fa fa-star " + (destination2.ratingsAverage >= 2 ? 'ic-yellow' : '')}/>
							<i className={"fa fa-star " + (destination2.ratingsAverage >= 3 ? 'ic-yellow' : '')}/>
							<i className={"fa fa-star " + (destination2.ratingsAverage >= 4 ? 'ic-yellow' : '')}/>
							<i className={"fa fa-star " + (destination2.ratingsAverage >= 5 ? 'ic-yellow' : '')}/>
			                <span>{destination2.ratingsAverage}</span>
			              </span>
			            </div> 
			            <h3>{destination2.name}</h3> 
			            <ul className="package-meta font-weight-light">
			              <li className="tp-price-meta">
			                <p><i className="fa fa-clock-o" /></p>
			                <p>Duration</p>
			                <h2>{destination2.paxDay} Days</h2>
			              </li>
			              <li className="tp-price-meta">
			                <p><i className="fa fa-users" /></p>
			                <p>Person</p>
			                <h2>{destination2.paxPerson} Adult</h2>
			              </li>
			              <li className="tp-price-meta">
			                <p><i className="fa fa-tag" /></p>
			                <p>Price</p>
			                <h2>₹{destination2.price}</h2>
			              </li>
			            </ul>
			          </div>
			        </div>
			      </div>
			      <div className="col-xl-3 col-sm-6">
			        <div className="single-package-card wow animated fadeInUp" data-wow-duration="1.0s" data-wow-delay="0.3s">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/destination-list/30.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="location">
			              <span className="location-name"><img src={publicUrl+"assets/img/icons/1.png"} alt="img" />{destination3.locationName}</span>
			              <span className="tp-review-meta float-right">
			               {/*  <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" /> */}
							<i className={"fa fa-star " + (destination3.ratingsAverage >= 1 ? 'ic-yellow' : '')}/>
							<i className={"fa fa-star " + (destination3.ratingsAverage >= 2 ? 'ic-yellow' : '')}/>
							<i className={"fa fa-star " + (destination3.ratingsAverage >= 3 ? 'ic-yellow' : '')}/>
							<i className={"fa fa-star " + (destination3.ratingsAverage >= 4 ? 'ic-yellow' : '')}/>
							<i className={"fa fa-star " + (destination3.ratingsAverage >= 5 ? 'ic-yellow' : '')}/>
			                <span>{destination3.ratingsAverage}</span>
			              </span>
			            </div> 
			            <h3>{destination3.name}</h3> 
			            <ul className="package-meta font-weight-light">
			              <li className="tp-price-meta">
			                <p><i className="fa fa-clock-o" /></p>
			                <p>Duration</p>
			                <h2>{destination3.paxDay} Days</h2>
			              </li>
			              <li className="tp-price-meta">
			                <p><i className="fa fa-users" /></p>
			                <p>Person</p>
			                <h2>{destination3.paxPerson} Adult</h2>
			              </li>
			              <li className="tp-price-meta">
			                <p><i className="fa fa-tag" /></p>
			                <p>Price</p>
			                <h2>₹{destination3.price}</h2>
			              </li>
			            </ul>
			          </div>
			        </div>
			      </div>
			      <div className="col-xl-3 col-sm-6">
			        <div className="single-package-card wow animated fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/destination-list/31.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="location">
			              <span className="location-name"><img src={publicUrl+"assets/img/icons/1.png"} alt="img" />{destination4.locationName}</span>
			              <span className="tp-review-meta float-right">
			               {/*  <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" /> */}
							<i className={"fa fa-star " + (destination4.ratingsAverage >= 1 ? 'ic-yellow' : '')}/>
							<i className={"fa fa-star " + (destination4.ratingsAverage >= 2 ? 'ic-yellow' : '')}/>
							<i className={"fa fa-star " + (destination4.ratingsAverage >= 3 ? 'ic-yellow' : '')}/>
							<i className={"fa fa-star " + (destination4.ratingsAverage >= 4 ? 'ic-yellow' : '')}/>
							<i className={"fa fa-star " + (destination4.ratingsAverage >= 5 ? 'ic-yellow' : '')}/>
			                <span>{destination4.ratingsAverage}</span>
			              </span>
			            </div> 
			            <h3>{destination4.name}</h3> 
			            <ul className="package-meta font-weight-light">
			              <li className="tp-price-meta">
			                <p><i className="fa fa-clock-o" /></p>
			                <p>Duration</p>
			                <h2>{destination4.paxDay} Days</h2>
			              </li>
			              <li className="tp-price-meta">
			                <p><i className="fa fa-users" /></p>
			                <p>Person</p>
			                <h2>{destination4.paxPerson} Adult</h2>
			              </li>
			              <li className="tp-price-meta">
			                <p><i className="fa fa-tag" /></p>
			                <p>Price</p>
			                <h2>₹{destination4.price}</h2>
			              </li>
			            </ul> 
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default Package