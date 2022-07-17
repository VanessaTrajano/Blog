import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const MenuHome = styled.section`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Aaa = styled.div`
    height: 55%;
    width: 25%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
`

export const Retangulo = styled.div`
    background-color: #00DF5E;
    height: 7%;
    width: 100%;
    position:relative;
    top: -2vh;
    left: 1.5vw;
    border-radius: 10px;
`

export const IntroHome = styled.p`
    font-size: 6vh;
    border: 1px solid red;
    width:25vw;
`

export const MyPhoto = styled.img`
    width:20vw;
`

export const RoutesLink = styled(Link)`
    text-decoration: none;
    font-size: 3vh;
    color: #00DF5E;
    width: 9vw;
    height: 4vh;
    text-align: center;

    &:hover{
        font-weight: bold;
        font-size: 3.5vh;
    }
`

export const Body = styled.div`
    background-color: #000;
    color: #00DF5E;
    width: 100vw;
    min-height: 100vh;
    max-height: 200vh;
`

export const Nav = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
`

export const Ul = styled.ul`
    width:50vw;
    list-style:none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 3vh;
`

export const LogoBox = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const LogoImg = styled.img`
    width: 3vw;
`

export const AboutBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items:center;
    width: 100%;
    height: 90vh;
`

export const TextBox = styled.div`
    height: 60%;
    width: 33%;
    font-size: 3.5vh;
    text-align: justify;
`
