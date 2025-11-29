import React from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { SITE_CONFIG } from "../app/config"; 

export default function Header() {
  return (
    // ESTILO ORIGINAL (RECUPERADO):
    // - Fundo branco
    // - Borda rosa (#fadadd) embaixo de 2px
    // - Sombra levemente rosada
    <header className="sticky top-0 z-50 bg-white border-b-2 border-[#fadadd] shadow-[0_2px_8px_rgba(250,218,221,0.5)]">
      
      <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3">
          
          {/* Logo com a borda DOURADA (#d4af37) igual ao original */}
          <div className="relative rounded-full border-2 border-[#d4af37] p-[2px]">
            <Image 
              src="/img/logo-jhuly.png" 
              alt={SITE_CONFIG.nome} 
              width={60} 
              height={60}
              className="rounded-full object-cover"
            />
          </div>
          
          {/* Texto: Fonte Sans (padrão), negrito forte e cor cinza escuro (#2b2b2b) */}
          <h1 className="text-3xl font-bold text-[#2b2b2b]">
            {SITE_CONFIG.nome}
          </h1>
          
        </Link>

        {/* Menu na direita */}
        <Menu />
        
      </div>
    </header>
  );
}