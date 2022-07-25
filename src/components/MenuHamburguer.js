import React from 'react'
import { Link } from 'react-router-dom'
import * as S from '../Style'

export default function MenuHamburguer({path1, path2, path3, action}) {
    return (
        <div>
            <S.GlobalStyle />
                <S.HamburguerMenu>
                    <Link to={path1}><li onClick={action}>Home</li></Link>
                    <Link to={path2}><li onClick={action}>About Me</li></Link>
                    <Link to={path3}><li onClick={action}>Projects</li></Link>
                    <li><a target='blank' href='https://objs-sustentaveis.netlify.app'>Objetivos Sustentáveis</a></li>
                </S.HamburguerMenu>
        </div>
    )
}