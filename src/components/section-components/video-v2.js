import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class VideoV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="video-area tp-video-area pd-top-50">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-6 col-lg-10 text-center">
			        <div className="section-title text-center viaje-go-top">
			          <h2 className="title">What Do You Know <br /> About US</h2>
			          <p>Flysquare.in is a largest travel platform based in delhi as a B2B & B2C Company. We provide our customers efficient and effective services. We believe in building a relationship with our customers and try to stand out with our innovative and unique ideas. Our holiday packages are well made and hold a high reputation among customers who have been travelling with us.
						Our mission is to ensure that our customers get the best experience and make unforgettable memories with us with full satisfaction. <br></br>Vision<br></br>
						Flysquare is running based on its growth & opportunities and to become the top travel agency and to provide its services at their best.</p>
			          <Link className="btn btn-yellow" to="/about"><span>Read More<i className="la la-arrow-right" /></span></Link>
			        </div>
			      </div>
			      <div className="col-xl-8 col-lg-9 text-center">
			        <div className="video-popup-wrap style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/video2.png"} alt="video" />
			          </div>
			          <div className="video-popup-btn">
			            <a href="https://www.youtube.com/watch?v=GIimOIZy-RA" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>


        }
}

export default VideoV2