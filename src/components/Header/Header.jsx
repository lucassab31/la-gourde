import { NavLink } from "react-router-dom";
// import style from "./Header.module.scss";

const Header = () => {
    const navStyle = ({isActive}) => isActive ? 'style.activeLink' : null;

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={navStyle}>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/smoothies" className={navStyle}>Smoothies</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/panier" className={navStyle}>Panier ({totalQuantity})</NavLink>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;