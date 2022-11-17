import NavBar from "../styles/Navbar.css"
import CartWidget from "../Componentes/CartWidget";
const Navbar = () => {
    return(
    <header>
        <div className="logo">
            <CartWidget/>
            <h2>Gamer Shop</h2>
        </div>
        <nav>
            <ul className="nav">
                <li><a href="">Inicio</a></li>
                <li><a href="">Productos</a></li>
                <li><a href="">Servicios</a></li>
                <li><a href="">Contactos</a></li>
            </ul>
        </nav>
    </header>
    );
}

export default Navbar