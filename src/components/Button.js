import styled from 'styled-components';
import { Link } from 'react-scroll';

const orangeMain = '#f9813a';
const orangeAccent = '#febf63';
const blackMain = '#010606';


export const Button = styled(Link)`
    border-radius: 8px;
    background: ${({ primary }) => (primary ? orangeMain : blackMain)};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '18px 25px' : '14px 30px')};
    color: ${({ dark }) => (dark ? blackMain : orangeMain)};
    opacity: ${({ transparent }) => (transparent ? 0.9 : 1)};
    font-size: ${({ big }) => (big ? '18px' : '16px')};
    outline: none;
    border: 3px solid;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? orangeAccent : orangeMain)};
        color: #010606;
        box-shadow: 0 5px 15px rgba(145, 92, 182, .1);
    }
`



























