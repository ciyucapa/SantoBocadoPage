'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

import logoNuevo from '../../public/images/logo-nuevo.jpeg';


const Header: React.FC = () => {

  return (
    <header
      className="
    fixed
    top-0
    left-0
    right-0
    z-50

    bg-[#FFF8F0]/80
    backdrop-blur-md

    border-b
    border-[#eadbc8]

    shadow-sm
  "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
              src={logoNuevo}
              alt="Santo Bocado"
              width={75}
              height={75}
              className="
            rounded-full
            shadow-[0_5px_20px_rgba(0,0,0,0.12)]
          "
            />

            <div className="hidden md:block">
              <h1 className="text-2xl font-bold text-[#5C3A21]">
                Santo Bocado
              </h1>

              <p className="text-sm text-[#9A6B46]">
                Panadería artesanal 🥐
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">

            <Link
              href="#inicio"
              className="
            text-[#5C3A21]
            hover:text-[#C97B36]
            transition
            font-semibold
          "
            >
              Inicio
            </Link>

            <Link
              href="#productos"
              className="
            text-[#5C3A21]
            hover:text-[#C97B36]
            transition
            font-semibold
          "
            >
              Productos
            </Link>

            <Link
              href="#masa-madre"
              className="
            text-[#5C3A21]
            hover:text-[#C97B36]
            transition
            font-semibold
          "
            >
              Masa Madre
            </Link>

            <Link
              href="/catalogo-santo-bocado.pdf"
              download="catalogo-santo-bocado.pdf"
              target='_blank'
              className="
            text-[#5C3A21]
            hover:text-[#C97B36]
            transition
            font-semibold
          "
            >
              Catálogo
            </Link>

            <Link
              href="#contacto"
              className="
            text-[#5C3A21]
            hover:text-[#C97B36]
            transition
            font-semibold
          "
            >
              Contacto
            </Link>
          </nav>

          {/* CTA */}
          <a
            href="https://wa.me/573137139398"
            target="_blank"
            className="
          bg-[#C97B36]
          hover:bg-[#b86d2d]
          text-white
          font-semibold
          rounded-full
          px-6
          py-3
          transition
          shadow-md
        "
          >
            Pedir Ahora
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;