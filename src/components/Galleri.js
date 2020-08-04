import React from 'react'
import img1 from '../img/1.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'
import img6 from '../img/6.jpg'
import img8 from '../img/8.jpg'
import img9 from '../img/9.jpg'
import img10 from '../img/10.jpg'
import img11 from '../img/11.jpg'
import img14 from '../img/14.jpg'
import img15 from '../img/15.jpg'
import img16 from '../img/16.jpg'
import img18 from '../img/18.jpg'
import img21 from '../img/21.jpg'
import img22 from '../img/22.jpg'
import img23 from '../img/23.jpg'

const Galleri = () => {

	return (
		<div className="galleri-section container scrollspy" id="galeri"> 
				<h3 className="center indigo-text text-darken-4">Galeri Kami</h3>
				<div className="row">
					<div className="col m3 s12 img-galeri">
						<img src={img1} alt="portfolio" className="responsive-img materialboxed" /> 
					</div>
					<div className="col m3 s12 img-galeri">
						<img src={img3} alt="portfolio" className="responsive-img materialboxed" />
					</div>
					<div className="col m3 s12 img-galeri">
						<img src={img4} alt="portfolio" className="responsive-img materialboxed" />
					</div>
					<div className="col m3 s12 img-galeri">
						<img src={img5} alt="portfolio" className="responsive-img materialboxed" />
					</div>
				</div>
				<div className="row">
					<div className="col m3 s12 img-galeri">
						<img src={img6} alt="portfolio" className="responsive-img materialboxed" /> 
					</div>
					<div className="col m3 s12 img-galeri">
						<img src={img8} alt="portfolio" className="responsive-img materialboxed" />
					</div>
					<div className="col m3 s12 img-galeri">
						<img src={img9} alt="portfolio" className="responsive-img materialboxed" />
					</div>
					<div className="col m3 s12 img-galeri">
						<img src={img10} alt="portfolio" className="responsive-img materialboxed" />
					</div>
				</div>
				<div className="row">
					<div className="col m3 s12 img-galeri">
						<img src={img11} alt="portfolio" className="responsive-img materialboxed" /> 
					</div>
					<div className="col m3 s12 img-galeri">
						<img src={img14} alt="portfolio" className="responsive-img materialboxed" />
					</div>
					<div className="col m3 s12 img-galeri">
						<img src={img15} alt="portfolio" className="responsive-img materialboxed" />
					</div>
					<div className="col m3 s12 img-galeri">
						<img src={img16} alt="portfolio" className="responsive-img materialboxed" />
					</div>
				</div>
				<div className="row">
					<div className="col m3 s12 img-galeri">
						<img src={img18} alt="portfolio" className="responsive-img materialboxed" /> 
					</div>
					<div className="col m3 s12 img-galeri">
						<img src={img21} alt="portfolio" className="responsive-img materialboxed" />
					</div>
					<div className="col m3 s12 img-galeri">
						<img src={img22} alt="portfolio" className="responsive-img materialboxed" />
					</div>
					<div className="col m3 s12 img-galeri">
						<img src={img23} alt="portfolio" className="responsive-img materialboxed" />
					</div>
				</div>
		</div>
	)
}

export default Galleri;

