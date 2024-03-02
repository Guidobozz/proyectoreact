import Carrito from "../carrito/carrito"
import Cart from '../navbar/assets/logo.png'

const Navbar = () => {
    return (
        <nav>
            <h1>Shop Sport Leagues</h1>
            <img src={Cart} alt="" style={{ width: '40%'  }}/>
        <div>
            <button className="btn btn-dark btn-block mx-2" >NBA</button>
            <button className="btn btn-dark btn-block mx-2"  >MLB</button>
            <button className="btn btn-dark btn-block mx-2" >NFL</button>
         </div>
         <Carrito></Carrito>
         </nav>
   
    )
}
export default Navbar