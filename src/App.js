import Navbar from './navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Itemlistcontainer from './ItemListContainer/itemlistcontainer';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Itemlistcontainer greeting={'Bienvenidos'}  />
    </div>
  );
}

export default App;
