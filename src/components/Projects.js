import React from "react";
import * as S from '../Style.js'

export default function Projects(){
    return(
        <S.ProjectsContainer>
            <h1>Projects</h1>
            <S.PeojectsBox>
                <S.ProjectsLinkRecipes target='blank' href="https://recipes-vn.netlify.app"><p>Recipes</p></S.ProjectsLinkRecipes>
                <S.ProjectsLinkVanflix target='blank' href="https://van-flix.netlify.app"><p>Vanflix</p></S.ProjectsLinkVanflix>
                <S.ProjectsLinkTodoFlix target='blank' href="https://van-todoflix.netlify.app"><p>Todoflix</p></S.ProjectsLinkTodoFlix>
                <S.ProjectsLinkDogs target='blank' href="https://random-happy-dogs.netlify.app"><p>Random Happy Dogs</p></S.ProjectsLinkDogs>
            </S.PeojectsBox>
        </S.ProjectsContainer>
    )
}