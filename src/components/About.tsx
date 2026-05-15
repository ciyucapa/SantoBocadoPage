import Image from "next/image";

const About = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[#FFF8F0] -z-10"></div>

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C97B36]/10 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6">
        
        {/* Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#C97B36]/20 blur-3xl rounded-[40px] scale-105"></div>

          <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
            <Image
              src="/images/quienes-somos.jpeg"
              alt="Santo Bocado"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-[#C97B36] font-semibold uppercase tracking-[0.2em] mb-4">
            Nuestra Historia
          </p>

          <h2 className="text-5xl font-bold text-[#4B2E1F] leading-tight">
            Horneamos momentos especiales 🤎
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#7A5C48]">
            En Santo Bocado creemos en el poder de lo artesanal.
            Cada croissant, pan de masa madre y babka se prepara
            cuidadosamente para brindar frescura, sabor y calidad
            en cada entrega.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#7A5C48]">
            Trabajamos bajo pedido para garantizar productos recién
            horneados, utilizando ingredientes seleccionados y técnicas
            de fermentación que resaltan el verdadero sabor del pan.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            
            <div className="bg-white rounded-2xl p-5 shadow-md text-center">
              <h3 className="text-3xl font-bold text-[#C97B36]">
                100%
              </h3>

              <p className="text-sm text-[#7A5C48] mt-2">
                Artesanal
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-md text-center">
              <h3 className="text-3xl font-bold text-[#C97B36]">
                Fresco
              </h3>

              <p className="text-sm text-[#7A5C48] mt-2">
                Cada Día
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-md text-center">
              <h3 className="text-3xl font-bold text-[#C97B36]">
                Bajo
              </h3>

              <p className="text-sm text-[#7A5C48] mt-2">
                Pedido
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;