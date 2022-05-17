import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: aliceblue;
    flex-wrap: wrap;
    height: 75px;
    font-size: 2rem;
`
export const Logo = styled(Link)`
display: flex;
    text-decoration: none;
    width: 40px;
    height: 40px;
    img{
        display: flex;
        width: 100%;
        height: 100%;
        margin-left: 20px;
    }
`
export const NavHeader = styled.h5`
justify-content: center;
text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 40vw;

    `
export const Icon = styled.div`
    display: flex;
    margin-left: 35vw;
`