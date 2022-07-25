import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as S from './Style'

import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import MenuHamburguer from './components/MenuHamburguer'

import Insta from './images/instagram.png'
import GitHub from './images/github.png'
import Linkedin from './images/linkedin.png'
import imageMenuClosed from './images/imageMenuClosed.png'
import imageMenuOpen from './images/imageMenuOpen.png'

export default function App() {

    const [hamburguer, setHamburguer] = useState(false)

    const OpenMenu = () => {
        setHamburguer(!hamburguer)
    }

    return (
        <Router>
            <S.GlobalStyle />
            <S.Body>
                <S.Nav>
                    <S.LogoBox>
                        <a href='https://www.instagram.com/vantrajano/' target='blank'><S.LogoImg src={Insta} /></a>
                        <a href='https://github.com/VanessaTrajano' target='blank'><S.LogoImg src={GitHub} /></a>
                        <a href='https://www.linkedin.com/in/vantrajano/' target='blank'><S.LogoImg src={Linkedin} /></a>
                    </S.LogoBox>
                    <S.Ul>
                        <S.RoutesLink to='/'><li>Home</li></S.RoutesLink>
                        <S.RoutesLink to='/AboutMe'><li>About Me</li></S.RoutesLink>
                        <S.RoutesLink to='/Projects'><li>Projects</li></S.RoutesLink>
                        <S.LinkOnu target='blank' href='https://objs-sustentaveis.netlify.app'>Objetivos Sustentáveis</S.LinkOnu>
                    </S.Ul>

                    {hamburguer && <MenuHamburguer action={() => {OpenMenu()}} path1='/' path2='/AboutMe' path3='/Projects'/>}

                    {hamburguer ? <S.HamburguerMenuImage onClick={() => {OpenMenu()}} src={imageMenuOpen}/> : <S.HamburguerMenuImage onClick={() => {OpenMenu()}} src={imageMenuClosed}/>}

                </S.Nav>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/AboutMe' element={<AboutMe />} />
                    <Route path='/Projects' element={<Projects />} />
                </Routes>
            </S.Body>
        </Router>
    )
}