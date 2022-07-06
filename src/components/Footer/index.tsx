import React from 'react';
import './style.css';
import Logo from '../../assets/imgs/logo.png';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';


function Footer() {
    return (
        <>
            <footer>
                <ul className='esquerdaF'>
                    <div className="icons">
                        <li><FaFacebookF color='black' size={18} /></li>
                        <li><FaInstagram color='black' size={18} /></li>
                        <li><FaWhatsapp color='black' size={18} /></li>
                    </div>
                    <p id='numero'>119999 9999</p>
                    <p id='email'>emailouro1@ouro1.com.br</p>
                </ul>
                <img id='Logo-footer' src={Logo} alt="" />
                <div className="direitaF">
                    <p>Termos de uso</p>
                    <p>Politica de privacidade</p>
                </div>
            </footer>
        </>



    )
}

export default Footer;