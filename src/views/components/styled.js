import styled from "styled-components";
import SectionOneBg from "../../assets/images/background/section-one-background.png";
import SectionTwoBg from "../../assets/images/background/section-two-background.png";

export const SectionOne = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-image: url('${SectionOneBg}');
    background-size: cover;
    height: 100vh;
    
    & img.logo {
        display: block;
        width: 40%;
        height: 200px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
    }
    
    @media (min-width: 1200px) {
        width: 1200px;
        margin: 0 auto;
    }
    
    @media (max-width: 600px) {
        width: 100%;
        margin 0;
        height: 100%;

        & img.logo {
            height: auto;
        }
    }
`

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 50vh;

    & h1 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & form {
        width: 100%;

        & label {
            display: block;
            margin: 8px 0 8px 0;
        }

        & fieldset {
            border: 0;
        }

        & input {
            width: 99%;
            padding: 10px 0 10px 5px;
            border: 1px solid silver;
        }

        & button {
            width: 15%;
            margin-left: 15px;
            padding: 15px;
            color: #FFF;
            background-color: green;
            border: 0;
            border-radius: 3px;
            font-size: 1em;
            cursor: pointer;
        }
    }

    @media (min-width: 1200px) {
        width: 1200px;
        margin: 0 auto;
    }
`

export const MenuBox = styled.h3`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    height: 70px;
    background-color: #DC4654;
    color: #D1E7EB;
    font-family: Rasa;
    font-style: normal;
    font-size: 1.7em;
    font-weight: 700;
    margin: 30px 30px;

    & a {
        color: #FFF;
        text-decoration: none;
        padding: 5px;

        &:hover {
            color: #000;
        }
    }

    @media (max-width: 600px) {
        font-size: 1.5em;
        padding: 25px;
    }

`

export const ListProductsBox = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #FFF;
    width: 100%;
    transition: all .5s;

    @media (max-width: 600px) {
        flex-direction: column;
    }

`

export const ListProductsBoxItem = styled.div`
    display: block;
    width: 22%;
    text-align: center;
    margin-top: 8px;
    background-color: #F2F8FA;
    padding-bottom: 10px;
    cursor: pointer;

    & img.item {
        max-width: 100%;
    }

    & p {
        font-family: sans-serif;
        font-size: 1.5em;
        font-weight: 700;
        margin: 0;
    }
    
    & p.preco {
        color: #DC4654;
        font-size: 1em;
        text-decoration: line-through;
        margin-top: 8px;
    }
    
    & p.precoPromo {
        color: #027646;
        font-size: 1em;
    }

    @media (max-width: 600px) {
        width: 100%;

        & p {
            font-size: 2.5em;
        }

        & p.preco {
            font-size: 1em;
        }
        
        & p.precoPromo {
            font-size: 1.5em;
        }
        
    }
    `

export const SectionTwo = styled.section`
    display: flex;
    align-items: center;
    margin-top: 30px;
    justify-content: flex-end;
    flex-direction: column;
    flex-wrap: wrap;
    background-image: url('${SectionTwoBg}');
    background-size: cover;
    height: 500px;
    
    & img.logo {
        display: block;
        width: 40%;
        height: auto;
        margin: 15px auto -50px auto;
        z-index: 1;
    }

    @media (min-width: 1200px) {
        width: 1200px;
        margin: 0 auto;
    }
    
    @media (max-width: 600px) {
        width: 100%;
        margin 0;
        margin-top: 10px;
    }
`
export const InputNewsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #DC4654;
    width: 80%;
    max-width: 730px;

    & input {
        margin: 5px;
        padding: 10px;
        width: 80%;
        border: 1px solid #FFF;
    }

    & button {
        padding: 10px;
        margin: 5px 5px 5px 0;
        background-color: #027646;
        color: #FFF;
        font-weight: bold;
        border: 1px solid #027646;
        cursor: pointer;
    }
`
export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    width: 100%;
    height: 100px;

    & p {
        margin-top: 60px;
        margin-right: 10px;
        color: #68696B;
    }

    & img {
        margin-top: 40px;
    }

    @media (max-width: 600px) {
        height: auto;
    }
`
