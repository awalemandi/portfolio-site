import React, {useState} from 'react'
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import { homeOjectOne, homeOjectTwo, homeObjectThree } from '../components/InfoSection/Data';
import InfoSection from '../components/InfoSection/InfoSection';
import Navbar from '../components/Navbar/Navbar';
import Projects from '../components/Projects/Projects';
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
            <InfoSection {...homeObjectThree} />
            <Footer />
        </>
    )
}

export default Home