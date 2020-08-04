import React from 'react'

const Header = () => {
	return (
		<header>
			<nav className="nav-wrapper indigo darken-4">
				<div className="container">
					<a href="" className="brand-logo">PangkasRambutkambera</a>
					<a href="" className="sidenav-trigger" data-target="mobile-menu">
						<i className="material-icons">menu</i>
					</a>
					<ul className="right hide-on-med-and-down">
						<li><a href="#service">Layanan</a></li>
						<li><a href="#about">Tentang</a></li>
						<li><a href="#team">Tim</a></li>
						<li><a href="#galeri">Galeri</a></li>
						<li><a href="#contact">Kontak</a></li>
						<li><a href="https://www.facebook.com/pangkasrambut.kambera" target="_blank" className="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="Facebook">
							<i className="fab fa-facebook"></i>
						</a></li>
					</ul>
					<ul className="sidenav grey lighten-2" id="mobile-menu">
						<li><a href="#service">Layanan</a></li>
						<li><a href="#about">Tentang</a></li>
						<li><a href="#team">Tim</a></li>
						<li><a href="#galeri">Galeri</a></li>
						<li><a href="#contact">Kontak</a></li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Header;