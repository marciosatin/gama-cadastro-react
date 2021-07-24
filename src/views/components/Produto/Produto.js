import React, { useState } from 'react';
import * as S from '../styled';
import CadastroSectionOne from '../sections/cadastroSectionOne';

export default function Cliente() {
    const [nome, setNome] = useState('');
    const [ref, setRef] = useState('');
    const [valor, setValor] = useState('');
    const [valorPromo, setValorPromo] = useState('');

    const handleSubmmit = (event) => {
        event.preventDefault();
        if (!nome || !ref || !valor || !valorPromo) {
            return;
        }

        let produto = {
            nome: nome,
            ref: ref,
            valor: valor,
            valorPromo: valorPromo
        };
        let produtos = [produto];
        localStorage.setItem('produtos', JSON.stringify(produtos));
    }

    const handleNomeChange = (event) => setNome(event.target.value);
    const handleRefChange = (event) => setRef(event.target.value);
    const handleValorChange = (event) => setValor(event.target.value);
    const handleValorPromoChange = (event) => setValorPromo(event.target.value);

    return (
        <>
            <CadastroSectionOne />
            <S.FormContainer>
                <h1>Cadastrar produto</h1>
                <form onSubmit={handleSubmmit} method='POST'>
                    <fieldset>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" value={nome} onChange={handleNomeChange} id="nome" autoComplete="Nome" />
                        <label htmlFor="ref">Referência</label>
                        <input type="text" id="ref" value={ref} onChange={handleRefChange} autoComplete="ref" />
                        <label htmlFor="valor">Valor</label>
                        <input type="number" min="0.00" step="0.01"  id="valor" value={valor} onChange={handleValorChange} autoComplete="valor" />
                        <label htmlFor="valorPromo">Valor promocional</label>
                        <input type="number" min="0.00" step="0.01" id="valorPromo" value={valorPromo} onChange={handleValorPromoChange} autoComplete="valor" />
                    </fieldset>
                    <button type="submit">Salvar</button>
                </form>
            </S.FormContainer>
        </>
    )
}