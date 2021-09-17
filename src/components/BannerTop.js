import React from 'react'
import './BannerTop.css'
import BANNER_IMG from '../images/topBanner.png';
function BannerTop() {
    return (
        <div className="banner-top">
            <div className="banner-row">
                <div className="banner-containt">
                    <h1>Lorem ipsum dolor sit amet. 
                    Lorem ipsum dolor sit amet. </h1>
                    <button type="button" className="btn">Contact Us</button>
                </div>
                <div className="banner-img">
                    <img src={BANNER_IMG} alt="" />
                </div>
            </div>
        </div>
    )
}

export default BannerTop
