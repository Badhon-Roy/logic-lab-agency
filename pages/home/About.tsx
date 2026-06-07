"use client";
import { motion } from "framer-motion";
import IconSvg from "@/assets/images/icon-sub-heading.svg";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative w-full bg-white text-gray-900 overflow-hidden py-20 md:py-28">

      {/* Subtle light grid overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4] bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Ambient green glow (subtle) */}
      <div className="absolute top-0 left-0 w-[30vw] h-[30vh] bg-emerald-100 rounded-full blur-[120px] pointer-events-none z-0 opacity-60"></div>

      <div className="relative z-10 container mx-auto px-6">

        {/* ─── Top Header Row ─── */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14">
          
          {/* Left: Badge + Headline */}
          <div className="flex-1">
            {/* Badge */}
             <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-[#17351C] bg-transparent text-[#17351C] text-sm font-bold tracking-widest px-3 py-1.5 rounded-full mb-6"
          >
            <Image src={IconSvg} alt="icon" width={16} height={16} />
            About Logic Lab
          </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-gray-900 max-w-lg"
            >
              Expert digital{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                solutions
              </span>{" "}
              you can always trust
            </motion.h2>
          </div>

          {/* Right: Description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex flex-col justify-end items-start gap-6 md:pt-12"
          >
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
              We are committed to delivering pixel-perfect design, scalable backend infrastructure, and cross-platform mobile apps — built to ship fast and scale faster.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(16,185,129,0.25)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-linear-to-r from-emerald-600 to-teal-500 text-white text-lg px-7 py-3.5 rounded-full transition-colors duration-200 group"
            >
              More About Us
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-200">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* ─── Bottom Bento Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">

          {/* Left column: Mission + Vision cards */}
          <div className="flex flex-col gap-5">
            
            {/* Our Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.0 } as const}
              className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl p-7 flex flex-col gap-4 hover:border-emerald-400 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-linear-to-r from-emerald-300 to-teal-100 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-medium text-[#04150e] mb-2">Our Mission</h4>
                <p className="text-lg text-gray-500 leading-relaxed">
                  To build reliable, scalable, and beautifully crafted digital products that empower businesses to grow without limits.
                </p>
              </div>
            </motion.div>

            {/* Our Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.15 } as const}
              className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl p-7 flex flex-col gap-4 hover:border-emerald-400 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-linear-to-r from-emerald-300 to-teal-100 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-medium text-[#04150e] mb-2">Our Vision</h4>
                <p className="text-lg text-gray-500 leading-relaxed">
                  To be the go-to full-stack lab for ambitious teams — bridging the gap between design excellence and engineering precision.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Center: Photo 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.93 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 } as const}
            className="relative overflow-hidden rounded-2xl min-h-[340px] md:min-h-full group shadow-sm"
          >
            {/* Rotating contact badge */}
            <div className="absolute bottom-5 right-5 z-10 w-20 h-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="w-full h-full"
              >
                <svg viewBox="0 0 80 80" className="w-full h-full">
                  <defs>
                    <path id="circle-text-about" d="M 40,40 m -28,0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0"/>
                  </defs>
                  <circle cx="40" cy="40" r="38" fill="white" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5"/>
                  <text fill="rgba(5,150,105,0.9)" fontSize="7.5" fontFamily="monospace" letterSpacing="2.8" fontWeight="600">
                    <textPath href="#circle-text-about">• CONTACT US • CONTACT US •</textPath>
                  </text>
                  <circle cx="40" cy="40" r="10" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.4)" strokeWidth="1"/>
                  <text x="40" y="44" textAnchor="middle" fill="#059669" fontSize="10">✦</text>
                </svg>
              </motion.div>
            </div>

            <img
              src="https://demo.awaikenthemes.com/covar/wp-content/uploads/2026/04/about-us-image-1-stone.jpg"
              alt="Logic Lab team collaboration"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
          </motion.div>

          {/* Right: Photo 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.93 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 } as const}
            className="relative overflow-hidden rounded-2xl min-h-[340px] md:min-h-full group shadow-sm"
          >
            <img
              src="https://demo.awaikenthemes.com/covar/wp-content/uploads/2026/04/about-us-image-2-stone.jpg"
              alt="Logic Lab agency work"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>

            {/* Stat badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-5 right-5 bg-white/90 backdrop-blur-sm border border-emerald-200 rounded-xl px-4 py-3 shadow-md"
            >
              <div className="text-emerald-600 font-medium text-xl font-mono">100%</div>
              <div className="text-gray-600 text-sm font-medium mt-0.5">Client Satisfaction</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
