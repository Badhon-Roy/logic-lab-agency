"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import IconSvg from "@/assets/images/icon-sub-heading.svg";

const services = [
  {
    title: "UI/UX Design",
    description: "Creating high-fidelity wireframes, interactive user flows, and aesthetic design assets that define your brand.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80",
    tag: "Creative UI/UX",
    icon: (
      <svg className="w-6 h-6 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Web & App Development",
    description: "Engineering pixel-perfect web frontends (Next.js) and native cross-platform mobile apps (Flutter) built for performance.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    tag: "Next.js & Flutter",
    icon: (
      <svg className="w-6 h-6 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Backend & Automation",
    description: "Designing robust server-side APIs, database systems, and automated operations sync using N8N workflows.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    tag: "APIs & N8N Sync",
    icon: (
      <svg className="w-6 h-6 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-[#f8f7f4] text-gray-900 py-20 md:py-28 overflow-hidden">
      {/* Subtle light grid overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4] bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-[#17351C] bg-transparent text-[#17351C] text-sm font-bold tracking-widest px-3 py-1.5 rounded-full mb-6"
          >
            <Image src={IconSvg} alt="icon" width={16} height={16} />
            Our Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-gray-900"
          >
            Smarter digital solutions for your business
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed mt-4"
          >
            We engineer tailormade web architectures, creative interface designs, and smooth automation pipelines to help your business scale efficiently.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="service-card flex flex-col justify-between bg-white border border-gray-100 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              {/* Top Row: Icon + Arrow Button */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                  {service.icon}
                </div>
                {/* Arrow up-right circular button */}
                <div className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 group-hover:bg-[#10B981] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>

              {/* Title & Description */}
              <div className="mb-6 flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight group-hover:text-[#10B981] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                {/* Image overlay text tag */}
                <div className="bg-white/20 backdrop-blur-md border border-white/10 text-white font-medium text-xs px-3.5 py-1.5 rounded-lg absolute bottom-4 left-4 z-10">
                  {service.tag}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
