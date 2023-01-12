import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
    return (
      <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div>
          <Link to='/' className="navbar-brand">
            <img src="./assets/img/logo.png" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          ></div>
          </div>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'nav-link'}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/locales' className={({ isActive }) => isActive ? 'ActiveOption' : 'nav-link'}>                
                  Locales
                </NavLink>                
              </li>
              <li className="nav-item">
                <NavLink to='/franquicias' className={({ isActive }) => isActive ? 'ActiveOption' : 'nav-link'}>                
                  Franquicias
                </NavLink>                
              </li>
              <li className="nav-item">
                <NavLink to='/contacto' className={({ isActive }) => isActive ? 'ActiveOption' : 'nav-link'}>                
                  Contacto
                </NavLink>                
              </li>
            </ul>
          </div>
        
        <div>
          <CartWidget />
        </div>
      </div>
    </nav>
    
    )
}

export default Navbar