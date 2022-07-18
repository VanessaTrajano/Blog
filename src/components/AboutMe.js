import React from "react";
import * as S from '../Style.js'
import Smile from '../images/smile.png'

export default function AboutMe() {
    return (
        <S.AboutBox>
            <S.TitleAboutBox>
                <h2>About Me</h2>
                <S.SmileImage src={Smile} />
            </S.TitleAboutBox>
            <S.TextBox>
                <p>Eu sou Vanessa Trajano, uma desenvolvedora web que anda muito interessada no mundo da tecnologia nos últimos tempos.</p>
                <p>Tenho 17 anos e vivo entre minha cidade natal e a cidade que eu estudo, Santana do Deserto e Juiz de Fora, respectivamente.</p>
                <p>Estou cursando o 3° ano do ensino médio e técnico integrado em Desenvolvimento de Sistemas no Instituto Federal do Sudeste de Minas Gerais.</p>
                <p>Estou sempre tentando aprender mais sobre o que é interessante para mim e adoro adquirir conhecimentos novos.</p>
            </S.TextBox>
        </S.AboutBox>
    )
}