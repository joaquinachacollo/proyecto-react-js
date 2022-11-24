import NavBar from "../styles/Navbar.css"
import CartWidget from "../Componentes/CartWidget";
import {Link} from "react-router-dom"
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
                {/* <li><Link to="/item/">item</Link></li> */}
                
                {/* <li><a href="">Productos</a></li>
                <li><a href="">Servicios</a></li>
                <li><a href="">Contactos</a></li> */}
            </ul>
        </nav>
    </header>
    );
}

export default Navbar