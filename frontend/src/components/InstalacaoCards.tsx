import './style.css'
import Aprovado from '../assets/cards-instalacao/aprove.svg'
import Duvida from '../assets/cards-instalacao/question.svg'

export function InstalacaoCards() {

    return (
        <>
            <div className="cards-instalacao">
                <div className="card1-instalacao">
                    <img src={Aprovado} alt="Aprovado"/>
                    <h1 className="titulo-card-instalacao">Lorem ipsum dolor sit amet</h1>
                    <p className="descricao-card-instalacao">Proin sed leo nec diam finibus volutpat. Phasellus a mi iaculis, interdum mi ut, tempus tellus.</p>
                </div>
                <div className="card2-instalacao">
                    <img src={Duvida} alt="Duvida"/>
                    <h1 className="titulo-card-instalacao">Lorem ipsum dolor sit amet</h1>
                    <p className="descricao-card-instalacao">Proin sed leo nec diam finibus volutpat. Phasellus a mi iaculis, interdum mi ut, tempus tellus.</p>
                </div>
            </div>
        </>
    )
}