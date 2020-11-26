import profilePhoto from '../../images/profile.jpg';
import frontEndStack from '../../images/technologies.png';



export const homeOjectOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About Me',
    headline: 'DC Field Engineer / Developer ',
    description: `
        I am a self-taught developer currently working as a datacentre field engineer with thousands of noisy servers as my closest companions. I want to explore the software side of the Internet for a change and also level up my coding game.
    `,
    conclusion: `
        I'm super passionate about most topics in the domain of science, technology, business and finance. I like to see myself as a perpetual learner with an obsessive need to improve and the discipline to follow through. Click below to see what I've been learning recently.
    `,
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
    conclusion: ``,
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
    description: 'Interested in working with me? Awesome!',
    conclusion: ``,
    buttonLabel: 'Checkout Socials',
    imgStart: false,
    img: profilePhoto,
    alt: 'contact',
    scrollTo: 'footer',
    dark: false,
    primary: false,
    darkText: true
};