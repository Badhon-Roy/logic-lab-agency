"use client";

import { motion } from "framer-motion";
import IconSvg from "@/assets/images/icon-sub-heading.svg";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="relative w-full bg-white text-gray-900 py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          
          {/* Left Column: Image Composition */}
          <div className="flex-1 w-full relative min-h-[500px] md:min-h-[650px] lg:min-h-[720px]">
            {/* Image 1 (Top Left) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 w-[58%] h-[280px] md:h-[400px] lg:h-[460px] rounded-[24px] lg:rounded-[32px] overflow-hidden z-10 shadow-sm"
            >
              <img
                src="https://demo.awaikenthemes.com/covar/wp-content/uploads/2026/04/why-choose-image-1-stone.jpg"
                alt="Team working"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Dark Box (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute bottom-0 md:bottom-4 left-0 w-[42%] h-[160px] md:h-[220px] bg-[#04150e] text-white p-6 md:p-8 rounded-[24px] lg:rounded-[32px] z-10 shadow-2xl flex flex-col justify-center"
            >
              <h3 className="text-4xl md:text-[56px] lg:text-[68px] font-medium mb-1 md:mb-3 leading-none tracking-tight">80+</h3>
              <p className="text-sm md:text-[17px] font-medium text-white leading-snug">
                Industry Awards<br />& Recognitions
              </p>
            </motion.div>

            {/* Image 2 (Right Overlap) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-16 md:top-[140px] lg:top-[160px] right-0 w-[55%] h-[320px] md:h-[460px] lg:h-[520px] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-2xl z-20 border-[8px] md:border-[12px] border-white"
            >
              <img
                src="https://demo.awaikenthemes.com/covar/wp-content/uploads/2026/04/why-choose-image-2-stone.jpg"
                alt="Business professional"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="flex-1 w-full flex flex-col gap-8">
            
            {/* Badge & Headline */}
            <div>
                     <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-[#17351C] bg-transparent text-[#17351C] text-sm font-bold tracking-widest px-3 py-1.5 rounded-full mb-6"
          >
            <Image src={IconSvg} alt="icon" width={16} height={16} />
            Why Choose Us
          </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-gray-900"
            >
              Smart digital{" "}
              <span className="bg-linear-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                solutions
              </span>{" "} backed by experience
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-500 leading-relaxed text-sm md:text-lg mt-4"
              >
                We focus on providing scalable architecture, personalized guidance, and flexible engineering that help businesses protect their digital future with confidence.
              </motion.p>
            </div>

            {/* Feature Item with Rotating Stamp */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-8 relative">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-5 pr-6 border-r border-gray-200 flex-1"
              >
                <div className="w-14 h-14 rounded-full bg-[#10b981] flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[22px] font-medium text-[#091b27] mb-2">Personalized Insurance</h4>
                  <p className="text-[15px] text-gray-500 max-w-sm leading-relaxed">
                    We take the time to understand your unique financial needs & future goals.
                  </p>
                </div>
              </motion.div>

              {/* Rotating Stamp */}
              <div className="w-28 flex justify-center shrink-0 hidden sm:flex">
                <div className="w-24 h-24">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    className="w-full h-full bg-[#10b981] rounded-full flex items-center justify-center relative shadow-sm"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
                      <defs>
                        <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                      </defs>
                      <text fontSize="10.5" fontWeight="700" fill="#04150e" letterSpacing="1.8">
                        <textPath href="#textPath">CONTACT US • CONTACT US •</textPath>
                      </text>
                    </svg>
                    <div className="w-14 h-14 bg-[#04150e] rounded-full flex items-center justify-center z-10 shadow-inner">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15 8l6 1-4.5 4.5L18 19l-6-3-6 3 1.5-5.5L3 9l6-1z" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="py-2"
            >
              <div className="flex justify-between font-medium text-[#091b27] mb-3 text-[17px]">
                <span>Customer Satisfaction</span>
                <span>92%</span>
              </div>
              <div className="w-[95%] h-2.5 bg-[#f4f4f4] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "92%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                  className="h-full bg-[#10b981] rounded-full"
                ></motion.div>
              </div>
            </motion.div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              
              {/* Card 1: Rating */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-[#f8f7f4] rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-1.5 text-[#10b981]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-medium text-[#091b27] text-2xl tracking-tight">4.9<span className="text-gray-500 text-sm font-medium">/5.0</span></span>
                  </div>
                  <p className="text-[15px] text-[#55646f] leading-relaxed max-w-[180px]">
                    Securing financial future around the world
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200/80 flex items-center">
                  <div className="flex -space-x-2">
                    <img className="w-9 h-9 rounded-full border-2 border-[#f8f7f4] object-cover" src="https://i.pravatar.cc/100?img=5" alt="Avatar" />
                    <img className="w-9 h-9 rounded-full border-2 border-[#f8f7f4] object-cover" src="https://i.pravatar.cc/100?img=8" alt="Avatar" />
                    <img className="w-9 h-9 rounded-full border-2 border-[#f8f7f4] object-cover" src="https://i.pravatar.cc/100?img=11" alt="Avatar" />
                    <img className="w-9 h-9 rounded-full border-2 border-[#f8f7f4] object-cover" src="https://i.pravatar.cc/100?img=9" alt="Avatar" />
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#04150e] text-white flex items-center justify-center text-[11px] font-bold border-2 border-[#f8f7f4] -ml-2 z-10 shadow-sm">
                    4k+
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-[#f8f7f4] rounded-2xl p-7"
              >
                <div className="mb-6">
                  <div className="text-[26px] font-medium text-[#091b27] tracking-tight mb-2">$3650.00</div>
                  <div className="flex items-center gap-5 text-[11px] text-gray-500 font-medium">
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#04150e]"></span> Increment</span>
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span> Decrement</span>
                  </div>
                </div>
                
                {/* Fully Rounded Bar Chart */}
                <div className="flex items-end justify-between h-28 gap-2 mt-4 px-1">
                  {[
                    { h: '60%', c: 'bg-[#10b981]', l: 'Jan' },
                    { h: '75%', c: 'bg-[#10b981]', l: 'Feb' },
                    { h: '55%', c: 'bg-[#10b981]', l: 'Mar' },
                    { h: '100%', c: 'bg-[#04150e]', l: 'Apr' },
                    { h: '65%', c: 'bg-[#10b981]', l: 'May' },
                    { h: '85%', c: 'bg-[#10b981]', l: 'Jun' },
                  ].map((bar, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 flex-1 h-full justify-end">
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: bar.h }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 + (i * 0.1) }}
                        className={`w-full max-w-[20px] rounded-full ${bar.c}`}
                      ></motion.div>
                      <span className="text-[10px] text-gray-400 font-medium">{bar.l}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
