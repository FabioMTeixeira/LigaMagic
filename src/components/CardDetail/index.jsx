import Card1 from '../../assets/card1.svg'
import Card2 from '../../assets/card2.svg'
import Card3 from '../../assets/card3.svg'
import SetaDireita from '../../assets/setaDireita.svg'
import SetaEsquerda from '../../assets/setaEsquerda.svg'
import './style.css'

function CardDetail() {

    return (
      <div className='container-card'>
          <img className='main-card' src={Card1} alt="Imagem principal do card" />

          <div className=''>
            <img src={SetaEsquerda} alt="Seta para ir para esquerda" />
            <img className='sec-card' src={Card3} alt="Variação do mesmo card" />
            <img className='sec-card' src={Card2} alt="Variação do mesmo card" />
            <img className='sec-card' src={Card1} alt="Variação do mesmo card" />
            <img src={SetaDireita} alt="Seta para ir para esquerda" />
          </div>
      </div>
    )
  }
  
  export default CardDetail