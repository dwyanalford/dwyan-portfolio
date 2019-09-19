import React from 'react'
import './App.css'
import './css/responsive.css'
import './css/header.css'
import './css/home.css'
import './css/footer.css'

import WorkExperience from './components/WorkExperience'
import SkillSet from './components/SkillSet'
import ProLinks from './components/ProLinks'
import Education from './components/Education'
import Portfolio from './components/Portfolio'
import Header from './components/Navigation'
import Footer from './components/Footer'
import Hero from './components/Hero'

function App() {
  return (
      <div>
        <Header />
        <div id="home-page-content" className="row">
          <section id="hero" className="col"><Hero /></section>
          <section id="skills" className="col"><SkillSet /></section>
          <section id="portfolio" className="col"><Portfolio /></section>
          <section id="work" className="col"><WorkExperience /></section>
          <section id="education" className="col"><Education /></section>
          <section id="prolinks" className="col"><ProLinks /></section>
        </div>
        <Footer />
      </div>
  );
}

export default App;
