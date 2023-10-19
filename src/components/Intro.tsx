import '../styles/Intro.css'
import { BsEnvelopeHeart } from 'react-icons/bs'
import Typewriter from 'typewriter-effect';

function Intro() {

    return (
        <>
            <div id="intro">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('<span id="intro-text">hi, <span id="intro-name">angelina</span> here.</span>')
                            .pauseFor(900)
                            .start()
                    }}
                    options={{
                        cursor: '<span id="intro-text">|</span>'
                    }}
                />
                <div className="intro-subtitle">I like to write code.</div>
                <div className="intro-desc">
                    I'm a full stack developer based in southern Sweden.
                </div>
                <div className="intro-contact">
                    <a href="mailto:linaemalmros@gmail.com">
                        <BsEnvelopeHeart id="envelope" />
                        <span> reach out</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Intro