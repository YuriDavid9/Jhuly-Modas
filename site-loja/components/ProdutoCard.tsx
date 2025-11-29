"use client"; 

import React, { useState } from 'react';
import Link from 'next/link';
// 1. Importando o carrinho
import { useCarrinho } from "../app/context/CarrinhoContext";

interface ProdutoCardProps {
  id: number;
  nome: string;
  preco: string;
  descricao: string;
}

export default function ProdutoCard({ id, nome, preco, descricao }: ProdutoCardProps) {
  const [adicionado, setAdicionado] = useState(false);
  
  // 2. Pegando a função de adicionar
  const { adicionarAoCarrinho } = useCarrinho();

  const lidarComClique = () => {

    adicionarAoCarrinho({ id, nome, preco })
    // 3. Executa a adição!
    
    // Efeito visual
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 2000);
  };

  return (
    <div className="bg-white border-2 border-[#fadadd] rounded-xl p-4 shadow-sm hover:shadow-md transition-all">
      <Link href={`/produto/${id}`}>
        <div className="w-full h-[200px] bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 cursor-pointer hover:opacity-80 transition-opacity">
          Sem Imagem
        </div>
        <h3 className="text-xl font-bold text-[#2b2b2b] cursor-pointer hover:text-[#d4af37]">{nome}</h3>
      </Link>

      <p className="text-gray-600 text-sm mb-2">{descricao}</p>
      <p className="text-[#d4af37] font-bold text-lg mb-3">{preco}</p>
      
      <button 
        onClick={lidarComClique}
        className={`w-full font-bold py-2 rounded-full transition-colors ${
          adicionado ? "bg-green-500 text-white" : "bg-[#fadadd] text-[#2b2b2b] hover:bg-[#d4af37] hover:text-white"
        }`}
      >
        {adicionado ? "Adicionado! ✅" : "Comprar"}
      </button>
    </div>
  );
}