import { Sidenav } from 'rsuite'
import '../styles/SidebarNav.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email';
import SlideIn from './SlideIn';

const isMobile = window.innerWidth < 600;

function SidebarNav() {
    const links = [
        <a href="#intro">/home</a>,
        <a href="#about">/about</a>,
        <a href="#experience">/experience</a>,
        <a href="#projects">/creations</a>
    ]

    return (
        <>
            <div className="sidebar-nav">
                {!isMobile && (
                    <Sidenav
                        expanded
                        defaultOpenKeys={[ "3", "4" ]}
                        appearance={"subtle"}
                    >
                        <Sidenav.Body>
                            <div className="sidebar-links">
                                {links.map((link, i) => (
                                    <SlideIn
                                        checked
                                        timeout={i + 2000}>
                                        <div>{link}</div>
                                    </SlideIn>
                                ))}
                            </div>
                        </Sidenav.Body>
                    </Sidenav>
                )}
                <div className="sidebar-logos">
                    <a href="mailto:linaemalmros@gmail.com">
                        <EmailIcon style={{ fontSize: 20 }}></EmailIcon>
                    </a>
                    <a href="https://github.com/fishbulle">
                        <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
                    </a>
                    <a href="https://www.linkedin.com/in/angelina-malmros-03b249236/">
                        <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
                    </a>
                </div>
            </div>
        </>
    )
}

export default SidebarNav