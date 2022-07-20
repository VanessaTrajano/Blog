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
                <p>I’m Vanessa Trajano, a web developer who is very interested in the world of technology in recent times.</p>
                <p>I’m 17 years old and I live between my hometown and the city I study, Santana do Deserto and Juiz de Fora, respectively.</p>
                <p>I am attending the 3rd year of high school and integrated technician in Systems Development at the Instituto Federal do Sudeste de Minas Gerais.</p>
                <p>I’m always trying to learn more about what’s interesting to me and I love to acquire new knowledge.</p>
            </S.TextBox>
        </S.AboutBox>
    )
}