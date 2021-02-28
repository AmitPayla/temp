import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PrivacyTextView extends Component {

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
						The privacy policy of the company (Flysquare.in) as (We, Us, Our, The team) regulates the use of best practices for ("You/Your") trust. To keep the information secure, encryption techniques are being implemented. Below are some points which may help you in creating a better understanding of your data's usage. <br></br>
* To provide you with our best services, some basic information is collected. <br></br>
* By visiting the Website, you agree to the terms and conditions and privacy policy of the company. If you've some doubts about the data usage then feel free to contact us at info@flysquare.in. <br></br>
* If you think your thoughts can help us in serving better then also feel free to contact us. However, if you don't agree or are feeling unsafe then please leave. <br></br>
* The basic information of the clients who've past, current or future bookings may be shared with the resorts or government. <br></br><br></br>
Note: We don't share credentials like a credit card, debit card, bank details. <br></br>
*The data sent by your browser may also be stored by us to serve you better. For example IP address, Name of Browser, version of browser etc. <br></br>
* Cookies are received by the clients visiting the Website and may be stored by a client's storage method. The clients can also modify their browsers to indicate while cookies are Stored or not receive the cookies. <br></br><br></br>
Note: Not accepting cookies may affect the website's performance. <br></br>
* We use third-party Services for better quality. Our website may have some website links that may redirect you to their web portals. <br></br><br></br>
* Note: We've no control over the data usage of these third party services. Flysquare.in ("company", "Website") won't be responsible for any disputes with them or in case the data irresponsibly handled by these third-party service providers. <br></br>
* Our privacy policy, terms and conditions, cancellation policy and Covid-19 guidelines are updated from time to time. Make sure to check them while visiting after a while. All the changes are applied as soon as they're posted on Website.<br></br>
* We're not liable to any of the damages before/during/after travel. <br></br>
 * We don't sell your data to any of the third party Services.<br></br>

						</p>
                      </div>
                    </div>
                  </div>
             </div>
             </div>
               
            </div>

        }
}

export default PrivacyTextView