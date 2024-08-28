import React from "react";


import './Intro.css';
import myphoto from '../../assets/Myphoto/Photo.jpg'
import Contactme from "../Contact/Contactme/Contactme";

import { myIntr } from "../../assets/utils";
const Intro = () =>{


    return(
        <section className="container">
            <div className="content">
                <h1 className="title-Intro">{myIntr.title}</h1>
                <p className="description">
                {myIntr.desc}
                </p>
                {/* <a href="mailto:muruvazhakan@email.com" className="contactBtn">
                    Contact Me
                </a> */}
                <Contactme style="Intro"/>
            </div>
            <img 
                src={myphoto}
                alt="Muruvazhakan's photo"
                className="myImg"
            />
            <div className="topBlur" />
            <div className="bottomBlur"/>
        </section>
    )
}

export default Intro;