import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import axios from 'axios'

class DestinationList extends Component {
  
      constructor(props) {
        super(props)
        this.state = {
            destinations: [],
            errorMsg:''
        }
    }
      
    componentDidMount(){

        let url = 'destinations';
        if (this.props.keySearch) {
          url += '?keySearch='+this.props.keySearch;
          if (this.props.travelType) {
            url += '&travelType='+this.props.travelType;
          }
        }
        
        const $ = window.$;
        var preLoder = $("#preloader");
        preLoder.fadeIn(0);
 

        axios.get(process.env.REACT_APP_CLIENT_ID+url)
            .then(response =>{
                console.log(response)
                this.setState({destinations: response.data.data})
                preLoder.fadeOut(0);
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMsg : 'Error retrieving data'})
                preLoder.fadeOut(0);
            })
    }
    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        const { destinations, errorMsg } = this.state

    return	<div className="destination-area viaje-go-top">
              <div className="container-bg mg-top--70">
                <div className="container">
                  <div className="row justify-content-center">
                {
                    destinations.length ?
                    destinations.map(destination => 
                      <div className="col-lg-4 col-md-6" key={destination.id}>
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          { destination.images && destination.images.length ? 
                          <img src={destination.images[0]} alt="img" width="400" /> :
                          null }
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                          <i className={"fa fa-star " + (destination.ratingsAverage >= 1 ? 'ic-yellow' : '')}/>
                          <i className={"fa fa-star " + (destination.ratingsAverage >= 2 ? 'ic-yellow' : '')}/>
                          <i className={"fa fa-star " + (destination.ratingsAverage >= 3 ? 'ic-yellow' : '')}/>
                          <i className={"fa fa-star " + (destination.ratingsAverage >= 4 ? 'ic-yellow' : '')}/>
                          <i className={"fa fa-star " + (destination.ratingsAverage >= 5 ? 'ic-yellow' : '')}/>
                           {/*  <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" /> */}
                            
                            <span>{destination.ratingsAverage}</span>
                          </div>
                          <h3 className="title">{destination.name}</h3>
                          <p className="content">{destination.aboutPackage}</p>
                          <Link className="btn btn-gray" to={'/destination-details?id='+destination.id}><span>Explore<i className="la la-arrow-right" /></span></Link>
                        </div>
                      </div>
                    </div>
                    ) :
                    null
                }
                {   
                    errorMsg ? <div>{errorMsg}</div>: null
                }
                  
                     {/*  <div className="col-lg-4 col-md-6">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/9.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h3 className="title">Thailand</h3>
                          <p className="content">Thailand is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area.</p>
                          <Link className="btn btn-gray" to="/destination-details"><span>Explore<i className="la la-arrow-right" /></span></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/10.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h3 className="title">Mexico</h3>
                          <p className="content">Mexico is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area.</p>
                          <Link className="btn btn-gray" to="/destination-details"><span>Explore<i className="la la-arrow-right" /></span></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/11.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h3 className="title">France</h3>
                          <p className="content">France is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area.</p>
                          <Link className="btn btn-gray" to="/destination-details"><span>Explore<i className="la la-arrow-right" /></span></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/12.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h3 className="title">Italy</h3>
                          <p className="content">Italy is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area.</p>
                          <Link className="btn btn-gray" to="/destination-details"><span>Explore<i className="la la-arrow-right" /></span></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/13.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h3 className="title">Canada</h3>
                          <p className="content">Canada is the world's second largest and second most- populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area.</p>
                          <a className="btn btn-gray" to="/destination-details"><span>Explore<i className="la la-arrow-right" /></span></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/14.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h3 className="title">Singapore</h3>
                          <p className="content">Singapore is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area.</p>
                          <Link className="btn btn-gray" to="/destination-details"><span>Explore<i className="la la-arrow-right" /></span></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/15.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h3 className="title">Bangladesh</h3>
                          <p className="content">Bangladesh is the world's second largest and second most- populous continent, being behind Asia in categories. At about 30.3 million km² adjacent islands, it 6% Earth's total surface area and 20% land area.</p>
                          <Link className="btn btn-gray" to="/destination-details"><span>Explore<i className="la la-arrow-right" /></span></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6"> */}
                  {/*     <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/16.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h3 className="title">Dubai</h3>
                          <p className="content">Dubai is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area.</p>
                          <Link className="btn btn-gray" to="/destination-details"><span>Explore<i className="la la-arrow-right" /></span></Link>
                        </div>
                      </div>
                    </div> */}
                  {/*   <div className="col-12">
                      <div className="btn-wrapper text-center">
                        <Link className="btn btn-yellow mt-4" to="/destination-list-v2"><span>Load More<i className="la la-arrow-right" /></span></Link>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
        }
}

export default DestinationList