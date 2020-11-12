import React, {useState} from 'react'
import HeroSection from '../components/HeroSection/HeroSection';
import { homeOjectOne, homeOjectTwo } from '../components/InfoSection/Data';
import InfoSection from '../components/InfoSection/InfoSection';
import Navbar from '../components/Navbar/Navbar';
import Projects from '../components/Services/Projects';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeOjectOne} />
            <InfoSection {...homeOjectTwo} />
            <Projects />
        </>
    )
}

export default Home