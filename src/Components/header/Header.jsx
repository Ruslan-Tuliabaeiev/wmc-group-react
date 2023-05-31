import {BoxFuter, ButtonTelephone, ButtonViber} from "./Header.styled";
import Viber from "../icon/viber-svgrepo-com.svg";
import Telephony from "../icon/icons8-phone.svg";
import styles  from './style.module.css'
export const Header = () => {

    return (
<BoxFuter>
<ButtonViber>
    <img src={Viber} alt="Viber Logo"  width="40" height="40" className={styles.icon} />
</ButtonViber>

    <ButtonTelephone>
        <img src={Telephony} alt="Viber Logo"  width="40" height="40"   className={styles.icon} />
      <span className={styles .number}>098-891-11-11</span>
    </ButtonTelephone>
</BoxFuter>
    )
}




