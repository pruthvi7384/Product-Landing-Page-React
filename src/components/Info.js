import React from 'react'
import IMG from '../images/img4.png';
import './Info.css';
function Info() {
    return (
        <div className="info-container">
            <div className="info-row">
                <div className="info-img">
                    <img src={IMG} alt=""/>
                </div>
                <div className="info-contain">
                    <h2>Lorem ipsum</h2>
                    <p>Qui dolorum quos eum tempora quod ut laboriosam libero aut itaque unde sed laudantium excepturi. Ea consequatur internos ut saepe eaque ea aliquid repellendus est sunt dolore ut tenetur galisum.</p>
                </div>
            </div>
        </div>
    )
}

export default Info
