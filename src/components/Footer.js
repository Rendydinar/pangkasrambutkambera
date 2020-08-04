import React from 'react'

const Footer = () => {
	return (
	  	<footer className="page-footer grey darken-3">
	  		<div className="container">
	  			<div className="row">
	  				<div className="col s12 l6">
	  					<h5>Tentang Kami</h5>
	  					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis impedit minus magni provident reiciendis dolorum ea. Itaque magnam, commodi enim.</p>
	  					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis impedit minus magni provident reiciendis dolorum ea. Itaque magnam, commodi enim.</p>
	  				</div>
	  				<div className="col s12 l4 offset-l2">
	  					<h5>Ikuti Kami</h5>
	  					<ul>
	  						<li><a href="https://www.facebook.com/pangkasrambut.kambera" target="_blank" className="grey-text text-lighten-3">Facebook</a></li>
	  					</ul>
	  				</div>
	  			</div>
	  		</div>
	  		<div className="footer-copyright grey darken-4">
	  			<div className="container center-align">&copy; {new Date().getFullYear()} Pangkas Rambut Kambera</div>
	  		</div>
	  	</footer>

	)
}

export default Footer;