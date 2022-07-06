import React from 'react';

import 'animate.css';
import './style.css';
import LogoMercado from '../../assets/imgs/logoMercado.png';
import LogoPontoFrio from '../../assets/imgs/logoPontoFrio.png';
import LogoCarrefour from '../../assets/imgs/logoCarrefour.png';
import LogoCasas from '../../assets/imgs/logoCasas.png';
import LogoMagalu from '../../assets/imgs/logoMagalu.png';
import LogoSubmarino from '../../assets/imgs/logoSubmarino.png';
import LogoShoptime from '../../assets/imgs/logoShoptime.png';
import LogoAmericanas from '../../assets/imgs/logoAmericanas.png';
import LogoAmazon from '../../assets/imgs/logoAmazon.png';

import $ from 'jquery';



function Compre() {

    $(document).ready(function () {
        $("#root").css("background", "transparent linear-gradient(180deg, #FFCB05 0%, #EE7214 100%) 0% 0% no-repeat padding-box");
        $("html").css("background", "#FFCB05");
        $(".item-nav").css("color", "black")
        $(".logo").hide();
        $(".logoB").hide();
        $(".logoT").show();
    });
    return (

        <div className="mae-C">
            <h1>Lojas parceiras</h1>

            <div className="sites d-flex">
                <a href="https://empresas.americanas.com.br/produto/17384443/cachaca-ouro-1-750ml?pfm_carac=cachaça%20ouro%201&pfm_index=3&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20&sellerId=20187257000101" target="_blank" rel="noopener noreferrer">
                    <div className="caixa">
                        <div className="site">
                            <img src={LogoAmericanas} alt="" />
                        </div>
                        <div className="d-flex infosSite">
                            <li id='nome-site' >Lojas Americanas</li>
                            <a id='link'>americanas.com.br</a>
                        </div>
                    </div>
                </a>
                <a href="https://produto.mercadolivre.com.br/MLB-887531605-vida-boa-ouro-1-750ml-original-_JM#position=2&search_layout=stack&type=item&tracking_id=0332ac44-9f37-4843-bb4d-ac41ccad8841" target="_blank" rel="noopener noreferrer">
                    <div className="caixa">
                        <div className="site">
                            <img src={LogoMercado} alt="" />
                        </div>
                        <div className="d-flex infosSite">
                            <li id='nome-site' >Mercado Livre</li>
                            <a id='link'>mercadolivre.com.br</a>
                        </div>
                    </div>
                </a>
                <a href="https://www.magazineluiza.com.br/cachaca-ouro-1-velha-750ml-caixa-com-12-unidades/p/gf0c5fjf66/me/chaa/" target="_blank" rel="noopener noreferrer">
                    <div className="caixa">
                        <div className="site">
                            <img src={LogoMagalu} alt="" />
                        </div>
                        <div className="d-flex infosSite">
                            <li id='nome-site' >Magazine Luiza</li>
                            <a id='link'>magazineluiza.com.br</a>
                        </div>
                    </div>
                </a>
            </div>
            <div className="sites d-flex">
                <a href="https://www.submarino.com.br/produto/4496953040?pfm_carac=ouro-1-cachaca&pfm_index=5&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=61bbc2e390c8555037f94e33" target="_blank" rel="noopener noreferrer">
                    <div className="caixa">
                        <div className="site">
                            <img src={LogoSubmarino} alt="" />
                        </div>
                        <div className="d-flex infosSite">
                            <li id='nome-site' >Submarino</li>
                            <a id='link'>submarino.com.br</a>
                        </div>
                    </div>
                </a>
                <a href="https://www.amazon.com.br/Cachaça-Ouro-Vida-Limão-750ml/dp/B07YLXMZSG/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=2DLCBXTD8XZOB&keywords=cachaça+ouro+1&qid=1656699135&sprefix=cachaça+ouro+1%2Caps%2C213&sr=8-1&ufe=app_do%3Aamzn1.fos.db68964d-7c0e-4bb2-a95c-e5cb9e32eb12" target="_blank" rel="noopener noreferrer">
                    <div className="caixa">
                        <div className="site">
                            <img src={LogoAmazon} alt="" />
                        </div>
                        <div className="d-flex infosSite">
                            <li id='nome-site' >Amazon</li>
                            <a id='link'>amazon.com.br</a>
                        </div>
                    </div>
                </a>
                <a href="https://www.carrefour.com.br/cachaca-ouro-1-edicao-especial-750ml-mp921810875/p" target="_blank" rel="noopener noreferrer">
                    <div className="caixa">
                        <div className="site">
                            <img src={LogoCarrefour} alt="" />
                        </div>
                        <div className="d-flex infosSite">
                            <li id='nome-site' >Carrefour</li>
                            <a id='link'>carrefour.com.br</a>
                        </div>
                    </div>
                </a>
            </div>
            <div className="sites d-flex">
                <a href="https://www.shoptime.com.br/busca/cachaca-ouro-1?rc=cachaça%20ouro%201&limit=24&offset=24" target="_blank" rel="noopener noreferrer">
                    <div className="caixa">
                        <div className="site">
                            <img src={LogoShoptime} alt="" />
                        </div>
                        <div className="d-flex infosSite">
                            <li id='nome-site' >Shoptime</li>
                            <a id='link'>shoptime.com.br</a>
                        </div>
                    </div>
                </a>
                <a href="https://www.casasbahia.com.br/Bebidas/destilados-licores-coqueteis/Cachaca/cachaca-ouro-1-edicao-especial-750ml-1524930180.html?IdSku=1524930180" target="_blank" rel="noopener noreferrer">
                    <div className="caixa">
                        <div className="site">
                            <img src={LogoCasas} alt="" />
                        </div>
                        <div className="d-flex infosSite">
                            <li id='nome-site' >Casas Bahia</li>
                            <a id='link'>casasbahia.com.br</a>
                        </div>
                    </div>
                </a>
                <a href="https://www.pontofrio.com.br/cachaça-ouro-1/b" target="_blank" rel="noopener noreferrer">
                    <div className="caixa">
                        <div className="site">
                            <img src={LogoPontoFrio} alt="" />
                        </div>
                        <div className="d-flex infosSite">
                            <li id='nome-site' >Ponto Frio</li>
                            <a id='link'>pontofrio.com.br</a>
                        </div>
                    </div>
                </a>
            </div>
        </div>



    );


}


export default Compre;