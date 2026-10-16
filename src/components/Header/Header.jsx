import './Header.css';

function Header() {

    return (
        <nav className='navbar'>
            <div className='navbar-logo-container'>
                <span>Ann</span> 
                <span>Estudio Creativo</span>
            </div>
            <ul className='navbar-sections-container'>
                <li className="navbar-sections">Inicio</li>
                <li className="navbar-sections">Estudio</li>
                <li className="navbar-sections">Servicios</li>
                <li className="navbar-sections">Ann Systems</li>
                <li className="navbar-sections">Trabajos</li>
                <li className="navbar-sections">Hablemos</li>
            </ul>
        </nav>
    )
}

export default Header;