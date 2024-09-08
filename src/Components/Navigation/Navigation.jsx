import { NavLink } from "react-router-dom";
import { NavigationBlock, NavigationBox, NavigationItem, Logotype} from "./Navigation.styled";
// import { LogotypeLogo} from "../logotype/logotype";

export const Navigation = () => (
    <NavigationBlock>
       {/*<Logotype> <LogotypeLogo/></Logotype>*/}
        <Logotype><h1><span>WMK</span><span>group</span></h1></Logotype>
        <NavigationBox>
            <NavLink  to="/" exact={true.toString()} > <NavigationItem> Home </NavigationItem></NavLink>
            <NavLink  to="/second" > <NavigationItem>Second</NavigationItem></NavLink>
            <NavLink  to="/navigate" ><NavigationItem>Navigate</NavigationItem></NavLink>
        </NavigationBox>
    </NavigationBlock>
)
