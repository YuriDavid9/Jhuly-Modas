"use client";
import React, { createContext, useContext, useState } from "react";

// Definimos o formato do Produto
interface Produto {
  id: number;
  nome: string;
  preco: string;
}

interface CarrinhoContextType {
  itens: Produto[]; // Agora guardamos uma lista, não só um número
  adicionarAoCarrinho: (produto: Produto) => void;
  quantidade: number;
}

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export function CarrinhoProvider({ children }: { children: React.ReactNode }) {
  const [itens, setItens] = useState<Produto[]>([]);

  const adicionarAoCarrinho = (produto: Produto) => {
    // Adiciona o novo produto na lista antiga
    setItens((listaAtual) => [...listaAtual, produto]);
  };

  return (
    <CarrinhoContext.Provider value={{ itens, adicionarAoCarrinho, quantidade: itens.length }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const context = useContext(CarrinhoContext);
  if (!context) throw new Error("useCarrinho deve ser usado dentro de um CarrinhoProvider");
  return context;
}