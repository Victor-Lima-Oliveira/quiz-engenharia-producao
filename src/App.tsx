import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TelaPerguntas from "@/pages/Perguntas";
import TelaInicial from "@/pages/Inicial";
import TelaResultados from "@/pages/QuadroResultados";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/perguntas" element={<TelaPerguntas />} />
        <Route path="/final" element={<TelaResultados />} />
      </Routes>
    </Router>
  )
}

export default App;
