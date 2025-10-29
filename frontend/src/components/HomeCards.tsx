import './style.css'
import Handshake from '../assets/cards/handshake.svg'
import Check from '../assets/cards/check.svg'
import Trophy from '../assets/cards/trophy.svg'

export function HomeCards() {
    return (
        <>
            <div className="home-cards">
                <div className="card">
                        <img src={Trophy} alt="icon-trofeu" width={60}/>
                        <p className="texto-principal-card">Lorem ipsum dolor sit amet</p>
                        <p className="texto-secundario-card">Proin sed leo nec diam finibus volutpat. Phasellus a mi iaculis, interdum mi ut, tempus tellus. Vestibulum sed accumsan enim. Nunc varius risus sed ante suscipit, eget tristique justo porttitor. </p>
                        <button className="btn-card">Faça seu orçamento</button>
                </div>
                <div className="card">
                        <img src={Check} alt="icon-check" width={60}/>
                        <p className="texto-principal-card">Lorem ipsum dolor sit amet</p>
                        <p className="texto-secundario-card">Proin sed leo nec diam finibus volutpat. Phasellus a mi iaculis, interdum mi ut, tempus tellus. Vestibulum sed accumsan enim. Nunc varius risus sed ante suscipit, eget tristique justo porttitor. </p>
                        <button className="btn-card">Faça seu orçamento</button>
                </div>
                <div className="card">
                        <img src={Handshake} alt="icon-handshake" width={60}/>
                        <p className="texto-principal-card">Lorem ipsum dolor sit amet</p>
                        <p className="texto-secundario-card">Proin sed leo nec diam finibus volutpat. Phasellus a mi iaculis, interdum mi ut, tempus tellus. Vestibulum sed accumsan enim. Nunc varius risus sed ante suscipit, eget tristique justo porttitor. </p>
                        <button className="btn-card">Faça seu orçamento</button>
                </div>
            </div>
        </>
    )
}