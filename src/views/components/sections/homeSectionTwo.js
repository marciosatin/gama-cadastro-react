import React, { useState } from 'react';
import * as S from '../styled';
import Logo from '../../../assets/images/logo/logo.png';
import Github from '../../../assets/images/elements/github.png';

export default function HomeSectionTwo() {
    const [ usuario,  setUsuario ] = useState('');
    function handleSubmmit() {

        if (!usuario) {
            return;
        }

        let emailsLocal = localStorage.getItem('emails');
        let emails = [usuario];
        if (emailsLocal) {
            emails = JSON.parse(emailsLocal);
            const found = emails.find(element => element === usuario);
            if (!found) {
                emails.push(usuario);
            }
        }

        localStorage.setItem('emails', JSON.stringify(emails));
     }
    return (
        <>
            <S.SectionTwo>
                <S.InputNewsBox>
                        <input value={ usuario } onChange={e => setUsuario(e.target.value)} className="news" placeholder="Informe seu e-mail para aproveitar mais ofertas" required/>
                        <button onClick={ handleSubmmit } type="button">APROVEITAR</button>
                </S.InputNewsBox>
                <img className="logo" src={ Logo } alt="Logo Moda Styled"/>
                <S.Footer>
                    <p>
                        Desenvolvido por Marcio Satin 
                    </p>
                    <a href="https://github.com/marciosatin/gama-react-landing-page">
                        <img src={ Github } alt="Github"/>
                    </a>
                </S.Footer>
            </S.SectionTwo>
        </>
    )
}
