import Nav from "../Nav/Nav";
import logo from "../../images/logo.svg";
import style from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';

import { useStore } from "contexts/store.context";
import { observer } from 'mobx-react-lite';

const Header = observer(() => {
    const {cart: {totalQuantity}} = useStore()

    let Contentbadges = "";
    if (totalQuantity > 0) {
        Contentbadges = <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalQuantity}
            <span className="visually-hidden">unread messages</span>
        </span>
    }
    return (
        <header>
            <nav className="navbar fixed-top bg-white">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Logo La Gourde" />
                    </Link>
                    <ul className="navbar-nav flex-row align-items-center">
                        <li>
                            <NavLink to="/panier" className="position-relative">
                                <Icon.Bag className={style.bag} />
                                {Contentbadges}
                            </NavLink>
                        </li>
                        <li className="ms-3">
                            <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </li>
                    </ul>
                    <div className="offcanvas offcanvas-end text-bg-dark"  id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-body d-flex flex-column align-items-end">
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            <ul className="navbar-nav align-items-end flex-grow-1 w-100 p-4">
                                <Nav strClass="nav-item"/>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
});

export default Header;