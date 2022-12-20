import "../styles/Navbar.css"
import CartWidget from "../Componentes/CartWidget";
import {Link} from "react-router-dom"
import CartView from "./CartView";
const Navbar = () => {
    return(
    <header>
        <div className="logo">
            <CartWidget/>
            <h2>Gamer Shop</h2>
        </div>
        <nav>
            <ul className="nav">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/category/teclado">Teclados</Link></li>
                <li><Link to="/category/mouse">Mouses</Link></li>
                <li><Link to="/category/silla">Sillas</Link></li>
                <li><Link to="/category/monitor">Monitores</Link></li>
                <li><Link to="/category/auriculares">Auriculares</Link></li>
                <CartView/>
            </ul>
        </nav>
    </header>
    );
}

export default Navbar