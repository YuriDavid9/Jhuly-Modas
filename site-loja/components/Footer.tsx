import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "../app/config";

export default function Footer() {
  return (
    // Borda dourada no topo para combinar com o resto
    <footer className="bg-[#2b2b2b] text-white border-t-4 border-[#d4af37] mt-10">
      
      <div className="max-w-[1200px] mx-auto p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Coluna 1: Sobre a Marca */}
        <div>
          <h3 className="text-xl font-bold text-[#d4af37] mb-4 uppercase">
            {SITE_CONFIG.nome}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Sua loja de moda feminina favorita. Trazendo elegância, conforto e 
            estilo para todas as ocasiões. Vista-se de você mesma.
          </p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Navegação</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/colecao" className="hover:text-[#d4af37] transition-colors">
                Coleção Completa
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:text-[#d4af37] transition-colors">
                Nossa História
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-[#d4af37] transition-colors">
                Fale Conosco
              </Link>
            </li>
            <li>
              <Link href="/carrinho" className="hover:text-[#d4af37] transition-colors">
                Meu Carrinho
              </Link>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contato</h3>
          <div className="text-gray-300 text-sm space-y-2">
            <p>📍 Enviamos para todo o Brasil</p>
            <p>📱 WhatsApp: (11) 99999-9999</p>
            <p>📧 Email: contato@{SITE_CONFIG.nome.toLowerCase()}.com</p>
          </div>
          
          {/* Redes Sociais (Simuladas) */}
          <div className="flex gap-4 mt-4">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#2b2b2b] font-bold cursor-pointer hover:bg-[#d4af37]">Ig</div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#2b2b2b] font-bold cursor-pointer hover:bg-[#d4af37]">Fb</div>
          </div>
        </div>

      </div>

      {/* Faixa final de Direitos Autorais */}
      <div className="bg-[#1a1a1a] text-center p-4 text-xs text-gray-500">
        <p>&copy; 2025 {SITE_CONFIG.nome}. Todos os direitos reservados.</p>
      </div>

    </footer>
  );
}