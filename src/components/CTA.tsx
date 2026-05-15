const CTA: React.FC = () => {
  return (
    <section
      id="cta"
      className="mt-16 mb-10 lg:my-24"
    >
      <div className="relative h-full w-full z-10 mx-auto py-16 sm:py-24 overflow-hidden rounded-3xl">

        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-[#4B2E1F]">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C97B36,transparent_70%)] opacity-40"></div>

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#5a3825_1px,transparent_1px),linear-gradient(to_bottom,#5a3825_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-20"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center text-white text-center px-6">

          <h2 className="text-3xl sm:text-4xl md:text-6xl md:leading-tight font-bold mb-6 max-w-3xl">
            Haz tu pedido hoy 🥐✨
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-[#f3e5d0] leading-relaxed">
            Croissants, panes de masa madre y productos artesanales
            frescos todos los días 💛
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-5">

            {/* WhatsApp */}
            <a
              href="https://wa.me/573137139398?text=Hola%20😊%20quiero%20hacer%20un%20pedido"
              target="_blank"
              className="bg-[#25D366] hover:opacity-90 transition-all text-white px-8 py-4 rounded-full font-semibold shadow-lg"
            >
              Pedir por WhatsApp
            </a>

            {/* Catalog */}
            <a
              href="/catalogo-santo-bocado.pdf"
              download
              className="border border-white/40 hover:bg-white hover:text-[#4B2E1F] transition-all px-8 py-4 rounded-full font-semibold"
            >
              Descargar Catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;