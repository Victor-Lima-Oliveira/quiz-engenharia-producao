import { useEffect, useState } from "react";
import Papa from "papaparse";
import type { Pergunta } from "@/types/Perguntas";

export function useQuizData() {
  const [perguntas, setPerguntas] = useState<Pergunta[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://docs.google.com/spreadsheets/d/1xSKmeapxAYN5HxKdvLABqlmXcZUMAXQNyhDc-JOiieE/export?format=csv&id=1xSKmeapxAYN5HxKdvLABqlmXcZUMAXQNyhDc-JOiieE";

      const response = await fetch(url);
      const csvText = await response.text();

      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          const dados = result.data as Pergunta[];
          setPerguntas(dados);
        },
      });
    };

    fetchData();
  }, []);

  return perguntas;
}
