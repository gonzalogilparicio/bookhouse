import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <Navbar />        
      </header>
      <body>
        <main>
          <ItemListContainer  greeting='Prueba de greeting' color='grey'/>
        </main>
      </body>
      </BrowserRouter>
    </div>
  );
}

export default App;
