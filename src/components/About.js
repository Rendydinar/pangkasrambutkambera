import React from 'react'
import ParallaxImg from '../img/sampul.jpg'

const About = () => {
	return (
		<div>
		  	<div className="parallax-container">
		  		<div className="parallax">
		  			<img src={ParallaxImg} alt="" className="responsive-img" />
		  		</div>
		  	</div>
		  	<section className="container section scrollspy" id="about">
		  		<div className="row">
		  			<div className="col s12 l4">
		  				<h2 className="indigo-text text-darken-4">Tentang Kami</h2>
							<p>Pangkas Rambu Kambera, tempat pangkas rambut yang ada di wangga</p>
							<p>Memastikan setiap pelanggan yang hendak ingin gunting rambut pulang akan dijamin ganteng.</p>
							<p>Tersedia juga rental PS 3.</p>
		  			</div>
		  			<div className="col s12 l6 offset-12">
		  				<ul className="tabs">
		  					<li className="tab col s6">
		  						<a href="#pangkasrambut" className="indigo-text -text-darken-4">Pangkas Rambut</a>
		  					</li>
		  					<li className="tab col s6">
		  						<a href="#rentalps3" className="indigo-text -text-darken-4">Rental PS 3</a>
		  					</li>
		  				</ul>
		  				<div className="col s12" id="pangkasrambut">
		  					<p className="flow-text indigo-text text-darken-4">PANGKAS RAMBUT</p>
		  					<p>Pangkas Rambu untuk orang dewasa/anak-anak. Pulang dijamin ganteng</p>
		  					<p>Harga sangat terjangkau, hanya Rp.15.000 berlaku untuk semua orang</p>
		  				</div>
		  				<div className="col s12" id="rentalps3">
		  					<p className="flow-text indigo-text text-darken-4">RENTAL PS 3</p>
		  					<p>Tersedia rantal PS 3 dengan banyak pilihan permainan, harga Rp.5000 per-jam</p>
		  					<p>Bisa menyewa membawa pulang ke rumah PS 3, dengan harga Rp.65.000 per-hari</p>
		  				</div>
		  			</div>
		  		</div>
		  		
		  	</section>

		</div>
	)
}

export default About;