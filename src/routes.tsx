
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index';
import Receitas from './pages/Receitas/index';
import Eventos from './pages/Eventos/index';
import Produtos from './pages/Produtos/index';
import Compre from './pages/Compre/index';
import Nav from './components/nav/index';
import Footer from './components/Footer/index';




function Routers() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/receitas" element={<Receitas />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/eventos" element={<Eventos />} />
                <Route path="/compre" element={<Compre />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
export default Routers;
