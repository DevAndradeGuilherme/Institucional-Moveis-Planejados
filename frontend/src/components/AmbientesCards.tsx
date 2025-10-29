
import './style.css'
import Ambiente1 from '../assets/cards-ambientes/ambientes1.jpg'
import Ambiente2 from '../assets/cards-ambientes/ambientes2.jpg'
import Ambiente3 from '../assets/cards-ambientes/ambientes3.jpg'
import Ambiente4 from '../assets/cards-ambientes/ambientes4.jpg'
import Ambiente5  from '../assets/cards-ambientes/ambientes5.jpg'

export function AmbientesCards() {
    return (
        <>
            <div className="card-ambiente">
                <img src={Ambiente1} alt="ambiente1" />
                <h1 className="titulo-card-ambiente">Lorem ipsum</h1>
                <p className="descricao-ambiente-card">Proin sed leo nec diam finibus volutpat. Phasellus a mi iaculis, interdum mi ut, tempus tellus.</p>
            </div>
            <div className="card-ambiente">
                <img src={Ambiente2} alt="Ambiente2" />
                <h1 className="titulo-card-ambiente">Lorem ipsum</h1>
                <p className="descricao-ambiente-card">Proin sed leo nec diam finibus volutpat. Phasellus a mi iaculis, interdum mi ut, tempus tellus.</p>
            </div>
            <div className="card-ambiente">
                <img src={Ambiente3} alt="Ambiente3" />
                <h1 className="titulo-card-ambiente">Lorem ipsum</h1>
                <p className="descricao-ambiente-card">Proin sed leo nec diam finibus volutpat. Phasellus a mi iaculis, interdum mi ut, tempus tellus.</p>
            </div>
            <div className="card-ambiente">
                <img src={Ambiente4} alt="Ambiente4" />
                <h1 className="titulo-card-ambiente">Lorem ipsum</h1>
                <p className="descricao-ambiente-card">Proin sed leo nec diam finibus volutpat. Phasellus a mi iaculis, interdum mi ut, tempus tellus.</p>
            </div>
            <div className="card-ambiente">
                <img src={Ambiente5} alt="Ambiente5" />
                <h1 className="titulo-card-ambiente">Lorem ipsum</h1>
                <p className="descricao-ambiente-card">Proin sed leo nec diam finibus volutpat. Phasellus a mi iaculis, interdum mi ut, tempus tellus.</p>
            </div>
        </>
    )
}