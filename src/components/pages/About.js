import React from 'react'
import Header from '../Navigation'
import Footer from '../Footer'
import ProLinks from '../ProLinks'
import DwyanAvatar2 from '../../images/dwyan-avatar-2.jpg'
import DwyanGrad from '../../images/gw-grad-ceremony-3.jpg'
import '../../css/about.css'

const About = () => {
    return (
    <div>
        <Header />
        <section id="about-page">
            <div className="content-wrap">
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
                
                <p>I am both proficient in, and capable of, writing Javascript code for
                client and server side web applications.  
                I love to problem solve by building useful applications. I live in Portland, Oregon.</p><hr />

                <p>I recently moved from Virginia to Oregon last December. I have been a front end web developer since 2012. With
                    the emergence of Javascript as a server side language,
                    and my desire to build applications from the ground up, 
                    it only seemed natural to learn the back end of web development.</p> <hr />
                    <p>I enrolled in George
                    Washington University's Coding Bootcamp in 2017. Since
                    then I have been continuing to learn, and also working remotely as a Freelancer.
                </p><hr />
                <div className="w3-display-container w3-card-4">
                    <img src={DwyanGrad} id="DwyanGrad" 
                        alt="Dwyan Alford receives certificate from GWU"/>
                    <p className="w3-display-bottomleft w3-padding w3-text-white">Receiving Certificate from GWU (2017)</p>
                </div><hr />
    
                
                <h3 style={{marginTop: '25px'}}>Brief Background</h3><hr />
                <p>After graduating from NYU in 1996, I worked in Manhattan
                    for a company called <em>Imagedog</em>, a graphics design firm and
                    there I had an opportunity to learn graphic design and also learn digital video and 
                    editing. This was right at the beginning of the digital age.</p><hr />
                <p>In 2003, I relocated to Botswana in Southern Africa, to
                    work as a video editor and producer. I did that officially
                    until 2012 and transitioned into web coding upon my return to the United States. Learning HTML, CSS
                    and Javascript with a focus on front end development. <hr />My design
                    and video editing background was a great asset in developing web
                    sites, as both of these skills are extremely useful in the development of
                    web and mobile apps.
                </p>
            </div>
        </section>
        <ProLinks />
        <Footer />
    </div>
    )
   }

export default About