import React from 'react';
import ProdutoCard from '../../components/ProdutoCard';
import { produtos } from "../dados";

export default function Colecao() {
  return (
    <div className="max-w-[1200px] mx-auto p-8">
      <h2 className="text-3xl font-bold text-[#d4af37] mb-6 text-center">Nossa Coleção</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* O erro estava por aqui. Agora está corrigido: */}
        {produtos.map((item) => (
          <ProdutoCard 
            key={item.id}
            id={item.id} 
            nome={item.nome}
            preco={item.preco}
            descricao={item.descricao}
          />
        ))}

      </div>
    </div>
  );
}