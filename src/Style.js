import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from 'react-router-dom'

import Recipes from './images/recipes-img.png'
import VanFlix from './images/vanflix-img.png'
import TodoFlix from './images/todoflix-img.png'
import Dogs from './images/dogs-img.png'

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

    @media(max-width:680px){
        flex-direction: column-reverse;
        justify-content: center;
    }
`

export const PhotoBox = styled.div`
    height: 60%;
    width: 25%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;

    @media(max-width:680px){
        width: 48%;
        height:65%;
    }
`

export const Retangulo = styled.div`
    background-color: #00DF5E;
    height: 8%;
    width: 100%;
    position:relative;
    top: -2vh;
    left: 1vw;
    border-radius: 10px;

    @media(max-width:450px){
        width: 140%;
    }
`

export const IntroHome = styled.h1`
    font-size: 8vh;
    width:90%;
    height: 10vh;
    text-align: center;
`

export const TitleHomeBox = styled.div`
    height: 23%;
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    @media(max-width:942px){
        width: 50%;
    }

    @media(max-width:680px){
        width: 100%;
    }
`

export const Web = styled.p`
    border: 1px solid green;
    width: 55%;
    height: 35%;
    font-size: 5vh;
    background-color:#00DF5E;
    color:#000;
    text-align: center;
    font-weight: bold;
`

export const MyPhoto = styled.img`
    width: 81%;

    @media(max-width:680px){
        height:80%;
        width: auto;
    }
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
        border-bottom: 2px solid #00DF5E;
    }
`

export const Body = styled.div`
    background-color: #000;
    color: #00DF5E;
    width: 100%;
    min-height: 100vh;
    max-height: 300vh;
`

export const Nav = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;

    @media(max-width: 450px){
        height: 10vh;
    }
`

export const Ul = styled.ul`
    width:55%;
    list-style:none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 3vh;

    @media(max-width:450px){
        display:none;
    }
`

export const LinkOnu = styled.a`
    text-decoration: none;
    color: #00DF5E;
    width: 33%;
    height: 4vh;
    text-align: center;
    font-size: 3vh;

    &:hover{
        font-weight: bold;
        font-size: 3.5vh;
        border-bottom: 2px solid #00DF5E;
    }
`

export const LogoBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const LogoImg = styled.img`
    width: 33%;
    margin-left: 10%;

    @media(max-width:450px){
        width: 60%;
    }
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
    min-height: 60%;
    max-height: 90%;
    width: 80%;
    font-size: 3.5vh;
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
    padding-bottom: 2vh;
`

export const TitleAboutBox = styled.div`
    width: 100%;
    height: 30%;
    display:flex;
    text-decoration: overline;
    justify-content: space-evenly;
    align-items:center;

    h2{
        font-size: 7vh;
    }
`

export const SmileImage = styled.img`
    width: 8%;

    @media(max-width: 450px){
        width: 12%;
    }
`

export const ProjectsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items:center;
    width: 100%;
    height: 90vh;

    h1{
        width: 100%;
        text-align: center;
        height: 12%;
        font-size:8vh;
        text-decoration: overline;
    }
`

export const PeojectsBox = styled.div`
    width: 75%;
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    @media(max-width: 450px){
        flex-direction: column;
        flex-wrap: nowrap;
        width: 100%;
        height: 85%;
    }
`

export const ProjectsLinkRecipes = styled.a`
    width: 35%;
    height: 42%;
    background-image: url(${Recipes});
    background-size: 100% 90%;

    display: flex;
    justify-content: center;
    align-items: end;
    text-decoration:none;

    p{
        background-color: black;
        width: 100%;
        height: 12%;
        text-align: center;
        color: #00DF5E;

        @media(max-width: 450px){
            height: 25%;
        }
    }

    @media(max-width: 450px){
        width: 50%;
        height: 22%;
    }
`

export const ProjectsLinkVanflix = styled.a`
    width: 35%;
    height: 42%;
    background-image: url(${VanFlix});
    background-size: 100% 90%;

    display: flex;
    justify-content: center;
    align-items: end;
    text-decoration:none;

    p{
        background-color: black;
        width: 100%;
        height: 12%;
        text-align: center;
        color: #00DF5E;

        @media(max-width: 450px){
            height: 25%;
        }
    }
    
    @media(max-width: 450px){
        width: 50%;
        height: 22%;
    }
`

export const ProjectsLinkTodoFlix = styled.a`
    width: 35%;
    height: 42%;
    background-image: url(${TodoFlix});
    background-size: 100% 90%;

    display: flex;
    justify-content: center;
    align-items: end;
    text-decoration:none;

    p{
        background-color: black;
        width: 100%;
        height: 12%;
        text-align: center;
        color: #00DF5E;

        @media(max-width: 450px){
            height: 25%;
        }
    }
    
    @media(max-width: 450px){
        width: 50%;
        height: 22%;
    }
`

export const ProjectsLinkDogs = styled.a`
    width: 35%;
    height: 42%;
    background-image: url(${Dogs});
    background-size: 100% 90%;

    display: flex;
    justify-content: center;
    align-items: end;
    text-decoration:none;

    p{
        background-color: black;
        width: 100%;
        height: 12%;
        text-align: center;
        color: #00DF5E;

        @media(max-width: 450px){
            height: 25%;
        }
    }
    
    @media(max-width: 450px){
        width: 50%;
        height: 22%;
    }
`

export const HamburguerMenuImage = styled.img`
    @media(min-width:451px){
        display:none;
    }

    width: 15%;
    z-index:1;
`

export const HamburguerMenu = styled.ul`
    list-style:none;
    background-color: #000;
    display:flex;
    flex-direction: column;
    height: fit-content;
    width: 60%;
    border: 2px double #00DF5E;
    font-size: 3.5vh;
    padding: 1%;
    border-radius: 0 0 0 3vh;
    position: absolute;
    left: 40vw;
    z-index: 1;

    li{
        width: 100%;
        height: 5vh;
        text-align:center;
        border-bottom: 1% solid #00DF5E;
    }

    a{
        text-decoration: overline;
        color: #00DF5E;
    }
`