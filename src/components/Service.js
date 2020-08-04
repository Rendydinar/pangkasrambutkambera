import React from 'react'

import FasilitasImg from '../img/fasilitas-alat.jpg'
import KualitasImg from '../img/profesional-karyawan.jpg'
import KepuasanPelangganImg from '../img/kepuasan-pelanggan.jpg'
import RentalPsImg from '../img/rental-ps.jpg'


const Service = () => {
	return (
		<section className="container section scrollspy" id="service">
			<div className="row">
				<div className="col s12 l4">
					<img src={FasilitasImg} alt="" className="responsive-img materialboxed" />
				</div>
				<div className="col s12 l6 offset-l1">
					<h2 className="indigo-text text-darken-4">Fasilitas Alat</h2>
				</div>
			</div>
			<div className="row">
				<div className="col s12 l4 push-l7 offset-l1">
					<img src={KualitasImg} alt="" className="responsive-img materialboxed" />
				</div>
				<div className="col s12 l6 pull-l5 right-align offset-l1">
					<h2 className="indigo-text text-darken-4">Profesional Karyawan</h2>
				</div>
			</div>
			<div className="row">
				<div className="col s12 l4">
					<img src={KepuasanPelangganImg} alt="" className="responsive-img materialboxed" />
				</div>
				<div className="col s12 l6 offset-l1">
					<h2 className="indigo-text text-darken-4">Kepuasan Pelanggan</h2>
				</div>
			</div>
			<div className="row">
				<div className="col s12 l4 push-l7 offset-l1">
					<img src={RentalPsImg} alt="" className="responsive-img materialboxed" />
				</div>
				<div className="col s12 l6 pull-l5 right-align offset-l1">
					<h2 className="indigo-text text-darken-4">Rental PS 3</h2>
				</div>
			</div>
		</section>
	)
}


export default Service;