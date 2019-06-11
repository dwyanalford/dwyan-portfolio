import React from 'react'
import './App.css'
import './medium.css'
import './css/responsive.css'

// import DwyanImage from './images/dwyan_portfolio_img_1b_500.jpg';
import WorkExperience from './components/WorkExperience'
import SkillSet from './components/SkillSet'
import ProLinks from './components/ProLinks'
import Education from './components/Education'
import Portfolio from './components/Portfolio'
import Header from './components/Navigation'
import Footer from './components/Footer'

function App() {
  return (
      <div>
        <Header />
        <section id="hero" className="row theme"></section>
        <SkillSet />
        <Portfolio />
        <WorkExperience />
        <Education />
        <ProLinks />
        <Footer />
      </div>
  );
}

export default App;
