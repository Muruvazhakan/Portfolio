import React from "react";

import { contact } from "../../../assets/utils";
const Contactme = (props) =>{

    return(
        <ul className={props.style =="Intro" ? "link":""}>
                {contact.map((con,id) =>{

                    return(
                        <li key={id} className={props.style =="Intro" ? "link":"link"}>
                            {/* <img src={con.img} alt={con.title}/> */}
                            {con.icon &&  < con.icon size={con.size} />}
                            <a href={con.link} >{con.text} </a>   
                        </li>
                    )
                })}
                
            </ul>
    )
}

export default Contactme;