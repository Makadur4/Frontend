import "./App.css";
import Cabecalho from "./componentes/Cabecalho";
import Menu from "./componentes/Menu";
import Main from "./componentes/Main";
import Rodape from "./componentes/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalhe from "./componentes/Detalhe";
import Login from "./componentes/Login";
import Favoritos from "./componentes/Favoritos";
import Carrinho from "./componentes/Carrinho";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />

        <Menu />

        <Routes>
          <Route path="/" element={<Main filtro="" />} />
          <Route path="/masculino" element={<Main filtro="masculino" />} />
          <Route path="/feminino" element={<Main filtro="feminino" />} />
          <Route path="/especiais" element={<Main filtro="especiais" />} />
          <Route path="/ofertas" element={<Main filtro="ofertas" />} />
          <Route path="/detalhe" element={<Detalhe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;