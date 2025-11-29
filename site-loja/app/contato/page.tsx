"use client"; // Isso permite que o botão funcione no navegador

import React from 'react';

export default function Contato() {
  
  // Função que roda quando clica no botão
  const enviarMensagem = (e: React.FormEvent) => {
    e.preventDefault(); // Não recarrega a página
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <div className="max-w-[1200px] mx-auto p-8 grid md:grid-cols-2 gap-10">
      
      {/* Lado Esquerdo: Informações */}
      <div className="bg-[#fadadd] p-8 rounded-xl h-fit">
        <h2 className="text-3xl font-bold text-[#2b2b2b] mb-6">Fale Conosco</h2>
        <p className="mb-4 text-[#2b2b2b]">Tem alguma dúvida sobre tamanho ou entrega? Mande uma mensagem!</p>
        
        <div className="space-y-4 mt-6">
          <p><strong>WhatsApp:</strong> +55 (83) 99815-5188</p>
          <p><strong>Email:</strong>Jhulymodas83@gmail.com</p>
          <p><strong>Endereço:</strong>Rua João Alves Cordeiro 223/ Complemento: Bloco B</p>
        </div>
      </div>

      {/* Lado Direito: Formulário */}
      <form onSubmit={enviarMensagem} className="bg-white p-8 border-2 border-[#fadadd] rounded-xl shadow-sm">
        <label className="block mb-2 font-bold text-gray-700">Nome</label>
        <input 
          type="text" 
          className="w-full border p-3 rounded mb-4 bg-gray-50 outline-[#d4af37]" 
          placeholder="Seu nome" 
          required
        />

        <label className="block mb-2 font-bold text-gray-700">Email</label>
        <input 
          type="email" 
          className="w-full border p-3 rounded mb-4 bg-gray-50 outline-[#d4af37]" 
          placeholder="Seu email" 
          required
        />

        <label className="block mb-2 font-bold text-gray-700">Mensagem</label>
        <textarea 
          className="w-full border p-3 rounded mb-6 h-32 bg-gray-50 outline-[#d4af37]" 
          placeholder="Escreva sua dúvida aqui..." 
          required
        ></textarea>

        <button 
          type="submit" 
          className="w-full bg-[#d4af37] text-white font-bold py-3 rounded-full hover:bg-[#bfa13a] transition-all"
        >
          Enviar Mensagem
        </button>
      </form>

    </div>
  );
}