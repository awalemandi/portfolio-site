import styled from 'styled-components';

const orangeMain = '#f9813a';
const orangeAccent = '#febf63';
const blackMain = '#010606';

export const ProjectsContainer = styled.div`
    height: auto;
    padding: 2rem;
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
        grid-gap: 30px;
    }
`

export const ProjectsCard = styled.div`
    margin-top: 10px;
    background: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    width: 100%;
    height: auto;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.6s ease-in-out;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
        width: 100%;
        height: auto;
    } 

    &:hover {
        background: #fc4a1a;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #f7b733, #fc4a1a);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #f7b733, #fc4a1a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
`
export const ProjectsThumbnail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ProjectsInfo = styled.div`
    width: 100%;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        min-width: auto;
    }
`

export const ProjectsDescription = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    min-height: 150px;
    max-height: 200px;
    overflow-y: auto;

    @media screen and (max-width: 768px) {
        max-height: 160px;
    }

    @media screen and (max-width: 480px) {
        max-height: 160px;
    }    
`
export const TagsWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: auto;
`;

export const Tags = styled.div`
    margin: 5px;
    border-radius: 50px;
    background: #febf63;
    white-space: nowrap;
    padding: 2px 5px;
    color: #010606;
    font-size: 0.8em;
    outline: none;
    border: 1px solid;
    cursor: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProjectsIcon = styled.img`
    border-radius: 5px;
    height: 250px;
    width: 400px;
    margin-bottom: 10px;

    @media screen and (max-width: 480px) {
        width: 100%;
        height: auto;
    }
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
export const IconsWrapper = styled.div`
    margin-top: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const IconLink = styled.a`
    color: #010606;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
    opacity: 0.7;
    transition: all 0.4s ease-in-out;

    @media screen and (max-width: 768px) {
        font-size: 12px;
        opacity: 1;
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
        opacity: 1;
    }

    &:hover {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        transform: scale(1.01);
        opacity: 1;
    }
`;