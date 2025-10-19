import { Trophy, RotateCcw, Star } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

function TelaResultados() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pontuacao } = location.state || {
    pontuacao: 0,
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl">
        <div className="p-8 md:p-12 text-center">
          {/* Ícone de Troféu */}
          <div className="flex justify-center mb-6">
            <div className="bg-secondary/10 rounded-full p-6">
              <Trophy className="w-16 h-16 text-secondary" />
            </div>
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Quiz Concluído!
          </h1>

          {/* Pontuação */}
          <div className="mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-3xl md:text-4xl text-gray-500">
                Pontuação: 
              </span>
            </div>

            {/* Estrelas e Porcentagem */}
            <div className="flex items-center justify-center gap-2 text-secondary text-xl font-semibold">
              <Star className="w-6 h-6 fill-secondary" />
              <span>{pontuacao}</span>
              <Star className="w-6 h-6 fill-secondary" />
            </div>
          </div>

          {/* Mensagem de Feedback */}
          <p className="text-gray-600 text-lg mb-6">
            Bom começo! Revise os conceitos e tente novamente.
          </p>

          {/* Card de Incentivo */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-primary">
                Continue aprendendo!
              </span>{" "}
              A Engenharia de Produção é uma área fascinante que combina gestão,
              tecnologia e inovação. Cada tentativa é uma oportunidade de
              crescimento! 🚀
            </p>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button
              onClick={() => navigate("/")}
              className="flex-1 bg-secondary hover:bg-secondary/90 text-white py-4 px-6 rounded-lg text-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="h-5 w-5" />
              Refazer Quiz
            </button>
          </div>

          {/* Link Voltar ao Início */}
          <button
            onClick={() => navigate("/")}
            className="text-secondary hover:underline font-medium"
          >
            Voltar ao Início
          </button>
        </div>
      </div>
    </div>
  );
}

export default TelaResultados;
