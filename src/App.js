import Navbar from './navbar/navbar';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Itemlistcontainer from './ItemListContainer/itemlistcontainer';
import Carrito from './carrito/carrito';
import cardsData from './ItemListContainer/cardsdata';
import NBA from './ItemListContainer/nba'; 
import MLB from './ItemListContainer/mlb';
import NFL from './ItemListContainer/nfl';





function App() {
  return (
    
    <div className="App">
     <BrowserRouter>
      <div className="App">
        <Link to='/NBA'>NBA</Link>
        <Link to='/MLB'>MLB</Link>
        <Link to='/NFL'>NFL</Link>
        <Navbar />
        <Switch>
          <Route path='/NBA'>
            <NBA />
          </Route>
          <Route path='/MLB'>
            <MLB />
          </Route>
          <Route path='/NFL'>
            <NFL />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    </div>
 
  );
}

export default App;
