import React from 'react';
import * as S from '../styled';
import Logo from '../../../assets/images/logo/logo.png';

import Item1 from '../../../assets/images/elements/item_1.png';
import Item2 from '../../../assets/images/elements/item_2.png';
import Item3 from '../../../assets/images/elements/item_3.png';
import Item4 from '../../../assets/images/elements/item_4.png';

export default function HomeSectionOne() {
    return (
        <>
            <S.SectionOne>
                <img className="logo" src={ Logo } alt="Logo Moda Styled"/>
                <S.MenuBox>
                    <a href="/produto">Cadastrar produto</a>
                    <a href="/cliente">Cadastrar cliente</a>
                </S.MenuBox>
                <S.ListProductsBox>
                    <S.ListProductsBoxItem>
                        <img className="item" src={ Item1 } alt="Item" />
                        <p className="nomeProduto">Blusa</p>
                        <p className="preco">de R$ 99,00</p>
                        <p className="precoPromo">por R$ 29,90</p>
                    </S.ListProductsBoxItem>
                    <S.ListProductsBoxItem>
                        <img className="item" src={ Item2 } alt="Item" />
                        <p className="nomeProduto">Vestido</p>
                        <p className="preco">de R$ 99,00</p>
                        <p className="precoPromo">por R$ 29,90</p>
                    </S.ListProductsBoxItem>
                    <S.ListProductsBoxItem>
                        <img className="item" src={ Item3 } alt="Item" />
                        <p className="nomeProduto">Camiseta</p>
                        <p className="preco">de R$ 99,00</p>
                        <p className="precoPromo">por R$ 29,90</p>
                    </S.ListProductsBoxItem>
                    <S.ListProductsBoxItem>
                        <img className="item" src={ Item4 } alt="Item" />
                        <p className="nomeProduto">Camiseta</p>
                        <p className="preco">de R$ 99,00</p>
                        <p className="precoPromo">por R$ 29,90</p>
                    </S.ListProductsBoxItem>
                </S.ListProductsBox>
            </S.SectionOne>
        </>
    )
}
