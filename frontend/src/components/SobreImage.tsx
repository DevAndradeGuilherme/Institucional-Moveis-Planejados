import './style.css'
import ImagemPlanta from '../assets/sobre-image.jpg'

export function SobreImage() {
    return (
        <>
            <div className="sobre-image">
                <img src={ImagemPlanta} alt="Imagem-planta" className="imagem-sobre-principal"/>
            </div>
        </>
    )
}