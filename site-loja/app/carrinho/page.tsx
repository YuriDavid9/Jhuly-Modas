"use client";

import React from "react";
import Link from "next/link";
import { useCarrinho } from "../context/CarrinhoContext";
import { SITE_CONFIG } from "../config"; // Importando o número

export default function PaginaCarrinho() {
  const { itens } = useCarrinho();

  // Função que monta o texto e abre o Zap
  const finalizarPeloWhatsapp = () => {
    // 1. Cabeçalho da mensagem
    let mensagem = `Olá! Gostaria de finalizar o pedido no site *${SITE_CONFIG.nome}*:%0A%0A`;

    // 2. Loop para listar cada item (Nome e Preço)
    itens.forEach((item) => {
      // %0A significa "pular linha" na linguagem da internet
      mensagem += `🛍️ ${item.nome} - ${item.preco}%0A`;
    });

    // 3. Rodapé da mensagem
    mensagem += `%0A*Aguardo confirmação!*`;

    // 4. Cria o link do WhatsApp
    const linkWhatsapp = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${mensagem}`;

    // 5. Abre em uma nova aba
    window.open(linkWhatsapp, "_blank");
  };

  return (
    <div className="max-w-[800px] mx-auto p-8">
      <h1 className="text-3xl font-bold text-[#d4af37] mb-8 text-center font-serif uppercase tracking-widest">
        Seu Carrinho
      </h1>

      {itens.length === 0 ? (
        <div className="text-center py-10 bg-white rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xl text-gray-500 mb-4">Seu carrinho está vazio 😢</p>
          <Link href="/colecao" className="text-[#d4af37] font-bold underline hover:text-[#bfa13a]">
            Voltar às compras
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          
          {/* Lista de Produtos */}
          {itens.map((item, index) => (
            <div key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#fef7f7] rounded-md flex items-center justify-center text-xs text-gray-400 border border-[#fadadd]">
                  Foto
                </div>
                <div>
                  <h3 className="font-bold text-[#2b2b2b]">{item.nome}</h3>
                  <p className="text-sm text-gray-400">Cód: {item.id}</p>
                </div>
              </div>
              <p className="text-[#d4af37] font-bold">{item.preco}</p>
            </div>
          ))}

          {/* Botão do WhatsApp */}
          <div className="mt-8 flex flex-col items-end gap-2">
            <p className="text-sm text-gray-500">Total de itens: {itens.length}</p>
            
            <button 
              onClick={finalizarPeloWhatsapp}
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <span>📱</span> Finalizar no WhatsApp
            </button>
          </div>

        </div>
      )}
    </div>
  );
}