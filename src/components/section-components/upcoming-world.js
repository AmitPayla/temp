import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class UpcomingWorld extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return   <div className="upcomming-world pd-top-108 viaje-go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-xl-7 col-lg-8">
			        <div className="section-title">
			          <h2 className="title">Explore Maldives for Yourself</h2>
			          <p>Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar</p>
			        </div>
			      </div>
			    </div>
			  </div>
			  <div className="upcomming-card-slider upcomming-card-slider-1 tp-common-slider-style">
			    <div className="single-upconing-card">
			      <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/dest/MaleCity.jpg)'}}>
			        <img src={publicUrl+"assets/img/tour/1.png"} alt="flag" />
			      </div>
			      <div className="flag">
			        <img src={publicUrl+"assets/img/Flysquare_Logo_icon.png"} alt="flag"/>
			      </div>
			      <div className="content text-center">
			        <h3 className="title"><Link to="/destination-details">Male City</Link></h3>
			        <p>	Capital city of Maldives popular for its rich heritage, pristine beaches, bustling markets and opulent restaurants.</p>
			      </div>
			    </div>
			    <div className="single-upconing-card">
			      <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/dest/ComoCocoa.jpg)'}}>
			        <img src={publicUrl+"assets/img/tour/2.png"} alt="flag" />
			      </div>
			      <div className="flag">
			        <img src={publicUrl+"assets/img/Flysquare_Logo_icon.png"} alt="flag" />
			      </div>
			      <div className="content text-center">
			        <h3 className="title"><Link to="/destination-details">Como Cocoa Island</Link></h3>
			        <p>Cozily positioned island, a tropical paradise for rejuvination and relaxation.</p>
			      </div>
			    </div>
			    <div className="single-upconing-card">
			      <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/dest/AdduAtoll.jpg)'}}>
			        <img src={publicUrl+"assets/img/tour/3.png"} alt="flag" />
			      </div>
			      <div className="flag">
			        <img src={publicUrl+"assets/img/Flysquare_Logo_icon.png"} alt="flag" />
			      </div>
			      <div className="content text-center">
			        <h3 className="title"><Link to="/destination-details">Addu Atoll</Link></h3>
			        <p>A popular atoll comprises of myriad of well known and beautiful islands including the Gan island.</p>
			      </div>
			    </div>
			    <div className="single-upconing-card">
			      <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/dest/Maafushi.jpg)'}}>
			        <img src={publicUrl+"assets/img/tour/4.png"} alt="flag" />
			      </div>
			      <div className="flag">
			        <img src={publicUrl+"assets/img/Flysquare_Logo_icon.png"} alt="flag" />
			      </div>
			      <div className="content text-center">
			        <h3 className="title"><Link to="/destination-details">Maafushi island</Link></h3>
			        <p>Best beach of the country owing to its myriad of fun and thrilling activities</p>
			      </div>
			    </div>
			    <div className="single-upconing-card">
			      <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/dest/Artificialbeach.jpg)'}}>
			        <img src={publicUrl+"assets/img/tour/5.png"} alt="flag" />
			      </div>
			      <div className="flag">
			        <img src={publicUrl+"assets/img/Flysquare_Logo_icon.png"} alt="flag" />
			      </div>
			      <div className="content text-center">
			        <h3 className="title"><Link to="/destination-details">Artificial beach</Link></h3>
			        <p>Organises many carnivals and offers a pleathora of thrilling water sports.</p>
			      </div>
			    </div>
			    <div className="single-upconing-card">
			      <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/dest/FulhadhooIsland.jpg)'}}>
			        <img src={publicUrl+"assets/img/tour/6.png"} alt="flag" />
			      </div>
			      <div className="flag">
			        <img src={publicUrl+"assets/img/Flysquare_Logo_icon.png"} alt="flag" />
			      </div>
			      <div className="content text-center">
			        <h3 className="title"><Link to="/destination-details">Fulhadhoo Island</Link></h3>
			        <p>Clear lagoons, Palm trees, white sand and serene ambience. Plethora of hidden treasures.</p>
			      </div>
			    </div>
				<div className="single-upconing-card">
			      <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/dest/GlowingBeach.jpg)'}}>
			        <img src={publicUrl+"assets/img/tour/6.png"} alt="flag" />
			      </div>
			      <div className="flag">
			        <img src={publicUrl+"assets/img/Flysquare_Logo_icon.png"} alt="flag" />
			      </div>
			      <div className="content text-center">
			        <h3 className="title"><Link to="/destination-details">Glowing Beach</Link></h3>
			        <p>Known for its phenomenal flouroscent waves at night.</p>
			      </div>
			    </div>
				<div className="single-upconing-card">
			      <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/dest/AlimathaIsland.jpg)'}}>
			        <img src={publicUrl+"assets/img/tour/6.png"} alt="flag" />
			      </div>
			      <div className="flag">
			        <img src={publicUrl+"assets/img/Flysquare_Logo_icon.png"} alt="flag" />
			      </div>
			      <div className="content text-center">
			        <h3 className="title"><Link to="/destination-details">Alimatha Island</Link></h3>
			        <p>Known for its unbeatable greenery along with crystal clear waters.</p>
			      </div>
			    </div>
			  </div>
			</div>


        }
}

export default UpcomingWorld