import { NavLink } from "react-router-dom";
import style from "./Nav.module.scss";

const Nav = (props) => {

    const {strClass} = props; 

    const navStyle = ({isActive}) => isActive ? style.activeLink : null;

    return (
       <>
        <li className={strClass}>
            <NavLink to="/" className={navStyle}>Accueil</NavLink>
        </li>
        <li className={strClass}>
            <NavLink to="/smoothies" className={navStyle}>Smoothies</NavLink>
        </li>
        <li className={strClass}>
            <NavLink to="/panier" className={navStyle}>Panier</NavLink>
        </li>
       </>
    )
}

export default Nav;