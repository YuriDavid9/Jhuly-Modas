import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. Importando os componentes
import Header from "../components/Header";
import Footer from "../components/Footer"; 
import { CarrinhoProvider } from "./context/CarrinhoContext"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jhuly Modas",
  description: "Loja de roupas femininas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      {/* Fundo rosinha recuperado */}
      <body className={`${inter.className} bg-[#fef7f7]`}>
        
        <CarrinhoProvider>
          
          {/* O Cabeçalho fica no topo */}
          <Header />

          {/* O conteúdo do site (Home, Coleção) fica no meio */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* O Rodapé TEM que estar aqui, antes de fechar o Provider */}
          <Footer />

        </CarrinhoProvider>

      </body>
    </html>
  );
}