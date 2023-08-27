import '../App.css' 
import {Link} from 'react-scroll'
import {BiMenu} from 'react-icons/bi'
import { useEffect, useState } from 'react';

 
const NavigationBar = () => {

    const offset = -90
    const delay = -500
    const duration= 800
    const spy = true
    const smooth = true

    const [navOpen, setNavOpen] = useState(false);

    const openNav = () => {
      setNavOpen(prevNavOpen => !prevNavOpen);
    };
    
    return (
        <>

        <div className='navicon' onClick={openNav}><BiMenu /></div>

        <nav className={`navbar ${navOpen ? 'active' :''}`}>
        <div className='navclose' onClick={openNav}>X</div>
        
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