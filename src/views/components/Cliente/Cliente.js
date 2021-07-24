import React, { useState } from 'react';
import * as S from '../styled';
import CadastroSectionOne from '../sections/cadastroSectionOne';

export default function Cliente() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [cep, setCep] = useState('');

    const handleSubmmit = (event) => {
        event.preventDefault();
        if (!nome || !email || !password) {
            return;
        }
        if (!endereco || !numero || !cep) {
            return;
        }

        let client = {
            nome: nome,
            email: email,
            password: password,
            endereco: {
                endereco: endereco,
                numero: numero,
                cep: cep
            }
        };
        let clientes = [client];
        localStorage.setItem('clientes', JSON.stringify(clientes));
    }

    const handleNomeChange = (event) => setNome(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const handleEnderecoChange = (event) => setEndereco(event.target.value);
    const handleNumeroChange = (event) => setNumero(event.target.value);
    const handleCepChange = (event) => setCep(event.target.value);

    return (
        <>
            <CadastroSectionOne />
            <S.FormContainer>
                <h1>Cadastrar cliente</h1>
                <form onSubmit={handleSubmmit} method='POST'>
                    <fieldset>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" value={nome} onChange={handleNomeChange} id="nome" autoComplete="Nome" />
                        <label htmlFor="email">E-mail</label>
                        <input type="text" id="email" value={email} onChange={handleEmailChange} autoComplete="Email" />
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} autoComplete="Password" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="endereco">Endereço</label>
                        <input type="text" value={endereco} onChange={handleEnderecoChange} id="endereco" autoComplete="endereço" />
                        <label htmlFor="numero">Número</label>
                        <input type="text" value={numero} id="numero" onChange={handleNumeroChange} autoComplete="numero" />
                        <label htmlFor="cep">Cep</label>
                        <input type="text" value={cep} id="cep" onChange={handleCepChange} autoComplete="cep" />
                    </fieldset>
                    <button type="submit">Salvar</button>
                </form>
            </S.FormContainer>
        </>
    )
}