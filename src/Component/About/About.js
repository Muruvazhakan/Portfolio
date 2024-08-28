import React from "react";

import './About.css';
import * as utils from '../../assets/utils';

const About = () =>{

    return(
        <section id="about" className="container-experience">
             <h2 className="title-experience"> About</h2>
            <div className=" container-expertise content-expertise" >
                <ul className="aboutItems">
                    {utils.myDetails.map((detail,id)=>{
                        return(
                            <li key={id} className="aboutItem">
                        {/* <img 
                        src={detail.imgurl}
                        alt={detail.title}
                        /> */}
                        {detail.icon && <div className="abouticon"> 
                            < detail.icon size={40}/> </div>}
                        <div className="aboutItemText">
                            <h3> {detail.title} </h3>
                            <p>{detail.desc}</p>
                        </div>
                    </li>
                        )
                    })}
                    
                </ul>
            </div>
        </section>
    )
}

export default About;