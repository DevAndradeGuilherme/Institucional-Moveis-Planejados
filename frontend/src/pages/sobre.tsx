import './sobre.css'
import { SobreButton } from "../components/SobreButton";
import { SobreImage } from "../components/SobreImage";
import { SobreTexto } from "../components/SobreTexto";

export function Sobre() {
    return (
        <>
            <section id="sobre">
                <div className="sobre-container">
                    <SobreImage/>
                    <div className="sobre-itens">
                        <SobreTexto/>
                        <SobreButton/>
                    </div>
                </div>
            </section>
        </>
    )
}