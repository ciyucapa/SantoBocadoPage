import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props {
  tier: {
    name: string;
    price: string;
    image: string;
    description: string;
  };
  highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
  const { name, price, image, description } = tier;

  return (
    <div
      className={clsx(
        "w-full max-w-sm mx-auto bg-white rounded-3xl overflow-hidden border border-[#f3e5d0] transition-all hover:-translate-y-2 duration-300",
        {
          "shadow-2xl scale-[1.02]": highlight,
          "shadow-md": !highlight,
        }
      )}
    >
      {/* Imagen */}
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#4B2E1F] mb-2">
          {name}
        </h3>

        <p className="text-[#7A5C48] mb-4">
          {description}
        </p>

        <p className="text-3xl font-bold text-[#C97B36] mb-6">
          {price}
        </p>

        {/* WhatsApp Button */}
        <Link
          href="https://wa.me/573137139398?text=Hola%20😊%20quiero%20hacer%20un%20pedido"
          target="_blank"
          className="w-full block text-center bg-[#25D366] hover:opacity-90 text-white py-3 rounded-full font-semibold transition-all"
        >
          Pedir Ahora
        </Link>
      </div>
    </div>
  );
};

export default PricingColumn;