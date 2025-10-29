import './instalacao.css'
import { InstalacaoCards } from "../components/InstalacaoCards";
import { InstalacaoButton } from '../components/InstalacaoButton';

export function Instalacao() {
    return (
        <>
            <section id='instalacao'>
                <div className="background-instalacao">
                    <h1 className="titulo">Instalação</h1>
                    <InstalacaoCards/>
                    <InstalacaoButton/>
                </div>
            </section>
        </>
    )
}

