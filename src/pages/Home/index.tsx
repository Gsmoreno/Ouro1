
import React, { useEffect } from 'react';
import Slider from '../../components/Slider/index';
import './style.css';
import Bola from '../../assets/imgs/bola-amarela.png';
import { motion, useTransform, useViewportScroll } from "framer-motion";
import 'animate.css';
import GarrafaMeio from '../../assets/imgs/garrafaHome.png';
import GarrafaVelha from '../../assets/imgs/Velha.png';
import GarrafaPrata from '../../assets/imgs/prata.png';
import GarrafaOuro from '../../assets/imgs/OuroMineiro.png';
import GarrafaVidaboa from '../../assets/imgs/VidaBoa.png';
import GarrafaEspecial from '../../assets/imgs/EdicaoEspecial.png';
import BolaVelha from '../../assets/imgs/BVelha.png';
import BolaPrata from '../../assets/imgs/BPrata.png';
import BolaOuroM from '../../assets/imgs/BOuroMineiro.png';
import BolaVidaBoa from '../../assets/imgs/BVidaBoa.png';
import CanaPrincipal from '../../assets/imgs/canaP.png';
import CanaDireta from '../../assets/imgs/CanaD.png';
import CanaEsquerda from '../../assets/imgs/canaE.png';
import Estrada from '../../assets/imgs/estradaMoagem.png';
import Engrenagem from '../../assets/imgs/Engrenagem.png';
import CarroMoagem from '../../assets/imgs/carroMoagem.png';
import Tubo from '../../assets/imgs/tubo1.png';
import Alam from '../../assets/imgs/alam.png';
import Cobre from '../../assets/imgs/cobre.png';
import GarrafaBonita from '../../assets/imgs/garrafa.png';
import Filtro from '../../assets/imgs/filtro.png';
import Copo from '../../assets/imgs/copo.png';
import Barril from '../../assets/imgs/barril.png';
import Estoque from '../../assets/imgs/estoque.png';
import EstoqueR from '../../assets/imgs/estoqueReal.png';
import GVB from '../../assets/imgs/gVB.png';
import Garrafas from '../../assets/imgs/garrafas.png';
import Detox from '../../assets/imgs/detox.png';
import Raspadinha from '../../assets/imgs/raspadinha.png';
import Caipirinha from '../../assets/imgs/caipirinha.png';
import Logo from '../../assets/imgs/LogoB.png';
import $ from 'jquery';

import CaldeiraoChegou from '../../assets/imgs/Caldeirao.png';


function Home() {

    $(document).ready(function () {
        $(".PrataG").hide();
        $(".VelhaG").show();
        $(".OuroMineiroG").hide();
        $(".VidaBoaG").hide();
        $(".EspecialG").hide();
        $(".infoP").hide();
        $(".infoVB").hide();
        $(".infoOm").hide();
        $(".infoE").hide();
        $(".sobreP").css("display", "none ");
        $(".sobreVB").hide();
        $(".sobreOm").hide();
        $(".sobreE").hide();
        $(".sobreV").show();

        $("#veia").css("color", "red");
        $("#ouro").css("color", "black");
        $("#edicao").css("color", "black");
        $("#vida").css("color", "black");
        $("#prata").css("color", "black");

        $(".sobreP").css("display", "none ");
        $(".sobreVB").hide();
        $(".sobreOm").hide();
        $(".sobreE").hide();
        $(".sobreV").show();

        $(".infoV").show();
        $(".infoP").hide();
        $(".infoVB").hide();
        $(".infoOm").hide();
        $(".infoE").hide();

        $(".VelhaG").show();
        $(".PrataG").hide();
        $(".OuroMineiroG").hide();
        $(".VidaBoaG").hide();
        $(".EspecialG").hide();

        $(".OuroMineiroG").removeClass("animate__backInRight");
        $(".VelhaG").addClass("animate__backInRight");
        $(".PrataG").removeClass("animate__backInRight");
        $(".VidaBoaG").removeClass("animate__backInRight");
        $(".EspecialG").removeClass("animate__backInRight");

        $(".logo").show();
        $(".logoB").hide();
        $(".logoT").hide();

    });

    function MudaInfos(id: any) {
        switch (id) {
            case 1:
                $("#veia").css("color", "red");
                $("#ouro").css("color", "black");
                $("#edicao").css("color", "black");
                $("#vida").css("color", "black");
                $("#prata").css("color", "black");

                $(".sobreP").css("display", "none ");
                $(".sobreVB").hide();
                $(".sobreOm").hide();
                $(".sobreE").hide();
                $(".sobreV").show();

                $(".infoV").show();
                $(".infoP").hide();
                $(".infoVB").hide();
                $(".infoOm").hide();
                $(".infoE").hide();

                $(".VelhaG").show();
                $(".PrataG").hide();
                $(".OuroMineiroG").hide();
                $(".VidaBoaG").hide();
                $(".EspecialG").hide();

                $(".OuroMineiroG").removeClass("animate__backInRight");
                $(".VelhaG").addClass("animate__backInRight");
                $(".PrataG").removeClass("animate__backInRight");
                $(".VidaBoaG").removeClass("animate__backInRight");
                $(".EspecialG").removeClass("animate__backInRight");

                break;
            case 2:
                $("#veia").css("color", "black");
                $("#ouro").css("color", "black");
                $("#edicao").css("color", "black");
                $("#vida").css("color", "black");
                $("#prata").css("color", "red");

                $(".sobreP").show();
                $(".sobreVB").hide();
                $(".sobreOm").hide();
                $(".sobreE").hide();
                $(".sobreV").hide();

                $(".infoV").hide();
                $(".infoP").show();
                $(".infoVB").hide();
                $(".infoOm").hide();
                $(".infoE").hide();

                $(".VelhaG").hide();
                $(".PrataG").show();
                $(".OuroMineiroG").hide();
                $(".VidaBoaG").hide();
                $(".EspecialG").hide();

                $(".OuroMineiroG").removeClass("animate__backInRight");
                $(".VelhaG").removeClass("animate__backInRight");
                $(".PrataG").addClass("animate__backInRight");
                $(".VidaBoaG").removeClass("animate__backInRight");
                $(".EspecialG").removeClass("animate__backInRight");

                break;
            case 3:
                $("#veia").css("color", "black");
                $("#ouro").css("color", "black");
                $("#edicao").css("color", "black");
                $("#vida").css("color", "red");
                $("#prata").css("color", "black");

                $(".sobreP").hide();
                $(".sobreVB").show();
                $(".sobreOm").hide();
                $(".sobreE").hide();
                $(".sobreV").hide();

                $(".infoV").hide();
                $(".infoP").hide();
                $(".infoVB").show();
                $(".infoOm").hide();
                $(".infoE").hide();

                $(".VelhaG").hide();
                $(".PrataG").hide();
                $(".OuroMineiroG").hide();
                $(".VidaBoaG").show();
                $(".EspecialG").hide();

                $(".OuroMineiroG").removeClass("animate__backInRight");
                $(".VelhaG").removeClass("animate__backInRight");
                $(".PrataG").removeClass("animate__backInRight");
                $(".VidaBoaG").addClass("animate__backInRight");
                $(".EspecialG").removeClass("animate__backInRight");

                break;
            case 4:
                $("#veia").css("color", "black");
                $("#ouro").css("color", "black");
                $("#edicao").css("color", "red");
                $("#vida").css("color", "black");
                $("#prata").css("color", "black");

                $(".sobreP").hide();
                $(".sobreVB").hide();
                $(".sobreOm").hide();
                $(".sobreE").show();
                $(".sobreV").hide();

                $(".infoV").hide();
                $(".infoP").hide();
                $(".infoVB").hide();
                $(".infoOm").hide();
                $(".infoE").show();

                $(".VelhaG").hide();
                $(".PrataG").hide();
                $(".OuroMineiroG").hide();
                $(".VidaBoaG").hide();
                $(".EspecialG").show();

                $(".OuroMineiroG").removeClass("animate__backInRight");
                $(".VelhaG").removeClass("animate__backInRight");
                $(".PrataG").removeClass("animate__backInRight");
                $(".VidaBoaG").removeClass("animate__backInRight");
                $(".EspecialG").addClass("animate__backInRight");
                break;
            case 5:
                $("#veia").css("color", "black");
                $("#ouro").css("color", "red");
                $("#edicao").css("color", "black");
                $("#vida").css("color", "black");
                $("#prata").css("color", "black");

                $(".sobreP").hide();
                $(".sobreVB").hide();
                $(".sobreOm").show();
                $(".sobreE").hide();
                $(".sobreV").hide();

                $(".infoV").hide();
                $(".infoP").hide();
                $(".infoVB").hide();
                $(".infoOm").show();
                $(".infoE").hide();

                $(".VelhaG").hide();
                $(".PrataG").hide();
                $(".OuroMineiroG").show();
                $(".VidaBoaG").hide();
                $(".EspecialG").hide();

                $(".OuroMineiroG").addClass("animate__backInRight");
                $(".VelhaG").removeClass("animate__backInRight");
                $(".PrataG").removeClass("animate__backInRight");
                $(".VidaBoaG").removeClass("animate__backInRight");
                $(".EspecialG").removeClass("animate__backInRight");


                break;

            default:
                break;
        }
    }


    useEffect(() => {

        const intersectionObserver = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) {
                console.log('Estamos observando!')

                $("#exp-moagem").addClass("animate__fadeIn");
                $("#carro").addClass("animate__slideInLeft");
                $(".titulo2").addClass("animate__slideInUp");
                $("#engrenagem").addClass("animate__slideInLeft");



            } else {
                $("#exp-moagem").removeClass("animate__fadeIn");
                $("#carro").removeClass("animate__slideInLeft");
                $(".titulo2").removeClass("animate__slideInUp");
                $("#engrenagem").removeClass("animate__slideInLeft");

            }
        })
        intersectionObserver.observe(document.querySelector('#exp-moagem')!);

        return () => intersectionObserver.disconnect();


    }, []);

    useEffect(() => {

        const intersectionObserver = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) {
                console.log('Estamos observando!')

                $(".titulo33").addClass("animate__slideInUp");
                $(".fadeIn").addClass("animate__fadeInBottomRight");
                $("#tubo").hide();

            } else {
                $("#tubo").show();
                $(".titulo33").removeClass("animate__slideInUp");
                $(".fadeIn").removeClass("animate__fadeInBottomRight");


            }
        })
        intersectionObserver.observe(document.querySelector('.tres')!);

        return () => intersectionObserver.disconnect();


    }, []);

    useEffect(() => {

        const intersectionObserver = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) {
                console.log('Estamos observando!')

                $(".alam").addClass("animate__slideInUp");

                $(".titulo4").addClass("animate__slideInUp");
                $("#tubo").show();
                $("#tubo").addClass("animate__slideInRight");


            } else {
                $("#tubo").removeClass("animate__slideInRight");
                $("#tubo").hide();
                $(".alam").removeClass("animate__slideInUp");

                $(".titulo4").removeClass("animate__slideInUp");



            }
        })
        intersectionObserver.observe(document.querySelector('.quatro')!);

        return () => intersectionObserver.disconnect();


    }, []);

    useEffect(() => {

        const intersectionObserver = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) {
                console.log('Estamos observando!')

                $(".ima").addClass("animate__slideInUp");


            } else {

                $(".ima").removeClass("animate__slideInUp");

            }
        })
        intersectionObserver.observe(document.querySelector('.cinco')!);

        return () => intersectionObserver.disconnect();


    }, []);

    useEffect(() => {

        const intersectionObserver = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) {
                console.log('Estamos observando!')

                $("#filtro").addClass("animate__slideInLeft");
                $(".titulo5").addClass("animate__slideInRight");
                $("#exp-moagem5").addClass("animate__slideInRight");
                $("#copo").addClass("animate__zoomIn");
                $("#barril").hide();


            } else {

                $("#filtro").removeClass("animate__slideInLeft");
                $(".titulo5").removeClass("animate__slideInRight");
                $("#exp-moagem5").removeClass("animate__slideInRight");
                $("#copo").removeClass("animate__zoomIn");

                $("#barril").show();


            }
        })
        intersectionObserver.observe(document.querySelector('.seis')!);

        return () => intersectionObserver.disconnect();


    }, []);

    useEffect(() => {

        const intersectionObserver = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) {
                console.log('Estamos observando!')

                $("#barril").addClass("animate__slideInUp");
                $(".titulo6").addClass("animate__slideInUp");
                $("#barril").show();


            } else {

                $("#barril").removeClass("animate__slideInUp");
                $(".titulo6").removeClass("animate__slideInUp");
                $("#barril").hide();


            }
        })
        intersectionObserver.observe(document.querySelector('.setee')!);

        return () => intersectionObserver.disconnect();


    }, []);

    useEffect(() => {

        const intersectionObserver = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) {
                console.log('Estamos observando!')

                $("#est").addClass("animate__slideInLeft");
                $("#estoqueR").addClass("animate__zoomIn");



            } else {

                $("#est").removeClass("animate__slideInLeft");
                $("#estoqueR").removeClass("animate__zoomIn");



            }
        })
        intersectionObserver.observe(document.querySelector('.oito')!);

        return () => intersectionObserver.disconnect();


    }, []);

    useEffect(() => {

        const intersectionObserver = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) {
                console.log('Estamos observando!')


                $("#garrafas").addClass("animate__zoomIn");



            } else {


                $("#garrafas").removeClass("animate__zoomIn");



            }
        })
        intersectionObserver.observe(document.querySelector('.nove')!);

        return () => intersectionObserver.disconnect();


    }, []);


    const { scrollYProgress } = useViewportScroll();


    //VARIAVEIS DE ANIMAÇÃO PARA A CANA PRINCIPAL ESTAGIO 1
    const frameOpacityCaneP = useTransform(scrollYProgress, [0.069, 0.114, 0.145], [0, 1, 1]);
    const frameScaleCaneP = useTransform(scrollYProgress, [0.069, 0.114, 0.145], [0.3, 1, 0.5]);
    //VARIAVEIS DE ANIMAÇÃO PARA A CANA DA ESQUERDA ESTAGIO 1
    const frameOpacityCaneE = useTransform(scrollYProgress, [0.069, 0.114, 0.145], [0, 1, 1]);
    const frameScaleCaneE = useTransform(scrollYProgress, [0.069, 0.114, 0.145], [0.3, 1, 0.7]);
    const framePositionCaneE = useTransform(scrollYProgress, [0.069, 0.114, 0.145], [-550, 50, -280]);
    const framePositionACaneE = useTransform(scrollYProgress, [0.114, 0.145], [-560, -620]);
    //VARIAVEIS DE ANIMAÇÃO PARA A CANA DA DIREITA ESTAGIO 1
    const frameOpacityCaneD = useTransform(scrollYProgress, [0.069, 0.114, 0.145], [0, 1, 1]);
    const frameScaleCaneD = useTransform(scrollYProgress, [0.069, 0.114, 0.145], [0.3, 1, 0.7]);
    const framePositionCaneD = useTransform(scrollYProgress, [0.069, 0.114, 0.145], [550, 60, 320]);

    //VARIAVEIS DE ANIMAÇÃO PARA O TITULO DO ESTAGIO 2

    const framePositionTitle2 = useTransform(scrollYProgress, [0.114, 0.145], [-850, -350]);
    //VARIAVEIS DE ANIMAÇÃO PARA


    return (
        <div>


            <div className="bebidas col-md-3 animate__bounceInLeft">
                <h2>OS MELHORES</h2>
                <h1 id='sabor'>SABORES</h1>
                <ul id='tipos'>
                    <li><img src={GarrafaVelha}></img><p id='veia' onClick={() => MudaInfos(1)}>VELHA</p></li>
                    <li><img src={GarrafaPrata}></img><p id='prata' onClick={() => MudaInfos(2)}>PRATA</p></li>
                    <li><img src={GarrafaVidaboa}></img><p id='vida' onClick={() => MudaInfos(3)}>VIDA<br />BOA</p></li>
                    <li><img src={GarrafaEspecial}></img><p id='edicao' onClick={() => MudaInfos(4)}>EDIÇÃO <br /> ESPECIAL</p></li>
                    <li><img src={GarrafaOuro}></img><p id='ouro' onClick={() => MudaInfos(5)}>OURO<br />MINEIRO</p></li>
                </ul>
            </div>



            <div className="bola col-md-12 d-flex justify-content-center">
                <motion.div className='animacao'
                    initial={{ x: 1300, scale: 5 }}
                    animate={{ x: 170, y: -20, scale: 1 }}
                    transition={{ duration: 2 }}>
                    <img id='bola' src={Bola} alt="" />
                </motion.div>

                <img className=' animate__animated EspecialG ' src={GarrafaMeio} alt="" id='garrafa' />
                <img className=' animate__animated VidaBoaG' src={BolaVidaBoa} alt="" id='garrafa' />
                <img className=' animate__animated OuroMineiroG' src={BolaOuroM} alt="" id='garrafa' />
                <img className=' animate__animated PrataG' src={BolaPrata} alt="" id='garrafa' />
                <img className=' animate__animated VelhaG' src={BolaVelha} alt="" id='garrafa' />

                <div className="sobreProduto sobreE text-center  flex-column col-md-2 animate__animated animate__bounceInRight ">
                    <h2>EDIÇÃO ESPECIAL</h2>
                    <p>Um sabor e maciez inigualável, aroma floral e abaunilhado, característicos dos tonéis de carvalho. Produzida somente em 1000 unidades ao ano. Envelhecida por 6 anos em carvalho americano e carvalho europeu.</p>
                    <div className="area-botao">
                        <a href="/compre">
                            <button  >
                                <div className="left"></div>
                                Comprar!
                                <div className="right"></div>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="sobreProduto sobreV text-center  flex-column col-md-2 animate__animated animate__bounceInRight ">
                    <h2>VELHA</h2>
                    <p>A Cachaça Ouro 1 Velha traz consigo um sabor único, leve e macio, que conquista os paladares mais exigentes, seu aroma floral amadeirado e levemente “abaunilhado”, caracterizado pelos barris novos de carvalho Americano e carvalho Europeu, no qual descansa por 2 anos. </p>
                    <div className="area-botao">
                        <a href="/compre">
                            <button  >
                                <div className="left"></div>
                                Comprar!
                                <div className="right"></div>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="sobreProduto sobreVB text-center  flex-column col-md-2 animate__animated animate__bounceInRight ">
                    <h2>VIDA BOA</h2>
                    <p>Uma bebida mista, que combina cachaça com mel natural e essência de limão. Seu sabor único aliado a processos modernos produzem uma bebida sem igual
                        Leve, possui graduação alcoólica de 20%
                        Perfeita para ser servida gelada com raspas de limão
                    </p>
                    <div className="area-botao">
                        <a href="/compre">
                            <button  >
                                <div className="left"></div>
                                Comprar!
                                <div className="right"></div>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="sobreProduto sobreOm text-center  flex-column col-md-2 animate__animated animate__bounceInRight ">
                    <h2>OURO MINEIRO</h2>
                    <p>Possui um sabor levemente adocicado onde seu fundo floral prevalece e um toque de aroma de baunilha. Conta com uma pungência alcoólica mais elevada de 42 vol. Que remete à essência mineira: doce forte e amargo.</p>
                    <div className="area-botao">
                        <a href="/compre">
                            <button  >
                                <div className="left"></div>
                                Comprar!
                                <div className="right"></div>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="sobreProduto sobreP text-center  flex-column col-md-2 animate__animated animate__bounceInRight ">
                    <h2>PRATA</h2>
                    <p>Uma cachaça cítrica com o gosto apurado para a Cana, feita para ser utilizada especialmente em drinks como a caipirinha tradicional brasileira, descansa em tonéis de inox mantendo assim  originalidade desde a destilação até o consumidor mais exigente.</p>
                    <div className="area-botao">
                        <a href="/compre">
                            <button  >
                                <div className="left"></div>
                                Comprar!
                                <div className="right"></div>
                            </button>
                        </a>
                    </div>
                </div>





                <div className="infos infoE col-md-5 animate__animated animate__bounceInLeft">
                    <p id='nome-garrafa'>ENVELHECIDA</p>
                    <h1 id='bold ' className='anos'>6 anos</h1>
                    <h1 className='d-flex dosagem ml' id='bold'>750 <p id='medida'>ml</p> </h1>
                    <h1 id='bold' className='porcentagem'> 44% <p id='alcool' > ÁLCOOL</p> </h1>
                </div>
                <div className="infos infoV col-md-5 animate__animated animate__bounceInLeft">
                    <p id='nome-garrafa'>ENVELHECIDA</p>
                    <h1 id='bold ' className='anos'>2 anos</h1>
                    <h1 className='d-flex dosagem ml' id='bold'>750 <p id='medida'>ml</p> </h1>
                    <h1 id='bold' className='porcentagem'> 40% <p id='alcool' > ÁLCOOL</p> </h1>
                </div>
                <div className="infos infoP col-md-5 animate__animated animate__bounceInLeft">
                    <p id='nome-garrafa' className='des'>Descansa</p>
                    <h1 id='bold ' className='anos meses'>6 meses</h1>
                    <p className='inox'>em barris de inox</p>
                    <h1 className='d-flex dosagem ml' id='bold'>750 <p id='medida'>ml</p> </h1>
                    <h1 id='bold' className='porcentagem'> 40% <p id='alcool' > ÁLCOOL</p> </h1>
                </div>
                <div className="infos infoVB col-md-5 animate__animated animate__bounceInLeft">
                    <p id='nome-garrafa' className='bebVb'>BEBIDA</p>
                    <h1 id='bold ' className='anos'>MISTA</h1>
                    <h1 className='d-flex dosagem ml' id='bold'>750 <p id='medida'>ml</p> </h1>
                    <h1 id='bold' className='porcentagem'> 20% <p id='alcool' > ÁLCOOL</p> </h1>
                </div>
                <div className="infos infoOm col-md-5 animate__animated animate__bounceInLeft">
                    <p id='nome-garrafa'>FERMENTADA</p>
                    <h1 id='bold ' className='anos anoOm'>1 ano</h1>
                    <h1 className='d-flex dosagem ml' id='bold'>600 <p id='medida'>ml</p> </h1>
                    <h1 id='bold' className='porcentagem'> 42% <p id='alcool' > ÁLCOOL</p> </h1>
                </div>
            </div>
            <section className='1'>
                <input type="radio" className='teste' name='passo' id='passo2' value={1} hidden checked ></input>
                <div className="prod ">
                    <motion.div
                        style={{
                            opacity: frameOpacityCaneE,
                            scale: frameScaleCaneE,
                            position: 'relative',
                            left: framePositionCaneE,
                            top: framePositionACaneE
                        }}
                        animate={{ y: 520, x: -90, rotate: -5 }}

                    >
                        <img id="CanaE" className=' animate__animated ' src={CanaEsquerda} alt="" />
                    </motion.div>
                    <motion.div
                        style={{
                            opacity: frameOpacityCaneD,
                            scale: frameScaleCaneD,
                            position: 'relative',
                            left: framePositionCaneD,
                            top: 70
                        }}
                        animate={{ y: -30, x: -90, rotate: -5 }}

                    >
                        <img id="CanaD" src={CanaDireta} alt="" />
                    </motion.div>


                    <h1 className='d-flex justify-content-center'>PRODUÇÃO</h1>
                    <div className="passo1 d-flex justify-content-center flex-column col-md-12">
                        <div className="d-flex titulo ">
                            <h1>1 </h1><h3>Cultivo</h3>
                        </div>
                        <div id='exp-cana' className='col-md-10 d-flex'>
                            <p>Sua base vem da cana de açúcar, cultivada e colhida em nossas fazendas minerais.</p>
                            <motion.div
                                style={{
                                    opacity: frameOpacityCaneP,
                                    scale: frameScaleCaneP,
                                    rotate: -20,

                                }}
                                animate={{ y: -40 }}
                            >
                                <img id='CanaPrinci' src={CanaPrincipal} alt="" />
                            </motion.div>

                        </div>

                    </div>

                </div>

            </section>
            <section className='2' >
                <input type="radio" className='passo' id='passo2' value={2} hidden />
                <div className="passo2 col-md-12">
                    <motion.div id='tittle2'
                        style={{
                            position: 'relative',
                            bottom: framePositionTitle2
                        }}
                        animate={{ y: -360 }}
                    >

                        <div className="d-flex titulo2 animate__animated ">
                            <h1>2 </h1><h3>Moagem e decantação</h3>
                        </div>
                    </motion.div>
                    <div id='exp-moagem' className='col-md-12 d-flex  animate__animated'>
                        <p>Após a colheita a cana é moída, etapa na qual se extrai a garapa e o bagaço é separado do caldo o qual é decantado, filtrado e depois diluído.</p>
                    </div>



                </div>
                <div>
                    <motion.div
                        animate={{ y: -130 }}
                    >
                        <div className="imgMoagem d-flex">
                            <img id='carro' className='animate__animated ' src={CarroMoagem} alt="" />
                            <div id='moen'>
                                <p>MOENDAS</p>
                                <img id='engrenagem' src={Engrenagem} className='animate__animated ' alt="" />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        animate={{ y: -140 }}
                    >
                        <img id='estrada' src={Estrada} alt="" />
                    </motion.div>
                </div>
            </section>

            <section className='3 tres' >
                <div className="passo3 col-md-12">
                </div>
                <div>
                    <motion.div id='tittle3'
                        style={{
                            position: 'relative',
                            bottom: framePositionTitle2
                        }}
                        animate={{ y: -360 }}
                    >


                        <div className="d-flex titulo3  ">
                            <h1 className='titulo33 animate__animated'>3 </h1><h3 className='titulo33 animate__animated'>Fermentação</h3>
                            <img id='engrenagem2' className='fadeIn animate__animated' src={Engrenagem} alt="" />
                            <p id='caldeiras' className='fadeIn animate__animated'>CALDEIRAS</p>
                            <img id='caldeirao' className='fadeIn animate__animated' src={CaldeiraoChegou} alt="" />
                        </div>
                    </motion.div>
                    <img id='tubo' className='animate__animated' src={Tubo} alt="" />


                    <div id='exp-moagem3' className='col-md-12 d-flex  animate__animated'>
                        <p className='col-sm-1 titulo33 animate__animated'> Nessa etapa a mágica acontece e o açúcar se transforma em álcool, com a adição de algumas leveduras, resultando no “vinho”.</p>
                    </div>
                </div>
            </section>
            <section className="4 quatro">
                <img id='alam' className='animate__animated alam' src={Alam} alt="" />


                <div className="passo4 col-md-12">

                    <div className="margem">


                        <div className="d-flex titulo4 animate__animated ">
                            <h1>4 </h1><h3>Destilação</h3>
                        </div>
                        <div id='exp-moagem4' className=' d-flex  animate__animated'>
                            <p> Esse “vinho” é direcionado para os alambiques de cobre, e se separam a água e o álcool das outras substâncias.</p>
                        </div>
                    </div>




                </div>
            </section>
            <section className='5 cinco '>
                <div className="imagens col-md-12">
                    <div id='divImg'>
                        <img id='garrafaB' src={GarrafaBonita} alt="" />
                    </div>
                    <img className='ima animate__animated' id='cobre' src={Cobre} alt="" />
                </div>
            </section>
            <section className="6 seis">
                <div className='d-flex'>
                    <img className='animate__animated' id='filtro' src={Filtro} alt="" />
                    <img id='barril' className='animate__animated' src={Barril} alt="" />
                    <div className="passo5 col-md-12 ">

                        <div className="d-flex titulo5 animate__animated ">
                            <h1>5 </h1><h3>Filtragem</h3>
                        </div>

                        <div id='exp-moagem5' className='col-md-12 d-flex  animate__animated'>
                            <p> Os resíduos de cobre são retirados e as substâncias voláteis (água e álcool) se transformam em cachaça</p>
                        </div>
                    </div>

                </div>
                <img id='copo' className='animate__animated' src={Copo} alt="" />
            </section>
            <section className="7 setee">
                <div className="texto6">
                    <div className="d-flex titulo6  animate__animated">
                        <h1>6 </h1><h3>Envelhecimento</h3>
                    </div>
                    <div id='exp-cana6' className='col-md-10 d-flex'>
                        <p>Nos barris de madeira e inox  selecionados pelo nosso Master Blend, a cachaça descansa por anos a fim de absorver aroma e coloração.</p>

                    </div>
                </div>
            </section>
            <section className="8 oito">
                <img id='est' src={Estoque} className='animate__animated' alt="" />
                <img id='estoqueR' className='animate__animated' src={EstoqueR} alt="" />
                <img id='gvb' src={GVB} alt="" />
            </section>
            <section className='9 nove'>
                <div className="sete">
                    <div className="d-flex titulo7 ">
                        <h1>7 </h1><h3>Engarrafamento</h3>
                        <img className='animate__animated' id='garrafas' src={Garrafas} alt="" />
                    </div>
                    <div id='exp-cana7' className='col-md-10 d-flex'>
                        <p>Por fim o conteúdo é armazenado para ser enviado a distribuição.</p>

                    </div>
                </div>
            </section>
            <section className='carro'>
                <h1>SABORES</h1>
                <Slider />
            </section>
            <section className='receitas'>
                <h1>RECEITAS</h1>
                <div className="fotosR d-flex">
                    <div className="teste">
                        <img src={Detox} alt="" />
                        <li id='nomee'>Detox de Ouro</li>
                    </div>
                    <div className="teste">
                        <img src={Raspadinha} alt="" />
                        <li id='nomee'>Raspadinha de Melancia</li>
                    </div>
                    <div className="teste">
                        <img src={Caipirinha} alt="" />
                        <li id='nomee'>Caipirinha</li>
                    </div>
                </div>
                <div className="botao col-md-12">
                    <button>Ver todos os drinks</button>
                </div>
            </section>
            <section className="parallax">
                <img src={Logo} alt="" />
            </section>
        </div >


    );


}


export default Home;