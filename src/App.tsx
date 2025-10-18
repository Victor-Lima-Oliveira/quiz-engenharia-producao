import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TelaPerguntas from "@/pages/Perguntas";
import TelaInicial from "@/pages/Inicial";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/perguntas" element={<TelaPerguntas />} />
      </Routes>
    </Router>
  )
}

export default App;
