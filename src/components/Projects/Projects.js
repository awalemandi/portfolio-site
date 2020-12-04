import React from 'react'
import { projectsArray } from './Data';
import {
    ProjectsContainer,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsThumbnail,
    ProjectsDescription,
    ProjectsIcon,
    ProjectsH1,
    ProjectsH2,
    ProjectsP,
    IconsWrapper,
    IconLink
} from './ProjectElements';
import { MdOpenInNew } from 'react-icons/md';
import { BiCodeCurly } from 'react-icons/bi';

const Projects = () => {
    return (
        <>
            <ProjectsContainer id='projects'>
                <ProjectsH1>Recent Projects</ProjectsH1>
                <ProjectsWrapper>
                    {
                        projectsArray.map(project => {
                            return (
                                < ProjectsCard>
                                    <ProjectsThumbnail>
                                        <ProjectsIcon src={project.thumbnail} />
                                        <IconsWrapper>
                                            <IconLink
                                                href={project.liveLink}
                                                target='_blank'
                                            >
                                                <MdOpenInNew /> Live
                                            </IconLink>
                                            <IconLink
                                                href={project.repoLink}
                                                target='_blank'
                                            >
                                                <BiCodeCurly /> Source Code
                                            </IconLink>
                                        </IconsWrapper>
                                    </ProjectsThumbnail>
                                    <ProjectsDescription>
                                        <ProjectsH2>{project.name}</ProjectsH2>
                                        <ProjectsP>{project.description}</ProjectsP>
                                    </ProjectsDescription>
                                </ProjectsCard>
                            );
                        }
                        )   
                    }
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    )
}

export default Projects
