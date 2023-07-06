import '../App.css' 
import {Link} from 'react-scroll'

 
const NavigationBar = () => {

    const offset = -90
    const delay = -500
    const duration= 800
    const spy = true
    const smooth = true
    
    return (
        <>

        <nav className='navbar'>
        
        <Link className='navcontent' to='firstID' smooth={smooth} spy={spy} offset={offset} delay={delay} duration={duration}>
            Introduction
        </Link>
        
        <Link className='navcontent' to='secondID' smooth={smooth} spy={spy} offset={offset} delay={delay} duration={duration}>
            Tech Stack
        </Link>

        <Link className='navcontent' to='thirdID' smooth={smooth} spy={spy} offset={offset} delay={delay} duration={duration}>
            Job Experiences
        </Link>

        <Link className='navcontent' to='fourthID' smooth={smooth} spy={spy} offset={offset} delay={delay} duration={duration}>
            Projects
        </Link>

        </nav>

        </>
    );
};
export default NavigationBar;