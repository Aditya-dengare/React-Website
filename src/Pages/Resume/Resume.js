import React from 'react'
import './Resume.css'
import '../../Components/Timeline/Timeline.css'
import {Grid, Typography, Icon, Paper} from '@material-ui/core'
import ResumeData from '../../Utiles/Resumedata'
import WorkIcon from '@material-ui/icons/Work';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const Resume = () => {


    const CustomTimeline = ({title, icon ,children}) => {
        return (
        <Timeline className='timeline' style={{color:'white'}}>
            {/* Item Header */}
          <TimelineItem className='timeline_firstItem'>
            <TimelineSeparator>
              <TimelineDot className='timeline_dot_header'>{icon}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent><Typography variant='h6' className='timeline_header' style={{color:'white'}}>{title}</Typography></TimelineContent>
          </TimelineItem>
          {children}
            {/* Remining Item */}
        </Timeline>
        )
    }

    return (
        <>
            {/* About Me */}
            <Grid container className='session pb_45'>
                <Grid item className='session_title mb_30'>
                    <span></span>
                    <h6 variant='h6' className='session_title_text'>About Me</h6>
                    <Grid item xs={12}>
                        <Typography className='aboutme_text'>{ResumeData.about}</Typography>
                    </Grid>
                </Grid>
            </Grid>

            {/* Career Objective */}
            <Grid container className='session pb_45'>
                <Grid item className='session_title mb_30'>
                    <span></span>
                    <h6 variant='h6' className='session_title_text'>Career Objective</h6>
                    <Grid item xs={12}>
                        <Typography className='aboutme_text'>{ResumeData.careeerobject}</Typography>
                    </Grid>
                </Grid>
            </Grid>

            {/* Eductions and Exp */}
            <Grid container className=''>
            <Grid item className='session_title mb_30'>
                    <span></span>
                    <h6 variant='h6' className='session_title_text'>Resume</h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container>
                        {/* Expericance */}
                        <Grid item md={6}>
                            <CustomTimeline title='Work Experience' icon={<WorkIcon />}>
                                {ResumeData.experiences.map(experience =>(
                                    <div>
                                        <Typography className='timeline_title'>{experience.title}</Typography>
                                        <Typography variant='caption' className='timeline_date'>{experience.date}</Typography>
                                        <Typography variant='body2' className='timeline_des'>{experience.des}</Typography><br />
                                    </div>
                                )
                                )}
                            </CustomTimeline>
                        </Grid>

                        {/* Education */}
                        <Grid item md={6}>
                        <CustomTimeline title='Education' icon={<MenuBookIcon />}>
                                {ResumeData.education.map(educations =>(
                                    <div>
                                        <Typography className='timeline_title'>{educations.title}</Typography>
                                        <Typography variant='caption' className='timeline_date'>{educations.date}</Typography>
                                        <Typography variant='body2' className='timeline_des'>{educations.des}</Typography><br />
                                    </div>
                                )
                                )}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Services */}
            <Grid container className=''>
                <Grid item className='session_title mb_30'>
                    <span></span>
                    <h6 variant='h6' className='session_title_text'>Services</h6>
                </Grid>
                <Grid item xs={12} style={{color:'white'}}>
                    <Grid container spacing={3} justify='space-around'>
                        {ResumeData.services.map(service => (
                            <Grid item xs={12} sm={6} md={3}>
                                <div className='service'>
                                    <Icon className='service_icon'>
                                        {service.icon}
                                    </Icon>
                                    <Typography variant='h6' className='service_title'>{service.title}</Typography>
                                    <Typography variant='body2' className='service_des'>{service.des}</Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            {/* Skills */}
            <Grid container className='' style={{marginTop:'50px'}}>
                <Grid item className='session_title mb_30'>
                    <span></span>
                    <h6 variant='h6' className='session_title_text'>Skills</h6>
                </Grid>
                <Grid item xs={12} style={{color:'white'}}>
                    <Grid container spacing={3} justify='space-around'>
                    {ResumeData.skills.map(skill => (
                <Grid item xs={12} sm={6} md={3}>
                    <div className='skill'>
                        <Typography variant='h6' className='skill_title'>{skill.title}</Typography>
                        {skill.des.map(element => (
                            <Typography variant='body2' className='skill_des'>
                                <TimelineDot variant={'outlined'} className='timeline_dot' spacing={3} />
                                {element}
                            </Typography>
                        ))}
                    </div>   
                </Grid>
                ))}
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid container spacing={3} justify='space-between' className='section graybg pb_45'>
                <Grid item className='session_title mb_30'>
                    <span></span>
                    <h6 variant='h6' className='session_title_text'>Skills</h6>
                </Grid>
                {ResumeData.skills.map(skill => (
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={0} className='skill'>
                        <Typography variant='h6' className='skill_title'>{skill.title}</Typography>
                        {skill.des.map(element => (
                            <Typography variant='body2' className='skill_des'>
                                <TimelineDot variant={'outlined'} className='timeline_dot' />
                                {element}
                            </Typography>
                        ))}
                    </Paper>    
                </Grid>
                ))}
            </Grid> */}
            {/* Contact */}
            <Grid container className=''></Grid>
        </>
        
    )
}

export default Resume
