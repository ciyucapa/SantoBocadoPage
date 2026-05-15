"use client";

import React from "react";
import Image from "next/image";

import { heroDetails } from "@/data/hero";

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="
        relative
        flex
        items-center
        justify-center
        overflow-hidden
        px-6
        pt-36
        pb-24
      "
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#FFF8F0]"></div>

      {/* Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C97B36]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#FFF8F0] pointer-events-none"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left */}
        <div className="text-center lg:text-left">
          <p className="text-[#C97B36] font-semibold uppercase tracking-[0.2em] mb-4">
            Panadería Artesanal
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#4B2E1F]">
            Croissants y masa madre hechos con amor 🥐
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#7A5C48] max-w-2xl">
            Productos frescos horneados diariamente.
            Pedidos al detal y al mayor en Villa del Rosario ✨
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            
            {/* WhatsApp */}
            <a
              href="https://wa.me/573137139398?text=Hola%20😊%20quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-[#25D366]
                hover:opacity-90
                text-white
                px-8
                py-4
                rounded-full
                font-semibold
                shadow-lg
                transition-all
              "
            >
              Pedir por WhatsApp
            </a>

            {/* Catalog */}
            <a
              href="/catalogo-santo-bocado.pdf"
              download="catalogo-santo-bocado.pdf"
              className="
                border-2
                border-[#C97B36]
                text-[#C97B36]
                hover:bg-[#C97B36]
                hover:text-white
                px-8
                py-4
                rounded-full
                font-semibold
                transition-all
              "
            >
              Ver Catálogo
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          
          {/* Glow */}
          <div className="absolute inset-0 bg-[#C97B36]/20 blur-3xl rounded-full scale-110 pointer-events-none"></div>

          {/* Image */}
          <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-[10px] border-[#F3E5D0] shadow-2xl">
            <Image
              src={heroDetails.centerImageSrc}
              fill
              quality={100}
              priority
              alt="Santo Bocado"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;