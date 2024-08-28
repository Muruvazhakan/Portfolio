import React from "react";

import './Contact.css';

import { contactme } from "../../assets/utils";
import Contactme from "./Contactme/Contactme";
const Contact = () =>{

    return(
        <footer id="contact" className="container-contact">
            <div className="text">
                <h2>{contactme.title}</h2>
                <p>{contactme.headline}</p>

            </div>
            <Contactme style="Contact"/>
        </footer>
    )
}

export default Contact;