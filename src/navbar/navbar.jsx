import { Link } from 'react-router-dom';
import Carrito from "../carrito/carrito"
import Cart from '../navbar/assets/logo.png'

const Navbar = () => {
    return (
        <nav>
        <h1>Shop Sport Leagues</h1>
        <img src={Cart} alt="" style={{ width: '40%'  }}/>
        <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                 <button className="btn btn-primary mx-2">Botón 1</button>
                <button className="btn btn-primary mx-2">Botón 2</button>
                <button className="btn btn-primary mx-2">Botón 3</button>
            </div>
        </div>
        <Carrito></Carrito>
    </nav>
   
    )
}
export default Navbar