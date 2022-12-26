import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />        
      </header>
      <body>
        <main>
          <ItemListContainer  greeting='Prueba de greeting' color='grey'/>
        </main>
      </body>
    </div>
  );
}

export default App;
