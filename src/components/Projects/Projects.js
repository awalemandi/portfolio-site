import React from 'react'
import {
    ProjectsContainer,
    ProjectsWrapper,
    ProjectsCard,
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
                        <ProjectsIcon src={Icon1} />
                        <ProjectsH2>Jot It</ProjectsH2>
                        <ProjectsP>Jot It is a concept full stack application for jotting down and revisiting insights from reads which uses React Hooks to manipulate the DOM and firebase (firestore) to store and retrieve realtime data.</ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsIcon src={Icon2} />
                        <ProjectsH2>Jamming +</ProjectsH2>
                        <ProjectsP>React project which uses knowledge of React components, passing state, and requests with the Spotify API to build a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.</ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsIcon src={Icon3} />
                        <ProjectsH2>Portfolio site</ProjectsH2>
                        <ProjectsP>Responsive and reusable website made with react and styled components.</ProjectsP>
                    </ProjectsCard>
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    )
}

export default Projects
