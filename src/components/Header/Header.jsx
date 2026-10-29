import { useState, useEffect } from "react";
import "./Header.css";
import { HiOutlineMenu } from "react-icons/hi";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuHamburguesa, setMenuHamburguesa] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-logo-container">
                <img
                    src="/logo.png"
                    className="nav-img-logo"
                    alt="Logo Ann Estudio Creativo"
                />
            </div>

            <button className="menu-button" onClick={() => setMenuHamburguesa(!menuHamburguesa)}>
                <HiOutlineMenu size={20} />
            </button>

            <ul className={`navbar-sections-container ${menuHamburguesa ? 'open' : ''}`}>
                <li className="li">
                    <a href="#inicio" className="navbar-sections"> Inicio </a>
                </li>
                <li className="li">
                    <a href="#estudio" className="navbar-sections"> Estudio </a>
                </li>
                <li className="li">
                    <a href="#servicios" className="navbar-sections"> Servicios </a>
                </li>
                <li className="li">
                    <a href="#systems" className="navbar-sections">Ann Systems</a>
                </li>
                <li className="li">
                    <a href="#trabajos" className="navbar-sections">Trabajos</a>
                </li>
                <li className="li">
                    <a href="#contacto" className="navbar-sections">Contacto</a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;