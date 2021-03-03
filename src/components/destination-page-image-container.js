import React, { useEffect, useState } from "react";



function destinationImages({ destinationwindow ,dest }) {
  
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <>
    {
        destinationwindow == 'noku' ?
<div className="container">
                    <div className="gallery-filter-area row">
                      <div className="gallery-sizer col-1" />
                      <div className="tp-gallery-item col-md-5 col-sm-6 mb-10">
                        <div className="tp-gallery-item-img">
                          <div className="thumbnails">
                            <img src={publicUrl+"assets/img/noku-maldives-6.jpg"} alt="image" />
                            <div className="video-popup-btn">
                              <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tp-gallery-item col-md-3 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/Noku 06.jpg"} alt="image" />
                          </a>
                        </div>
                      </div>
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/Noku maldives.jpg"} alt="image" />
                          </a>
                        </div>
                      </div>
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/Noku maldives 5.jpg"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/Noku maldives2.jpg"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/noku maldives4.jpg"} alt="image" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-3 col-lg-4">
                        <div className="details">
                          <p className="location mb-0"><i className="fa fa-map-marker" />{dest.locationName}</p>
                          <h4 className="title">{dest.name}</h4>
                          <p className="content">{dest.paxDay} days {dest.paxPerson} person</p>
                          <div className="tp-review-meta">
                            <i className={"fa fa-star " + (dest.ratingsAverage >= 1 ? 'ic-yellow' : 'text-white')}/>
                            <i className={"fa fa-star " + (dest.ratingsAverage >= 2 ? 'ic-yellow' : 'text-white')}/>
                            <i className={"fa fa-star " + (dest.ratingsAverage >= 3 ? 'ic-yellow' : 'text-white')}/>
                    	      <i className={"fa fa-star " + (dest.ratingsAverage >= 4 ? 'ic-yellow' : 'text-white')}/>
                            <i className={"fa fa-star " + (dest.ratingsAverage >= 5 ? 'ic-yellow' : 'text-white')}/>
                            <span>{dest.ratingsAverage}</span>
                          </div>
                          <div className="all-tags">
                            <a href="#">Adventures</a>
                            <a href="#">Local special ties</a>
                            <a href="#">Natural</a>
                            <a href="#">Travel</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-9 col-lg-8">
                        <div className="book-list-warp">
                          <p className="book-list-content">Just booked! Get your spot before it's too late.</p>
                          <div className="tp-price-meta">
                            <p>Price</p>
                            <h2>₹{dest.price}</h2>
                          </div>
                        </div>
                        <ul className="tp-list-meta border-tp-solid">
                          <li className="ml-0"><i className="fa fa-calendar-o" /> 8 Oct</li>
                          <li><i className="fa fa-clock-o" />{dest.paxDay} Days</li>
                          <li><i className="fa fa-users" />{dest.paxPerson} Person</li>
                          <li><i className="fa fa-snowflake-o" /> Relaxing</li>
                          <li><i className="fa fa-star" /> {dest.ratingsAverage}</li>
                        </ul>
                      </div>   
                    </div>
                  </div>
                  : 
                  destinationwindow == 'hardrock' ?
<div className="container">
                    <div className="gallery-filter-area row">
                      <div className="gallery-sizer col-1" />
                      <div className="tp-gallery-item col-md-5 col-sm-6 mb-10">
                        <div className="tp-gallery-item-img">
                          <div className="thumbnails">
                            <img src={publicUrl+"assets/img/hard-rock-1.jpg"} alt="image" />
                            <div className="video-popup-btn">
                              <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tp-gallery-item col-md-3 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/Hard rock maldives 2.jpg"} alt="image" />
                          </a>
                        </div>
                      </div>
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/hardrock-3.jpg"} alt="image" />
                          </a>
                        </div>
                      </div>
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/hardrock-4.jpg"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/hardrock-5.jpg"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/hardrock-6.jpg"} alt="image" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-3 col-lg-4">
                        <div className="details">
                          <p className="location mb-0"><i className="fa fa-map-marker" />{dest.locationName}</p>
                          <h4 className="title">{dest.name}</h4>
                          <p className="content">{dest.paxDay} days {dest.paxPerson} person</p>
                          <div className="tp-review-meta">
                            <i className={"fa fa-star " + (dest.ratingsAverage >= 1 ? 'ic-yellow' : 'text-white')}/>
                            <i className={"fa fa-star " + (dest.ratingsAverage >= 2 ? 'ic-yellow' : 'text-white')}/>
                            <i className={"fa fa-star " + (dest.ratingsAverage >= 3 ? 'ic-yellow' : 'text-white')}/>
                    	      <i className={"fa fa-star " + (dest.ratingsAverage >= 4 ? 'ic-yellow' : 'text-white')}/>
                            <i className={"fa fa-star " + (dest.ratingsAverage >= 5 ? 'ic-yellow' : 'text-white')}/>
                            <span>{dest.ratingsAverage}</span>
                          </div>
                          <div className="all-tags">
                            <a href="#">Adventures</a>
                            <a href="#">Local special ties</a>
                            <a href="#">Natural</a>
                            <a href="#">Travel</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-9 col-lg-8">
                        <div className="book-list-warp">
                          <p className="book-list-content">Just booked! Get your spot before it's too late.</p>
                          <div className="tp-price-meta">
                            <p>Price</p>
                            <h2>₹{dest.price}</h2>
                          </div>
                        </div>
                        <ul className="tp-list-meta border-tp-solid">
                          <li className="ml-0"><i className="fa fa-calendar-o" /> 8 Oct</li>
                          <li><i className="fa fa-clock-o" />{dest.paxDay} Days</li>
                          <li><i className="fa fa-users" />{dest.paxPerson} Person</li>
                          <li><i className="fa fa-snowflake-o" /> Relaxing</li>
                          <li><i className="fa fa-star" /> {dest.ratingsAverage}</li>
                        </ul>
                      </div>   
                    </div>
                  </div>
                  : 
                  destinationwindow == 'cocoon' ?
                  <div className="container">
                                      <div className="gallery-filter-area row">
                                        <div className="gallery-sizer col-1" />
                                        <div className="tp-gallery-item col-md-5 col-sm-6 mb-10">
                                          <div className="tp-gallery-item-img">
                                            <div className="thumbnails">
                                              <img src={publicUrl+"assets/img/cocoon-1.jpg"} alt="image" />
                                              <div className="video-popup-btn">
                                                <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="tp-gallery-item col-md-3 col-sm-6">
                                          <div className="tp-gallery-item-img">
                                            <a href="#" data-effect="mfp-zoom-in">
                                              <img src={publicUrl+"assets/img/coccon-2.jpg"} alt="image" />
                                            </a>
                                          </div>
                                        </div>
                                        <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                          <div className="tp-gallery-item-img">
                                            <a href="#" data-effect="mfp-zoom-in">
                                              <img src={publicUrl+"assets/img/cocoon-3.jpeg"} alt="image" />
                                            </a>
                                          </div>
                                        </div>
                                        <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                          <div className="tp-gallery-item-img">
                                            <a href="#" data-effect="mfp-zoom-in">
                                              <img src={publicUrl+"assets/img/cocoon-4.jpg"} alt="image" />
                                            </a>
                                          </div>
                                        </div>
                                        {/* gallery-item */}
                                        <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                          <div className="tp-gallery-item-img">
                                            <a href="#" data-effect="mfp-zoom-in">
                                              <img src={publicUrl+"assets/img/cocoon-5.jpg"} alt="image" />
                                            </a>
                                          </div>
                                        </div>
                                        {/* gallery-item */}
                                        <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                          <div className="tp-gallery-item-img">
                                            <a href="#" data-effect="mfp-zoom-in">
                                              <img src={publicUrl+"assets/img/cocoon-6.jpg"} alt="image" />
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-xl-3 col-lg-4">
                                          <div className="details">
                                            <p className="location mb-0"><i className="fa fa-map-marker" />{dest.locationName}</p>
                                            <h4 className="title">{dest.name}</h4>
                                            <p className="content">{dest.paxDay} days {dest.paxPerson} person</p>
                                            <div className="tp-review-meta">
                                              <i className={"fa fa-star " + (dest.ratingsAverage >= 1 ? 'ic-yellow' : 'text-white')}/>
                                              <i className={"fa fa-star " + (dest.ratingsAverage >= 2 ? 'ic-yellow' : 'text-white')}/>
                                              <i className={"fa fa-star " + (dest.ratingsAverage >= 3 ? 'ic-yellow' : 'text-white')}/>
                                                <i className={"fa fa-star " + (dest.ratingsAverage >= 4 ? 'ic-yellow' : 'text-white')}/>
                                              <i className={"fa fa-star " + (dest.ratingsAverage >= 5 ? 'ic-yellow' : 'text-white')}/>
                                              <span>{dest.ratingsAverage}</span>
                                            </div>
                                            <div className="all-tags">
                                              <a href="#">Adventures</a>
                                              <a href="#">Local special ties</a>
                                              <a href="#">Natural</a>
                                              <a href="#">Travel</a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-8">
                                          <div className="book-list-warp">
                                            <p className="book-list-content">Just booked! Get your spot before it's too late.</p>
                                            <div className="tp-price-meta">
                                              <p>Price</p>
                                              <h2>₹{dest.price}</h2>
                                            </div>
                                          </div>
                                          <ul className="tp-list-meta border-tp-solid">
                                            <li className="ml-0"><i className="fa fa-calendar-o" /> 8 Oct</li>
                                            <li><i className="fa fa-clock-o" />{dest.paxDay} Days</li>
                                            <li><i className="fa fa-users" />{dest.paxPerson} Person</li>
                                            <li><i className="fa fa-snowflake-o" /> Relaxing</li>
                                            <li><i className="fa fa-star" /> {dest.ratingsAverage}</li>
                                          </ul>
                                        </div>   
                                      </div>
                                    </div>
                                    : 
                                    destinationwindow == 'movenpick' ?
                                    <div className="container">
                                                        <div className="gallery-filter-area row">
                                                          <div className="gallery-sizer col-1" />
                                                          <div className="tp-gallery-item col-md-5 col-sm-6 mb-10">
                                                            <div className="tp-gallery-item-img">
                                                              <div className="thumbnails">
                                                                <img src={publicUrl+"assets/img/movenpick-1.jpg"} alt="image" />
                                                                <div className="video-popup-btn">
                                                                  <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div className="tp-gallery-item col-md-3 col-sm-6">
                                                            <div className="tp-gallery-item-img">
                                                              <a href="#" data-effect="mfp-zoom-in">
                                                                <img src={publicUrl+"assets/img/movenpick-2.jpg"} alt="image" />
                                                              </a>
                                                            </div>
                                                          </div>
                                                          <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                                            <div className="tp-gallery-item-img">
                                                              <a href="#" data-effect="mfp-zoom-in">
                                                                <img src={publicUrl+"assets/img/movenpick-3.jpg"} alt="image" />
                                                              </a>
                                                            </div>
                                                          </div>
                                                          <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                                            <div className="tp-gallery-item-img">
                                                              <a href="#" data-effect="mfp-zoom-in">
                                                                <img src={publicUrl+"assets/img/movenpick-4.png"} alt="image" />
                                                              </a>
                                                            </div>
                                                          </div>
                                                          {/* gallery-item */}
                                                          <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                                            <div className="tp-gallery-item-img">
                                                              <a href="#" data-effect="mfp-zoom-in">
                                                                <img src={publicUrl+"assets/img/movenpick-5.jpg"} alt="image" />
                                                              </a>
                                                            </div>
                                                          </div>
                                                          {/* gallery-item */}
                                                          <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                                            <div className="tp-gallery-item-img">
                                                              <a href="#" data-effect="mfp-zoom-in">
                                                                <img src={publicUrl+"assets/img/movenpick-6.jpg"} alt="image" />
                                                              </a>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="row">
                                                          <div className="col-xl-3 col-lg-4">
                                                            <div className="details">
                                                              <p className="location mb-0"><i className="fa fa-map-marker" />{dest.locationName}</p>
                                                              <h4 className="title">{dest.name}</h4>
                                                              <p className="content">{dest.paxDay} days {dest.paxPerson} person</p>
                                                              <div className="tp-review-meta">
                                                                <i className={"fa fa-star " + (dest.ratingsAverage >= 1 ? 'ic-yellow' : 'text-white')}/>
                                                                <i className={"fa fa-star " + (dest.ratingsAverage >= 2 ? 'ic-yellow' : 'text-white')}/>
                                                                <i className={"fa fa-star " + (dest.ratingsAverage >= 3 ? 'ic-yellow' : 'text-white')}/>
                                                                  <i className={"fa fa-star " + (dest.ratingsAverage >= 4 ? 'ic-yellow' : 'text-white')}/>
                                                                <i className={"fa fa-star " + (dest.ratingsAverage >= 5 ? 'ic-yellow' : 'text-white')}/>
                                                                <span>{dest.ratingsAverage}</span>
                                                              </div>
                                                              <div className="all-tags">
                                                                <a href="#">Adventures</a>
                                                                <a href="#">Local special ties</a>
                                                                <a href="#">Natural</a>
                                                                <a href="#">Travel</a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div className="col-xl-9 col-lg-8">
                                                            <div className="book-list-warp">
                                                              <p className="book-list-content">Just booked! Get your spot before it's too late.</p>
                                                              <div className="tp-price-meta">
                                                                <p>Price</p>
                                                                <h2>₹{dest.price}</h2>
                                                              </div>
                                                            </div>
                                                            <ul className="tp-list-meta border-tp-solid">
                                                              <li className="ml-0"><i className="fa fa-calendar-o" /> 8 Oct</li>
                                                              <li><i className="fa fa-clock-o" />{dest.paxDay} Days</li>
                                                              <li><i className="fa fa-users" />{dest.paxPerson} Person</li>
                                                              <li><i className="fa fa-snowflake-o" /> Relaxing</li>
                                                              <li><i className="fa fa-star" /> {dest.ratingsAverage}</li>
                                                            </ul>
                                                          </div>   
                                                        </div>
                                                      </div>
                                                      : 
                                                      destinationwindow == 'sunsiya' ?
                                                      <div className="container">
                                                                          <div className="gallery-filter-area row">
                                                                            <div className="gallery-sizer col-1" />
                                                                            <div className="tp-gallery-item col-md-5 col-sm-6 mb-10">
                                                                              <div className="tp-gallery-item-img">
                                                                                <div className="thumbnails">
                                                                                  <img src={publicUrl+"assets/img/sunsiyam-1.jpg"} alt="image" />
                                                                                  <div className="video-popup-btn">
                                                                                    <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                            <div className="tp-gallery-item col-md-3 col-sm-6">
                                                                              <div className="tp-gallery-item-img">
                                                                                <a href="#" data-effect="mfp-zoom-in">
                                                                                  <img src={publicUrl+"assets/img/sunsiyam-2.jpg"} alt="image" />
                                                                                </a>
                                                                              </div>
                                                                            </div>
                                                                            <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                                                              <div className="tp-gallery-item-img">
                                                                                <a href="#" data-effect="mfp-zoom-in">
                                                                                  <img src={publicUrl+"assets/img/sunsiyam-3.jpeg"} alt="image" />
                                                                                </a>
                                                                              </div>
                                                                            </div>
                                                                            <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                                                              <div className="tp-gallery-item-img">
                                                                                <a href="#" data-effect="mfp-zoom-in">
                                                                                  <img src={publicUrl+"assets/img/sunsiyam-4.jpg"} alt="image" />
                                                                                </a>
                                                                              </div>
                                                                            </div>
                                                                            {/* gallery-item */}
                                                                            <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                                                              <div className="tp-gallery-item-img">
                                                                                <a href="#" data-effect="mfp-zoom-in">
                                                                                  <img src={publicUrl+"assets/img/sunsiyam-5.jpg"} alt="image" />
                                                                                </a>
                                                                              </div>
                                                                            </div>
                                                                            {/* gallery-item */}
                                                                            <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                                                              <div className="tp-gallery-item-img">
                                                                                <a href="#" data-effect="mfp-zoom-in">
                                                                                  <img src={publicUrl+"assets/img/sunsiyam-6.jpg"} alt="image" />
                                                                                </a>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                          <div className="row">
                                                                            <div className="col-xl-3 col-lg-4">
                                                                              <div className="details">
                                                                                <p className="location mb-0"><i className="fa fa-map-marker" />{dest.locationName}</p>
                                                                                <h4 className="title">{dest.name}</h4>
                                                                                <p className="content">{dest.paxDay} days {dest.paxPerson} person</p>
                                                                                <div className="tp-review-meta">
                                                                                  <i className={"fa fa-star " + (dest.ratingsAverage >= 1 ? 'ic-yellow' : 'text-white')}/>
                                                                                  <i className={"fa fa-star " + (dest.ratingsAverage >= 2 ? 'ic-yellow' : 'text-white')}/>
                                                                                  <i className={"fa fa-star " + (dest.ratingsAverage >= 3 ? 'ic-yellow' : 'text-white')}/>
                                                                                    <i className={"fa fa-star " + (dest.ratingsAverage >= 4 ? 'ic-yellow' : 'text-white')}/>
                                                                                  <i className={"fa fa-star " + (dest.ratingsAverage >= 5 ? 'ic-yellow' : 'text-white')}/>
                                                                                  <span>{dest.ratingsAverage}</span>
                                                                                </div>
                                                                                <div className="all-tags">
                                                                                  <a href="#">Adventures</a>
                                                                                  <a href="#">Local special ties</a>
                                                                                  <a href="#">Natural</a>
                                                                                  <a href="#">Travel</a>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                            <div className="col-xl-9 col-lg-8">
                                                                              <div className="book-list-warp">
                                                                                <p className="book-list-content">Just booked! Get your spot before it's too late.</p>
                                                                                <div className="tp-price-meta">
                                                                                  <p>Price</p>
                                                                                  <h2>₹{dest.price}</h2>
                                                                                </div>
                                                                              </div>
                                                                              <ul className="tp-list-meta border-tp-solid">
                                                                                <li className="ml-0"><i className="fa fa-calendar-o" /> 8 Oct</li>
                                                                                <li><i className="fa fa-clock-o" />{dest.paxDay} Days</li>
                                                                                <li><i className="fa fa-users" />{dest.paxPerson} Person</li>
                                                                                <li><i className="fa fa-snowflake-o" /> Relaxing</li>
                                                                                <li><i className="fa fa-star" /> {dest.ratingsAverage}</li>
                                                                              </ul>
                                                                            </div>   
                                                                          </div>
                                                                        </div>
                                                                        : 
                                                                        destinationwindow == 'furaveri' ?
                                                                        <div className="container">
                                                                                            <div className="gallery-filter-area row">
                                                                                              <div className="gallery-sizer col-1" />
                                                                                              <div className="tp-gallery-item col-md-5 col-sm-6 mb-10">
                                                                                                <div className="tp-gallery-item-img">
                                                                                                  <div className="thumbnails">
                                                                                                    <img src={publicUrl+"assets/img/furaveri-1.jpg"} alt="image" />
                                                                                                    <div className="video-popup-btn">
                                                                                                      <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                                                                                                    </div>
                                                                                                  </div>
                                                                                                </div>
                                                                                              </div>
                                                                                              <div className="tp-gallery-item col-md-3 col-sm-6">
                                                                                                <div className="tp-gallery-item-img">
                                                                                                  <a href="#" data-effect="mfp-zoom-in">
                                                                                                    <img src={publicUrl+"assets/img/furaveri-2.jpg"} alt="image" />
                                                                                                  </a>
                                                                                                </div>
                                                                                              </div>
                                                                                              <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                                                                                <div className="tp-gallery-item-img">
                                                                                                  <a href="#" data-effect="mfp-zoom-in">
                                                                                                    <img src={publicUrl+"assets/img/furaveri-3.jpg"} alt="image" />
                                                                                                  </a>
                                                                                                </div>
                                                                                              </div>
                                                                                              <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                                                                                <div className="tp-gallery-item-img">
                                                                                                  <a href="#" data-effect="mfp-zoom-in">
                                                                                                    <img src={publicUrl+"assets/img/furaveri-4.jpg"} alt="image" />
                                                                                                  </a>
                                                                                                </div>
                                                                                              </div>
                                                                                              {/* gallery-item */}
                                                                                              <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                                                                                <div className="tp-gallery-item-img">
                                                                                                  <a href="#" data-effect="mfp-zoom-in">
                                                                                                    <img src={publicUrl+"assets/img/furaveri-5.jpg"} alt="image" />
                                                                                                  </a>
                                                                                                </div>
                                                                                              </div>
                                                                                              {/* gallery-item */}
                                                                                              <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                                                                                <div className="tp-gallery-item-img">
                                                                                                  <a href="#" data-effect="mfp-zoom-in">
                                                                                                    <img src={publicUrl+"assets/img/furaveri-6.jpg"} alt="image" />
                                                                                                  </a>
                                                                                                </div>
                                                                                              </div>
                                                                                            </div>
                                                                                            <div className="row">
                                                                                              <div className="col-xl-3 col-lg-4">
                                                                                                <div className="details">
                                                                                                  <p className="location mb-0"><i className="fa fa-map-marker" />{dest.locationName}</p>
                                                                                                  <h4 className="title">{dest.name}</h4>
                                                                                                  <p className="content">{dest.paxDay} days {dest.paxPerson} person</p>
                                                                                                  <div className="tp-review-meta">
                                                                                                    <i className={"fa fa-star " + (dest.ratingsAverage >= 1 ? 'ic-yellow' : 'text-white')}/>
                                                                                                    <i className={"fa fa-star " + (dest.ratingsAverage >= 2 ? 'ic-yellow' : 'text-white')}/>
                                                                                                    <i className={"fa fa-star " + (dest.ratingsAverage >= 3 ? 'ic-yellow' : 'text-white')}/>
                                                                                                      <i className={"fa fa-star " + (dest.ratingsAverage >= 4 ? 'ic-yellow' : 'text-white')}/>
                                                                                                    <i className={"fa fa-star " + (dest.ratingsAverage >= 5 ? 'ic-yellow' : 'text-white')}/>
                                                                                                    <span>{dest.ratingsAverage}</span>
                                                                                                  </div>
                                                                                                  <div className="all-tags">
                                                                                                    <a href="#">Adventures</a>
                                                                                                    <a href="#">Local special ties</a>
                                                                                                    <a href="#">Natural</a>
                                                                                                    <a href="#">Travel</a>
                                                                                                  </div>
                                                                                                </div>
                                                                                              </div>
                                                                                              <div className="col-xl-9 col-lg-8">
                                                                                                <div className="book-list-warp">
                                                                                                  <p className="book-list-content">Just booked! Get your spot before it's too late.</p>
                                                                                                  <div className="tp-price-meta">
                                                                                                    <p>Price</p>
                                                                                                    <h2>₹{dest.price}</h2>
                                                                                                  </div>
                                                                                                </div>
                                                                                                <ul className="tp-list-meta border-tp-solid">
                                                                                                  <li className="ml-0"><i className="fa fa-calendar-o" /> 8 Oct</li>
                                                                                                  <li><i className="fa fa-clock-o" />{dest.paxDay} Days</li>
                                                                                                  <li><i className="fa fa-users" />{dest.paxPerson} Person</li>
                                                                                                  <li><i className="fa fa-snowflake-o" /> Relaxing</li>
                                                                                                  <li><i className="fa fa-star" /> {dest.ratingsAverage}</li>
                                                                                                </ul>
                                                                                              </div>   
                                                                                            </div>
                                                                                          </div>
                                                                                          : 
                                                                                          destinationwindow == 'brennia' ?
                                                                                          <div className="container">
                                                                                                              <div className="gallery-filter-area row">
                                                                                                                <div className="gallery-sizer col-1" />
                                                                                                                <div className="tp-gallery-item col-md-5 col-sm-6 mb-10">
                                                                                                                  <div className="tp-gallery-item-img">
                                                                                                                    <div className="thumbnails">
                                                                                                                      <img src={publicUrl+"assets/img/brennia-6.jpg"} alt="image" />
                                                                                                                      <div className="video-popup-btn">
                                                                                                                        <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                </div>
                                                                                                                <div className="tp-gallery-item col-md-3 col-sm-6">
                                                                                                                  <div className="tp-gallery-item-img">
                                                                                                                    <a href="#" data-effect="mfp-zoom-in">
                                                                                                                      <img src={publicUrl+"assets/img/brennia-2.jpg"} alt="image" />
                                                                                                                    </a>
                                                                                                                  </div>
                                                                                                                </div>
                                                                                                                <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                                                                                                  <div className="tp-gallery-item-img">
                                                                                                                    <a href="#" data-effect="mfp-zoom-in">
                                                                                                                      <img src={publicUrl+"assets/img/brennia-3.jpg"} alt="image" />
                                                                                                                    </a>
                                                                                                                  </div>
                                                                                                                </div>
                                                                                                                <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                                                                                                  <div className="tp-gallery-item-img">
                                                                                                                    <a href="#" data-effect="mfp-zoom-in">
                                                                                                                      <img src={publicUrl+"assets/img/brennia-4.jpg"} alt="image" />
                                                                                                                    </a>
                                                                                                                  </div>
                                                                                                                </div>
                                                                                                                {/* gallery-item */}
                                                                                                                <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                                                                                                  <div className="tp-gallery-item-img">
                                                                                                                    <a href="#" data-effect="mfp-zoom-in">
                                                                                                                      <img src={publicUrl+"assets/img/brennia-5.jpg"} alt="image" />
                                                                                                                    </a>
                                                                                                                  </div>
                                                                                                                </div>
                                                                                                                {/* gallery-item */}
                                                                                                                <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                                                                                                  <div className="tp-gallery-item-img">
                                                                                                                    <a href="#" data-effect="mfp-zoom-in">
                                                                                                                      <img src={publicUrl+"assets/img/brennia-1.jpg"} alt="image" />
                                                                                                                    </a>
                                                                                                                  </div>
                                                                                                                </div>
                                                                                                              </div>
                                                                                                              <div className="row">
                                                                                                                <div className="col-xl-3 col-lg-4">
                                                                                                                  <div className="details">
                                                                                                                    <p className="location mb-0"><i className="fa fa-map-marker" />{dest.locationName}</p>
                                                                                                                    <h4 className="title">{dest.name}</h4>
                                                                                                                    <p className="content">{dest.paxDay} days {dest.paxPerson} person</p>
                                                                                                                    <div className="tp-review-meta">
                                                                                                                      <i className={"fa fa-star " + (dest.ratingsAverage >= 1 ? 'ic-yellow' : 'text-white')}/>
                                                                                                                      <i className={"fa fa-star " + (dest.ratingsAverage >= 2 ? 'ic-yellow' : 'text-white')}/>
                                                                                                                      <i className={"fa fa-star " + (dest.ratingsAverage >= 3 ? 'ic-yellow' : 'text-white')}/>
                                                                                                                        <i className={"fa fa-star " + (dest.ratingsAverage >= 4 ? 'ic-yellow' : 'text-white')}/>
                                                                                                                      <i className={"fa fa-star " + (dest.ratingsAverage >= 5 ? 'ic-yellow' : 'text-white')}/>
                                                                                                                      <span>{dest.ratingsAverage}</span>
                                                                                                                    </div>
                                                                                                                    <div className="all-tags">
                                                                                                                      <a href="#">Adventures</a>
                                                                                                                      <a href="#">Local special ties</a>
                                                                                                                      <a href="#">Natural</a>
                                                                                                                      <a href="#">Travel</a>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                </div>
                                                                                                                <div className="col-xl-9 col-lg-8">
                                                                                                                  <div className="book-list-warp">
                                                                                                                    <p className="book-list-content">Just booked! Get your spot before it's too late.</p>
                                                                                                                    <div className="tp-price-meta">
                                                                                                                      <p>Price</p>
                                                                                                                      <h2>₹{dest.price}</h2>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                  <ul className="tp-list-meta border-tp-solid">
                                                                                                                    <li className="ml-0"><i className="fa fa-calendar-o" /> 8 Oct</li>
                                                                                                                    <li><i className="fa fa-clock-o" />{dest.paxDay} Days</li>
                                                                                                                    <li><i className="fa fa-users" />{dest.paxPerson} Person</li>
                                                                                                                    <li><i className="fa fa-snowflake-o" /> Relaxing</li>
                                                                                                                    <li><i className="fa fa-star" /> {dest.ratingsAverage}</li>
                                                                                                                  </ul>
                                                                                                                </div>   
                                                                                                              </div>
                                                                                                            </div>
                                                                                                            : 
                                                                                                            destinationwindow == 'thulhagiri' ?
                                                                                                            <div className="container">
                                                                                                                                <div className="gallery-filter-area row">
                                                                                                                                  <div className="gallery-sizer col-1" />
                                                                                                                                  <div className="tp-gallery-item col-md-5 col-sm-6 mb-10">
                                                                                                                                    <div className="tp-gallery-item-img">
                                                                                                                                      <div className="thumbnails">
                                                                                                                                        <img src={publicUrl+"assets/img/thulhagiri-4.jpg"} alt="image" />
                                                                                                                                        <div className="video-popup-btn">
                                                                                                                                          <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                                                                                                                                        </div>
                                                                                                                                      </div>
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                  <div className="tp-gallery-item col-md-3 col-sm-6">
                                                                                                                                    <div className="tp-gallery-item-img">
                                                                                                                                      <a href="#" data-effect="mfp-zoom-in">
                                                                                                                                        <img src={publicUrl+"assets/img/thulagiri-5.jpg"} alt="image" />
                                                                                                                                      </a>
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                  <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                                                                                                                    <div className="tp-gallery-item-img">
                                                                                                                                      <a href="#" data-effect="mfp-zoom-in">
                                                                                                                                        <img src={publicUrl+"assets/img/thulagiri-6.jpg"} alt="image" />
                                                                                                                                      </a>
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                  <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                                                                                                                    <div className="tp-gallery-item-img">
                                                                                                                                      <a href="#" data-effect="mfp-zoom-in">
                                                                                                                                        <img src={publicUrl+"assets/img/Thulagir maldives 5.jpg"} alt="image" />
                                                                                                                                      </a>
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                  {/* gallery-item */}
                                                                                                                                  <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                                                                                                                    <div className="tp-gallery-item-img">
                                                                                                                                      <a href="#" data-effect="mfp-zoom-in">
                                                                                                                                        <img src={publicUrl+"assets/img/Thulagiri maldives 3.jpg"} alt="image" />
                                                                                                                                      </a>
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                  {/* gallery-item */}
                                                                                                                                  <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                                                                                                                    <div className="tp-gallery-item-img">
                                                                                                                                      <a href="#" data-effect="mfp-zoom-in">
                                                                                                                                        <img src={publicUrl+"assets/img/Thulagiri maldives 4.jpg"} alt="image" />
                                                                                                                                      </a>
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                </div>
                                                                                                                                <div className="row">
                                                                                                                                  <div className="col-xl-3 col-lg-4">
                                                                                                                                    <div className="details">
                                                                                                                                      <p className="location mb-0"><i className="fa fa-map-marker" />{dest.locationName}</p>
                                                                                                                                      <h4 className="title">{dest.name}</h4>
                                                                                                                                      <p className="content">{dest.paxDay} days {dest.paxPerson} person</p>
                                                                                                                                      <div className="tp-review-meta">
                                                                                                                                        <i className={"fa fa-star " + (dest.ratingsAverage >= 1 ? 'ic-yellow' : 'text-white')}/>
                                                                                                                                        <i className={"fa fa-star " + (dest.ratingsAverage >= 2 ? 'ic-yellow' : 'text-white')}/>
                                                                                                                                        <i className={"fa fa-star " + (dest.ratingsAverage >= 3 ? 'ic-yellow' : 'text-white')}/>
                                                                                                                                          <i className={"fa fa-star " + (dest.ratingsAverage >= 4 ? 'ic-yellow' : 'text-white')}/>
                                                                                                                                        <i className={"fa fa-star " + (dest.ratingsAverage >= 5 ? 'ic-yellow' : 'text-white')}/>
                                                                                                                                        <span>{dest.ratingsAverage}</span>
                                                                                                                                      </div>
                                                                                                                                      <div className="all-tags">
                                                                                                                                        <a href="#">Adventures</a>
                                                                                                                                        <a href="#">Local special ties</a>
                                                                                                                                        <a href="#">Natural</a>
                                                                                                                                        <a href="#">Travel</a>
                                                                                                                                      </div>
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                  <div className="col-xl-9 col-lg-8">
                                                                                                                                    <div className="book-list-warp">
                                                                                                                                      <p className="book-list-content">Just booked! Get your spot before it's too late.</p>
                                                                                                                                      <div className="tp-price-meta">
                                                                                                                                        <p>Price</p>
                                                                                                                                        <h2>₹{dest.price}</h2>
                                                                                                                                      </div>
                                                                                                                                    </div>
                                                                                                                                    <ul className="tp-list-meta border-tp-solid">
                                                                                                                                      <li className="ml-0"><i className="fa fa-calendar-o" /> 8 Oct</li>
                                                                                                                                      <li><i className="fa fa-clock-o" />{dest.paxDay} Days</li>
                                                                                                                                      <li><i className="fa fa-users" />{dest.paxPerson} Person</li>
                                                                                                                                      <li><i className="fa fa-snowflake-o" /> Relaxing</li>
                                                                                                                                      <li><i className="fa fa-star" /> {dest.ratingsAverage}</li>
                                                                                                                                    </ul>
                                                                                                                                  </div>   
                                                                                                                                </div>
                                                                                                                              </div>
                                                                                                                              : ''   

    }
    
    </>
  );
}

export default destinationImages;
