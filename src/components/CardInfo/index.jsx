import LetterC from '../../assets/letterC.svg'
import SetaBaixo from '../../assets/setaBaixo.svg'
import './style.css'

function CardInfo() {

  return (
    <div>
      <div>
        <header>
          <h3 className='separated'>Home</h3>
          <h3 className='separated'>Magic : The Gathering</h3>
          <h3 className='separated'>Busca</h3>
          <h3>Bazar - Lista de Desejos</h3>
        </header>
        <section>
          <img src={LetterC} alt="Letra C" />
          <h3>#045</h3>
          <h3>Dominaria Remastered</h3>
          <button>
            DMR
            <img src={SetaBaixo} alt="Seta para baixo" />
          </button>
        </section>
        <details>
          <div>
            <h2>Contramágica</h2>
            <div>
              <img src="" alt="" />
              <button>
                <img src="" alt="" />
              </button>
            </div>
          </div>

          <h3>CounterSpell</h3>
        </details>

      </div>
    </div>
  )
}

export default CardInfo