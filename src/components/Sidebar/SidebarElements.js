import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.4s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`

`;

export const Icon = styled.div`
    position: absolute;
    color: #fff;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

    &:hover {
        color: #febf63;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #febf63;
        transition: 0.2s ease-in-out;
    }

    &.active {
        transition: all 0.1s;
        color: #f9813a;
    }
`;
export const SidebarButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
`;

export const SidebarButtonLink = styled.a`
    border-radius: 15px;
    background: #f9813a;
    white-space: nowrap;
    padding: 20px 35px;
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