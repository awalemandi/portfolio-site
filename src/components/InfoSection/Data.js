import profilePhoto from '../../images/profile.jpg';
import frontEndStack from '../../images/technologies.png';

export const homeOjectOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'RESUME',
    headline: 'ABOUT ME',
    description: 'Born at the base of the Himalayas....',
    buttonLabel: 'Get Resume',
    imgStart: true,
    img: profilePhoto,
    alt: 'Me',
    dark: false,
    primary: false,
    darkText: false
};

export const homeOjectTwo = {
    id: 'skills',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'SKILLS',
    headline: 'Tools and technologies',
    description: '',
    buttonLabel: 'See Projects',
    imgStart: false,
    img: frontEndStack,
    alt: 'Tech Stack',
    dark: false,
    primary: false,
    darkText: true
};