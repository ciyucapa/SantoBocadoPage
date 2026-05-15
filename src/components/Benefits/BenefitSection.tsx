"use client";

import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";

import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";

interface Props {
  benefit: IBenefit;
  imageAtRight?: boolean;
}

const containerVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },

  onscreen: {
    opacity: 1,
    y: 0,

    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.9,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const childVariants = {
  offscreen: {
    opacity: 0,
    x: -50,
  },

  onscreen: {
    opacity: 1,
    x: 0,

    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};

const BenefitSection: React.FC<Props> = ({
  benefit,
  imageAtRight,
}: Props) => {
  const { title, description, imageSrc, bullets } = benefit;

  return (
    <section className="benefit-section">
      <motion.div
        className="flex flex-wrap flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20 lg:flex-nowrap mb-28"
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >

        {/* Text Content */}
        <div
          className={clsx(
            "flex flex-wrap items-center w-full max-w-lg",
            {
              "justify-start": imageAtRight,
              "lg:order-1 justify-end": !imageAtRight,
            }
          )}
        >
          <div className="w-full text-center lg:text-left">

            <motion.div
              className="flex flex-col w-full"
              variants={childVariants}
            >
              <SectionTitle>
                <h3 className="lg:max-w-2xl text-[#4B2E1F]">
                  {title}
                </h3>
              </SectionTitle>

              <p className="mt-3 mx-auto lg:ml-0 leading-relaxed text-[#7A5C48]">
                {description}
              </p>
            </motion.div>

            <div className="mx-auto lg:ml-0 w-full mt-6">
              {bullets.map((item, index) => (
                <BenefitBullet
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className={clsx("mt-5 lg:mt-0", {
            "lg:order-2": imageAtRight,
          })}
        >
          <motion.div
            variants={childVariants}
            className="relative w-72 h-72 md:w-96 md:h-96 mx-auto"
          >

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-[#C97B36]/20 blur-3xl scale-110"></div>

            {/* Circle Border */}
            <div className="relative w-full h-full rounded-full border-[10px] border-[#F3E5D0] overflow-hidden shadow-2xl">

              <Image
                src={imageSrc}
                alt={title}
                fill
                quality={100}
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BenefitSection;