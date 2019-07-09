import React from 'react'
import Header from '../Navigation'
import Footer from '../Footer'
import DwyanAvatar2 from '../../images/dwyan-avatar-2.jpg'
import '../../css/about.css'

const About = () => {
    return (
    <div>
        <Header />
        <div id="about-page" className="row">
            <div id="about-section-1" className="col">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img src={DwyanAvatar2} className="w3-circle" alt="Dwyan Alford"/>
                            </td>
                            <td><h1 className="content-title">About Dwyan</h1></td>
                        </tr>
                    </tbody>
                </table>
                <div>
                <p className="about-goals">My Goals are:
                    <li>To win contracts or gain employment - in either back or front end development, but preferably, as a full stack javascript web developer.</li>
                    <li>To build individually, or as part of a collaborative team, unique and highly functional responsive real world web apps.</li>
                    <li>To become a Master in Full Stack Javascript Web Development.</li>
                </p><br />
                <p>I recently moved from Virginia to Portland, Oregon last December. I have been a front end web developer since 2012.</p><br />
                </div>
            </div>
            <div id="about-section-2" className="col">
            <div id="about-image-1">
                <div className="caption-div">
                    <div className="caption-text">
                        <h4><b>Receiving Certificate from GWU</b></h4> 
                        <p>(August 2017)</p> 
                    </div>
                </div>
            </div>
            </div>
            <div id="about-section-3" className="col">
                <h1 className="content-title">Recent History</h1><br />
                <p>With the emergence of Javascript as a server side language, and my desire to build applications from the ground up, it only seemed natural to learn the back end of web development.</p><br />
                <p>I enrolled in George Washington University's Coding Bootcamp in 2017. Since then I have been continuing to learn, as well as working remotely as a Freelance Web Developer.
                </p><br />
            </div>
            <div id="about-section-4" className="col">
                <div id="about-image-2">
                <div className="caption-div">
                    <div className="caption-text">
                        <h4><b>GWU certification ceremony</b></h4> 
                    </div>
                </div>
                </div>
            </div>
            <div id="about-section-5" className="col">
            <h1 className="content-title">Background</h1>
            <p>After graduating from NYU in 1996, I worked in Manhattan for a company called <em>Imagedog</em>, a graphics design firm and there I had an opportunity to learn graphic design and also learn digital video and editing. This was right at the beginning of the digital age.</p><br />
                <p>In 2003, I relocated to Botswana in Southern Africa, to work as a video editor and producer. I did that officially until 2012 and transitioned into web coding upon my return to the United States. Learning HTML, CSS, and Javascript with a focus on front end development.</p><br />
                <p>My design and video editing background was a great asset in developing web sites, as both of these skills are extremely useful in the development and enhancement of both web and mobile applications.
                </p><br />
            </div>
            <div id="about-section-6" className="col">
                <div id="about-image-3">
                    <div className="caption-div">
                        <div className="caption-text">
                        <h4><b>Presenting final class project</b></h4> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
   }

export default About