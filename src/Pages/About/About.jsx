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
                               Aspiring Full Stack Developer, Capable of writing production-ready code using ReactJS, Redux, and CSS on the frontend, NodeJS, Express, and MongoDB on the backend to build single-page applications. Efficient team manager with experience in handling a team. Very Passionate about coding and strongly interested in working in a product-based company.
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
