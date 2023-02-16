import { NavLink } from "react-router-dom";
import style from "./Nav.module.scss";
import * as Icon from "react-bootstrap-icons";

const Nav = (props) => {

    const {strClass} = props; 

    const navStyle = ({isActive}) => isActive ? style.activeLink : null;

    return (
       <>
        <li className={strClass}>
            <Icon.House className="ms-2 text-primary"/>
            <NavLink to="/" className={navStyle}>Accueil</NavLink>
           
        </li>
        <li className={strClass}>
            <Icon.CupStraw className="ms-2 text-primary"/>
            <NavLink to="/smoothies" className={navStyle}>Smoothies</NavLink>
        </li>
        <li className={strClass}>
            <Icon.Pencil className="ms-2 text-primary"/>
            <NavLink to="/personnaliser" className={navStyle}>Création</NavLink>
        </li>
        <li className={strClass}>
            <Icon.Cart className="ms-2 text-primary"/>
            <NavLink to="/panier" className={navStyle}>Panier</NavLink>
        </li>
       </>
    )
}

export default Nav;