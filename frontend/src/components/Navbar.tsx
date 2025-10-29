import './style.css'
import Logo from '../assets/logo.png'

export function Navbar() {
    return (
        <>
            <nav>
                <div className="navbar">
                    <img src={Logo} alt="Logo" className="logo"/>
                    <div className="nav-itens">
                        <a href="#home">Home</a>
                        <a href="#sobre">Sobre</a>
                        <a href="#ambientes">Ambientes</a>
                        <a href="#contatos">Contatos</a>
                    </div>
                </div>
            </nav>
        </>
    )
}