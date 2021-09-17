import React,{useState} from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';


function Nav() {
    const [isMobile,setisMobile] = useState(false);
    const onMobile = ()=>{
        setisMobile(true);
    }
    return (
        <nav>
            <div className="nav-brand">
                <Link to="/"></Link>
            </div>
            <div className="toggle" onClick={onMobile}>
               <i class="fas fa-align-justify"></i>
            </div>
            <div className={ isMobile ? 'nav-menu nav-menu-show' : 'nav-menu'} >
                <ul>
                    <li>
                        <Link to="/" onClick={()=>{
                            setisMobile(false);
                        }}>Open Projects</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={()=>{
                            setisMobile(false);
                        }}>Operator Owner</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={()=>{
                            setisMobile(false);
                        }}>Investor</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={()=>{
                            setisMobile(false);
                        }}>How It Works</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav
