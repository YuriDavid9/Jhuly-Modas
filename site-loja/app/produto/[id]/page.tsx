import React from "react";
import Link from "next/link";
import { produtos } from "../../dados"; 

// Atualizado para Next.js 15: params agora é uma Promessa (Promise)
interface DetalhesProps {
  params: Promise<{
    id: string;
  }>;
}

// 1. Adicionei 'async' antes da função
export default async function DetalhesProduto({ params }: DetalhesProps) {
  
  // 2. Adicionei 'await' para esperar o ID carregar
  const { id } = await params; 
  const idNumerico = Number(id);

  const produto = produtos.find((p) => p.id === idNumerico);

  if (!produto) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Produto não encontrado! 😕</h1>
        <p className="mb-4">Parece que o ID procurado foi: {id}</p>
        <Link href="/colecao" className="text-[#d4af37] underline">
          Voltar para a coleção
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1000px] mx-auto p-10 bg-white border border-[#fadadd] mt-10 rounded-xl shadow-lg">
      <Link href="/colecao" className="text-gray-500 hover:text-[#d4af37] mb-5 block">
        ← Voltar para Coleção
      </Link>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-[#fff0f5] h-[400px] rounded-lg flex items-center justify-center border-2 border-[#d4af37]">
          <span className="text-gray-400">Foto: {produto.nome}</span>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-[#2b2b2b] mb-4">{produto.nome}</h1>
          <p className="text-2xl text-[#d4af37] font-bold mb-6">{produto.preco}</p>
          
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            {produto.descricao}
          </p>
          
          <p className="text-sm text-gray-500 mb-6">Código do produto: #{produto.id}</p>

          <button className="w-full bg-[#d4af37] text-white py-4 rounded-full font-bold text-xl hover:bg-[#bfa13a] transition-all">
            Comprar Agora
          </button>
        </div>
      </div>
    </div>
  );
}