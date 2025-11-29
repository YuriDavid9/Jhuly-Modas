"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCarrinho } from "../app/context/CarrinhoContext";

export default function Menu() {
  const caminhoAtual = usePathname();
  const { quantidade } = useCarrinho();

  // Estilo Original: Fonte normal, tamanho médio, sem ser maiúsculo
  const estiloLink = "text-base font-medium transition-colors hover:text-[#d4af37]";
  
  const linkAtivo = (rota: string) => {
    return caminhoAtual === rota 
      ? `${estiloLink} text-[#d4af37]` // Ativo: Dourado
      : `${estiloLink} text-[#2b2b2b]`; // Normal: Cinza escuro
  };

  return (
    <nav>
      <ul className="flex items-center gap-6">
        <li><Link href="/colecao" className={linkAtivo("/colecao")}>Coleção</Link></li>
        <li><Link href="/sobre" className={linkAtivo("/sobre")}>Sobre</Link></li>
        <li><Link href="/contato" className={linkAtivo("/contato")}>Contato</Link></li>
        
        {/* Carrinho Simples */}
        <li className="ml-2">
        <Link href="/carrinho"> {/* Adicionei o Link aqui */}
        <div className="relative group cursor-pointer">
            <span className="text-2xl">🛒</span>
            {quantidade > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#d4af37] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
            {quantidade}
            </span>
            )}
        </div>
        </Link>
        </li>
      </ul>
    </nav>
  );
}