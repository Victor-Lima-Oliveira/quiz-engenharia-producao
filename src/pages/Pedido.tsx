import { useState } from "react";
import { Heart, Sparkles, X } from "lucide-react";
import confetti from "canvas-confetti";

function TelaPedido() {
  const [showError, setShowError] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleAccept = () => {
    // Efeito de confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    setTimeout(() => {}, 500);
  };

  const handleReject = () => {
    // Mostra mensagem de erro
    setShowError(true);

    // Move o botão "Preciso pensar..." para posição aleatória
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    setButtonPosition({
      x: Math.random() * maxX,
      y: Math.random() * maxY,
    });

    // Esconde a mensagem após 2 segundos
    setTimeout(() => {
      setShowError(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Card Principal */}
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-white/20">
        {/* Coração */}
        <div className="flex justify-center mb-8">
          <Heart className="w-20 h-20 text-pink-400 fill-pink-400 animate-bounce" />
        </div>

        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Um Momento Especial
        </h1>

        {/* Texto romântico */}
        <div className="space-y-6 mb-8">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Cada momento ao seu lado tem sido uma descoberta incrível. Você me
            faz querer ser uma pessoa melhor, mesmo sendo muito doidinho (Afinal
            a diferença entre você e o doidinho do centro é que você tem casa)
          </p>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            E a pergunta que não quer calar é...
          </p>
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleAccept}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            <Heart className="w-5 h-5 fill-white" />
            Sim! 
          </button>
          {showError === false ?(
            <button
              onClick={handleReject}
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 border border-white/30"
              style={{
                position:
                  buttonPosition.x || buttonPosition.y ? "fixed" : "relative",
                left: buttonPosition.x || "auto",
                top: buttonPosition.y || "auto",
                transition: "all 0.3s ease",    
              }}
            >
              Preciso pensar...
            </button>
          ):('')}
        </div>
      </div>

      {/* Mensagem de erro (Sooner/Toast) */}
      {showError && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 animate-bounce z-50">
          <X className="w-6 h-6" />
          <span className="font-semibold">
            Resposta incorreta! Tente novamente 😊
          </span>
        </div>
      )}

      {/* Rodapé */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-white/70 text-sm flex items-center gap-2">
          Feito com muito carinho
          <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
        </p>
      </div>
    </div>
  );
}

export default TelaPedido;
