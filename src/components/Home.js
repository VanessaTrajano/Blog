import React from "react";
import * as S from '../Style.js'
import Foto from '../images/euzinha.png'

export default function Home() {
    return (
        <S.MenuHome>
            <S.GlobalStyle />
            <S.Aaa>
                <S.MyPhoto src={Foto} />
                <S.Retangulo></S.Retangulo>
            </S.Aaa>
            <S.IntroHome>Olá! Meu nome é Vanessa. Bem vindo ao meu portfólio!</S.IntroHome>
        </S.MenuHome>
    )
}