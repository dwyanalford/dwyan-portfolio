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
                <p>My goal is to work on interesting web and mobile projects 
                </p>
                <p>I am a full stack web developer, capable ( in Javascript) of
                    creating both back end and front end web and mobile apps. 
                    I love to build apps, and get a great joy in problem-solving. 
                    I currently reside in SE Portland, Oregon.</p><hr />

                <p>I have been a web developer for the past 6 years. 
                    Since 2012, designing mainly for the front end. With
                    a desire to learn the back end I enrolled at George
                    Washington University's Coding Bootcamp in 2017. Since
                    then I have been working remotely as an Independent Contractor.
                </p><hr />
                <div className="w3-display-container w3-card-4"><img src={DwyanGrad} id="DwyanGrad" 
                alt="Dwyan Alford receives certificate from GWU"/>
                <p className="w3-display-bottomleft w3-padding w3-text-white">Receiving Certificate from GWU (2017)</p></div><hr />
                <p style={{marginTop: '25px'}}>I now specialize in the MERN stack. Using React for
                    front-end development work. This website was built in
                    React (view code: dwyan alford git repository), and 
                    then I use Node and Express to set up the backend
                    with Mongo DB as a database. In addition I use Git for
                    version control, Github to store my source code and
                    Heroku for deployment. 
                </p><hr />
                
                <h3>My Background</h3><hr />
                <p>After graduating from NYU in 1996, I worked in Manhattan
                    for a company called <em>Imagedog</em>, a graphics design firm and
                    there I had an opportunity to also learn digital video and 
                    editing. This was right at the beginning of the digital age.</p><hr />
                <p>In 2003, I relocated to Botswana in Southern Africa, to
                    work as a video editor and producer. I did that officially
                    until 2012 and transitioned into web coding. Learning HTML, CSS
                    and Javascript with a focus on front end development. My design
                    and video editing background was a great asset in developing web
                    sites as both of these skills are extremely useful in the development of
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