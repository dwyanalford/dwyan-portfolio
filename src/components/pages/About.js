import React from 'react'
import Header from '../Navigation'
import Footer from '../Footer'
import ProLinks from '../ProLinks'
import DwyanAvatar2 from '../../images/dwyan-avatar-2.jpg'
import DwyanGrad from '../../images/gw-grad-ceremony-3.jpg'
import '../../css/about.css'
import Portfolio from '../Portfolio'
import Education from '../Education'

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
                <p>I am both proficient in, and capable of, writing Javascript code for client and server side web applications. I love to problem solve by building useful applications.</p><br />
                <p>I recently moved from Virginia to Portland, Oregon last December. I have been a front end web developer since 2012. With the emergence of Javascript as a server side language, and my desire to build applications from the ground up, it only seemed natural to learn the back end of web development.</p><br />
                <p>I enrolled in George Washington University's Coding Bootcamp in 2017. Since then I have been continuing to learn, and also working remotely as a Freelance Web Developer.
                </p><br />
            </div>
            <div id="about-section-2" className="col">
                <img src={DwyanGrad} id="DwyanGrad" alt="Dwyan Alford receives certificate from GWU"/>
                <p className="img-caption">Receiving Certificate from GWU (2017)</p>
            </div>
            <div id="about-section-3" className="col">
                <h1 className="content-title">Brief History about Dwyan</h1><br />
                <p>After graduating from NYU in 1996, I worked in Manhattan for a company called <em>Imagedog</em>, a graphics design firm and there I had an opportunity to learn graphic design and also learn digital video and editing. This was right at the beginning of the digital age.</p><br />
                <p>In 2003, I relocated to Botswana in Southern Africa, to work as a video editor and producer. I did that officially until 2012 and transitioned into web coding upon my return to the United States. Learning HTML, CSS, and Javascript with a focus on front end development.</p><br />
                <p>My design and video editing background was a great asset in developing web sites, as both of these skills are extremely useful in the development and enhancement of both web and mobile applications.
                </p><br />
            </div>
            <ProLinks />
            <div id="about-extra">
                <Portfolio />
                <Education />
            </div>
        </div>
        <Footer />
    </div>
    )
   }

export default About