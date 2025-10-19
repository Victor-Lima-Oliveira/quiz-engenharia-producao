import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { Pergunta } from "@/types/Perguntas";
import { useQuizData } from "@/services/buscaQuiz";
import { Toaster, toast } from "sonner";
import footerImage from "@/img/footer-engineering.jpg";
import { useNavigate } from "react-router-dom";

function shuffleOptions(pergunta: Pergunta) {
  const opcoes = [
    pergunta.opcaoA,
    pergunta.opcaoB,
    pergunta.opcaoC,
    pergunta.correta,
  ];

  for (let i = opcoes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opcoes[i], opcoes[j]] = [opcoes[j], opcoes[i]];
  }

  return opcoes;
}

function TelaPerguntas() {
  const navigate = useNavigate();
  const perguntas = useQuizData();
  const [indexAtual, setIndexAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState<string | null>(
    null
  );
  const [opcoes, setOpcoes] = useState<string[]>([]);
  let pontuacaoAtual = 0;

  // embaralha as opções apenas quando a pergunta muda
  useEffect(() => {
    if (perguntas.length > 0) {
      const novasOpcoes = shuffleOptions(perguntas[indexAtual]);
      setOpcoes(novasOpcoes);
    }
  }, [indexAtual, perguntas]);

  if (perguntas.length === 0)
    return (
      <div className="container max-w-lg mx-auto my-auto text-center">
        <h1>Carregando Perguntas...</h1>
      </div>
    );

  const perguntaAtual = perguntas[indexAtual];
  const progresso = ((indexAtual + 1) / perguntas.length) * 100;
  const pontosNum = Number(perguntaAtual.pontuacao) || 0; // garante number

  function handleProximaPergunta() {
    if (!respostaSelecionada) {
      console.log("Sem resposta selecionada");
      toast.warning("Selecione uma resposta antes de continuar!");
      return;
    }

    const acertou = respostaSelecionada === perguntaAtual.correta;

    if (acertou) {
      pontuacaoAtual = pontuacao + pontosNum;
      setPontuacao((prev) => prev + pontosNum);
      toast.success("Resposta correta! 🎉");
    } else {
      pontuacaoAtual = pontuacao;
      toast.error(
        `Resposta incorreta! A correta era: ${perguntaAtual.correta}`
      );
    }

    const proxima = indexAtual + 1;

    setTimeout(() => {
      if (proxima < perguntas.length) {
        setIndexAtual(proxima);
        setRespostaSelecionada(null);
      } else {
        navigate("/Final", {
          state: {
            pontuacao: pontuacaoAtual,
            totalPerguntas: perguntas.length,
          },
        });
      }
    }, 1000);
  }

  return (
    <>
      <div className="container max-w-lg mx-auto mt-10">
        <Toaster richColors position="top-center" />
        <div className="flex flex-row justify-between ">
          <h6>
            Pergunta {indexAtual + 1} de {perguntas.length}
          </h6>
          <h6>{((indexAtual + 1) / perguntas.length) * 100}%</h6>
        </div>
        <Progress value={progresso} className="mb-6" />
        <h2 className="text-xl font-bold text-center">
          Pontuação: {pontuacao}
        </h2>
        <Card className="shadow-lg relative z-10">
          <CardHeader>
            <h1 className="text-2xl md:text-3xl font-bold text-center text-primary">
              {perguntaAtual.pergunta}
            </h1>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 ">
            {opcoes.map((opcao) => (
              <Button
                key={opcao}
                className="flex-1 py-3 px-4 whitespace-normal break-words"
                onClick={() => setRespostaSelecionada(opcao)}
                variant={
                  respostaSelecionada === opcao ? "secondary" : "outline"
                }
              >
                {opcao}
              </Button>
            ))}
          </CardContent>
        </Card>
        <div className="flex justify-end">
          <Button
            variant="secondary"
            size="lg"
            className="text-white my-10 w-full md:w-auto relative z-10"
            onClick={handleProximaPergunta}
          >
            Próxima Pergunta
          </Button>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full h-1/2 overflow-hidden z-0">
        <img
          src={footerImage}
          className="w-full h-full object-cover"
          alt="Footer"
        />
      </div>
    </>
  );
}

export default TelaPerguntas;
