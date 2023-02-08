import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './notification/NotificationService';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <AppRoutes/>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
