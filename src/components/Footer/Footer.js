import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
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
    Logo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Footer Down Here
                            </FooterLinkTitle>
                            <FooterLink>About me</FooterLink>
                            <FooterLink>About me</FooterLink>
                            <FooterLink>About me</FooterLink>
                            <FooterLink>About me</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Footer Down Here
                            </FooterLinkTitle>
                            <FooterLink>About me</FooterLink>
                            <FooterLink>About me</FooterLink>
                            <FooterLink>About me</FooterLink>
                            <FooterLink>About me</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Footer Down Here
                            </FooterLinkTitle>
                            <FooterLink>About me</FooterLink>
                            <FooterLink>About me</FooterLink>
                            <FooterLink>About me</FooterLink>
                            <FooterLink>About me</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Socials
                            </FooterLinkTitle>
                            <FooterLink>Instagram</FooterLink>
                            <FooterLink>LinkedIn</FooterLink>
                            <FooterLink>GitHub</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <Logo to='/'>
                            MADS
                        </Logo>
                        <WebsiteRights>Mandi Awale © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank'
                            aria-label='LinkedIn'>
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank'
                                aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank'
                                aria-label='GitHub'>
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
