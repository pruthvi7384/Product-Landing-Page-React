import React from 'react'
import './About.css';
import IMGI from '../images/img1.png';
import IMGII from '../images/img2.png';
import IMGIII from '../images/img3.png';
function About() {
    return (
        <div className="About-container">
            <div className="about-row">
                <div className="about-img">
                    <img src={IMGI} alt="" />
                </div>
                <div className="about-containt">
                    <h2>Lorem ipsum</h2>
                    <p>Qui dolorum quos eum tempora quod ut laboriosam libero aut itaque unde sed laudantium excepturi. Ea consequatur internos ut saepe eaque ea aliquid repellendus est sunt dolore ut tenetur galisum.</p>
                </div>
            </div>
            <div className="about-row">
                 <div className="about-containt">
                     <h2>Lorem ipsum</h2>
                     <p>Qui dolorum quos eum tempora quod ut laboriosam libero aut itaque unde sed laudantium excepturi. Ea consequatur internos ut saepe eaque ea aliquid repellendus est sunt dolore ut tenetur galisum.</p>
                 </div>
                 <div className="about-img">
                     <img src={IMGII} alt="" />
                 </div>
            </div>
            <div className="about-row">
                <div className="about-img">
                    <img src={IMGIII} alt="" />
                </div>
                <div className="about-containt">
                    <h2>Lorem ipsum</h2>
                    <p>Qui dolorum quos eum tempora quod ut laboriosam libero aut itaque unde sed laudantium excepturi. Ea consequatur internos ut saepe eaque ea aliquid repellendus est sunt dolore ut tenetur galisum.</p>
                </div>
            </div>
        </div>
    )
}

export default About
