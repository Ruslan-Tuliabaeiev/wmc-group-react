
import { NavLink } from "react-router-dom";
import {Logotype, NavigationBox, NavigationItem} from "./Navigation.styled";


export const Navigation = () => (
    <nav>
        <Logotype><h1><span>WMK</span><span>group</span></h1></Logotype>
        <NavigationBox>
            <NavLink  to="/" exact={true.toString()} > <NavigationItem> Home </NavigationItem></NavLink>

            <NavLink  to="/second" > <NavigationItem>=Second</NavigationItem></NavLink>


            <NavLink  to="/navigate" ><NavigationItem>==Navigate</NavigationItem></NavLink>

    </NavigationBox>
    </nav>
)




