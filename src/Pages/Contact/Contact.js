import React from 'react'
import {Grid, Typography, Icon, Paper} from '@material-ui/core'
import './Contact.css'
import ResumeData from '../../Utiles/Resumedata'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const Contact = () => {

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
            {/* Title */}
            <Grid container className='session pb_45'>
                <Grid item className='session_title mb_30'>
                    <span></span>
                    <h6 variant='h6' className='session_title_text'>Contact Infomartion</h6>
                </Grid>
            </Grid>

            {/* Address */}
            <Grid item xs={12}>
            <CustomTimeline title='Address' icon={<RoomIcon />}>
                <Grid item xs={12}>
                    <Typography>
                        {ResumeData.address}
                    </Typography>
                </Grid>
            </CustomTimeline>
            <CustomTimeline title='Phone Number' icon={<PhoneIcon />}>
                <Grid item xs={12}>
                    <Typography>
                        {ResumeData.phone_no}
                    </Typography>
                </Grid>
            </CustomTimeline>
            <CustomTimeline title='Email ID' icon={<MailIcon />}>
                <Grid item xs={12}>
                    <Typography>
                        {ResumeData.email}
                    </Typography>
                </Grid>
            </CustomTimeline>
        </Grid>
        </>


        
    )
}

export default Contact
