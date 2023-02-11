import Nav from "../Nav/Nav";
import logo from "../../images/logo.svg";
import style from "./Header.module.scss";

const Header = () => {
    return (
        <header>
            <nav className="navbar fixed-top bg-white">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo La Gourde" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
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
};

export default Header;