import './Main.scss'
function Main() {

  return (
    <main>

      <section className="container d-flex">

            <div className="big-column">
              <img src="/img/item1.svg" alt="item1"/>
            </div>

            <div className="small-column">
              <h2>Un luogo a invito con tutto lo spazio neccessario per parlare</h2>
              <p>
                I server Discord sono organizzati in canali tematici in cui puoi collaborare, condividere o semplicemente parlare della tua giornata senza intasare una chat di gruppo.
              </p>
            </div>

      </section>
      
      {/* wave */}
      <div className="wave">
        <img src="/img/wave.svg" alt="wave"/>
      </div>
      {/* /wave */}

      <section className="bg-gray " >
        <div className="container d-flex">
          <div className="small-column">
            <h2>Dove trovarsi è facile</h2>
            <p>
            Mettiti comodo in un canale vocale quando hai tempo. Gli amici nel tuo server possono vedere che sei lì e unirsi istantaneamente senza dover chiamare.
            </p>
          </div>

          <div className="big-column">
            <img src="/img/item2.svg" alt="item2"/>
          </div>
        </div>
      </section>

      {/* upside-down wave */}
      <div className="upside-down wave">
        <img src="/img/wave.svg" alt="wave"/>
      </div>
      {/* /upside-down wave */}

      <section>
        <div className="container d-flex">
          <div className="big-column">
            <img src="/img/item3.svg" alt="item3"/>
          </div>
          <div className="small-column">
            <h2>Da pochi a un fandom</h2>
            <p>
              Dai inizio a una community con strumenti di   moderazione e accesso ai membri personalizzabile.   Concedi ai membri poteri speciali, crea canali  privati e molto altro.
            </p>
          </div>
        </div>
      </section>

      {/* wave */}
      <div className="wave">
        <img src="/img/wave.svg" alt="wave"/>
      </div>
      {/* /wave */}

      <section className="bg-gray pb-5 ">
        <div className="container d-flex flex-column align-items-center pb-5">
          
          <h2>Tecnologia affidabile per tenersi in contatto</h2>
          <p className="w-75">Video e audio a bassa latenza ti faranno sentire come se foste tutti nella stessa stanza. Fai ciao in video, guarda gli amici giocare in streaming, o riunitevi in una sessione di disegno con la condivisione schermo.</p>
          
          <div>
            <img src="/img/item4-big.svg" alt="item4-big"/>
          </div>

          <div className="cta d-flex flex-column align-items-center mb-5 ">
            <img src="/img/stars.svg" alt="" />
            <div className="cta-overlay d-flex flex-column align-items-center">
              <h2>Pronto per iniziare il tuo viaggio?</h2>
              <button className="custom-btn btn-xl bg-purple">
                <i className="fa-solid fa-arrow-right-to-bracket fa-rotate-90 me-2"></i> 
                <span>Scarica per Mac</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
