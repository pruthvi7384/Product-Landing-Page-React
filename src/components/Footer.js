import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-row">
                <div className="footer-menu">
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
                <div style={{display: 'flex',justifyContent: 'center'}}>
                    <div className="nav-brand">
                        <Link to="/"></Link>
                    </div>
                </div>
                <div className="foooter-social">
                    <ul>
                        <li>    
                            <Link href="#"><i class="fab fa-twitter"></i></Link>
                        </li>
                        <li>    
                            <Link href="#"><i class="fab fa-linkedin-in"></i></Link>
                        </li>
                        <li>    
                            <Link href="#"><i class="fab fa-instagram"></i></Link>
                        </li>
                        <li>    
                            <Link href="#"><i class="fab fa-facebook-f"></i></Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-copyRight">
                    <p>Terms of service - Privacy policy -  © 2021 Tritatech</p>
                    <p>Website By TritaTech</p>
                </div>
                <div className="footer-top">
                    <Link to="/">
                       <i class="fas fa-chevron-up"></i>
                       <p>BACK TO TOP</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
