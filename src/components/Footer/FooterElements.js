import styled from 'styled-components';
import { Link } from 'react-scroll';

export const FooterContainer = styled.footer`
    background-color: #161A1D;
`;

export const FooterWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
    
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`;

export const FooterLink = styled.a`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #febf63;
        transition: 0.3s ease-out;
        cursor: pointer;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 20px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLogo = styled.img`
    height: 60px;
    width: auto;
    justify-self: flex-start;
    cursor: pointer;

`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
    text-align: center;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;

    &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.1);
        color: #febf63;
    }
`;

export const NavigationButton = styled.button`
    margin-top: 0;
    padding: '14px 30px';
    border: none;
    outline: none;
    background: transparent;
    color: #f9813a;
    font-size: 3em;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.1);
        color: #febf63;
    }
`;