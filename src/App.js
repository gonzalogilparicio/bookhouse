import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>      
        <Navbar /> 
        <ItemListContainer  greeting='Prueba de greeting' color='grey'/>        
      </BrowserRouter>
    </div>
  );
}

export default App;
