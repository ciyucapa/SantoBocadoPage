"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { BiMinus, BiPlus } from "react-icons/bi";

import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {
  return (
    <section
      id="faq"
      className="py-16 lg:py-24"
    >
      <div className="flex flex-col lg:flex-row gap-14">

        {/* Left Content */}
        <div className="lg:max-w-md">
          
          <p className="text-[#C97B36] font-semibold tracking-wide uppercase text-center lg:text-left">
            Preguntas Frecuentes
          </p>

          <SectionTitle>
            <h2 className="my-4 !leading-snug text-[#4B2E1F] text-center lg:text-left">
              Todo lo que necesitas saber 🥐
            </h2>
          </SectionTitle>

          <p className="text-[#7A5C48] text-center lg:text-left leading-relaxed">
            Si tienes alguna duda sobre nuestros productos,
            pedidos o domicilios, aquí encontrarás respuestas rápidas ✨
          </p>

          {/* WhatsApp */}
          <a
            href="https://wa.me/573137139398?text=Hola%20😊%20tengo%20una%20pregunta"
            target="_blank"
            className="mt-8 inline-block text-[#25D366] font-bold text-xl hover:underline text-center lg:text-left"
          >
            Escríbenos por WhatsApp →
          </a>
        </div>

        {/* FAQ Accordion */}
        <div className="w-full lg:max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-5 bg-white rounded-2xl shadow-sm border border-[#f3e5d0] overflow-hidden"
            >
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full px-6 py-5 text-left">
                      
                      <span className="text-lg md:text-xl font-semibold text-[#4B2E1F]">
                        {faq.question}
                      </span>

                      {open ? (
                        <BiMinus className="w-6 h-6 text-[#C97B36]" />
                      ) : (
                        <BiPlus className="w-6 h-6 text-[#C97B36]" />
                      )}
                    </DisclosureButton>

                    <DisclosurePanel className="px-6 pb-6 text-[#7A5C48] leading-relaxed">
                      {faq.answer}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;