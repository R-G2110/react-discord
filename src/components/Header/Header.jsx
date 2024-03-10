import './Header.scss'
function Header() {
  

  return (
    <header>
      <div className="container h-100 d-flex justify-content-between align-items-center  ">
        <div className="logo">
          <img src="/img/logo.svg" alt="LOGO"/>
        </div>
        <div className="nav-menu">
          <nav>
            <ul className="d-flex list-unstyled">
              <li className="mx-3">Scarica</li>
              <li className="mx-3">Perché Discord</li>
              <li className="mx-3">Nitro</li>
              <li className="mx-3">Sicurezza</li>
              <li className="mx-3">Assistenza</li>
            </ul>
          </nav>
        </div>
        <button className="custom-btn btn-sm bg-l-white">Accedi</button>
      </div>
    </header>
  )
}

export default Header
