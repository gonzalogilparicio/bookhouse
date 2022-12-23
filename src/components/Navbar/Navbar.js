import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div>
          <a className="navbar-brand" href="#">
            <img src="./assets/img/logo.png" />
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Libros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Locales
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
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