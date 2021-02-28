import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Client extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="client-area pd-top-108 pd-bottom-120 jarallax" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/10.png)'}}>
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-6 col-lg-8">
			        <div className="section-title text-center style-two">
			          <h2 className="title">What Our Clicnts Say</h2>
			          {/* <p>Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris. Aenean scelerisque, sem eu dictum commodo, velit nisi</p> */}
			        </div>
			      </div>
			    </div>
			    <div className="swiper-container client-slider-two">
			      <div className="swiper-wrapper">
			        {/* item */}
			        <div className="swiper-slide">
			          <div className="client-slider-item">
			            <div className="row">
			              <div className="col-lg-5 thumb" style={{backgroundImage: 'url('+publicUrl+'assets/img/tour/10.png)'}}>
			                <div className="title-meta">
			                  <p>Travel Reviews</p>
			                  {/* <h3>Rome Italy</h3> */}
			                </div>
			              </div>
			              <div className="col-lg-7">
			                <div className="details">
			                  <div className="tp-review-meta">
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <span>4.0</span>
			                  </div>
			                  <h4>kajal Agarwal</h4>
			                  <span>TOURIST</span>
			                  <p>Our Maldives Anniversary experience with Flysquare was great from the start of interaction, booking, transfers to hotel and to back home. We were picked up at the airport and were given a lounge to relax and wait for our sea plane to hotel.
The booked rooms were awesome and facilities were grand. The service was exceptional, with wonderful people always willing to help with warm smile and thankfulness.
The food was delicious and drinks were great. We had a great deal and took full package for unlimited food and beverage.
Our anniversary was made unique by nice decoration of our room, with amazing fruits and cake and lots of beautiful surprises.
Overall an awesome trip made special by the whole team of Flysquare. Thank you.</p>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			        {/* item */}
			        <div className="swiper-slide">
			          <div className="client-slider-item">
			            <div className="row">
			              <div className="col-lg-5 thumb" style={{backgroundImage: 'url('+publicUrl+'assets/img/tour/11.png)'}}>
			                <div className="title-meta">
			                  <p>Travel Reviews</p>
			                  {/* <h3>Iseland</h3> */}
			                </div>
			              </div>
			              <div className="col-lg-7">
			                <div className="details">
			                  <div className="tp-review-meta">
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <span>4.0</span>
			                  </div>
			                  <h4>Rajesh Kumar</h4>
			                  <span>TOURIST</span>
			                  <p>Our second travel with Flysquare we chose Maldives. The entire staff is very friendly and we simply fell in love with the people and the places we wanted to holiday in Maldives!! The Flysquare staff went out of their way to make our package extra special. After our first experience we booked again with Flysquare and It did not disappoint. It was just as good, if not better than our first trip. The hotels were best located, the food delicious and overall everything is kept to a very high standard.
We received welcome drinks and snacks on both trips. The hotel Flysquare booked is one of the most sought after; they have a wall displaying their many awards which doesn’t surprise us at all!! We are hoping to book from Flysquare yearly. See you soon</p>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			        {/* item */}
			        <div className="swiper-slide">
			          <div className="client-slider-item">
			            <div className="row">
			              <div className="col-lg-5 thumb" style={{backgroundImage: 'url('+publicUrl+'assets/img/tour/12.png)'}}>
			                <div className="title-meta">
			                  <p>Travel Reviews</p>
			                  {/* <h3>Africa</h3> */}
			                </div>
			              </div>
			              <div className="col-lg-7">
			                <div className="details">
			                  <div className="tp-review-meta">
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <span>4.0</span>
			                  </div>
			                  <h4>Priya Verma</h4>
			                  <span>TOURIST</span>
			                  <p>We booked our Honeymoon from Flysquare to Maldives and everything was spot on.
Whole experience was memorable. The staff was very polite! They were always available on call and gave us step by step details of what to do, since it was our first trip abroad. I and my new wife enjoyed the trip thoroughly with all inclusive packages which had food, wine and champagne on tap. The aqua bar was beautiful.
We really enjoyed the beautiful island, the fantastic accommodation, the delicious food and the pampering. We stayed in a beach villa, with spacious bathroom outside and private terrace overlooking the beach and to view the sunset.
An additional thank you to the fantastic staff for pampering us in this way.
We also really liked the snorkeling, the Spa, etc.
Really the most beautiful place on earth! Thanks Flysquare</p>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
					<div className="swiper-slide">
			          <div className="client-slider-item">
			            <div className="row">
			              <div className="col-lg-5 thumb" style={{backgroundImage: 'url('+publicUrl+'assets/img/tour/12.png)'}}>
			                <div className="title-meta">
			                  <p>Travel Reviews</p>
			                 {/*  <h3>Africa</h3> */}
			                </div>
			              </div>
			              <div className="col-lg-7">
			                <div className="details">
			                  <div className="tp-review-meta">
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <span>4.0</span>
			                  </div>
			                  <h4>Ajay Tiwari</h4>
			                  <span>TOURIST</span>
			                  <p>It was 10th Birthday of our son and our family wish list to travel internationally to Maldives was fulfilled by Flysquare. We booked a hotel which offered many activities like snorkeling, volleyball, diving, swimming and a lot of fun activities. We snorkeled many times every day and saw turtles, eagle rays, sharks and lots of beautiful and colorful fish. The child loved going to kids club and enjoy his high energy spent on highly active place. The food was outstanding and a real best part of our stay. The variety of food at each meal was splendid and everything was delicious. It was very relaxing to know that the whole thing was paid for- you really do not need to pay for anything!
The mini bar was great and we all appreciated the mini chocolates and Pringles! My husband and I also liked the red wine. The room was absolutely lovely decorated everyday and serviced daily to a very high standard.
We are already saving money to come again and can’t wait for our next visit to enjoy this luxury. Thank you so much to all the staff of Flysquare who helped in making our holiday so special!</p>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/* Add Pagination */}
			      <div className="tp-control-nav text-center">
			        <div className="slick-arrow swiper-buttons-prev"><i className="la la-long-arrow-left" /></div>
			        <div className="slick-arrow swiper-buttons-next"><i className="la la-long-arrow-right" /></div>
			      </div>
			      {/* /.end carousel */}                    
			    </div>
			  </div>
			</div>



        }
}

export default Client