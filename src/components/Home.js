import React from "react";
import * as S from '../Style.js'
import Foto from '../images/euzinha.png'

export default function Home() {
    return (
        <S.MenuHome>
            <S.GlobalStyle />
            <S.PhotoBox>
                <S.MyPhoto src={Foto} />
                <S.Retangulo></S.Retangulo>
            </S.PhotoBox>
            <S.TitleHomeBox>
                <S.IntroHome>Vanessa Trajano</S.IntroHome>
                <S.Web>Web Developer</S.Web>
            </S.TitleHomeBox>
        </S.MenuHome>
    )
}