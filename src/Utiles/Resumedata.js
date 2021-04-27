import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CodeIcon from '@material-ui/icons/Code';
import PhotoSizeSelectSmallIcon from '@material-ui/icons/PhotoSizeSelectSmall';
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream';

export default{
    main_title:'Portfolio',
    name: 'Aditya Dengare',
    title:'Sofware Developer',

    birthday:'28 December 1998',
    email: 'aditya.dengare28@gmail.com',
    job:'Software Developer',
    address:'Flat-104/B Cooper City Plus Jamnagar Road Opp, Wankaner Society Rajkot Gujarat 360006',
    phone_no: '+91-9924838487',

    socials:{
        Linkedin:{
            link:'https://www.linkedin.com/in/aditya-dengare-503196179',
            text:'Click To Open LinkedIn',
            icon:<LinkedInIcon />
        }
    },

    careeerobject: 'To make the position in organization where the best out of me can utilize and to create great influence in organization. \n Secure a responsible career opportunity to fully utilize my training and skills, while making a significant contribution to the success of the company.',

    about:'My name is Aditya Dengare a Software Engineer and having 1 year of experience in ASP.NET Technology and also as a Linux System Admin,willing to work as a fresher in React JS',

    experiences:[
        {
            title:'Internship',
            date: '2020(Jan - June) 6 Months',
            des: 'Work as a ASP.NET Developer in Sliver Touch Company'
        },
        {
            title:'Jr. Software Developer',
            date: '2020-21(July - March) 9 Months',
            des: 'Work as a ASP.NET Developer & Linux System Admin in Civica '
        }
    ],

    education:[
        {
            title: '10th Percentage 74.05%',
            date:'Year 2014',
            des:'Completed my 10th from SK Phathak Schools Rajkot'
        },
        {
            title: '12th Percentage 66.12%',
            date:'2016',
            des:'Completed my 12th from SK Phathak Schools Rajkot'
        },
        {
            title: 'B.Tech 7.56CGPA',
            date:'Year 2016-2020',
            des:'Completed my Computer Engineering from RK University Rajkot which one is the private University of Rajkot'
        },
    ],

    services:[
        {
            title:'Web Dev',
            des:'I have been a good at Web Development in ASP.NET using MVC5 and also learning ReactJS',
            icon: <CodeIcon />
        },
        {
            title:'Linux System Admin',
            des:'I have been a good at linux system admin for 8 Months',
            icon: <SettingsSystemDaydreamIcon />
        },
        {
            title:'Photoshop',
            des:'Quite Good at Retouching the photos',
            icon: <PhotoSizeSelectSmallIcon />
        },
    ],

    skills:[
        {title:'FRONT-END', des:['ReactJS','Material UI']},
        {title:'BACK-END' , des:['.NET','C#']},
        {title:'DATABASE', des:['MS SQL Server','MySql']},
        {title:'SOURCE CONTROL', des:['Git','Linux system admin']}
    ]
};