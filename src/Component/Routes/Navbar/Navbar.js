import React,{useState} from "react";
import { Link,  animateScroll as scroll, scrollSpy } from 'react-scroll';
import './Navbar.css';

import closeIcon from '../../../assets/nav/closeIcon.png';

import menuIcon from '../../../assets/nav/menuIcon.png';
 const Navbar = () =>{

const [menuOpen,setMenuOpen] = useState(false);

    return(
        <nav className="navbar" >
            <a className="title" href="/"> Muruvazhakan</a>
            <div className="menu">
                <img 
                className="menuBtn"
                src={menuOpen ? closeIcon
                    :
                    menuIcon

                }
                alt= "menubutton"
                onClick={()=> setMenuOpen(!menuOpen)}
                />
                <ul
                // className="menuItems menuOpen "
                 className={`  menuItems ${menuOpen && " menuOpen"  }`}
                onClick={()=> setMenuOpen(false)}
                >
                    <li>
                        <Link to="about" smooth={true}  
                        spy={true}                 
                        offset={-70} 
                        duration={1000} 
                        >About</Link>
                    </li>
                    <li>
                        {/* <a href="#experience">Expirence</a> */}
                        <Link to="experience" smooth={true}  
                        spy={true}                 
                        offset={-70} 
                        duration={1000} 
                        >Experience</Link>
                    </li>
                    
                    <li>
                        {/* <a href="#skills">Skills</a> */}
                        <Link to="skills" smooth={true}  
                        spy={true}                 
                        offset={-70} 
                        duration={1000} 
                        >Skills</Link>
                    </li>
                    <li>
                        {/* <a href="#certification">Certification</a> */}
                        <Link to="certification" smooth={true}  
                        spy={true}                 
                        offset={-70} 
                        duration={1000} 
                        >Certification</Link>
                    </li>
                    <li>
                        {/* <a href="#contact">Contact</a> */}
                        <Link to="contact" smooth={true}  
                        spy={true}                 
                        offset={-70} 
                        duration={1000} 
                        >Contact</Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

 export default Navbar;