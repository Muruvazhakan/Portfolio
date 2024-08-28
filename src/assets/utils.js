
import React from 'react';
// export const imgurl="";


import { FaServer } from "react-icons/fa";
import { BsFillCloudCheckFill } from "react-icons/bs";
import { RiCodeView } from "react-icons/ri";
import { IoServer } from "react-icons/io5";

// import html from './skills/html.png';
// import css from './skills/css.png';
// import react from './skills/react.png';
// import node from './skills/node.png';
// import graphql from './skills/graphql.png';
// import mongodb from './skills/mongodb.png';
// import figma from './skills/figma.png';

import { HiMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";

import { FaAws } from "react-icons/fa6";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";

import { FaReact } from "react-icons/fa";
import { BsFiletypeHtml } from "react-icons/bs";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { FaConfluence } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";

export const navBardetails=[
  {
  title:"About",
  linkto:"about"
 },
 {
  title:"Work Experience",
  linkto:"experience"
 },
 {
  title:"Skills",
  linkto:"skills"
 },
 {
  title:"Certification",
  linkto:"certification"
 },
//  {
//   title:"Projects",
//   linkto:"projects"
//  },
 {
  title:"Contact",
  linkto:"contact"
 },
];
export const navBarTitle={
  title:"Muruvazhakan P"
}
export const myDetails=[
    {
    title: "Frontend Developer",
    desc:"Detail-oriented Frontend Developer with expertise in JavaScript frameworks, cross-browser compatibility, and translating design wireframes into high-quality, interactive interfaces.",
    //I'm a frontend developer with experience in building responsiveand optimized sites
    //
    icon:RiCodeView,
    },
    {
        title: "Backend Developer",
        desc:" Backend Developer with a strong focus on building scalable APIs, optimizing server-side logic, and ensuring high-performance systems using modern frameworks and databases ",
       //I have experience developing fast and optimised back-end systemsand APIs
        icon:FaServer
    },
    {
        title: "SQL Developer",
        desc:"Proficient SQL Developer with expertise in database design, optimization, and complex query development, ensuring efficient data management and retrieval",
        
        icon:IoServer,
    },
    {
      title: "Cloud Engineer",
      desc:"Experienced Cloud Engineer specializing in scalable architecture, cost optimization, and multi-cloud solutions with a strong foundation in AWS and Azure",
    
      icon:BsFillCloudCheckFill
  },

];

export const myIntr={
  "title":"Hi, I am Muruvazhakan Pugazhendhi",
  "desc":"A Full stack developer with 5+ years of experience in building responsive and interactive web applications. My skills include React.js, JavaScript Core, Node.js, MySQL, AWS and a few other web technologies."
};
export const skills = [
  {
    "title": "React.js",
    // "imageSrc": react,
    icon:FaReact,
    size:40
  },
  {
    "title": "Node.js",
    // "imageSrc": node,
    icon:FaNodeJs,
    size:40
  },
  {
    "title": "MySql",
    // "imageSrc":graphql,
    icon:GrMysql,
    size:40
  },
  {
    "title": "Java Script",
    // "imageSrc": mongodb,
    icon:IoLogoJavascript,
    size:40
  },
  {
        "title": "AWS",
        // "imageSrc": html,
    icon:FaAws,
    size:40
      },
      {
        "title": "HTML",
        // "imageSrc":css,
        icon:BsFiletypeHtml,
        size:40
      },
      {
        "title": "CSS",
        // "imageSrc":css,
        icon:FaCss3Alt,
        size:40
      },
      {
        "title": "MongoDB",
        // "imageSrc": mongodb,
        icon:SiMongodb,
        size:40
      },
      {
        "title": "Java",
        // "imageSrc": mongodb,
        icon:FaJava,
        size:40
      },
      {
        "title": "Github",
        // "imageSrc": mongodb,
        icon:RxGithubLogo,
        size:40
      },
      {
        "title": "Jira",
        // "imageSrc": mongodb,
        icon:SiJira,
        size:40
      },
      {
        "title": "Confluence",
        // "imageSrc": mongodb,
        icon:FaConfluence,
        size:40
      },
      {
        "title": "VS code",
        // "imageSrc": mongodb,
        icon:SiVisualstudiocode,
        size:40
      },
      {
        "title": "Springboot",
        // "imageSrc": mongodb,
        icon:SiSpringboot,
        size:40
      },
]

export const projectdetails = [
    
        {
          "role": "IT Analyst",
          "organisation": "Tata Consultancy Services",
          "startDate": "Mar, 2022",
          "endDate": "Present (Helsinki, Finland)",
          "experiences": ["Developed a responsive Issuer access web application using React and served by thousands of Issuer agents on a daily basis.",
             "Worked closely with Clients, other teams to identify new business requirements and developed UI.",
             "Mentored junior developers and conducted code reviews to uphold coding standards and functional expectations.",
             "Adept at automating cloud infrastructure deployment through Infrastructure as Code via AWS Cloud Formation."],
        },
       
        {          
          "role": "Full Stack Developer",
          "organisation": "Tata Consultancy Services",
          "startDate": "May, 2019",
          "endDate": "Mar, 2022 (Chennai, India)",
          "experiences": [
            "Developed Digital Market portal UI design using React, Java script and back-end components using technologies such Node.js,express.",
            "Worked in Complex vendor queries, state management and state based UI control for the Clearing house of Finance market.",
            "Applied Agile methodologies to improve project efficiency and collaboration.",
            "Collaborate with cross-functional teams with UX/UI designers to create intuitive, develop, and implement software solutions.",
            "Build in React components with multiple platforms and Redux storage, API, REST, JSON,CSS."
          ],
        }
        
];


export const myCertifications=[
  {
  title: "AWS Certified Developer Associate ",
  desc:"JUL 2024",
  //I'm a frontend developer with experience in building responsiveand optimized sites
  //
  icon:FaAws,
  link:"https://www.credly.com/badges/75e8aa08-8801-48ff-845e-84ca84f16868"
  },
  {
      title: "AWS Certified Solutions Architect Associate",
      desc:"APR 2024",
     //I have experience developing fast and optimised back-end systemsand APIs
      icon:FaAws,
  link:"https://www.credly.com/badges/57e088bf-031f-48d3-a13a-343553525bf1"
  },
  {
      title: "AWS Certified Cloud Practitioner",
      desc:"MAR 2024",   
      icon:FaAws,
  link:"https://www.credly.com/badges/6cf9f70f-825d-4eae-ba56-31bf6bd0f23b"
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    desc:"NOV 2022",
    icon:TfiMicrosoftAlt,
  link:"https://www.credly.com/badges/86504466-c9b2-4299-9670-1b35eb54178e"
},
{
  title: "Microsoft Certified: Azure Stack Hub Operator Associate",
  desc:"OCT 2022",
  icon:TfiMicrosoftAlt,
  link:"https://www.credly.com/badges/12303393-da05-4441-9289-05daac0b2c9a"
},
{
  title: "Microsoft Certified: Azure Fundamentals",
  desc:"JUL 2021",
  icon:TfiMicrosoftAlt,
  link:"https://www.credly.com/badges/1123cdbd-a23e-41fd-acb1-7411dfe01c7d"
},

];

export const contact = [
  {
    title:"Emailid",
    link:"mailto:muruvazhakan@email.com",
    text:"Mail Id",
    icon:HiMail,
    size:40
  },
  {
    title:"linkedin",
    link:"https://www.linkedin.com/in/muruvazhakanp",
    text:"Linkedin",
    icon:FaLinkedin,
    size:40
  },
  {
    title:"Github",
    link:"https://github.com/Muruvazhakan",
    text:"Github",
    icon:RxGithubLogo,
    size:40
  },
  // {
  //   title:"Mobile",
  //   link:"tel:7338979499",
  //   text:"Mobile no",
  //   icon:BsTelephone,
  //   size:40
  // },
];

export const contactme = {
  title:"Connect with Me",
  headline:"Our journey starts with a conversation -- react out and let's begin."
}