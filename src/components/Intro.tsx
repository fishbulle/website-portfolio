import '../styles/Intro.css'
import EmailIcon from '@mui/icons-material/Email'
import Typewriter from 'typewriter-effect'
import SlideIn from './SlideIn'

function Intro() {

    return (
        <>
            <div id="intro">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('hi, <span id="intro-name">angelina</span> here.')
                            .pauseFor(900)
                            .start()
                    }}
                />
                <SlideIn
                    timeout={1500}
                    checked>
                    <div className="intro-subtitle">I like to write code.</div>
                </SlideIn>
                <SlideIn
                    timeout={1500}
                    checked>
                    <div className="intro-desc">
                        I'm a full stack developer based in southern Sweden.
                    </div>
                </SlideIn>
                <SlideIn
                    timeout={1500}
                    checked>
                    <div className="intro-contact">
                        <a href="mailto:linaemalmros@gmail.com">
                            <EmailIcon id="envelope" />
                            <span> reach out</span>
                        </a>
                    </div>
                </SlideIn>
            </div>
        </>
    )
}

export default Intro