import React from 'react'

const Contact = () => {
	return (
		<div className="contact-section">
			<section id="contact" className="contact grey lighten-3 scrollspy">
				<div className="container">
					<h3 className="light grey-text text-darken-3 center">Kontak Kami</h3>
					<div className="row">
						<div className="col m5 s12">
							<div className="card-panel indigo darken-4 center white-text">
								<i className="material-icons">email</i>
								<h5>Kontak</h5>
								<p>Jika anda ingin mengontak kami, silakan ikuti informasi dibawah ini.</p>
							</div>
							<ul className="collection with-header">
								<li className="collection-header"><h4>Tempat Kami <i className="material-icons small">place</i></h4></li>
								<li className="collection-item">Pangkas Rambut Kambera</li>
								<li className="collection-item">Jl. Beringin, Wangga Nackhunk, Waingapu</li>
								<li className="collection-item">Nusa Tenggara Timur, Indonesia</li>
								<li className="collection-item"><i className="fab fa-whatsapp"></i> <a href="https://wa.me/+6285253935479" target="_blank">Whatsapp: +6285253935479</a></li>
								<li className="collection-item"><i className="fab fa-facebook"></i> <a href="https://www.facebook.com/pangkasrambut.kambera" target="_blank">Pangkas Rambu Kambera</a></li>										
							</ul>
						</div>
						<div className="col s12 m7 container-fluid">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.82410913450153!2d120.26611912831774!3d-9.665164975241723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzknNTQuNCJTIDEyMMKwMTUnNTguNCJF!5e0!3m2!1sid!2sid!4v1596468050808!5m2!1sid!2sid" width="340" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Contact;