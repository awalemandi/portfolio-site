import profilePhoto from '../../images/profile.jpg';
import frontEndStack from '../../images/technologies.png';

export const homeOjectOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About me',
    headline: '',
    description: 'Born at the base of the Himalayas....',
    buttonLabel: 'Get Resume',
    imgStart: true,
    img: profilePhoto,
    alt: 'Me',
    scrollTo: 'skills',
    dark: false,
    primary: true,
    darkText: false
};

export const homeOjectTwo = {
    id: 'skills',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'SKILLS',
    headline: 'Tools I use',
    description: 'React x 999',
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
    headline: 'Let\'s Talk!',
    description: 'Interested to work with me? Great!',
    buttonLabel: 'Get Resume',
    imgStart: false,
    img: profilePhoto,
    alt: 'contact',
    scrollTo: 'skills',
    dark: false,
    primary: false,
    darkText: true
};