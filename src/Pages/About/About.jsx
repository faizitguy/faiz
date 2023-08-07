import React from 'react'
import './About.css'
import AboutImage from '../../images/faiz_about.png'
import Button from "react-bootstrap/Button";
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';


function About() {
    return (
        <div id = "about">
           <section className = "about-section section">
               <div className = "container">
                   <div className = "row">
                       <div className = "section-title">
                           <h2 data-heading= "main info">About me</h2>
                       </div>
                   </div>
                   <div className = "row">
                       <div className = "about-img">
                           <div className = "img-box">

                        <img src = {AboutImage} alt = "about-image"/>
                           </div>
                       </div>
                       <div className  = "about-info">
                           <p>
                               <h6>Hi! My name is Faiz Ahmed Khan </h6>
                                I've got more than 3 years of solid experience as a Software Developer. I'm all about making things happen on the frontend with ReactJS,  and Redux, and I can dive into the backend too – working with NodeJS, Express, and MongoDB.

                                The whole software development journey is my playground – from sketching out ideas and designing to rolling up my sleeves and crafting robust applications that actually work.

                                When challenges pop up, I'm your go-to problem solver. At Edstem Technologies, I've cooked up entire web apps using React, did code reviews, and even trained a bunch of awesome devs.

                                You've gotta check out some of the cool projects I've nailed,  Please Check out my playground :)
                           </p>
                           <div className ="about-desc">
                            <div className = "about-desc-icon"> <CallIcon/>
                            <sapn className = "about-desc-span">+91 949 2457 193</sapn>
                            </div>
                            <div className = "about-desc-icon"> <EmailIcon/>
                            <sapn className = "about-desc-span">faiz.itguy@gmal.com</sapn>
                            </div>
                            <div className = "about-desc-icon"> <LocationOnIcon/>
                            <sapn className = "about-desc-span">Kadapa, Andhra Pradesh</sapn>
                            </div>
                            
                           </div>

                           <div className = "about-links">
                           <a href = "https://drive.google.com/file/d/0BxArt13i2f9-b1FIdHdtdG1xLWUzbnB6LWFIVXhDSnlJY004/view?usp=sharing" target="_blank" rel="noopener noreferrer" className = "about-btn">Download Resume</a>
                           <a href = "https://www.linkedin.com/in/faizitguy/" target="_blank" rel="noopener noreferrer" className = "about-btn">LinkedIn</a>
                           <a href = "https://www.github.com/faizitguy" target="_blank" rel="noopener noreferrer" className = "about-btn">Github</a>
                           </div>


                        
                            
                     
                        
                          <div>
                             
                          </div>
                       </div>
                    
                   </div>
               </div>

           </section>
        </div>
    )
}

export default About
