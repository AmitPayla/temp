import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CancellationsTextView extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div>
              <div className="contact-area">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="section-title text-left">
                        <p>
                        All the cancellation and refund policies are according to the Bookings. Your final itinerary will have all the cancellation details. However, if not then the details given below will be applied.<br></br>
* Nothing will be deducted if the client is cancelling before 40 days of travelling. <br></br>
* In case of voluntary cancellation of the booking ₹1,000 will be deducted as service charges. (This is only applicable if the client is cancelling before 35 days of travel).<br></br>
* If any client is cancelling within 35 days of travelling period then the cancellation policies of the resort will be followed. Additionally, the company will deduct the Service charge of ₹2,000.
						            </p>
                      </div>
                    </div>
                  </div>
             </div>
             </div>
               
            </div>

        }
}

export default CancellationsTextView