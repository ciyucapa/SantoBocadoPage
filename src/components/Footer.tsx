import Link from "next/link";
import React from "react";
import Image from "next/image";

import logoNuevo from "../../public/images/logo-nuevo.jpeg";

import { footerDetails } from "@/data/footer";
import { getPlatformIconByName } from "@/utils";

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="relative text-white pt-16 pb-8 mt-20 overflow-hidden">

      {/* Wallpaper Background */}
      <div
        className="
          absolute
          inset-0
           bg-cover 
           bg-center
          opacity-12
        "
        style={{
          backgroundImage: "url('/images/wallpaperFooter.png')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#4B2E1F]/75"></div>

      {/* Content */}
      <div className="relative z-10">

        <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
          {/* Logo & Description */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <Image
                src={logoNuevo}
                alt="Santo Bocado"
                width={60}
                height={60}
                className="rounded-full border-2 border-[#F3E5D0]"
              />

              <h1 className="text-2xl font-bold">
                Santo Bocado
              </h1>
            </Link>

            <p className="mt-5 text-[#f3e5d0] leading-relaxed font-bold">
              Panadería artesanal especializada en croissants,
              masa madre y productos frescos hechos con amor 🥐✨
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-bold text-white mb-5">
              Nuestros Especiales 🥐
            </h4>

            <ul className="space-y-3 text-[#f3e5d0] font-bold">
              <li>✨ Croissants artesanales</li>
              <li>🍞 Pan masa madre</li>
              <li>🍫 Babkas rellenas</li>
              <li>🥖 Pan semibrioch</li>
              <li>☕ Productos frescos diarios</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-white mb-5">
              Contacto
            </h4>

            <div className="space-y-3 text-[#f3e5d0] font-bold">

              <p>
                📍 Villa del Rosario
              </p>

              <a
                href="tel:+573137139398"
                className="block hover:text-[#C97B36] transition"
              >
                📞 313 713 9398
              </a>

              <a
                href="https://wa.me/573137139398"
                target="_blank"
                className="block hover:text-[#C97B36] transition"
              >
                💬 WhatsApp
              </a>
            </div>

            {/* Socials */}
            {footerDetails.socials && (
              <div className="mt-6 flex items-center gap-5 flex-wrap">

                {Object.keys(footerDetails.socials).map(
                  (platformName) => {
                    if (
                      platformName &&
                      footerDetails.socials[platformName]
                    ) {
                      return (
                        <Link
                          href={
                            footerDetails.socials[
                            platformName
                            ]
                          }
                          key={platformName}
                          aria-label={platformName}
                          className="text-2xl hover:text-[#C97B36] transition"
                        >
                          {getPlatformIconByName(platformName)}
                        </Link>
                      );
                    }
                  }
                )}
              </div>
            )}
          </div>

          <div>
  <h4 className="text-xl font-bold text-white mb-5">
    Horarios ⏰
  </h4>

  <div className="space-y-3 text-[#f3e5d0] font-bold">
    <p>Lunes a Sábado</p>
    <p>7:00 AM • 7:00 PM</p>

    <p className="pt-3">
      Pedidos bajo encargo ✨
    </p>
  </div>
</div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-[#f3e5d0] px-6">

          <p>
            © {new Date().getFullYear()} Santo Bocado.
            Todos los derechos reservados.
          </p>

          <p className="text-sm mt-3 opacity-70">
            Hecho artesanalmente 🥐✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;