import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled.img`
    height: 80px;
    width: auto;
    justify-self: flex-start;
    cursor: pointer;
    margin-left: 24px;

    &:hover {
        color: #febf63;
        transition: 0.2s ease-in-out;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }

    &:hover {
        color: #febf63;
        transition: 0.2s ease-in-out;
        box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80 px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 80px;
    cursor: pointer;

    &:hover {
        color: #febf63;
    }
    
    &.active {
        transition: all 0.1s;
        border-bottom: 3px solid #f9813a;
    }
`;

export const NavButton = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavButtonLink = styled.a`
    margin: 0 20px;
    border-radius: 15px;
    background: #f9813a;
    white-space: nowrap;
    padding: 15px 30px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #febf63;
        box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
    }
`;