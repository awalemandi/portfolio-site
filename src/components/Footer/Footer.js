import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaGithub, FaInstagram, FaLinkedin, FaHackerrank, FaReddit, FaTwitter } from 'react-icons/fa';
import { TiArrowUpOutline } from 'react-icons/ti';
import { SiCodecademy } from 'react-icons/si';
import {
    FooterContainer,
    FooterWrapper,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrapper,
    FooterLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    NavigationButton
} from './FooterElements';
import Logo from '../../images/logo.png';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer id='footer'>
            <FooterWrapper>
                <NavigationButton onClick={ toggleHome }>
                    <TiArrowUpOutline />
                </NavigationButton>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <FooterLogo src={ Logo } onClick={ toggleHome } />
                        <WebsiteRights>
                            <FooterLink href='https://github.com/awalemandi' target='_blank'>
                                Mads Awale
                            </FooterLink>
                            <span> </span> © { new Date().getFullYear() } All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://www.linkedin.com/in/mandi-awale/' target='_blank'
                                aria-label='LinkedIn'>
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='https://github.com/awalemandi' target='_blank'
                                aria-label='GitHub'>
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.codecademy.com/profiles/mawale' target='_blank'
                                aria-label='Codecademy'>
                                <SiCodecademy />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.hackerrank.com/mads_awale' target='_blank'
                                aria-label='Hackerrank'>
                                <FaHackerrank />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.instagram.com/cussinstoic/' target='_blank'
                                aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='https://twitter.com/cussinstoic/' target='_blank'
                                aria-label='Reddit'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.reddit.com/user/cussinstoic/' target='_blank'
                                aria-label='Reddit'>
                                <FaReddit />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default Footer;
