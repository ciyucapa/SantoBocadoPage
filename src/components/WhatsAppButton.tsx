"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/573137139398?text=Hola%20😊%20quiero%20hacer%20un%20pedido"
      target="_blank"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-[#25D366]
        hover:scale-110
        text-white
        p-4
        rounded-full
        shadow-2xl
        transition-all
        duration-300
      "
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={32} />
    </Link>
  );
};

export default WhatsAppButton;