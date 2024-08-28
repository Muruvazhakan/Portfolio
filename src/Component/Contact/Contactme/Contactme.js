import React from "react";

import { contact } from "../../../assets/utils";
const Contactme = (props) =>{

    return(
        <ul className={props.style =="Intro" ? "link":"link"}>
                {contact.map((con,id) =>{

                    return(
                        <li key={id} className={props.style =="Intro" ? "link":"link"}>
                            {/* <img src={con.img} alt={con.title}/> */} 
                            {/* {props.style == "Contact" ? con.text:null}  */}
                            <a href={con.link} >
                            {con.icon &&  < con.icon size={con.size} />} 
                               
                                 {/* {con.icon &&  < con.icon size={con.size} />}  */}
                                 </a>   
                        </li>
                    )
                })}
                
            </ul>
    )
}

export default Contactme;