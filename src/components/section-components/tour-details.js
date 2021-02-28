import React,{useState, useEffect} from 'react'
import axios  from 'axios'
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import parse from 'html-react-parser';
import { toast } from 'react-toastify';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function TourDetails(){
   let query = useQuery();
   var dateFormat = require("dateformat");
   const[dest, setDest] = useState({})

   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [contact, setContact] = useState("");
   const [departureDate, setDepartureDate] = useState("");
   const [arrivalDate, setArrivalDate] = useState("");
   const [numberOfPerson, setNumberOfPerson] = useState("");
   const [message, setMessage] = useState("");
   const [errors, setErrors] = useState({});
   const [rating, setRating] = useState(0);
   const [comments, setComments] = useState("");

   const [razorpayError, setRazorpayError] = useState(false);
   const [paymentDetail, setPaymentDetail] = useState(null);
   const [loadingPaymentBill, setLoadingPaymentBill] = useState(false);

      useEffect(() => {
          window.scrollTo(0, 0);

          const $ = window.$;
          var preLoder = $("#preloader");
          preLoder.fadeIn(0);

          let id = query.get("id");
          axios.get(process.env.REACT_APP_CLIENT_ID+'destinations/'+id)
              .then(response => {
                console.log(response);
                setDest(response.data.data)
                preLoder.fadeOut(0);
              });
      }, []);


      async function displayRazorpay() {
        //show loader
        if (localStorage.getItem('token')) {
          let isValidForm = true;
          if(firstName.length < 1) {
            setErrors(errors => ({...errors,firstName:'Enter first name'}));
            isValidForm = false;
          }
          if(lastName.length < 1) {
            setErrors(errors => ({...errors,lastName:'Enter last name'}));
            isValidForm = false;
          }
          if(email.length < 1) {
            setErrors(errors => ({...errors,email:'Enter email'}));
            isValidForm = false;
          }
          if(contact.length < 1) {
            setErrors(errors => ({...errors,contact:'Enter phone'}));
            isValidForm = false;
          }
          if(departureDate.length != null) {
            setErrors(errors => ({...errors,departureDate:'Enter departing date'}));
            isValidForm = false;
          }
          if(arrivalDate.length != null) {
            setErrors(errors => ({...errors,arrivalDate:'Enter returing date'}));
            isValidForm = false;
          }
          if(numberOfPerson.length < 1) {
            setErrors(errors => ({...errors,numberOfPerson:'Enter no of person'}));
            isValidForm = false;
          }
          if(message.length < 1) {
            setErrors(errors => ({...errors,message:'Enter message'}));
            isValidForm = false;
          }

          if (isValidForm) {
            const $ = window.$;
            var preLoder = $("#preloader");
            preLoder.fadeIn(0);

            // checkout js file
            const res = await loadScript(
              'https://checkout.razorpay.com/v1/checkout.js'
            );
        
            if (!res) {
              toast('Razorpay SDK failed to load. Are you online?', { autoClose: 2000 });
              return;
            }
            
            let orderData = {
              destination: dest.id,
              fromDate: dateFormat(departureDate, "yyyy-mm-dd"),
              toDate: dateFormat(arrivalDate, "yyyy-mm-dd"),
              totalPerson: numberOfPerson,
              message: message
            }
            const { data } = await axios.post(
              'https://flysquare.herokuapp.com/api/v1/orders',
              orderData,
              {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
              }
            );
        
            const options = {
              key: process.env.REACT_APP_RZP_ID,
              currency: data.rzpOrder.currency,
              amount: data.rzpOrder.amount.toString(),
              order_id: data.rzpOrder.id,
              name: 'FlySquare',
              description: 'Thank you for purchasing wih us',
              image: 'assets/img/Flysquare_Logo_icon.png',
              handler: function (response) {
                setLoadingPaymentBill(true);
                preLoder.fadeOut(0);
                if (response) {
                  toast("Payment Successfull!", { autoClose: 3000 });
                  //setTimeout(() => {
                    //handleFetchPaymentDetails(response);
                  //}, 5000);
                }
              },
            };
        
            async function handleFetchPaymentDetails({
              razorpay_order_id,
              razorpay_payment_id,
            }) {
              try {
                const getPaymentDetails = await axios.get(
                  `/payment/payment/${razorpay_payment_id}`
                );
        
                if (getPaymentDetails.isSuccess) {
                  setPaymentDetail(getPaymentDetails);
                  //setloadingRazorPay(false);
                  setLoadingPaymentBill(false);
                  toast("Payment Successfull!", { autoClose: 2000 });
                }
              } catch (e) {
                setRazorpayError(true);
                toast("Payment Failed!", { autoClose: 2000 });
              }
            }
        
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
          } else {
            toast("Please enter valid data!!", { autoClose: 2000 });
          }
      } else {
        toast("Please Login First!!",  { autoClose: 2000 });
      }
    }

    const sendReview = () => {
      if (localStorage.getItem('token')) {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
      let reviewData = {
        review: comments,
        rating: rating,
        destination: dest.id
      }
      if (comments.length > 0) {
          const $ = window.$;
          var preLoder = $("#preloader");
          preLoder.fadeIn(0);
          axios.post(process.env.REACT_APP_CLIENT_ID+"reviews",reviewData, { headers: headers})
            .then(response => {
            toast("Review Added Successfully!", { autoClose: 2000 });
            console.log(response);	
            setRating(0);
            setComments("");
            preLoder.fadeOut(0);
            })
            .catch(error => {
                console.log(error);
                preLoder.fadeOut(0);
                toast("Something wrong, please try again!", { autoClose: 2000 });
            })
        } else {
          toast("Please enter comments!!", { autoClose: 2000 });
        }
      } else {
        toast("Please Login First!!",  { autoClose: 2000 });
      }
    }
    const onDatePicker = (date, key) => {
      switch(key) {
        case 'dep':
          if(departureDate == null || departureDate.length < 1) {
            setErrors(errors => ({...errors,departureDate:'Enter departing date'}));
          } else {
            setErrors(errors => ({...errors,departureDate:''}));
          }
          break;
        case 'arr':
          if(arrivalDate == null || arrivalDate.length < 1) {
            setErrors(errors => ({...errors,arrivalDate:'Enter returing date'}));
          } else {
            setErrors(errors => ({...errors,arrivalDate:''}));
          }
          break;
       
      }
    }
    const handleChange = (evt, type) => {
      var dateFormat = require("dateformat");
      switch(type) {
        case 'firstName':
          if(evt.target.value.length < 1) {
            setErrors(errors => ({...errors,firstName:'Enter first name'}));
          } else {
            setErrors(errors => ({...errors,firstName:''}));
          }
          setFirstName(evt.target.value)
          break;
        case 'lastName':
          if(evt.target.value.length < 1) {
            setErrors(errors => ({...errors,lastName:'Enter last name'}));
          } else {
            setErrors(errors => ({...errors,lastName:''}));
          }
          setLastName(evt.target.value)
          break;
        case 'email':
          if(evt.target.value.length < 1) {
            setErrors(errors => ({...errors,email:'Enter email'}));
          } else {
            setErrors(errors => ({...errors,email:''}));
          }
          setEmail(evt.target.value)
          break;
        case 'contact':
          if(evt.target.value.length < 1) {
            setErrors(errors => ({...errors,contact:'Enter phone'}));
          } else {
            setErrors(errors => ({...errors,contact:''}));
          }
          setContact(evt.target.value)
          break;
        case 'departureDate':
          if(dateFormat(evt, "dd-mm-yyyy").length < 1) {
            setErrors(errors => ({...errors,departureDate:'Enter departing date'}));
          } else {
            setErrors(errors => ({...errors,departureDate:''}));
          }
          setDepartureDate(evt)
          break;
        case 'arrivalDate':
          if(dateFormat(evt, "yyyy-mm-dd").length < 1) {
            setErrors(errors => ({...errors,arrivalDate:'Enter returing date'}));
          } else {
            setErrors(errors => ({...errors,arrivalDate:''}));
          }
          setArrivalDate(evt)
          break;
        case 'numberOfPerson':
          if(evt.target.value.length < 1) {
            setErrors(errors => ({...errors,numberOfPerson:'Enter no of person'}));
          } else {
            setErrors(errors => ({...errors,numberOfPerson:''}));
          }
          setNumberOfPerson(evt.target.value)
          break;
        case 'message':
          if(evt.target.value.length < 1) {
            setErrors(errors => ({...errors,message:'Enter message'}));
          } else {
            setErrors(errors => ({...errors,message:''}));
          }
          setMessage(evt.target.value)
          break;
          
      }
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        let isValidForm = true;
        if(firstName.length < 1) {
          setErrors(errors => ({...errors,firstName:'Enter first name'}));
          isValidForm = false;
        }
        if(lastName.length < 1) {
          setErrors(errors => ({...errors,lastName:'Enter last name'}));
          isValidForm = false;
        }
        if(email.length < 1) {
          setErrors(errors => ({...errors,email:'Enter email'}));
          isValidForm = false;
        }
        if(contact.length < 1) {
          setErrors(errors => ({...errors,contact:'Enter phone'}));
          isValidForm = false;
        }
        if(departureDate.length != null) {
          setErrors(errors => ({...errors,departureDate:'Enter departing date'}));
          isValidForm = false;
        }
        if(arrivalDate.length != null) {
          setErrors(errors => ({...errors,arrivalDate:'Enter returing date'}));
          isValidForm = false;
        }
        if(numberOfPerson.length < 1) {
          setErrors(errors => ({...errors,numberOfPerson:'Enter no of person'}));
          isValidForm = false;
        }
        if(message.length < 1) {
          setErrors(errors => ({...errors,message:'Enter message'}));
          isValidForm = false;
        }
        var dateFormat = require("dateformat");
        let leadData = 
        {
          "arrivalDate": dateFormat(arrivalDate, "yyyy-mm-dd"),
          "contact": contact,
          "departureDate": dateFormat(departureDate, "yyyy-mm-dd"),
          "destinationId": dest._id,
          "email": email,
          "firstName": firstName,
          "lastName": lastName,
          "message": message,
          "numberOfPerson": numberOfPerson+""
      }
      
      console.log(leadData);
      console.log('error', errors);
       const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
      if (isValidForm) {
          const $ = window.$;
          var preLoder = $("#preloader");
          preLoder.fadeIn(0);
          axios.post(process.env.REACT_APP_CLIENT_ID+"leads",leadData, { headers: headers})
            .then(response => {
            toast("Lead Added Successfully!", { autoClose: 2000 });
            setErrors({})
            setFirstName('');
            setLastName('');
            setContact('');
            setDepartureDate('');
            setArrivalDate('');
            setEmail('');
            setNumberOfPerson('');
            setMessage("");
            console.log(response);	
            preLoder.fadeOut(0);
            })
            .catch(error => {
                console.log(error);
                setErrors({})
                preLoder.fadeOut(0);
                toast("Something wrong, please try again!", { autoClose: 2000 });
            })
        } else {
          toast("Please enter valid data!!", { autoClose: 2000 });
        }
    }
   
    let publicUrl = process.env.PUBLIC_URL+'/'
    /* let locationUrl = dest.location ? "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q="+dest.location.lat+",%20"+dest.location.long+"+(flysquare)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
     : "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=25.3034496,%2082.99151359999999+(flysquare)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"; */
     
    return (	<div className="tour-details-area mg-top--70">
              <div className="tour-details-gallery">
                <div className="container-bg bg-dark-blue">
                  <div className="container">
                    <div className="gallery-filter-area row">
                      <div className="gallery-sizer col-1" />
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-md-5 col-sm-6 mb-10">
                        <div className="tp-gallery-item-img">
                          <div className="thumbnails">
                            <img src={publicUrl+"assets/img/tour-details/1.png"} alt="image" />
                            <div className="video-popup-btn">
                              <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-md-3 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/tour-details/2.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/tour-details/3.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/tour-details/4.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/tour-details/5.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/tour-details/6.png"} alt="image" />
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
                           {/*  <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" /> */}
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
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="tour-details-wrap">
                      <h4 className="single-page-small-title">Write A Review</h4>
                      <p>From its distinct half-hour time zone to its occasional June snowshower, Newfoundland runs on its own time. By August, the summer crowds have dwindled, berries hang ripe and heavy on their stems, and the landscape is ablaze with wildflowers. Join us at the peak of Newfoundland’s late summer season as we wind our way through the famously Celtic stretch of coastline known as the Irish Loop, exploring its unique history, folklore, cuisine, and breathtaking seaside scenery. We’ll enjoy dinners made from freshly foraged ingredients on a quiet dock, chat with a boat-builder in the midst of making a vessel, and learn how to craft heritage cheese from local experts while surrounded by an adorable, bleating tribe of tiny baby goats. As we make our way along the Loop, we’ll encounter countless characters, places, and stories that give this corner of the island its charm, tenacity, and unique flair.</p>
                      <p> This trip is offered by Atlas Obscura. Once you've reserved your spot, our team will be in touch to help you prepare for the trip. Please note that flights to and from St. John's are not included in the trip cost. This trip is limited by 12 travelers.</p>
                      <div className="package-included-area">
                        <h4 className="single-page-small-title">Included</h4>
                        <span className="row">
                            {
                            dest && dest.includedInPackage && dest.includedInPackage.length > 0 ?
                            dest.includedInPackage.map((pack, index) => 
                              <React.Fragment key={pack._id}>
                              {
                                pack.isChecked &&
                                <div className="col-xl-4 col-sm-6" >
                                <div className="single-package-included">
                                  <img src={publicUrl+"assets/img/icons/15.png"} alt="icons" />
                                  <h6>{pack.name}</h6>
                                  <p>{pack.fieldValue}</p>
                                </div>
                                </div>
                              }
                              </React.Fragment>
                            ) 
                            :
                            null
                            }  
                        </span>
                      </div>
                      <div className="package-included-location">
                        <h4 className="single-page-small-title">Your Itinerary</h4>
                        <div className="row">
                        {
                            dest && dest.itenary && dest.itenary.length > 0 ?
                            dest.itenary.map((itenary, index) => 
                            <React.Fragment key={itenary._id}>
                              {
                                <div className="col-lg-4 col-md-4" >
                                <div className="single-blog">
                                  <div className="p-list">
                                    <div className="list">{index + 1}</div>
                                    <p>Day {index + 1}</p>
                                  </div>
                                  <div className="thumb">
                                    <img src={publicUrl+"assets/img/blog/8.png"} alt="blog" />
                                  </div>
                                  <div className="single-blog-details">
                                    <h4 className="title">{itenary.title}</h4>
                                    <p className="content">{itenary.description}</p>
                                   {/*  <a className="btn-read-more" href="#"><span>Show More<i className="la la-arrow-right" /></span></a> */}
                                  </div>
                                </div>
                              </div>
                              }
                              </React.Fragment>
                            ) 
                            :
                            <p>No Itenary</p>
                        }  

                          
                          {/* <div className="col-lg-4 col-md-4">
                            <div className="single-blog">
                              <div className="p-list">
                                <div className="list">2</div>
                                <p>Day 2</p>
                              </div>
                              <div className="thumb">
                                <img src={publicUrl+"assets/img/blog/1.png"} alt="blog" />
                              </div>
                              <div className="single-blog-details">
                                <h4 className="title">Relaxation &amp; Exploration</h4>
                                <p className="content">After a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show more</p>
                                <a className="btn-read-more" href="#"><span>Show More<i className="la la-arrow-right" /></span></a>
                              </div>
                            </div>
                          </div> */}
                          {/* <div className="col-lg-4 col-md-4">
                            <div className="single-blog single-blog-after-none">
                              <div className="p-list">
                                <div className="list">3</div>
                                <p>Day 3</p>
                              </div>
                              <div className="thumb">
                                <img src={publicUrl+"assets/img/blog/9.png"} alt="blog" />
                              </div>
                              <div className="single-blog-details">
                                <h4 className="title">Farewell &amp; Departure</h4>
                                <p className="content">After a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show more</p>
                                <a className="btn-read-more" href="#"><span>Show More<i className="la la-arrow-right" /></span></a>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                      <div className="host-area">
                        <div className="single-host-wrap text-center">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/Flysquare_Logo_icon.png"} alt="img"/>
                          </div>
                          <h4>Mike At Atlas Obscura Trips</h4>
                          <p>I'm your Atlas Obscura Trip Coordinator. Since 2016, Atlas Obscura has been offering unusual trips to the world’s most extraordinary places. Our itineraries are developed in close collaboration with the locals and insiders who host them—our global community of explorers</p>
                          <p> Felicity Roberts will be leading your trip. A rural Newfoundlander, certified herbalist, farmer, writer, wild food advocate, and self relic, Felicity is most on the barrens cutting heather to dye wool or hanging off the edge</p>
                          <a className="btn btn-yellow" href="#">Contact Host</a>
                        </div>
                      </div>
                      <div className="service-location-map">
                        <h4 className="single-page-small-title">Service Location</h4>
                        <div className="service-location-map">
                          <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=25.3034496,%2082.99151359999999+(flysquare)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
                        </div>
                      </div>
                      <div className="comments-area tour-details-review-area">
                        <h4 className="comments-title">Reviews</h4>
                        <ul className="comment-list mb-0">
                        {
                            dest && dest.reviews && dest.reviews.length > 0 ?
                            dest.reviews.map((review, index) => 
                          <li key={review._id}>
                            <div className="single-comment-wrap">
                              <div className="thumb">
                                <img src="assets/img/review.png" alt="img" />
                              </div>
                              <div className="content">
                                <h4 className="title">{review.user.firstName + " " + review.user.lastName}</h4>
                                <span className="date">{dateFormat(review.createdAt, "dd-mm-yyyy")}</span>
                                <div className="tp-review-meta">
                                  <i className={"fa fa-star " + (review.rating >= 1 ? 'ic-yellow' : '')}/>
                                  <i className={"fa fa-star " + (review.rating >= 2 ? 'ic-yellow' : '')}/>
                                  <i className={"fa fa-star " + (review.rating >= 3 ? 'ic-yellow' : '')}/>
                                  <i className={"fa fa-star " + (review.rating >= 4 ? 'ic-yellow' : '')}/>
                                  <i className={"fa fa-star " + (review.rating >= 5 ? 'ic-yellow' : '')}/>
                                </div>
                                <p>{review.review}</p>
                              </div>
                            </div>
                          </li>
                            ): null}
                          {/* <li>
                            <div className="single-comment-wrap">
                              <div className="thumb">
                                <img src="assets/img/review.png" alt="img" />
                              </div>
                              <div className="content">
                                <h4 className="title">Eliza Jordan</h4>
                                <span className="date">17 SEP 2019</span>
                                <div className="tp-review-meta">
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
                              </div>
                            </div>
                          </li> */}
                        </ul>
                       {/*  <div className="btn-wrapper text-right mt-3">
                          <a className="btn-read-more" href="#"><span>More Review<i className="la la-arrow-right" /></span></a>
                        </div> */}
                      </div>
                      <div className="location-review-area">
                        <form className="tp-form-wrap bg-gray tp-form-wrap-one">
                          <div className="row">
                            <div className="col-lg-6"><h4 className="single-page-small-title">Write A Review</h4></div>
                            <div className="col-lg-6">
                              <div className="tp-review-meta text-lg-right">
                                <span className="mr-3 ml-0">Assigned Rating</span>
                                 <i
                                 className={"fa fa-star " + (rating >= 1 ? 'ic-yellow' : '')}
                                  onClick={() => setRating(1)}/>
                                 <i className={"fa fa-star " + (rating >= 2 ? 'ic-yellow' : '')}
                                  onClick={() => setRating(2)}/>
                                 <i  className={"fa fa-star " + (rating >= 3 ? 'ic-yellow' : '')}
                                  onClick={() => setRating(3)}/>
                                 <i  className={"fa fa-star " + (rating >= 4 ? 'ic-yellow' : '')}
                                  onClick={() => setRating(4)}/>
                                 <i className={"fa fa-star " + (rating >= 5 ? 'ic-yellow' : '')}
                                  onClick={() => setRating(5)}/>
                              </div>
                            </div>
                            {/* <div className="col-lg-6">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Name</span>
                                <input type="text" />
                              </label>
                            </div>
                            <div className="col-lg-6">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Email</span>
                                <input type="text" />
                              </label>
                            </div> */}
                            <div className="col-lg-12">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Comments</span>
                                <textarea defaultValue={comments} onChange={(e) => setComments(e.target.value)} />
                              </label>
                            </div>
                            <div className="col-12">
                              <button className="btn btn-yellow" type="button" onClick={sendReview}>Send</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <form onSubmit={handleSubmit}>
                    <div className="sidebar-area sidebar-area-4">
                      <div className="widget tour-list-widget">
                        <div className="widget-tour-list-meta">
                          <div className="single-widget-search-input-title"><i className="fa fa-user" /> Name</div>
                          <div className="single-widget-search-input">
                            <input type="text" placeholder="First Name" value={firstName}
                            onChange={e => handleChange(e, 'firstName')}
                            onBlur={e => handleChange(e, 'firstName')} style={{width:'48%'}} />
                             <input type="text" placeholder="Last Name" value={lastName}
                             onChange={e => handleChange(e, 'lastName')} 
                             onBlur={e => handleChange(e, 'lastName')}style={{width:'48%'}} className="ml-2"/>
                          </div>
                          {errors.firstName && errors.firstName.length > 0 && 
               					    <span className='error text-danger'>{errors.firstName}</span>}
                            {errors.lastName && errors.lastName.length > 0 && 
               					    <span className='error text-danger ml-1'>{errors.lastName}</span>}
                          <div className="single-widget-search-input-title"><i className="fa fa-envelope" /> Email</div>
                          <div className="single-widget-search-input">
                            <input type="text" placeholder="Email" value={email}
                             onChange={e => handleChange(e, 'email')}
                             onBlur={e => handleChange(e, 'email')}/>
                          </div>
                          {errors.email && errors.email.length > 0 && 
               					    <span className='error text-danger'>{errors.email}</span>}
                          <div className="single-widget-search-input-title"><i className="fa fa-phone" /> Phone</div>
                          <div className="single-widget-search-input">
                            <input type="text" placeholder="Phone"  value={contact}
                             onChange={e => handleChange(e,'contact')}
                             onBlur={e => handleChange(e,'contact')}/>
                          </div>
                          {errors.contact && errors.contact.length > 0 && 
               					    <span className='error text-danger'>{errors.contact}</span>}
                          <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Date</div>
                          <div className="single-widget-search-input">
                           {/*  <input type="text" className="departing-date" name="departing-date" id="departing-date" placeholder="Departing" value={departureDate}
                           onChange={handleDDateChange} onBlur={handleDDateChange}/> */}
                            <DatePicker minDate={new Date()} selected={departureDate}  onChange={e => handleChange(e, 'departureDate')} onBlur={date => onDatePicker(date, 'dep')} className="w-110" dateFormat='yyyy-MM-dd' placeholderText="Check-in"/>
                          </div>
                          {errors.departureDate && errors.departureDate.length > 0 && 
               					    <span className='error text-danger'>{errors.departureDate}</span>}
                          <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Date</div>
                          <div className="single-widget-search-input">
                            {/* <input type="text" className="returning-date custom-select" placeholder="Returning" value={arrivalDate}
                            onChange={e => setArrivalDate(e.target.value)}/> */}
                             <DatePicker minDate={departureDate ? departureDate: new Date()} selected={arrivalDate}  onChange={e => handleChange(e, 'arrivalDate')} onBlur={date => onDatePicker(date, 'arr')} className="w-110" dateFormat='yyyy-MM-dd' placeholderText="Check-out"/>
                          </div>
                          {errors.arrivalDate && errors.arrivalDate.length > 0 && 
               					    <span className='error text-danger'>{errors.arrivalDate}</span>}
                          <div className="single-widget-search-input-title"><i className="fa fa-user" /> No of person</div>
                          <div className="single-widget-search-input">
                            <input type="text" placeholder="No of person" value={numberOfPerson}
                             onChange={e => handleChange(e, 'numberOfPerson')}
                             onBlur={e => handleChange(e, 'numberOfPerson')}/>
                          </div>
                          {errors.numberOfPerson && errors.numberOfPerson.length > 0 && 
               					    <span className='error text-danger'>{errors.numberOfPerson}</span>}
                          <div className="single-widget-search-input-title"><i className="fa fa-keyboard-o" /> Message</div>
                          <div className="single-widget-search-input">
                            <textarea placeholder="Type" value={message}  onChange={e => handleChange(e, 'message')}
                            onBlur={e => handleChange(e, 'message')}/>
                          </div>
                          {errors.message && errors.message.length > 0 && 
               					    <span className='error text-danger'>{errors.message}</span>}
                          <div className="text-lg-center text-left" style={{display:'flex'}}>
                            <button type="submit" className="btn btn-yellow">Book Now <i className="fa fa-paper-plane" /></button>
                            <button type="button" className="btn btn-primary ml-2"  onClick={displayRazorpay}>Pay Now <i className="fa fa-paper-plane" /></button>
                          </div>
                        </div>
                      </div>
                      <div className="widget_ads">
                        <a href="#"><img className="w-100" src={publicUrl+"assets/img/others/01.png" }alt="img" /></a>
                      </div>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default TourDetails