import Link from "next/link";
// 1. Importando nosso componente novo
import ProdutoCard from "../components/ProdutoCard";

export default function Home() {
  return (
    <div>
      {/* Banner Principal (Hero) */}
      <section className="relative w-full h-[340px] bg-[#fadadd] flex items-center justify-center text-center overflow-hidden">
        <div className="relative z-10 p-5">
          <h2 className="text-4xl font-bold mb-2 text-[#2b2b2b]">Estilo e Conforto em Cada Detalhe</h2>
          <p className="text-xl mb-4 text-[#2b2b2b]">Descubra a nova coleção de moda feminina</p>
          <Link href="/colecao" className="btn-hero hover:bg-[#d4af37] hover:text-white transition-all">
            Ver Coleção
          </Link>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="max-w-[1200px] mx-auto py-10 text-center">
        <h2 className="text-2xl font-bold text-[#d4af37] mb-8">Destaques</h2>
        
        {/* 2. Usando o componente aqui! */}
        <div className="flex flex-wrap justify-center gap-8 px-4">
          
          <div className="w-[300px]">
            <ProdutoCard 
              id={1} // Adicionado
              nome="Vestido Listrado" 
              preco="R$ 79,90" 
              descricao="O queridinho do verão" 
            />
          </div>

          <div className="w-[300px]">
            <ProdutoCard 
              id={2} // Adicionado
              nome="Camisa e Bermuda" 
              preco="R$ 55,00" 
              descricao="Conforto garantido" 
            />
          </div>

          <div className="w-[300px]">
            <ProdutoCard 
              id={3} // Adicionado
              nome="Lançamento Exclusivo" 
              preco="R$ 120,00" 
              descricao="Edição Limitada" 
            />
          </div>

        </div>
      </section>

      {/* Sobre a Loja Resumo */}
      <section className="max-w-[600px] mx-auto my-10 p-8 border-2 border-[#fadadd] rounded-xl bg-white text-center shadow-sm">
        <h2 className="text-2xl text-[#d4af37] font-bold mb-4">Sobre a Loja</h2>
        <p className="text-lg text-gray-700">
          A Jhuly Modas é uma loja de roupas femininas focada em estilo, elegância e conforto. 
          Pensada para mulheres que querem se sentir confiantes em qualquer ocasião.
        </p>
      </section>
    </div>
  );
}