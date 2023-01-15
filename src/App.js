import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Locales from './components/Locales/Locales';
import Franquicias from './components/Franquicias/Franquicias';
import Contacto from './components/Contacto/Contacto';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Nuestro catálogo' color='black' />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Nuestro catálogo' color='black' />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer greeting='Nuestro catálogo' color='grey' />} />
          <Route path='/locales' element={<Locales />} />
          <Route path='/franquicias' element={<Franquicias />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
