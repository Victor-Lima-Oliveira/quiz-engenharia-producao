import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BookOpen, ChartLine, Cog, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/img/hero-engineering.jpg";

const categories = [
  {
    icon: Cog,
    title: "Processos",
    description: "Otimização e gestão de processos produtivos",
    id: "processos",
  },
  {
    icon: ChartLine,
    title: "Gestão",
    description: "Estratégias para melhorar resultados",
    id: "gestao",
  },
  {
    icon: Factory,
    title: "Produção",
    description: "Técnicas de manufatura e qualidade",
    id: "producao",
  },
  {
    icon: BookOpen,
    title: "Conhecimento",
    description: "Aprenda conceitos essenciais",
    id: "conhecimento",
  },
];

function TelaInicial() {
  const navigate = useNavigate();
  
  return (
    <div className="container">
      {/* Hero Section - Responsivo */}
      <div className="flex flex-col md:flex-row items-center justify-between my-10 gap-8">
        {/* Texto */}
        <div className="w-full md:w-1/2 order-1">
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight">
            Descubra o Mundo da{" "}
            <span className="text-secondary">Engenharia de Produção</span>!
          </h1>
          <h2 className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
            Teste seus conhecimentos com perguntas interativas sobre processos,
            gestão, qualidade e inovação. Aprenda de forma divertida e descubra
            seu potencial na engenharia!
          </h2>
        </div>
        
        {/* Imagem */}
        <img 
          src={heroImage} 
          alt="Engenharia de Produção"
          className="w-full md:w-1/2 h-auto rounded-lg object-cover shadow-lg order-2" 
        />
      </div>

      {/* Botão */}
      <Button
        variant="secondary"
        size="lg"
        className="text-white my-10 w-full md:w-auto"
        onClick={() => navigate("/perguntas")}
      >
        Começar Quiz
      </Button>

      {/* Cards - Responsivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
          >
            <CardHeader>
              <category.icon className="h-6 w-6 text-secondary" />
            </CardHeader>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2 text-primary">
                {category.title}
              </h2>
              <p className="text-gray-600">{category.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TelaInicial;