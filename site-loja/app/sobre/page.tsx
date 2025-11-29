import React from 'react';

export default function Sobre() {
  return (
    <div className="max-w-[800px] mx-auto p-10 bg-white rounded-xl shadow-sm my-10 border border-[#fadadd]">
      <h1 className="text-4xl font-bold text-[#d4af37] mb-6 text-center">Nossa História</h1>
      
      <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
        <p>
          A <strong className="text-[#ff69b4]">Jhuly Modas</strong> nasceu do sonho de levar elegância e conforto para todas as mulheres. 
          Fundada com muito carinho, nossa missão é oferecer peças que realcem a beleza natural de cada cliente.
        </p>

        <p>
          Trabalhamos com uma curadoria especial de tecidos e tendências, garantindo que você esteja sempre bem vestida, 
          seja para o dia a dia ou para ocasiões especiais.
        </p>

        <div className="w-full h-[250px] bg-[#fadadd] rounded-lg flex items-center justify-center my-6">
          <span className="text-gray-500 italic">Foto da Loja ou da Equipe</span>
        </div>

        <p>
          Prezamos pela qualidade, pelo bom atendimento e, acima de tudo, pela satisfação de ver nossas clientes felizes com seus looks.
        </p>
      </div>
    </div>
  );
}