import './Jumbotron.scss'
function Jumbotron() {

  return (
    <div className='jumbotron'>
      <div className="jumbotron-overlay ">
        <h1 className="text-center">Il tuo posto per parlare</h1>
        <div className="content">
          Che tu faccia parte di un club scolastico, un gruppo di gamer, una  community artistica mondiale o dove trascorrere tempoassieme a un piccolo   gruppo di amici che vuole passare il tempo assieme, Discord rende piu   facile chiacchierare ognigiorno e ritrovarsi più spesso.
        </div>
        <div className="cta">
          <button className="custom-btn btn-xl bg-l-white">
            <i className="fa-solid fa-arrow-right-to-bracket fa-rotate-90"></i> 
            <span>Scarica per Mac</span>
          </button>
          <button className="custom-btn btn-xl bg-l-black">Apri Discord nel tuo browser</button>
        </div>
      </div>
      <div className="jumbotron-img d-flex align-items-end">
        <img src="/img/jumbo.png" alt="" />
      </div>
    </div>
  )
}

export default Jumbotron
