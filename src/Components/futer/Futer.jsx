import {FooterConteiner, FooterLogo, FooterParagraph} from "./Futer.styled";
//import styles  from './futer.module.css'

export  const Footer = () => {


    return (
        <>
        <FooterConteiner>
            <FooterParagraph><FooterLogo>WMKgroup</FooterLogo></FooterParagraph>
            <FooterParagraph>Відділ замовлень</FooterParagraph>
            <FooterParagraph>Дніпро</FooterParagraph>
            <FooterParagraph>info@example.com</FooterParagraph>
            <FooterParagraph><a>+38 099 111 11 11</a></FooterParagraph>
        </FooterConteiner>
        </>

    )
}

