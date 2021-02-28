import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import axios from 'axios'

class UpcomingTour extends Component {
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

    return  <div className="upcomming-tour upcomming-tour-bg pd-top-75 pd-bottom-120 viaje-go-top" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/11.png)'}}>
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-4">
		        <div className="section-title">
		          <h2 className="title">Upcoming Tours</h2>
		          <p>The perfect destinations that you must visit that are safe & sanitized. If planning for the first or multiple times, we provide holiday packages in which our client can travel smooth and stress free with full satisfaction.</p>
		        </div>
		        <div className="row">
		          <div className="col-lg-8">
		            <form className="search-form">
		              <div className="form-group">
		                <input type="text" placeholder="Search" />
		              </div>
		              <button className="submit-btn" type="submit"><i className="ti-search" /></button>
		            </form>
		          </div>   
		        </div>
		      </div>
		      <div className="col-lg-8">
		        <div className="upcomming-card-slider upcomming-card-slider-2 tp-common-slider-style">
		          <div className="single-upconing-card">
		            <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/tour/8.png)'}}>
		              <img src={publicUrl+"assets/img/tour/8.png"} alt="img" />
		            </div>
		            <div className="tp-price-meta">
		              <h2>₹{destination1.price}</h2>
		              <p>Price</p>
		            </div>
		            <div className="details">
		              <h3 className="title"><Link to={'/destination-details?id='+destination1.id}>{destination1.name}</Link></h3>
		              <p><i className="fa fa-map-marker" /> {destination1.locationName}</p>
		              <div className="tp-review-meta">
		               {/*  <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" /> */}
						<i className={"fa fa-star " + (destination1.ratingsAverage >= 1 ? 'ic-yellow' : 'text-white')}/>
                        <i className={"fa fa-star " + (destination1.ratingsAverage >= 2 ? 'ic-yellow' : 'text-white')}/>
                        <i className={"fa fa-star " + (destination1.ratingsAverage >= 3 ? 'ic-yellow' : 'text-white')}/>
                    	<i className={"fa fa-star " + (destination1.ratingsAverage >= 4 ? 'ic-yellow' : 'text-white')}/>
                        <i className={"fa fa-star " + (destination1.ratingsAverage >= 5 ? 'ic-yellow' : 'text-white')}/>
		                <span>{destination1.ratingsAverage}</span>
		              </div>
		            </div>
		          </div>
		          <div className="single-upconing-card">
		            <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/tour/9.png)'}}>
		              <img src={publicUrl+"assets/img/tour/9.png"} alt="img" />
		            </div>
		            <div className="tp-price-meta">
		              <h2>₹{destination2.price}</h2>
		              <p>Price</p>
		            </div>
		            <div className="details">
					  <h3 className="title"><Link to={'/destination-details?id='+destination2.id}>{destination2.name}</Link></h3>
		              <p><i className="fa fa-map-marker" /> {destination2.locationName}</p>
		              <div className="tp-review-meta">
		                {/* <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" /> */}
						<i className={"fa fa-star " + (destination2.ratingsAverage >= 1 ? 'ic-yellow' : 'text-white')}/>
                        <i className={"fa fa-star " + (destination2.ratingsAverage >= 2 ? 'ic-yellow' : 'text-white')}/>
                        <i className={"fa fa-star " + (destination2.ratingsAverage >= 3 ? 'ic-yellow' : 'text-white')}/>
                    	<i className={"fa fa-star " + (destination2.ratingsAverage >= 4 ? 'ic-yellow' : 'text-white')}/>
                        <i className={"fa fa-star " + (destination2.ratingsAverage >= 5 ? 'ic-yellow' : 'text-white')}/>
		                <span>{destination2.ratingsAverage}</span>
		              </div>
		            </div>
		          </div>
		          <div className="single-upconing-card">
		            <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/tour/3.png)'}}>
		              <img src={publicUrl+"assets/img/tour/3.png"} alt="img" />
		            </div>
		            <div className="tp-price-meta">
		              <h2>₹{destination3.price}</h2>
		              <p>Price</p>
		            </div>
		            <div className="details">
					  <h3 className="title"><Link to={'/destination-details?id='+destination3.id}>{destination3.name}</Link></h3>
		              <p><i className="fa fa-map-marker" /> {destination3.locationName}</p>
		              <div className="tp-review-meta">
		                {/* <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" /> */}
						<i className={"fa fa-star " + (destination3.ratingsAverage >= 1 ? 'ic-yellow' : 'text-white')}/>
                        <i className={"fa fa-star " + (destination3.ratingsAverage >= 2 ? 'ic-yellow' : 'text-white')}/>
                        <i className={"fa fa-star " + (destination3.ratingsAverage >= 3 ? 'ic-yellow' : 'text-white')}/>
                    	<i className={"fa fa-star " + (destination3.ratingsAverage >= 4 ? 'ic-yellow' : 'text-white')}/>
                        <i className={"fa fa-star " + (destination3.ratingsAverage >= 5 ? 'ic-yellow' : 'text-white')}/>
		                <span>{destination3.ratingsAverage}</span>
		              </div>
		            </div>
		          </div>
		          <div className="single-upconing-card">
		            <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/tour/7.png)'}}>
		              <img src={publicUrl+"assets/img/tour/7.png"} alt="img" />
		            </div>
		            <div className="tp-price-meta">
		              <h2>₹{destination4.price}</h2>
		              <p>Price</p>
		            </div>
		            <div className="details">
					  <h3 className="title"><Link to={'/destination-details?id='+destination4.id}>{destination4.name}</Link></h3>
		              <p><i className="fa fa-map-marker" /> {destination4.locationName}</p>
		              <div className="tp-review-meta">
		                {/* <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" /> */}
						<i className={"fa fa-star " + (destination4.ratingsAverage >= 1 ? 'ic-yellow' : 'text-white')}/>
                        <i className={"fa fa-star " + (destination4.ratingsAverage >= 2 ? 'ic-yellow' : 'text-white')}/>
                        <i className={"fa fa-star " + (destination4.ratingsAverage >= 3 ? 'ic-yellow' : 'text-white')}/>
                    	<i className={"fa fa-star " + (destination4.ratingsAverage >= 4 ? 'ic-yellow' : 'text-white')}/>
                        <i className={"fa fa-star " + (destination4.ratingsAverage >= 5 ? 'ic-yellow' : 'text-white')}/>
		                <span>{destination4.ratingsAverage}</span>
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

export default UpcomingTour