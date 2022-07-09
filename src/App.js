import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import * as S from './Style'

import Home from './components/Main/Home'
import AboutMe from './components/Main/AboutMe'
import ContactMe from './components/Main/ContactMe'
import Projects from './components/Main/Projects'

export default function App(){
    return(
        <Router>
            <S.GlobalStyle/>
            <img src=''/>
            <nav>
                <S.Ul>
                    <S.RoutesLink to='/'><li>Home</li></S.RoutesLink>
                    <S.RoutesLink to='/AboutMe'><li>About Me</li></S.RoutesLink>
                    <S.RoutesLink to='/ContactMe'><li>Contact Me</li></S.RoutesLink>
                    <S.RoutesLink to='/Projects'><li>Projects</li></S.RoutesLink>
                </S.Ul>
            </nav>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/AboutMe' element={<AboutMe/>}/>
                <Route path='/ContactMe' element={<ContactMe/>}/>
                <Route path='/Projects' element={<Projects/>}/>
            </Routes>
        </Router>
    )
}