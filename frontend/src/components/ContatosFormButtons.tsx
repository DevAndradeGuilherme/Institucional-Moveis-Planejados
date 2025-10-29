import Facebook from '../assets/contacts/facebook.svg'
import instagram from '../assets/contacts/instagram.svg'
import whatsapp from '../assets/contacts/whatsapp.svg'
import phone from '../assets/contacts/phone.svg'

import { useState } from "react";

const ENDPOINT_URL = 'http://localhost:5000/enviar-contato'; 

export function ContatosFormButtons() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
    });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setIsSubmitting(true);
        setStatus('Enviando mensagem...');

        try {
            const response = await fetch(ENDPOINT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('✅ Mensagem enviada com sucesso! Logo entraremos em contato.');
                setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
            } else {
                const errorData = await response.json();
                setStatus(`❌ Falha ao enviar: ${errorData.erro || 'Erro no servidor.'}`);
            }
        } catch (error) {
            console.error("Erro na conexão com o backend:", error);
            setStatus('❌ Erro de conexão. Verifique se o backend está ativo e o CORS configurado.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="formulario-contatos">
            <form onSubmit={handleSubmit}>

                <input type="text" name="nome" placeholder="Nome" className="input-nome" value={formData.nome} onChange={handleChange} required />
                <input type="email" name="email" placeholder="E-mail" className="input-email" value={formData.email} onChange={handleChange} required />
                <input type="text" name="telefone" placeholder="Telefone" className="input-telefone" value={formData.telefone} onChange={handleChange} />
                <input type="text" name="mensagem" placeholder="Mensagem" className="input-mensagem" value={formData.mensagem} onChange={handleChange} required />
                
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Aguarde...' : 'Enviar Contato'}
                </button>
            </form>

            {status && <p className="form-status">{status}</p>}

            <div className="contatos-icones">
                <a href="https://instagram.com/seuusuario" className="instagram"><img src={instagram} alt="Instagram" width={30}/></a>
                <a href={`https://wa.me/5531999999999`} className="whatsapp"><img src={whatsapp} alt="WhatsApp" width={30}/></a>
                <a href="tel:+5521999999999" className="telefone"><img src={phone} alt='phone' width={30}/></a>
                <a href="https://facebook.com/seuusuario" className="facebook"><img src={Facebook} alt="Facebook" width={30}/></a>
            </div>
        </div>
    );
}