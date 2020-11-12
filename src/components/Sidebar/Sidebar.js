import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarButton, SidebarButtonLink } from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} toggle={toggle} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                        to='about'
                        smooth={true}
                        duration={800}
                        spy={true}
                        exact='true'
                        offset={-80}
                        onClick={toggle}
                    >
                        About
                    </SidebarLink>
                    <SidebarLink
                        to='skills'
                        smooth={true}
                        duration={800}
                        spy={true}
                        exact='true'
                        offset={-80}
                        onClick={toggle}
                    >
                        Skills
                    </SidebarLink>
                    <SidebarLink
                        to='projects'
                        smooth={true}
                        duration={800}
                        spy={true}
                        exact='true'
                        offset={-80}
                        onClick={toggle}
                    >
                        Projects
                    </SidebarLink>
                    <SidebarButton>
                        <SidebarButtonLink
                            to='contact'
                            smooth={true}
                            duration={800}
                            spy={true}
                            exact='true'
                            offset={-80}
                            onClick={toggle}>Contact</SidebarButtonLink>
                    </SidebarButton>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
