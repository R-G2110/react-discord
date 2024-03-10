import './Footer.scss'
function Footer() {
  

  return (
    <footer>
      <div className="container">
        <div className="upper-footer py-5 d-flex justify-content-between">
          <div className="social col-4">
            
            <h3>IL tuo posto per parlare</h3>
            <span className="flag">
              <img src="/img/ita.png" alt="Italia"/>
            </span>
            <span>Italiano &#x2C5;</span>
            <div>
              
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-tiktok"></i>
              <i className="fa-brands fa-youtube"></i>
              
            </div>
          </div>

          <div className="menu col-8 row">
            <div className="col-2 mx-4">
              <h4>Prodotto</h4>
              <nav>
                <ul>
                  <li><a href="#">Scarica</a></li>
                  <li><a href="#">Perchè Discord</a></li>
                  <li><a href="#">Nitro</a></li>
                  <li><a href="#">Sicurezza</a></li>
                  <li><a href="#">Assistenza</a></li>
                </ul>
              </nav>
              
            </div>
            <div className="col-2 mx-4">
              <h4>Compagnia</h4>
              <nav>
                <ul>
                  <li><a href="#">Chi siamo</a></li>
                  <li><a href="#">Lavora con noi</a></li>
                  <li><a href="#">Marchio</a></li>
                  <li><a href="#">Redazione</a></li>
                  <li><a href="#">Negozio</a></li>
                </ul>
              </nav>
            </div>
            <div className="col-2 mx-4">
              <h4>Risorse</h4>
              <nav>
                <ul>
                  <li><a href="#">Scarica</a></li>
                  <li><a href="#">Perchè Discord</a></li>
                  <li><a href="#">Nitro</a></li>
                  <li><a href="#">Sicurezza</a></li>
                  <li><a href="#">Assistenza</a></li>
                  <li><a href="#">Scarica</a></li>
                  <li><a href="#">Perchè Discord</a></li>
                  <li><a href="#">Nitro</a></li>
                  <li><a href="#">Sicurezza</a></li>
                  <li><a href="#">Assistenza</a></li>
                </ul>
              </nav>
            </div>
            <div className="col-2 mx-4">
              <h4>Prodotto</h4>
              <nav>
                <ul>
                  <li><a href="#">Scarica</a></li>
                  <li><a href="#">Perchè Discord</a></li>
                  <li><a href="#">Nitro</a></li>
                  <li><a href="#">Sicurezza</a></li>
                  <li><a href="#">Assistenza</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="lower-footer d-flex justify-content-between align-items-center pt-2">
          <div className="logo">
            <img src="/img/logo.svg" alt="LOGO"/>
          </div>
          <button className="custom-btn btn-sm bg-purple">REGISTRATI</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
