import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarButton, SidebarButtonLink } from './SidebarElements';
import { FaFileDownload } from 'react-icons/fa';

import { resumeLink } from '../../updateInfo';

const Sidebar = ( { isOpen, toggle } ) => {
    return (
        <SidebarContainer isOpen={ isOpen } toggle={ toggle } onClick={ toggle }>
            <Icon onClick={ toggle }>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                        to='home'
                        smooth={ true }
                        duration={ 800 }
                        spy={ true }
                        exact='true'
                        offset={ -80 }
                        onClick={ toggle }
                    >
                        Home
                    </SidebarLink>
                    <SidebarLink
                        to='about'
                        smooth={ true }
                        duration={ 800 }
                        spy={ true }
                        exact='true'
                        offset={ -80 }
                        onClick={ toggle }
                    >
                        About
                    </SidebarLink>
                    <SidebarLink
                        to='skills'
                        smooth={ true }
                        duration={ 800 }
                        spy={ true }
                        exact='true'
                        offset={ -80 }
                        onClick={ toggle }
                    >
                        Skills
                    </SidebarLink>
                    <SidebarLink
                        to='projects'
                        smooth={ true }
                        duration={ 800 }
                        spy={ true }
                        exact='true'
                        offset={ -80 }
                        onClick={ toggle }
                    >
                        Projects
                    </SidebarLink>
                    <SidebarLink
                        to='contact'
                        smooth={ true }
                        duration={ 800 }
                        spy={ true }
                        exact='true'
                        offset={ -80 }
                        onClick={ toggle }
                    >
                        Contact
                    </SidebarLink>
                    <SidebarButton>
                        <SidebarButtonLink
                            href={ resumeLink }
                            target='_blank'
                            onClick={ toggle }
                        >
                            Resume <FaFileDownload />
                        </SidebarButtonLink>
                    </SidebarButton>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
