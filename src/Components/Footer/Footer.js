import React from 'react'
import './Footer.css'
import {Typography} from '@material-ui/core'
import ResumeData from '../../Utiles/Resumedata'

const Footer = () => {
    return (
        <div className='footer'>
             <div className='footer_left'>
                <Typography className='footer_name'>{ResumeData.name}</Typography>
             </div>
             <div className='footer_right'>
                 <Typography className='footer_copyright'>
                     Designed and Developed by <a href='/' target='_blank'>Aditya Dengare</a>
                 </Typography>
             </div>
        </div>
    )
}

export default Footer
