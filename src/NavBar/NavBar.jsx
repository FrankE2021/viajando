import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Context from "../contexto/Context";
import "./navbar.css";

const NavBar = () => {
    const { deslogearse } = useContext(Context);
    const navegacion = useNavigate();
    const [menuAbierto, setMenuAbierto] = useState(false);

    const logout = () => {
        deslogearse();
        navegacion('/login', { replace: true });
    };

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    return (
        <>
            <nav>
                <button className="menu-toggle" onClick={toggleMenu}>&#9776;</button>
                <div className={`nav-links ${menuAbierto ? 'open' : ''}`}>
                    <NavLink to="/cp" onClick={toggleMenu}>Capital y Patagonia</NavLink>
                    <NavLink to="/no" onClick={toggleMenu}>Norte y Este</NavLink>
                    <NavLink to="/viaje" onClick={toggleMenu}>Mi Viaje</NavLink>
                </div>
                <button className="logout" onClick={logout}>Logout</button>
            </nav>
        </>
    );
};

export default NavBar;
