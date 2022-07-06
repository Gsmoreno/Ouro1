import React from 'react';
import '../nav/style.css';
import Logo from '../../assets/imgs/logo.png';
import LogoB from '../../assets/imgs/LogoB.png';
import LogoT from '../../assets/imgs/logoT.png';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Nav() {
    function Mudacor(id: any) {
        switch (id) {
            case 1:
                $(".logo").show();
                $(".logoB").hide();
                $(".logoT").hide();
                $(".item-nav").css("color", "black")

                $("#root").css("background", "none");
                $("#root").css("background-color", "#FFFAE9");
                $("html").css("background-color", "#FFFAE9");
                break;
            case 2:
                $(".logo").show();
                $(".logoB").hide();
                $(".logoT").hide();
                $(".item-nav").css("color", "black")

                $("#root").css("background", "none");
                $("#root").css("background-color", "#FFAC07");
                $("html").css("background-color", "#FFAC07");
                break;
            case 3:
                $("#root").css("background-color", "#FFCB05");
                $("html").css("background-color", "#FFCB05");
                $(".logo").hide();
                $(".logoB").hide();
                $(".logoT").show();
                break;
            case 4:
                $("#root").css("background", "black");
                $("#root").css("background-color", "black");
                $("html").css("background-color", "black");
                $("html").css("background", "none");
                $(".item-nav").css("color", "#FFFFFF");
                $(".ham").css("background", "#FFCB05");
                $(".logo").hide();
                $(".logoB").show();
                $(".logoT").hide();
                break;
            case 5:
                $("#root").css("background", "transparent linear-gradient(180deg, #FFCB05 0%, #EE7214 100%) 0% 0% no-repeat padding-box");
                $("html").css("background", "#FFCB05");
                $(".item-nav").css("color", "black")
                $(".logo").hide();
                $(".logoB").hide();
                $(".logoT").show();
                break;

            default:
                break;
        }
    }
    return (
        <>

            <nav className='nav col-md-12 navNormal '>
                <div className="opn d-flex col-md-4">
                    <li className='nav-item'><Link id='links' className='item-nav' onClick={() => Mudacor(1)} to="/">Home</Link></li>
                    <li className='nav-item'><Link id='links' className='item-nav' onClick={() => Mudacor(2)} to="/produtos">Produtos</Link></li>
                    <li className='nav-item'><Link id='links' className='item-nav' onClick={() => Mudacor(3)} to="/receitas">Receitas</Link></li>
                    <li className='nav-item'><Link id='links' className='item-nav' onClick={() => Mudacor(4)} to="/eventos">Eventos</Link></li>
                    <li className='nav-item'><Link id='links' className='item-nav' onClick={() => Mudacor(5)} to="/compre">Compre</Link></li>
                </div>
                <div className="logo col-md-4 d-flex justify-content-center">
                    <img src={Logo} id="logo" className='logo' alt="logo com o um grande e amarelo" height={90} />
                    <img src={LogoB} id="logo" className='logoB' alt="logo com o um grande e amarelo" height={90} />
                    <img src={LogoT} id="logo" className='logoT' alt="logo com o um grande e amarelo" height={90} />
                </div>
                <div className="direita d-flex col-md-3 ">
                    <li className='nav-item item-nav' >Contato</li>
                    <li><a href="https://www.facebook.com/cachacaouro1" target="_blank"> <FaFacebookF className='item-nav' color='black' size={18} /></a></li>
                    <li><a href="https://www.instagram.com/cachacaouro1/" target="_blank" rel="noopener noreferrer"><FaInstagram className='item-nav' color='black' size={18} /></a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaWhatsapp className='item-nav' color='black' size={18} /></a></li>

                </div>
            </nav>

            <nav role="navigation" className='menuMobile'>
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span className='ham'></span>
                    <span className='ham'></span>
                    <span className='ham'></span>
                    <ul id="menu">
                        <img id='logoMb' src={LogoT} alt="" />
                        <li className='nav-item'><Link id='links' className='item-nav' onClick={() => Mudacor(1)} to="/">Home</Link></li>
                        <li className='nav-item'><Link id='links' className='item-nav' onClick={() => Mudacor(2)} to="/produtos">Produtos</Link></li>
                        <li className='nav-item'><Link id='links' className='item-nav' onClick={() => Mudacor(3)} to="/receitas">Receitas</Link></li>
                        <li className='nav-item'><Link id='links' className='item-nav' onClick={() => Mudacor(4)} to="/eventos">Eventos</Link></li>
                        <li className='nav-item'><Link id='links' className='item-nav' onClick={() => Mudacor(5)} to="/compre">Compre</Link></li>
                    </ul>
                </div>
            </nav>
        </>




    )
}

export default Nav;