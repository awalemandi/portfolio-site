import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    height: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: auto;
        padding: 2em 0;
    }

    @media screen and (max-width: 480px) {
        height: auto;
        padding: 2em 0;
    }    
`

export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ProjectsCard = styled.div`
    margin-top: 10px;
    background: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 400px;
    width: 100%;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    overflow: auto;

    @media screen and (max-width: 768px) {
        width: 100%;
        max-height: 450px;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
        width: 100%;
        max-height: 450px;
    }

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const ProjectsThumbnail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ProjectsDescription = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    min-height: 150px;
`

export const ProjectsIcon = styled.img`
    height: 250px;
    width: 250px;
    margin-bottom: 10px;
`

export const ProjectsH1 = styled.h1`
    font-size: 2rem;
    color: #f9813a;
    margin-bottom: 30px;
    text-transform: uppercase;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ProjectsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ProjectsP = styled.p`
    font-size: 1 rem;
    text-align: left;
`