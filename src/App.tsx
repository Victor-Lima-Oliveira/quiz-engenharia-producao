import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TelaPerguntas from "@/pages/Perguntas";
import TelaInicial from "@/pages/Inicial";
import TelaResultados from "@/pages/QuadroResultados";
import TelaPedido from "@/pages/Pedido";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/perguntas" element={<TelaPerguntas />} />
        <Route path="/final" element={<TelaResultados />} />
        <Route path="/pedido" element={<TelaPedido />} />
      </Routes>
    </Router>
  )
}

export default App;
