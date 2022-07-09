import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import {Link} from 'react-router-dom'

// #dfd8d0
// #c4aa93
// #75907d
// #7f553d

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const Ul = styled.ul`
    width:50vw;
    list-style:none;
    display: flex;
    justify-content: space-evenly;
    border: 1px solid red;

`

export const RoutesLink = styled(Link)`
    text-decoration: none;
`