import React from 'react'

const Footer = () => {
	return (
	  	<footer className="page-footer grey darken-3">
	  		<div className="container">
	  			<div className="row">
	  				<div className="col s12 l6">
	  					<h5>Tentang Kami</h5>
						<p>Pangkas Rambu Kambera, tempat pangkas rambut yang ada di wangga. Memastikan setiap pelanggan yang hendak ingin gunting rambut pulang akan dijamin ganteng.</p>
						<p>Pangkas Rambu untuk orang dewasa/anak-anak pulang dijamin ganteng, Harga sangat terjangkau, hanya Rp.15.000 berlaku untuk semua orang</p>
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

