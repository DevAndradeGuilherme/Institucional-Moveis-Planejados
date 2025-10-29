import './contatos.css'
import { ContatosFormButtons } from "../components/ContatosFormButtons";
import { ContatosTexto } from "../components/ContatosTexto";

export function Contatos() {
    return (
        <>
            <section id="contatos">
                <ContatosTexto/>
                <ContatosFormButtons/>
            </section>
        </>
    )
}