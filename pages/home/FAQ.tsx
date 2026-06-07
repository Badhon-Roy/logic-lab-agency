"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IconSvg from "@/assets/images/icon-sub-heading.svg";
import Image from "next/image";

const faqs = [
  {
    question: "How do I choose the right service plan?",
    answer: "We offer comprehensive packages for web development, UI/UX design, SEO, and ongoing maintenance tailored to your individual business needs."
  },
  {
    question: "What types of technologies do you use?",
    answer: "We build modern, scalable web applications using React, Next.js, TypeScript, Tailwind CSS, and headless CMS platforms to ensure maximum performance."
  },
  {
    question: "How can I request a project estimate?",
    answer: "You can easily request a quote by filling out our contact form with your project details, and our team will get back to you within 24 hours."
  },
  {
    question: "What documents are required to start a project?",
    answer: "We typically need a project brief, any existing brand guidelines (logos, colors, fonts), and access to your current domain or hosting if applicable."
  },
  {
    question: "How long does it take to deliver a full website?",
    answer: "Most standard website projects are completed within 4 to 8 weeks, depending on the complexity of the design, features, and content readiness."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="w-full bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Image with Glassmorphism Overlay */}
          <div className="w-full lg:w-[45%] flex">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full rounded-[32px] overflow-hidden shadow-lg h-full min-h-[600px] bg-gray-100"
            >
              <img
                src="https://demo.awaikenthemes.com/covar/wp-content/uploads/2026/04/why-choose-image-1-stone.jpg"
                alt="FAQ representative"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Glassmorphism Overlay Block */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] rounded-[24px] bg-black/40 backdrop-blur-md border border-white/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
                
                {/* Google Rating */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 bg-transparent shrink-0 flex items-center justify-center">
                    <svg className="w-8 h-8" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-xl">4.9/5</span>
                      <svg className="w-4 h-4 text-[#fbb05f] fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p className="text-white/80 text-[13px] mt-0.5">Based on 250 review</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-[1px] h-14 bg-white/20"></div>

                {/* Phone Number */}
                <div className="flex items-center gap-4 flex-1 justify-end sm:justify-start">
                  <div className="w-10 h-10 rounded-full bg-[#fbb05f] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#04150e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/80 text-[13px] mb-0.5">Phone Number</p>
                    <p className="text-white font-bold text-base sm:text-lg tracking-tight">+(123) 456-798</p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            
            {/* Badge & Headline */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 border border-#04150e] bg-white text-[#04150e] text-sm font-bold tracking-widest px-3 py-1.5 rounded-full mb-6 w-fit"
            >
             <Image src={IconSvg} alt="icon" width={16} height={16} />
              Frequently Asked Questions
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
           className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-gray-900"
          >
            Answers to your{" "}
            <span className="bg-linear-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              digital strategy
            </span>{" "}questions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-[15px] md:text-base leading-relaxed mb-10 mt-4"
            >
              Find clear answers to the most common questions about our web development, branding, SEO, and continuous support services.
            </motion.p>

            {/* Accordion List */}
            <div className="flex flex-col gap-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="flex flex-col overflow-hidden rounded-xl"
                  >
                    {/* Header */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className={`w-full text-left flex items-center justify-between px-6 py-5 transition-colors duration-300 ${
                        isOpen 
                          ? "bg-[#04150e] text-white" 
                          : "bg-[#f8f7f4] hover:bg-[#f3f2ef] text-[#091b27]"
                      }`}
                    >
                      <span className="font-medium text-[17px] pr-8">
                        {index + 1}. {faq.question}
                      </span>
                      <div className="shrink-0">
                        {isOpen ? (
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-[#04150e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                          </svg>
                        )}
                      </div>
                    </button>
                    
                    {/* Content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 py-5 bg-[#f8f7f4] text-gray-500 text-[15px] leading-relaxed border-t border-gray-200/50">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
