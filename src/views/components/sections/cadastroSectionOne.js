import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../styled';
import Logo from '../../../assets/images/logo/logo.png';

export default function CadastroSectionOne() {
    return (
        <>
            <S.SectionOne>
                <img className="logo" src={ Logo } alt="Logo Moda Styled"/>
                <S.MenuBox>
                    <Link to="/">Home</Link>
                </S.MenuBox>
            </S.SectionOne>
        </>
    )
}
