import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TermsTextView extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div>
              <div className="contact-area">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="section-title text-left">
                        <p>* We accept all payment methods like a credit card, debit card, UPI, Google Pay, Paytm, Bank transfers.<br></br>
                    * Our payment portal is secure, so don't worry all of your details are safe.<br></br>
                    * Initial deposit: There is a Booking amount which tourists have to pay for booking rooms. The minimum amount for holding a room is ₹10,000. <br></br>
                    * Tourists may also have to pay a security amount to the hotel/resort. This amount is refundable unless the tourists are not damaging the property. <br></br>
                    * All the bookings are subjected to the terms and conditions of the hotels, resorts and Maldivian Government. <br></br>
                    * All the meals like breakfast, lunch and dinner have specific timings which may vary per resort. Don't worry the destination expert will provide you with all the details. <br></br>
                    * Tourists who are interested in availing Honeymooners, anniversaries or birthdays Benefits should show relevant documents for proof. For example marriage certificates for honeymoon and anniversary. <br></br>
                    * The management will not forward any meals which are skipped or not availed by the tourists. No refund or compensation is given to the tourists for this<br></br>
                    *  All the bookings are flexible. The rescheduling may be subject to the availability and price variation.<br></br>
                    * Delay in Check-out may result in additional charges.<br></br>
                    * A confirmation voucher is provided to the personal tourists by their destination experts. The voucher holds the confirmation status of your booking.<br></br>
                    <br></br>
                    The given information is only for your reference.<br></br>
                    Delay in sending any documents including flight tickets may result in a delay in availing transfers from the resorts.
                    All the payments must be settled before 35 to travel.
                    The management has all the rights to terminate any deals or promotional offers anytime.
                    All the disputes/cases must be settled under Delhi Jurisdiction system.
                    </p>
                      </div>
                    </div>
                  </div>
             </div>
             </div>
               
            </div>

        }
}

export default TermsTextView