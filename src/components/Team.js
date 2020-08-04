import React from 'react'
import RiskyImg from '../img/risky.jpg'
import UdoImg from '../img/udo.jpg'
import MonrihyImg from '../img/mon-rihy.jpg'
import MichaelImg from '../img/micheal.jpg'

const Team = () => {
	return (
		<div className="container scrollspy" id="team">
			<h2 className="indigo-text text-darken-4 center">Team</h2>	
			<div className="row">
				<div className="col s12 l4">
				    <div className="card sticky-action">
				    	<div className="card-image waves-effect waves-block waves-light">
				      		<img className="activator" src={RiskyImg} />
				    	</div>

				    	<div className="card-action">
					    	<div className="card-content">
						        <span className="card-title activator grey-text text-darken-4">Risky Tarapanjang<i className="material-icons right">more_vert</i></span>
						        <ul className="sosial-media-team-link">
									<li><a href="https://www.facebook.com/risky.sanjaya" target="_blank" className="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="Facebook">
										<i className="fab fa-facebook"></i>
									</a></li> 
									<li><a href="https://www.instagram.com/riskytarapnjang/" target="_blank" className="sosial-media-team-item tooltipped btn-floating btn-small indigo darken-4" data-tooltip="Instagram">
										<i className="fab fa-instagram"></i>
									</a></li>
									<li><a href="https://wa.me/+6285253935479" 	target="_blank" className="sosial-media-team-item tooltipped btn-floating btn-small indigo darken-4" data-tooltip="WahtsApp">
										<i className="fab fa-whatsapp"></i>
									</a></li>
						        </ul>
					    	</div>
				    	</div>
					    <div className="card-reveal">
						      <span className="card-title grey-text text-darken-4">Pemilik<i className="material-icons right">close</i></span>
					    </div>
					</div>        
				</div>

				<div className="col s12 l4">
				    <div className="card sticky-action">
				    	<div className="card-image waves-effect waves-block waves-light">
				      		<img className="activator" src={UdoImg} />
				    	</div>
				    	<div className="card-action">
					    	<div className="card-content">
						        <span className="card-title activator grey-text text-darken-4">Udo<i className="material-icons right">more_vert</i></span>
						        <ul className="sosial-media-team-link">
									<li><a href="https://www.facebook.com/lodowykmbela.wilingakar" target="_blank" className="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="Facebook">
										<i className="fab fa-facebook"></i>
									</a></li> 
									<li><a href="https://www.instagram.com/umbd_00/" target="_blank" className="sosial-media-team-item tooltipped btn-floating btn-small indigo darken-4" data-tooltip="Instagram">
										<i className="fab fa-instagram"></i>
									</a></li>
									<li><a href="https://wa.me/+6282262661447" 	target="_blank" className="sosial-media-team-item tooltipped btn-floating btn-small indigo darken-4" data-tooltip="WahtsApp">
										<i className="fab fa-whatsapp"></i>
									</a></li>
						        </ul>
					    	</div>
				    	</div>
					    <div className="card-reveal">
						      <span className="card-title grey-text text-darken-4">Karyawan<i className="material-icons right">close</i></span>
					    </div>
					</div>        
				</div>

				<div className="col s12 l4">
				    <div className="card sticky-action">
				    	<div className="card-image waves-effect waves-block waves-light">
				      		<img className="activator" src={MichaelImg} />
				    	</div>
				    	<div className="card-action">
					    	<div className="card-content">
						        <span className="card-title activator grey-text text-darken-4">Michael<i className="material-icons right">more_vert</i></span>
						        <ul className="sosial-media-team-link">
									<li><a href="https://www.facebook.com/profile.php?id=100041092994709" target="_blank" className="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="Facebook">
										<i className="fab fa-facebook"></i>
									</a></li> 
						        </ul>
					    	</div>
				    	</div>
					    <div className="card-reveal">
						      <span className="card-title grey-text text-darken-4">Karyawan<i className="material-icons right">close</i></span>
					    </div>
					</div>        
				</div>

				<div className="col s12 l4">
				    <div className="card sticky-action">
				    	<div className="card-image waves-effect waves-block waves-light">
				      		<img className="activator" src={MonrihyImg} />
				    	</div>
				    	<div className="card-action">
					    	<div className="card-content">
						        <span className="card-title activator grey-text text-darken-4">Mon Rihy<i className="material-icons right">more_vert</i></span>
						        <ul className="sosial-media-team-link">
									<li><a href="https://www.facebook.com/mon.rihy" target="_blank" className="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="Facebook">
										<i className="fab fa-facebook"></i>
									</a></li> 
						        </ul>
					    	</div>
				    	</div>	
					    <div className="card-reveal">
						      <span className="card-title grey-text text-darken-4">Karyawan<i className="material-icons right">close</i></span>
					    </div>
					</div>        
				</div>

			</div>

		</div>
	)
}

export default Team;