import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroH2, HeroP, HeroButtonWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../../components/Button';
import Video from '../../videos/hero.mp4';

export const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
            <HeroContainer id='home'>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Hello, I'm Mads.</HeroH1>
                    <HeroH2>Front End Developer</HeroH2>
                    <HeroP>
                        I'm interested in building serviceable and scalable web applications which are efficient, intuitive and aesthetic.
                    </HeroP>
                    <HeroButtonWrapper>
                        <Button to='about'
                            smooth={true}
                            duration={800}
                            spy={true}
                            exact='true'
                            offset={-80}
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            big='true'
                            primary='true'
                            dark='true'
                        >
                            Know more { hover ? <ArrowForward /> : <ArrowRight/> }
                        </Button>
                    </HeroButtonWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection;