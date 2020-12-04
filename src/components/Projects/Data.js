import Icon1 from '../../videos/jotitGIF.gif';
import Icon2 from '../../videos/jammingGIF.gif';
import Icon3 from '../../videos/portfolioGIF.gif';


export const projectsArray = [
    {
        id: 1,
        name: 'Jot it',
        thumbnail: Icon1,
        description: `
            A concept full stack application for jotting down and revisiting insights from reads. It uses React Hooks to manipulate the DOM, context API for state management and firebase(firestore) to store/retrieve realtime data. 
            The app uses prestyled components from the Material UI library combined with the realtime database functionality of firestore to provide a clean and responsive UX.
        `,
        liveLink: 'https://www.jotit.live/',
        repoLink: 'https://github.com/awalemandi/jot-it',
        tags: ['React', 'Context API', 'Hooks', 'Firebase', 'Firestore', 'React form', 'CSS', 'MUI']
    },
    {
        id: 2,
        name: 'Jamming+',
        thumbnail: Icon2,
        description: `
            Simple React website which uses React components, props, and Spotify API to allowsusers to search the Spotify library, create a custom playlist, then save it to their Spotify account.
        `,
        liveLink: 'https://www.jammingplus.xyz/',
        repoLink: 'https://github.com/awalemandi/jamming/',
        tags: ['React', 'Component Lifecycle', 'REST API', 'CSS', 'Netlify' ]
    },
    {
        id: 3,
        name: 'Portfolio site',
        thumbnail: Icon3,
        description: `
            A modern, fully responsive and versatile website with a consistent theme, reusable components, multiple levels of customization and aesthetic features such as smooth scroll and on scroll transparent navbar.
        `,
        liveLink: 'https://www.madsawale.me/',
        repoLink: 'https://github.com/awalemandi/portfolio-site',
        tags: ['React', 'CSS', 'Hooks', 'Styled Components','React Scroll', 'Netlify']
    },
]