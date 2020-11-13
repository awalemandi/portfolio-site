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
                    <NavLogo to='/' onClick={toggleHome}>&lt;M/&gt;</NavLogo>
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
                            <NavLinks>
                                <NavButton>
                                    <NavButtonLink
                                        to='contact'
                                        smooth={true}
                                        duration={800}
                                        spy={true}
                                        exact='true'
                                        offset={-80}
                                    >
                                        Contact
                                </NavButtonLink>
                                </NavButton>
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
