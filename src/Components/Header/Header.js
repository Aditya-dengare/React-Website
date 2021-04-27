import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown
} from 'react-bootstrap';
import {Link,NavLink,withRouter} from 'react-router-dom';
import{
    HomeRounded,
    SchoolRounded,
    WorkRounded,
    LinkedIn
} from '@material-ui/icons'
import ResumeData from '../../Utiles/Resumedata'
import './Header.css'

const Header = (props) => {

    const pathName = props?.location?.pathname

    return (
        <Navbar expand='lg' sticky='top' className='header'>
            {/* Home Link */}
            <Nav.Link as={NavLink} to='/Resume' className='header_navlink'>
                <Navbar.Brand className='header_home'>
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className='header_left'>
                   {/* Resume Link */}
                    <Nav.Link as={NavLink} to='/Resume' className={pathName == '/Resume' ? 'header_link_active' : 'header_link'}>Resume</Nav.Link>
        
                    {/* Contact Link */}
                    <Nav.Link as={NavLink} to='/Contact' className={pathName == '/Contact' ? 'header_link_active' : 'header_link'}>Contact</Nav.Link>
                </Nav>

                {/* <div className='header_right'>
                    {Object.keys(ResumeData.socials).map(key => (
                        <a href={ResumeData.socials[key].Link} target='_blank'>{ResumeData.socials[key].icon}</a>
                    ))}
                </div> */}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header);
