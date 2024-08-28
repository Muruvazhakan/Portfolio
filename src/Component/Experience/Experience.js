import React from "react";

import './Experience.css';
import { skills, projectdetails } from '../../assets/utils';
const Experience = () => {

    return (
        <section id="experience" className="container-experience">
            <h2 className="title-experience">Experience</h2>
            <div className="content-experience">
                <ul className="projectdetails">
                    {projectdetails.map((projectdetail, id) => {
                        return (
                            <li key={id} className="projectdetailsItem">
                                <div className="projectdetailsItemDetails">
                                    <h3>{`${projectdetail.role}, ${projectdetail.organisation}`}</h3>
                                    <p>{`${projectdetail.startDate} - ${projectdetail.endDate}`}</p>
                                    <ul>
                                        {projectdetail.experiences.map((experience, id) => {
                                            return <li className="explist" key={id}> {experience}</li>
                                        })}
                                    </ul>
                                </div>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
            <div >
            <h2  id="skills" className="title-experience">Skills</h2>
                <div className="skill-details">
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className="skill" >
                                <div className="skillImageContainer">
                                    {/* <img src={skill.imageSrc} /> */}
                                    {skill.icon &&  < skill.icon size={skill.size} />}
                                </div>
                                <p>{skill.title}</p>

                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Experience;