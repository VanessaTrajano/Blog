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

export const PhotoBox = styled.div`
    height: 60%;
    width: 25%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
`

export const Retangulo = styled.div`
    background-color: #00DF5E;
    height: 8%;
    width: 100%;
    position:relative;
    top: -2vh;
    left: 1vw;
    border-radius: 10px;
`

export const IntroHome = styled.h1`
    font-size: 7vh;
    width:90%;
    height: 10vh;
    text-align: center;
`

export const TitleHomeBox = styled.div`
    height: 20%;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`

export const Web = styled.p`
    border: 1px solid green;
    width: 50%;
    height: 30%;
    font-size: 4vh;
    background-color:#00DF5E;
    color:#000;
    text-align: center;
    font-weight: bold;
`

export const MyPhoto = styled.img`
    width:20vw;
`

export const RoutesLink = styled(Link)`
    text-decoration: none;
    font-size: 3vh;
    color: #00DF5E;
    width: 15%;
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
    width:50%;
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
    width: 33%;
    margin-left: 10%;
`

export const AboutBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items:center;
    width: 100%;
    height: 90vh;
`

export const TextBox = styled.div`
    height: 35%;
    width: 80%;
    font-size: 3.5vh;
    text-align: justify;
`

export const TitleAboutBox = styled.div`
    width: 40%;
    height: 50%;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;

    h2{
        font-size: 7vh;
    }
`

export const SmileImage = styled.img`
    width: 20%;
`

