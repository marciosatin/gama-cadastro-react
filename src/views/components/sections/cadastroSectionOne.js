import React from 'react';
import * as S from '../styled';
import Logo from '../../../assets/images/logo/logo.png';

export default function CadastroSectionOne() {
    return (
        <>
            <S.SectionOne>
                <img className="logo" src={ Logo } alt="Logo Moda Styled"/>
                <S.MenuBox>
                    <a href="/">Home</a>
                </S.MenuBox>
            </S.SectionOne>
        </>
    )
}
