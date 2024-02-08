import LetterC from '../../assets/letterC.svg'
import SetaBaixo from '../../assets/setaBaixo.svg'
import Point from '../../assets/point.svg'
import Coracao from '../../assets/coracao.svg'
import Interrogacao from '../../assets/interrogacao.svg'
import Mais from '../../assets/plus.svg'
import Menos from '../../assets/menos.svg'
import Config from '../../assets/config.svg'
import './style.css'
import { useState } from 'react'

function CardInfo() {
  const [contador, setContador] = useState(1)

  const aumentarContador = () => {
    setContador(contador + 1)
  }

  const diminuirContador = () => {
    if (contador <= 1) {
      return setContador(1)
    }
    setContador(contador - 1)
  }

  return (
    <div className='card-container'>
      <div>
        <header>
          <h4 className='separated'>Home</h4>
          <h4 className='separated'>Magic : The Gathering</h4>
          <h4 className='separated'>Busca</h4>
          <h4>Bazar - Lista de Desejos</h4>
        </header>
        <section>
          <div>
            <img src={LetterC} alt="Letra C" />
            <h4 className='dark-letter'>#045</h4>
            <h4>Dominaria Remastered</h4>
          </div>
          <button>
            DMR
            <img src={SetaBaixo} alt="Seta para baixo" />
          </button>
        </section>
        <article>
          <div>
            <h2>Contramágica</h2>
            <div className='itens-card'>
              <img src={Coracao} alt="Desenho de coração" />
              <button>
                <img src={Point} alt="Três pontos" />
              </button>
            </div>
          </div>

          <h3>CounterSpell</h3>
        </article>
      </div>

      <div className='retangle'>
        <div className='alignament'>
          <h2>Lista de Compras</h2>
          <button>
            <img src={Interrogacao} alt="Ponto de interrogação" />
          </button>
        </div>
        <h3>Add a carta aqui e deixe que a Liga calcule o melhor preço para você!</h3>
        <div className='alignament-sell'>
          <div className='alignament-sell number-space'>
            <button
              onClick={aumentarContador}
            >
              <img src={Mais} alt="Sinal de mais" />
            </button>
            <h3>{contador}</h3>
            <button
              onClick={diminuirContador}
            >
              <img src={Menos} alt="Sinal de Menos" />
            </button>
          </div>
          <button className='btn-borders-shadows'>
            <img src={Config} alt="Aba de configuração" />
          </button>
          <button className='alignament-sell'>
            <img src={Mais} alt="Sinal de mais" />
            <h3>ADICIONAR NA LISTA</h3>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default CardInfo