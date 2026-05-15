import {
  FiHeart,
  FiCoffee,
  FiTruck,
  FiClock,
  FiShoppingBag,
  FiStar,
  FiPackage,
  FiGift,
  FiSmile,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Croissants artesanales recién horneados 🥐",

    description:
      "Nuestros croissants son elaborados artesanalmente con capas crujientes, mantequilla y horneados frescos cada día.",

    bullets: [
      {
        title: "Producción diaria",
        description:
          "Horneamos fresco todos los días para garantizar calidad.",
        icon: <FiCoffee size={26} />,
      },
      {
        title: "Textura crujiente",
        description:
          "Capas doradas y sabor artesanal auténtico.",
        icon: <FiStar size={26} />,
      },
      {
        title: "Pedidos al detal y mayor",
        description:
          "Perfectos para cafeterías, eventos y antojos diarios.",
        icon: <FiShoppingBag size={26} />,
      },
    ],

    imageSrc: "/images/croissant-mantequilla.jpeg",
  },

  {
    title: "Pan de masa madre artesanal 🍞",

    description:
      "Panes con fermentación natural, corteza crujiente y sabor único hechos con paciencia y dedicación.",

    bullets: [
      {
        title: "Fermentación natural",
        description:
          "Mayor sabor y mejor textura artesanal.",
        icon: <FiClock size={26} />,
      },
      {
        title: "Ingredientes frescos",
        description:
          "Harinas seleccionadas y procesos cuidados.",
        icon: <FiHeart size={26} />,
      },
      {
        title: "Horneado artesanal",
        description:
          "Cada pieza tiene personalidad y acabado único.",
        icon: <FiSmile size={26} />,
      },
    ],

    imageSrc: "/images/masa-madre.jpeg",
  },

  {
    title: "Presentaciones especiales y empaques ✨",

    description:
      "Nuestros productos también son perfectos para regalar, compartir o sorprender con algo delicioso.",

    bullets: [
      {
        title: "Empaque bonito",
        description:
          "Presentaciones limpias y cuidadas.",
        icon: <FiGift size={26} />,
      },
      {
        title: "Pedidos personalizados",
        description:
          "Opciones especiales para clientes y eventos.",
        icon: <FiPackage size={26} />,
      },
      {
        title: "Domicilios disponibles",
        description:
          "Llevamos tus productos frescos hasta tu puerta.",
        icon: <FiTruck size={26} />,
      },
    ],

    imageSrc: "/images/empaque.jpeg",
  },
];