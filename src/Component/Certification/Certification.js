import React from "react";

import {myCertifications} from "../../assets/utils";
import { Link } from "react-scroll";

const Certification = () =>{

    return(
        <section id="certification" className="container-experience">
        <h2 className="title-experience">Certification</h2>
       <div className=" container-expertise content-expertise" >
           <ul className="aboutItems">
               {myCertifications.map((myCertification,id)=>{
                   return(
                       <a href={myCertification.link && myCertification.link} target={myCertification.link && myCertification.link}  key={id} className="aboutItem">
                   {/* <img 
                   src={detail.imgurl}
                   alt={detail.title}
                   /> */}
                  
                   {myCertification.icon && <div className="abouticon"> 
                       < myCertification.icon size={40}/> </div>}
                   <div className="aboutItemText">
                       <h3> {myCertification.title} </h3>
                       <p>{myCertification.desc}</p>
                   </div>
                   
               </a>
                   )
               })}
               
           </ul>
       </div>
   </section>
    )
}

export default Certification;