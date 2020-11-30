import profilePhoto from '../../images/profile.jpg';
import frontEndStack from '../../images/stack.png';
import contact from '../../images/message.png';



export const homeOjectOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About Me',
    firstHeadline: 'DC Field Engineer / Developer ',
    firstParagraph: `
        I am a self-taught developer currently working as a datacentre field engineer with thousands of noisy servers as my closest companions. I want to explore the software side of the Internet for a change and also level up my coding game.
    `,
    secondParagraph: `
        I'm super passionate about most topics in the domain of science, technology, business and finance. I like to see myself as a perpetual learner with an obsessive need to improve and the discipline to follow through.
    `,
    thirdParagraph: `
        When I am free, I like to read, make coffee with my aeropress, cook and eat delicious food, bake artisan bread, play boardgames or learn something new.
        Click below to see what I've been learning recently (in addition to juggling).
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
    topLine: 'Skills: Languagues and Frameworks',
    firstHeadline: 'HTML / CSS / JS / REACTJS',
    firstParagraph: 'I’ve always preached the “fundamentals first” approach in the past and have stuck to the same principle for learning web development. I have really taken the time to understand the building blocks upon which the modern internet is built. ',
    secondHeadline: 'Other Tools',
    secondParagraph: `
        Git / VS Code / NodeJS / Firebase / Material UI
    `,
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
    firstHeadline: '📧 madsAwale@gmail.com', 
    firstParagraph: '',
    secondParagraph: `Interested in working with me? Awesome! Send me a message.`,
    thirdParagraph: `Too formal? DM me on social media instead. ⬇`, 
    buttonLabel: 'Checkout Socials',
    imgStart: false,
    img: contact,
    alt: 'contact',
    scrollTo: 'footer',
    dark: false,
    primary: false,
    darkText: true,
    content: 'form'
};