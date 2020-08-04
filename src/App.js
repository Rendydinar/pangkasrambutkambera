import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Galleri from './components/Galleri';
import Service from './components/Service';
import Team from './components/Team';

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

const App = () => {
  return (
    <div>
		<Header/>
		<Service/>
		<About/>
		<Team/>
		<Galleri/>
		<Contact/>
		<Footer/>
    </div>

  )
}
export default App;
