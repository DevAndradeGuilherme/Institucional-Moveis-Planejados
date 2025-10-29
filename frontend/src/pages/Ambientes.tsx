import './ambientes.css'
import { AmbientesTexts } from "../components/AmbientesTexto";
import { AmbientesButton } from '../components/AmbientesButton';
import { AmbientesCards } from '../components/AmbientesCards';

export function Ambientes() {
    return (
        <>
            <section id="ambientes">
                <div className="container">
                    <div className="texts">
                        <AmbientesTexts/>
                        <AmbientesButton/>
                    </div>
                    <div className="cards">
                        <AmbientesCards/>
                    </div>
                </div>
            </section>
        </>
    )
}