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
			      <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/Hard rock maldives 2.jpg)'}}>
			        <img src={publicUrl+"assets/img/Hard rock maldives 2.jpg"} alt="flag" style={{height : '480px',width:'387px'}}/>
			      </div>
			      <div className="flag">
			        <img src={publicUrl+"assets/img/Flysquare_Logo_icon.png"} alt="flag"/>
			      </div>
			      <div className="content text-center">
			        <h3 className="title"><Link to="/destination-details?dest=hardrock">Hard Rock Maldives</Link></h3>
			        <p>	Discover The Marina @ CROSSROADS showcasing the legendary Hard Rock Cafe</p>
			      </div>
			    </div>
			    <div className="single-upconing-card">
			      <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/meandyou.jpg)'}}>
			        <img src={publicUrl+"assets/img/meandyou.jpg"} alt="flag" style={{height : '480px',width:'387px'}} />
			      </div>
			      <div className="flag">
			        <img src={publicUrl+"assets/img/Flysquare_Logo_icon.png"} alt="flag" />
			      </div>
			      <div className="content text-center">
			        <h3 className="title"><Link to="/destination-details?dest=cocoon">You & Me by Cocoon Maldives</Link></h3>
			        <p>Cozily positioned island, a tropical paradise for rejuvination and relaxation.</p>
			      </div>
			    </div>
			    <div className="single-upconing-card">
			      <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/noku maldives4.jpg)'}}>
			        <img src={publicUrl+"assets/img/noku maldives4.jpg"} alt="flag" style={{height : '480px',width:'387px'}}/>
			      </div>
			      <div className="flag">
			        <img src={publicUrl+"assets/img//Flysquare_Logo_icon.png"} alt="flag" />
			      </div>
			      <div className="content text-center">
			        <h3 className="title"><Link to="/destination-details?dest=movenpick">Movenpick Maldives</Link></h3>
			        <p>A popular atoll comprises of myriad of well known and beautiful islands including the Gan island.</p>
			      </div>
			    </div>
			    <div className="single-upconing-card">
			      <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/Noku maldives.jpg)'}}>
			        <img src={publicUrl+"assets/img/Noku maldives.jpg"} alt="flag" style={{height : '480px',width:'387px'}}/>
			      </div>
			      <div className="flag">
			        <img src={publicUrl+"assets/img/Flysquare_Logo_icon.png"} alt="flag" />
			      </div>
			      <div className="content text-center">
			        <h3 className="title"><Link to="/destination-details?dest=sunsiya">Sun Siyam Olhuveli</Link></h3>
			        <p>Best beach of the country owing to its myriad of fun and thrilling activities</p>
			      </div>
			    </div>
			    <div className="single-upconing-card">
			      <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/Thulagiri maldives 4.jpg)'}}>
			        <img src={publicUrl+"assets/img/Thulagiri maldives 4.jpg"} alt="flag"  style={{height : '480px',width:'387px'}}/>
			      </div>
			      <div className="flag">
			        <img src={publicUrl+"assets/img/Flysquare_Logo_icon.png"} alt="flag" />
			      </div>
			      <div className="content text-center">
			        <h3 className="title"><Link to="/destination-details?dest=furaveri">Furaveri Island</Link></h3>
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
			        <h3 className="title"><Link to="/destination-details?dest=brennia">Brennia Kottefaru</Link></h3>
			        <p>Clear lagoons, Palm trees, white sand and serene ambience. Plethora of hidden treasures.</p>
			      </div>
			    </div>
				<div className="single-upconing-card">
			      <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/Noku 06.jpg)'}}>
			        <img src={publicUrl+"assets/img/Noku 06.jpg"} alt="flag" style={{height : '480px',width:'387px'}}/>
			      </div>
			      <div className="flag">
			        <img src={publicUrl+"assets/img/Flysquare_Logo_icon.png"} alt="flag" />
			      </div>
			      <div className="content text-center">
			        <h3 className="title"><Link to="/destination-details?dest=thulhagiri">Thulhagiri Island Resort & SPA</Link></h3>
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
			        <h3 className="title"><Link to="/destination-details?dest=noku">Noku Maldives A Japanese Pride</Link></h3>
			        <p>Known for its unbeatable greenery along with crystal clear waters.</p>
			      </div>
			    </div>
			  </div>
			</div>


        }
}

export default UpcomingWorld