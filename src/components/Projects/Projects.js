import React from 'react'
import {
    ProjectsContainer,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsThumbnail,
    ProjectsDescription,
    ProjectsIcon,
    ProjectsH1,
    ProjectsH2,
    ProjectsP
} from './ProjectElements';
import Icon1 from '../../videos/app1.gif';
import Icon2 from '../../videos/app2.gif';
import Icon3 from '../../videos/app3.gif';

const Projects = () => {
    return (
        <>
            <ProjectsContainer id='projects'>
                <ProjectsH1>Recent Projects</ProjectsH1>
                <ProjectsWrapper>
                    <ProjectsCard>
                        <ProjectsThumbnail>
                            <ProjectsIcon src={Icon1} />
                        </ProjectsThumbnail>
                        <ProjectsDescription>
                            <ProjectsH2>Jot It</ProjectsH2>
                            <ProjectsP>Jot It is a concept full stack application for jotting down and revisiting insights from reads which uses React Hooks to manipulate the DOM and firebase (firestore) to store and retrieve realtime data.</ProjectsP>
                        </ProjectsDescription>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsThumbnail>
                            <ProjectsIcon src={Icon2} />
                        </ProjectsThumbnail>
                        <ProjectsDescription>
                            <ProjectsH2>Jamming+</ProjectsH2>
                            <ProjectsP>React project which uses knowledge of React components, passing state, and requests with the Spotify API to build a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.</ProjectsP>
                        </ProjectsDescription>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsThumbnail>
                            <ProjectsIcon src={Icon3} />
                        </ProjectsThumbnail>
                        <ProjectsDescription>
                            <ProjectsH2>Ticker Ninja</ProjectsH2>
                            <ProjectsP>Full stack app which displays the annual returns of all stocks in the SNP500 in bubble chart form.</ProjectsP>
                        </ProjectsDescription>
                    </ProjectsCard>
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    )
}

export default Projects
