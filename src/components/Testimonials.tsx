import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-8 shadow-md border border-[#f3e5d0] hover:-translate-y-1 transition-all duration-300"
        >
          {/* Stars */}
          <div className="flex mb-4 text-[#C97B36] text-xl">
            ⭐⭐⭐⭐⭐
          </div>

          {/* Message */}
          <p className="text-[#7A5C48] leading-relaxed mb-6 italic">
            “{testimonial.message}”
          </p>

          {/* User */}
          <div className="flex items-center">
            <Image
              src={testimonial.avatar}
              alt={`${testimonial.name} avatar`}
              width={55}
              height={55}
              className="rounded-full object-cover shadow-md"
            />

            <div className="ml-4">
              <h3 className="text-[#4B2E1F] font-bold">
                {testimonial.name}
              </h3>

              <p className="text-sm text-[#7A5C48]">
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;