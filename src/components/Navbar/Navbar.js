import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavButton,
    NavButtonLink
} from './NavbarElements';

import Logo from '../../images/logo.png';
import Resume from '../../pages/resume.pdf';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        (window.scrollY >= 80) ? setScrollNav(true) : setScrollNav(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo src={Logo} onClick={toggleHome}/>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to='home'
                                smooth={true}
                                duration={800}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to='about'
                                smooth={true}
                                duration={800}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to='skills'
                                smooth={true}
                                duration={800}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                Skills
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to='projects'
                                smooth={true}
                                duration={800}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                Projects
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to='contact'
                                smooth={true}
                                duration={800}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                Contact
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                                <NavButton>
                                    <NavButtonLink
                                        href={Resume}
                                        target='_blank'
                                        >
                                        Resume
                                    </NavButtonLink>
                                </NavButton>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
