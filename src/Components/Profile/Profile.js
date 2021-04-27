import {  Typography } from '@material-ui/core'
import React from 'react'
import './Profile.css'
import CustomTimeline, {CustomTimelineSeparator} from '../Timeline/Timeline'
import ResumeData from '../../Utiles/Resumedata'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomButton from '../Button/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';

const CustomeTimelineItem = ({title,text,link,icon}) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className='timeline_content'>
            {link ? (
            <Typography className='timelineItem_text'>
                <span>{icon}</span>{':'}
                <a href={link} target='_blank'>
                    {text}
                </a>
            </Typography>): (
                <Typography className='timelineItem_text'><span>{title}</span>{text}</Typography>
            )}
        </TimelineContent>
    </TimelineItem>
)

const Profile = () => {

    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>{ResumeData.main_title}</Typography>
                <Typography className='title'>{ResumeData.title}</Typography>
            </div>
            
            {/* <figure className='profile_image'>
                <img src={require('../../Assests/Images/display_image.jpg')} alt='' ></img>
            </figure> */}

            <div className='profile_information'>
                <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
                    <CustomeTimelineItem title='Name:' text={ResumeData.name} />
                    <CustomeTimelineItem title='Title:' text={ResumeData.title} />
                    <CustomeTimelineItem title='Birthday:' text={ResumeData.birthday} />
                    <CustomeTimelineItem title='Email:' text={ResumeData.email} />

                    {Object.keys(ResumeData.socials).map(key =>(
                        <CustomeTimelineItem title={key} text={ResumeData.socials[key].text} icon={ResumeData.socials[key].icon} link={ResumeData.socials[key].link}></CustomeTimelineItem>
                    ))}
                </CustomTimeline>
                
                <div className='button_container'>
                    <CustomButton  text={'View Resume'} icon={<VisibilityIcon />} />
                </div>
            </div>
        </div>
    )
}

export default Profile
