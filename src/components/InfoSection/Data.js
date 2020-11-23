import profilePhoto from '../../images/profile.jpg';
import frontEndStack from '../../images/technologies.png';



export const homeOjectOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About Me',
    headline: 'DC Engineer / Developer / ',
    description: `I am a self taught developer....`,
    buttonLabel: 'See skills',
    imgStart: true,
    img: profilePhoto,
    alt: 'Me',
    scrollTo: 'skills',
    dark: true,
    primary: true,
    darkText: false
};

export const homeOjectTwo = {
    id: 'skills',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'SKILLS',
    headline: 'HTML / CSS / JS / REACT / NODEJS',
    description: 'Experience with Python, Firebase and Material UI',
    buttonLabel: 'See Projects',
    imgStart: false,
    img: frontEndStack,
    alt: 'Tech Stack',
    scrollTo: 'projects',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjectThree = {
    id: 'contact',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Contact',
    headline: '',
    description: 'Interested to work with me? Awesome!',
    buttonLabel: 'Checkout Socials',
    imgStart: false,
    img: profilePhoto,
    alt: 'contact',
    scrollTo: 'footer',
    dark: false,
    primary: false,
    darkText: true
};