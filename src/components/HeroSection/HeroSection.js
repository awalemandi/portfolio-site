import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroButtonWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../../components/Button';
import Video from '../../videos/hero.mp4';

export const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Hi, I'm Mads Awale</HeroH1>
                    <HeroP>
                        Front End Developer.
                    </HeroP>
                    <HeroButtonWrapper>
                        <Button to='about'
                            smooth={true}
                            duration={500}
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