import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>      
        <Navbar /> 
        <Routes>
          <Route path='/' element={<ItemListContainer  greeting='Nuestro catalogo' color='grey'/>}/>           
          <Route path='/detail/:productId' element={<ItemDetailContainer  greeting='Nuestro catalogo' color='grey'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
