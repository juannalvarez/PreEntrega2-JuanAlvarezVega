// hooks
import { useState } from "react";
// styles
import "./NavBar.css"
// components
import CartWidget from "./CartWidget/CartWidget";
// routing
import { Link } from "react-router-dom";

function NavBar() {
    const [hamburgerLine, setHamburgerLine] = useState("line unclicked");
    const [navBar, setNavBar] = useState("nav-bar hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const updateMenu = () => {
        if (!isMenuClicked) {
            setHamburgerLine("line clicked");
            setNavBar("nav-bar visible");
        } else {
            setHamburgerLine("line unclicked");
            setNavBar("nav-bar hidden");
        }
        setIsMenuClicked(!isMenuClicked);
    }

    return <>
        <div className="header-container">
            <div className="logo"><Link to="/">Intrepida Tienda</Link></div>
            <div className="hamburger" onClick={updateMenu}>
                <div className={hamburgerLine}></div>
                <div className={hamburgerLine}></div>
                <div className={hamburgerLine}></div>
            </div>
            <nav className={navBar}>
                <ul className="nav-bar-list">
                    <li className="nav-bar-item">
                        <Link onClick={updateMenu} className="nav-bar-link" to="/">Inicio</Link>
                    </li>
                    <li className="nav-bar-item">
                        <Link onClick={updateMenu} className="nav-bar-link" to="/category">Productos</Link>
                    </li>
                    <li className="nav-bar-item">
                        <Link onClick={updateMenu} className="nav-bar-link" to="/nosotros">Nosotros</Link>
                    </li>
                </ul>
            </nav>
            <Link className="nav-bar-link nav-bar-cart-widget-link" to="/carrito"><CartWidget /></Link>
        </div>
        <div className="solid-line"></div>
    </>
}

export default NavBar;