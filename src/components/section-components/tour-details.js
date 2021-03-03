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
import NokuMaldives from "../destination-Noku-Maldives";
import Thulagiri from "../destination-Thulhagiri-Island.js";
import Brennia from "../destination-Brennia-Kottefaru.js";
import Furaveri from "../destination-Furaveri-Island.js";
import SunSiyam from "../destination-Sun-Siyam-Olhuveli.js";
import Movenpick from "../destination-Movenpick-Maldives.js";
import Cocoon from "../destination-Cocoon-Maldives.js";
import HardRock from "../destination-Hard-Rock-Maldives.js";
import DestinationImages from "../destination-page-image-container.js"
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
   const [ destinationwindow , setDestinationwindow ] = useState("")
      useEffect(() => {
          window.scrollTo(0, 0);
          const $ = window.$;
          var preLoder = $("#preloader");
          preLoder.fadeIn(0);
          let id = query.get("id");
          let destinationwindow = query.get("dest")

          setDestinationwindow(destinationwindow);  

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
                  <DestinationImages destinationwindow = {destinationwindow} dest={dest} />
                </div>
              </div>
              <div className="container sticky" >
                <div className="row">
                  <div className="col-lg-8">
                    <div className="tour-details-wrap">
                      {destinationwindow == 'noku' ? 
                     <NokuMaldives dest = {dest}/>
                     :   destinationwindow == "thulhagiri" ?
                     <Thulagiri dest = {dest}/>
                     :   destinationwindow == "brennia" ?
                     <Brennia dest = {dest}/>
                     :   destinationwindow == "furaveri" ?
                     <Furaveri dest = {dest}/>
                     :   destinationwindow == "sunsiya" ?
                     <SunSiyam dest = {dest}/>
                     :   destinationwindow == "movenpick" ?
                     <Movenpick dest = {dest}/>
                     :   destinationwindow == "cocoon" ?
                     <Cocoon dest = {dest}/>
                     :  <HardRock dest = {dest}/>
                    }
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
                       
                        </ul>
                      
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
                  <div className="col-lg-4" >
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
                      {/* <div className="widget_ads">
                        <a href="#"><img className="w-100" src={publicUrl+"assets/img/others/01.png" }alt="img" /></a>
                      </div> */}
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default TourDetails