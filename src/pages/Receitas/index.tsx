import React, {  useState } from 'react';
import './style.css';
import 'animate.css';
import Negroni from '../../assets/imgs/negroni.png';
import Cosmo from '../../assets/imgs/cosmopolitan.png';
import Shot from '../../assets/imgs/shotdaalegria.png';
import Detox from '../../assets/imgs/detox.png';
import Raspadinha from '../../assets/imgs/raspadinha.png';
import Caipirinha from '../../assets/imgs/caipirinha.png';
import Bombeirinho from '../../assets/imgs/bombeirinho.png';
import Rapariga from '../../assets/imgs/rapariga.png';
import CaipirinhaOuro from '../../assets/imgs/caipirinhadeouro.png';
import {  Modal } from 'react-bootstrap';
import { RiCloseFill } from 'react-icons/ri';




function Home() {


    const [show, setShow] = useState(false);
    const [showR, setShowR] = useState(false);
    const [showN, setShowN] = useState(false);
    const [showB, setShowB] = useState(false);
    const [showC, setShowC] = useState(false);
    const [showS, setShowS] = useState(false);
    const [showCo, setShowCo] = useState(false);
    const [showRa, setShowRa] = useState(false);
    const [showCp, setShowCp] = useState(false);

    const handleClose = () => setShow(false);
    const handleCloseR = () => setShowR(false);
    const handleCloseN = () => setShowN(false);
    const handleCloseB = () => setShowB(false);
    const handleCloseC = () => setShowC(false);
    const handleCloseS = () => setShowS(false);
    const handleCloseCo = () => setShowCo(false);
    const handleCloseRa = () => setShowRa(false);
    const handleCloseCp = () => setShowCp(false);

    const handleShow = () => setShow(true);
    const handleShowR = () => setShowR(true);
    const handleShowN = () => setShowN(true);
    const handleShowB = () => setShowB(true);
    const handleShowC = () => setShowC(true);
    const handleShowS = () => setShowS(true);
    const handleShowCo = () => setShowCo(true);
    const handleShowRa = () => setShowRa(true);
    const handleShowCp = () => setShowCp(true);



    return (

        <div className="mae">
            <h1>RECEITAS</h1>
            <div className="margemR">
                <div className="fotosR drinks">
                    <div className="fotosR d-flex">
                        <div className="teste">
                            <a onClick={handleShow}>
                                <img src={Detox} alt="" />
                            </a>
                            <li id='nome'>Detox de Ouro</li>
                        </div>
                        <div className="teste">
                            <a onClick={handleShowR}>
                                <img src={Raspadinha} alt="" />
                            </a>
                            <li id='nome'>Raspadinha de Melancia</li>
                        </div>
                        <div className="teste">
                            <a onClick={handleShowN}>
                                <img src={Negroni} alt="" />
                            </a>
                            <li id='nome'>Negroni</li>
                        </div>
                    </div>
                    <div className="fotosR d-flex">
                        <div className="teste">
                            <a onClick={handleShowB}>
                                <img src={Bombeirinho} alt="" />
                            </a>
                            <li id='nome'>Bombeirinho</li>
                        </div>
                        <div className="teste">
                            <a onClick={handleShowC}>
                                <img src={Caipirinha} alt="" />
                            </a>
                            <li id='nome'>Caipirinha</li>
                        </div>
                        <div className="teste">
                            <a onClick={handleShowS}>
                                <img src={Shot} alt="" />
                            </a>
                            <li id='nome'>Shot da Felicidade </li>
                        </div>
                    </div>
                    <div className="fotosR d-flex">
                        <div className="teste">
                            <a onClick={handleShowCo}>
                                <img src={Cosmo} alt="" />
                            </a>
                            <li id='nome'>Cosmopolitan</li>
                        </div>
                        <div className="teste">
                            <a onClick={handleShowRa}>
                                <img src={Rapariga} alt="" />
                            </a>
                            <li id='nome'>Rapariga</li>
                        </div>
                        <div className="teste">
                            <a onClick={handleShowCp}>
                                <img src={CaipirinhaOuro} alt="" />
                            </a>
                            <li id='nome'>Caipirinha de Ouro </li>
                        </div>
                    </div>
                </div>
            </div>

            {/*=================================== MODAL DA RASPADINHA  ====================================== */}
            <Modal show={showR} onHide={handleCloseR} animation={false}>
                <div className='fundoModal'>
                    <div className="modalFoto">
                        <img src={Raspadinha} alt="" />
                    </div>
                    <div className="comoFazer">
                        <div className="tituloModal">
                            <h1>Raspadinha de Melancia</h1>
                            <a onClick={handleCloseR}>
                                <RiCloseFill id='close' color='black' size={24} />
                            </a>
                        </div>
                        <b>Modo de preparo</b>
                        <ul className='modoFazer'>
                            <li>Em um liquidificador despeje o gelo, o leite condensado, a melancia e a cachaça</li>
                            <li>Bata bem até ficar tudo homogêneo</li>
                            <li>Coloque em um copo baixo e sirva</li>
                        </ul>
                        <div className="ingredientes">
                            <hr />
                            <b>Ingredientes</b>
                            <div className="precisa">
                                <ul className='primeiro'>
                                    <li>5 Fatias de melancia (descascadas e sem caroço)</li>
                                    <li>1 forma de gelo em cubos</li>
                                </ul>
                                <ul className='segundo'>
                                    <li>1 lata de leite condensado</li>
                                    <li>Cachaça ouro 1 Prata</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </Modal>
            {/*=================================== MODAL DA RASPADINHA - FIM ====================================== */}
            {/*=================================== MODAL DO DETOX OURO ====================================== */}
            <Modal show={show} onHide={handleClose} animation={false}>
                <div className='fundoModal'>
                    <div className="modalFoto">
                        <img src={Detox} alt="" />
                    </div>
                    <div className="comoFazer">
                        <div className="tituloModal">
                            <h1>Detox de Ouro</h1>
                            <a onClick={handleClose}>
                                <RiCloseFill id='close' color='black' size={24} />
                            </a>
                        </div>
                        <b>Modo de preparo</b>
                        <ul className='modoFazer'>
                            <li>Em uma coqueteleira coloque o gengibre e o limão cortado em pedaços e macere</li>
                            <li>Em seguida acrescente o abacaxi, a hortelã e o açúcar e macere novamente</li>
                            <li>Complete com gelo </li>
                            <li>Bata até sentir sua mão congelar</li>
                            <li>Por fim sirva em um copo fundo</li>
                        </ul>
                        <div className="ingredientes">
                            <hr />
                            <b>Ingredientes</b>
                            <div className="precisa">
                                <ul className='primeiro'>
                                    <li>70 ml de cachaça ouro 1 prata</li>
                                    <li>6 pedaços de abacaxi</li>
                                    <li>5 folhas de hortelã</li>
                                    <li>1 fatia de gengibre</li>
                                </ul>
                                <ul className='segundo'>
                                    <li>½ limão tahiti</li>
                                    <li>2 colheres de açúcar</li>
                                    <li>cubos de gelo</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </Modal>
            {/*=================================== MODAL DO DETOX OURO - FIM ====================================== */}
            {/*=================================== MODAL DO BOMBEIRINHO ====================================== */}
            <Modal show={showB} onHide={handleCloseB} animation={false}>
                <div className='fundoModal'>
                    <div className="modalFoto">
                        <img src={Bombeirinho} alt="" />
                    </div>
                    <div className="comoFazer">
                        <div className="tituloModal">
                            <h1>Bombeirinho</h1>
                            <a onClick={handleCloseB}>
                                <RiCloseFill id='close' color='black' size={24} />
                            </a>
                        </div>
                        <b>Modo de preparo</b>
                        <ul className='modoFazer'>
                            <li>Sirva a cachaça e o suco de limão no copo</li>
                            <li>complete com o xarope de groselha</li>
                            <li>Agora é só beber</li>
                        </ul>
                        <div className="ingredientes">
                            <hr />
                            <b>Ingredientes</b>
                            <div className="precisa">
                                <ul className='primeiro'>
                                    <li>Copo de shot</li>
                                    <li>5ml de xarope grenadine ou groselha</li>
                                </ul>
                                <ul className='segundo'>
                                    <li>5ml de suco de limão tahiti</li>
                                    <li>40ml de cachaça ouro 1 prata</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </Modal>
            {/*=================================== MODAL DO BOMBEIRINHO - FIM ====================================== */}
            {/*=================================== MODAL DO CAIPIRINHA ====================================== */}
            <Modal show={showC} onHide={handleCloseC} animation={false}>
                <div className='fundoModal'>
                    <div className="modalFoto">
                        <img src={Caipirinha} alt="" />
                    </div>
                    <div className="comoFazer">
                        <div className="tituloModal">
                            <h1>Caipirinha</h1>
                            <a onClick={handleCloseC}>
                                <RiCloseFill id='close' color='black' size={24} />
                            </a>
                        </div>
                        <b>Modo de preparo</b>
                        <ul className='modoFazer'>
                            <li>Corte o limão em rodelas</li>
                            <li>Em uma coqueteleira coloque o limão, o açúcar , a cachaça e macere</li>
                            <li>Adicione o gelo</li>
                            <li>Bata até sentir sua mão “congelar” </li>
                            <li>Agora é só servir em um copo fundo</li>
                        </ul>
                        <div className="ingredientes">
                            <hr />
                            <b>Ingredientes</b>
                            <div className="precisa">
                                <ul className='primeiro'>
                                    <li>1 limão grande</li>
                                    <li>2 colheres de açúcar</li>
                                </ul>
                                <ul className='segundo'>
                                    <li>gelo</li>
                                    <li>50ml de cachaça ouro 1 prata</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </Modal>
            {/*=================================== MODAL DO CAIPIRINHA - FIM ====================================== */}
            {/*=================================== MODAL DO SHOT DA FELICIDADE ====================================== */}
            <Modal show={showS} onHide={handleCloseS} animation={false}>
                <div className='fundoModal'>
                    <div className="modalFoto">
                        <img src={Shot} alt="" />
                    </div>
                    <div className="comoFazer">
                        <div className="tituloModal">
                            <h1>Shot da Felicidade</h1>
                            <a onClick={handleCloseS}>
                                <RiCloseFill id='close' color='black' size={24} />
                            </a>
                        </div>
                        <b>Modo de preparo</b>
                        <ul className='modoFazer'>
                            <li>Antes de começar, encha o seu copo de shot de gelo e deixe descansando por 10 mi</li>
                            <li>Retire o gelo do copo e sirva uma dose de Cachaça Ouro 1 Vida Boa</li>
                            <li>Pegue o limão e com um ralador retire raspas de sua casca e coloque dentro do copo</li>
                            <li>E por fim é só servir e seja feliz</li>
                        </ul>
                        <div className="ingredientes">
                            <hr />
                            <b>Ingredientes</b>
                            <div className="precisa">
                                <ul className='primeiro'>
                                    <li>Um copo de shot 50 ml</li>
                                    <li>Cachaça Ouro 1 Vida Boa</li>
                                </ul>
                                <ul className='segundo'>
                                    <li>1 limão</li>
                                    <li>Gelo</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </Modal>
            {/*=================================== MODAL DO SHOT  - FIM ====================================== */}
            {/*=================================== MODAL DO COSMOPOLITAN ====================================== */}
            <Modal show={showCo} onHide={handleCloseCo} animation={false}>
                <div className='fundoModal'>
                    <div className="modalFoto">
                        <img src={Cosmo} alt="" />
                    </div>
                    <div className="comoFazer">
                        <div className="tituloModal">
                            <h1>Cosmopolitan</h1>
                            <a onClick={handleCloseCo}>
                                <RiCloseFill id='close' color='black' size={24} />
                            </a>
                        </div>
                        <b>Modo de preparo</b>
                        <ul className='modoFazer'>
                            <li>Dentro de uma coqueteleira coloque os cubos de gelo, o suco de limao e de cranberry, o licor e a cachaça</li>
                            <li>Bata até sentir sua mão “congelar”</li>
                            <li>Por último, sirva a batida em um copo raso evitando que as pedras de gelo caiam junto.</li>
                            <li>Agora é só apreciar</li>
                        </ul>
                        <div className="ingredientes">
                            <hr />
                            <b>Ingredientes</b>
                            <div className="precisa">
                                <ul className='primeiro'>
                                    <li>30 ml de Cachaça Ouro 1 Prata</li>
                                    <li>10 ml de licor de laranja (Cointreau)</li>
                                </ul>
                                <ul className='segundo'>
                                    <li>10 ml de suco de limão</li>
                                    <li>20 ml de suco de cranberry</li>
                                    <li>5 ou 6 cubos de gelo</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </Modal>
            {/*=================================== MODAL DO NEGRONI - FIM ====================================== */}
            {/*=================================== MODAL DO RAPARIGA ====================================== */}
            <Modal show={showRa} onHide={handleCloseRa} animation={false}>
                <div className='fundoModal'>
                    <div className="modalFoto">
                        <img src={Rapariga} alt="" />
                    </div>
                    <div className="comoFazer">
                        <div className="tituloModal">
                            <h1>Rapariga</h1>
                            <a onClick={handleCloseRa}>
                                <RiCloseFill id='close' color='black' size={24} />
                            </a>
                        </div>
                        <b>Modo de preparo</b>
                        <ul className='modoFazer'>
                            <li>Coloque o leite de coco, o leite condensado, o licor de cacau e a cachaça em uma coqueteleira</li>
                            <li>Mexa bem</li>
                            <li>Adicione os morangos cortados e macere bem</li>
                            <li>Adicione os cubos de gelo</li>
                            <li>Bata até sentir sua mão “congelar”</li>
                            <li>Por fim, sirva num copo de 400ml</li>
                        </ul>
                    
                        <div className="ingredientes">
                            <hr />
                            <b>Ingredientes</b>
                            <div className="precisa">
                                <ul className='primeiro'>
                                    <li>70 ml de cachaça ouro 1 prata</li>
                                    <li>6 morangos</li>
                                    <li>100 ml de leite de coco</li>
                                </ul>
                                <ul className='segundo'>
                                    <li>100 ml de leite condensado</li>
                                    <li>100 ml de licor de cacau</li>
                                    <li>Pedras de gelo</li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </Modal>
            {/*=================================== MODAL DO RAPARIGA - FIM ====================================== */}
            {/*=================================== MODAL DO CAIPIRINHA OURO ====================================== */}
            <Modal show={showCp} onHide={handleCloseCp} animation={false}>
                <div className='fundoModal'>
                    <div className="modalFoto">
                        <img src={CaipirinhaOuro} alt="" />
                    </div>
                    <div className="comoFazer">
                        <div className="tituloModal">
                            <h1>Caipirinha de Ouro</h1>
                            <a onClick={handleCloseCp}>
                                <RiCloseFill id='close' color='black' size={24} />
                            </a>
                        </div>
                        <b>Modo de preparo</b>
                        <ul className='modoFazer'>
                            <li>Em um copo de 400ml, coloque os limões em rodelas e o açucar e macere</li>
                            <li>Encha o copo de gelo,  adicione a cachaça e mexa</li>
                            <li>Acrescente o café e decore jogando alguns grãos</li>
                            <li>Deixe o drink com aspecto "bifásico" e só mexa quando for beber.</li>
                        </ul>
                        <div className="ingredientes">
                            <hr />
                            <b>Ingredientes</b>
                            <div className="precisa">
                                <ul className='primeiro'>
                                    <li>90 ml da cachaça ouro 1 velha</li>
                                    <li>½  limão taiti</li>
                                    <li>½  limão siciliano</li>
                                    <li>10 ml de café coado ou expresso (frio)</li>
                                </ul>
                                <ul className='segundo'>
                                    <li>2 colheres de sobremesa de açúcar</li>
                                    <li>Cubos de gelo</li>
                                    <li>Grão de café torrado para decorar (opcional) </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </Modal>
            {/*=================================== MODAL DO CAIPIRINHA OURO - FIM ====================================== */}
            {/*=================================== MODAL DO NEGRONI ====================================== */}
            <Modal show={showN} onHide={handleCloseN} animation={false}>
                <div className='fundoModal'>
                    <div className="modalFoto">
                        <img src={Negroni} alt="" />
                    </div>
                    <div className="comoFazer">
                        <div className="tituloModal">
                            <h1>Negroni</h1>
                            <a onClick={handleCloseN}>
                                <RiCloseFill id='close' color='black' size={24} />
                            </a>
                        </div>
                        <b>Modo de preparo</b>
                        <ul className='modoFazer'>
                            <li>Coloque gelo em um copo baixo, até o topo</li>
                            <li>Acrescente o bitter, o vermouth e a cachaça</li>
                            <li>Misture bem com uma colher</li>
                            <li>Agora é só apreciar</li>
                        </ul>
                        <div className="ingredientes">
                            <hr />
                            <b>Ingredientes</b>
                            <div className="precisa">
                                <ul className='primeiro'>
                                    <li>35ml de cachaça ouro 1 edição especial</li>
                                    <li>30ml de bitter</li>
                                </ul>
                                <ul className='segundo'>
                                    <li>30ml de vermouth tinto</li>
                                    <li>gelo</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </Modal>
            {/*=================================== MODAL DO NEGRONI - FIM ====================================== */}

        </div>



    );


}


export default Home;