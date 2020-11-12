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
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='skills' onClick={toggle}>Skills</SidebarLink>
                    <SidebarLink to='projects' onClick={toggle}>Projects</SidebarLink>
                </SidebarMenu>
                <SidebarButton>
                    <SidebarButtonLink to='contact' onClick={toggle}>Contact</SidebarButtonLink>
                </SidebarButton>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
