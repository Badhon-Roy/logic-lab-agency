"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import IconSvg from "@/assets/images/icon-sub-heading.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    category: "Business Insurance",
    rating: 5,
    quote: "The team helped me find the right business insurance plan that perfectly fits my company needs. Their advice was clear, honest, and extremely helpful.",
    author: {
      name: "Michael Carter",
      role: "Small Business Owner",
      avatar: "https://i.pravatar.cc/150?img=33",
    },
  },
  {
    category: "Claims Support",
    rating: 5,
    quote: "The team helped me find the right business insurance plan that perfectly fits my company needs. Their advice was clear, honest, and extremely helpful.",
    author: {
      name: "David Wilson",
      role: "Homeowner",
      avatar: "https://i.pravatar.cc/150?img=68",
    },
  },
  {
    category: "Policy Guidance",
    rating: 5,
    quote: "I was looking for a reliable life insurance plan for my family and their expert guided me step by step. The entire experience was smooth & very reassuring.",
    author: {
      name: "Emily Rodriguez",
      role: "Working Professional",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
  },
  {
    category: "Policy Guidance",
    rating: 5,
    quote: "I was looking for a reliable life insurance plan for my family and their expert guided me step by step. The entire experience was smooth & very reassuring.",
    author: {
      name: "Emily Rodriguez",
      role: "Working Professional",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
  },
  {
    category: "Policy Guidance",
    rating: 5,
    quote: "I was looking for a reliable life insurance plan for my family and their expert guided me step by step. The entire experience was smooth & very reassuring.",
    author: {
      name: "Emily Rodriguez",
      role: "Working Professional",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full bg-[#f8f7f4] text-gray-900 py-20 md:py-28 overflow-hidden">
      {/* Custom Styles for Swiper Pagination bullets */}
      <style dangerouslySetInnerHTML={{ __html: `
        .testimonials-swiper .swiper-pagination-bullet {
          background: #04150e !important;
          opacity: 0.2;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #10b981 !important;
          opacity: 1;
          width: 24px;
          border-radius: 4px;
        }
      `}} />
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 border border-[#17351C] bg-transparent text-[#17351C] text-sm font-bold tracking-widest px-3 py-1.5 rounded-full mb-6"
            >
              <Image src={IconSvg} alt="icon" width={16} height={16} />
              Our Testimonials
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-gray-900"
            >
              What our clients say about their experience
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:max-w-md flex flex-col gap-6 lg:items-start"
          >
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Real stories from client who trust us to protect what matter most. Their feedback reflect our commitment to quality service reliable coverage.
            </p>
            {/* View All Reviews Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(16,185,129,0.25)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-4 bg-linear-to-r from-emerald-600 to-teal-500 text-white font-semibold text-[15px] pl-6 pr-2 py-2 rounded-full shadow-sm hover:shadow-md transition-all w-fit"
            >
              View All Reviews
              <span className="w-10 h-10 rounded-full bg-white text-emerald-600 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Testimonials Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper !pb-14"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto flex">
                <div className="flex flex-col justify-between bg-white border border-gray-100 rounded-3xl p-8 shadow-xs hover:shadow-md transition-all duration-300 group w-full h-full">
                  <div>
                    {/* Category Pill Tag */}
                    <span className="inline-block border border-gray-200 text-gray-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                      {item.category}
                    </span>

                    {/* 5 Stars Rating */}
                    <div className="flex gap-1 text-emerald-500 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote Text */}
                    <p className="text-gray-900 font-medium text-lg leading-relaxed mb-6">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Profile Row */}
                  <div>
                    <div className="w-full h-px bg-gray-100 mb-6"></div>
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-gray-100">
                        <img
                          src={item.author.avatar}
                          alt={item.author.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-gray-900 leading-tight">
                          {item.author.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {item.author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
