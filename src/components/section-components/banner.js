import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import axios from 'axios'

class Banner extends Component {
	constructor(props) {
        super(props)

        this.state = {
			destination1: {},
			destination2: {},
			destination3: {},
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
		let imagealt = 'image'
		const { destination1, destination2, destination3, errorMsg } = this.state

    return  <div className="banner-area viaje-go-top">
			  <div className="banner-slider">
			    <div className="banner-slider-item banner-bg-1">
			      <div className="container">
			        <div className="row">
			          <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
			            <div className="row">
			              <div className="col-lg-9 col-sm-8">
			                <div className="banner-inner">
			                  <p className="banner-cat s-animate-1">Hot Places</p>
			                  <h2 className="banner-title s-animate-2">{destination1.name}</h2>
			                </div>
			              </div>
			              <div className="col-lg-3 col-sm-4">
			                <div className="video-popup-btn s-animate-video">
			                  <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
			                </div>
			              </div>
			              <div className="col-lg-12 banner-tour-package">
			                <div className="row">
			                  <div className="col-sm-4 s-animate-3">
			                    <div className="tp-price-meta">
			                      <p>Price</p>
			                      <h2>₹{destination1.price}</h2>
			                      <p className="tp-price-meta-details">{destination1.paxDay} Days Tour <span>on {destination1.paxPerson} person</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-4">
			                    <div className="tp-price-meta">
			                      <p>5 Star</p>
			                      <h2>Hotel</h2>
			                      <p className="tp-price-meta-details">Hotels <span>to choice</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-5">
			                    <div className="tp-price-meta">
			                      <p>Flight date</p>
			                      <h2>17</h2>
			                      <p className="tp-price-meta-details">September <span>or later</span></p>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="banner-slider-item banner-bg-2">
			      <div className="container">
			        <div className="row">
			          <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
			            <div className="row">
			              <div className="col-lg-9 col-sm-8">
			                <div className="banner-inner">
			                  <p className="banner-cat s-animate-1">Hot Places</p>
			                  <h2 className="banner-title s-animate-2">{destination2.name}</h2>
			                </div>
			              </div>
			              <div className="col-lg-3 col-sm-4">
			                <div className="video-popup-btn s-animate-video">
			                  <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
			                </div>
			              </div>
			              <div className="col-lg-12 banner-tour-package">
			                <div className="row">
			                  <div className="col-sm-4 s-animate-3">
			                    <div className="tp-price-meta">
			                      <p>Price</p>
								  <h2>₹{destination2.price}</h2>
			                      <p className="tp-price-meta-details">{destination2.paxDay} Days Tour <span>on {destination2.paxPerson} person</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-4">
			                    <div className="tp-price-meta">
			                      <p>5 Star</p>
			                      <h2>Hotel</h2>
			                      <p className="tp-price-meta-details">Hotels <span>to choice</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-5">
			                    <div className="tp-price-meta">
			                      <p>Flight date</p>
			                      <h2>17</h2>
			                      <p className="tp-price-meta-details">September <span>or later</span></p>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="banner-slider-item banner-bg-3">
			      <div className="container">
			        <div className="row">
			          <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
			            <div className="row">
			              <div className="col-lg-9 col-sm-8">
			                <div className="banner-inner">
			                  <p className="banner-cat s-animate-1">Hot Places</p>
			                  <h2 className="banner-title s-animate-2">{destination3.name}</h2>
			                </div>
			              </div>
			              <div className="col-lg-3 col-sm-4">
			                <div className="video-popup-btn s-animate-video">
			                  <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
			                </div>
			              </div>
			              <div className="col-lg-12 banner-tour-package">
			                <div className="row">
			                  <div className="col-sm-4 s-animate-3">
			                    <div className="tp-price-meta">
			                      <p>Price</p>
								  <h2>₹{destination3.price}</h2>
			                      <p className="tp-price-meta-details">{destination3.paxDay} Days Tour <span>on {destination3.paxPerson} person</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-4">
			                    <div className="tp-price-meta">
			                      <p>5 Star</p>
			                      <h2>Hotel</h2>
			                      <p className="tp-price-meta-details">Hotels <span>to choice</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-5">
			                    <div className="tp-price-meta">
			                      <p>Flight date</p>
			                      <h2>17</h2>
			                      <p className="tp-price-meta-details">September <span>or later</span></p>
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
			  <div className="banner-social-meta">
			    <div className="banner-slider-dots" />
			    <ul className="social-icon">
			      <li>
			        <a className="facebook" href="https://www.facebook.com/flysquare.in/" target="_blank"><i className="fa fa-facebook" /></a>
			      </li>
			     {/*  <li>
			        <a className="twitter" href="https://twitter.com/codingeeknet" target="_blank"><i className="fa fa-twitter" /></a>
			      </li> */}
			      <li>
			        <a className="pinterest" href="https://instagram.com/flysquare.in?igshid=hf93jnwv6d6t" target="_blank"><i className="fa fa-instagram" /></a>
			      </li>
			    </ul>
			  </div>
			  <div className="container">
			    <div className="banner-slider-controls">
			      <div className="slider-nav tp-control-nav" />
			      {/*slider-nav*/}
			      <div className="tp-slider-extra slider-extra">
			        <div className="text">
			          <span className="first">01</span>
			          <span className="devider">/</span>
			          <span className="last" />
			        </div>
			      </div>
			      {/*slider-extra*/}
			    </div>
			  </div>
			</div>
        }
}

export default Banner