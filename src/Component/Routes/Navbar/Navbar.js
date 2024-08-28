import React,{useState} from "react";
import { Link,  animateScroll as scroll, scrollSpy } from 'react-scroll';
import './Navbar.css';

import closeIcon from '../../../assets/nav/closeIcon.png';
import { navBardetails,navBarTitle } from "../../../assets/utils";
import menuIcon from '../../../assets/nav/menuIcon.png';
 const Navbar = () =>{

const [menuOpen,setMenuOpen] = useState(false);

    return(
        <nav className="navbar" >
            <a className="title" href="/">{navBarTitle.title}</a>
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
                    {navBardetails.map((navbar,id)=>{

                        return(
                            <li key={id}>
                        <Link to={navbar.linkto} smooth={true}  
                        spy={true}                 
                        offset={-70} 
                        duration={1000} 
                        >{navbar.title}</Link>
                    </li>
                        )
                    })}
                </ul>

            </div>
        </nav>
    )
}

 export default Navbar;