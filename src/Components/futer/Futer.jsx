import {FooterConteiner} from "./Futer.styled";
import styles  from './futer.module.css'

export  const Footer = () => {


    return (
        <>
        <FooterConteiner>
            <p  className={styles.footerLogo} ><span>WMK</span><span>group</span></p>
            <ul  >
                <li  className={styles.footerListItem}>Відділ замовлень</li>

                <li className={styles.footerListItem}>Дніпро</li>

                <li className={styles.footerListItem}>info@example.com</li>

                <li className={styles.footerListItem} >+38 099 111 11 11</li>
            </ul>
        </FooterConteiner>
        </>

    )
}

