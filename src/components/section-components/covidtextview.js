import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CovidTextView extends Component {

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
* For better protection, all the tourists should wear masks throughout their journey. Ensure minimum contact and use sanitisers frequently. <br></br>
* Follow social distancing while visiting anywhere.<br></br>
* Try to use your own cameras, selfie sticks and binoculars.<br></br>
* Exchanging things may result in contact with the other passengers. <br></br>
* Patients with covid-19 symptoms may have to face quarantine. It's better to have a covid-19 negative report.<br></br>
* All the luggage will be carried out by staff members of the resort with gloves and masks. Ensure minimum contact.<br></br>
 <a href="https://www.newdelhiairport.in/airsuvidha/apho-registration" target="_blank" className="text-primary">https://www.newdelhiairport.in/airsuvidha/apho-registration</a> <br></br>
<a href="https://imuga.immigration.gov.mv/ethd/create" target="_blank" className="text-primary">https://imuga.immigration.gov.mv/ethd/create</a> <br></br>
The passengers must get covid RT-PCR testing done and a negative report of the same must be given 76 hrs prior to travel in order to ensure restriction-free travel Tourists have to fill the forms given in the links above.<br></br><br></br>
 The generated code will be used in the immigration process at Airports.<br></br>

                        </p>
                      </div>
                    </div>
                  </div>
             </div>
             </div>
               
            </div>

        }
}

export default CovidTextView