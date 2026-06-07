"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [consoleIndex, setConsoleIndex] = useState(0);

  const consoleLines = [
    "INITIALIZING CORE VECTOR FIELDS...",
    "BOOTSTRAPPING REACTION ENGINE...",
    "MOUNTING POSTGRES DATA SCHEMAS...",
    "INJECTING UI/UX GLOW TOKENS...",
    "SYNCING FLUTTER HOT-RELOAD PIPELINE...",
    "ESTABLISHING SECURE PROTOCOLS...",
    "ALL SYSTEMS 100% OPERATIONAL."
  ];

  // Loader progress animation loop on window load/reload
  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Increment progress randomly for realistic load feel
      currentProgress += Math.floor(Math.random() * 8) + 5;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
      setProgress(currentProgress);
      
      // Cycle console log messages corresponding to progress range
      const newIndex = Math.min(
        Math.floor((currentProgress / 100) * consoleLines.length),
        consoleLines.length - 1
      );
      setConsoleIndex(newIndex);
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // Stagger Container for Hero section elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.2,
      } as const,
    },
  };

  // Elastic Badge Drop-down & Zoom-in
  const badgeVariants = {
    hidden: { y: -30, scale: 0.8, opacity: 0 },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      } as const,
    },
  };

  // Modern title reveal & zoom-in
  const titleTextVariants = {
    hidden: { scale: 0.9, opacity: 0, y: 25 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      } as const,
    },
  };

  // Main pill elastic zoom-in
  const titlePillVariants = {
    hidden: { scale: 0.75, opacity: 0, y: 35 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 130,
        damping: 12,
      } as const,
    },
  };

  // CTA container zoom-in entry
  const ctaContainerVariants = {
    hidden: { scale: 0.9, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      } as const,
    },
  };

  // Bento card entry animation (Staggered zoom-in from bottom)
  const bentoCardVariants = {
    hidden: { y: 60, scale: 0.4, opacity: 0 },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 14,
      } as const,
    },
    hover: {
      y: -10,
      scale: 1.05,
      borderColor: "rgba(52, 211, 153, 0.5)",
      backgroundColor: "rgba(9, 38, 26, 0.8)",
      boxShadow: "0 20px 45px rgba(16, 185, 129, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      } as const,
    },
  };

  // Icon zoom-in & rotation on parent hover
  const iconHoverVariants = {
    hidden: { scale: 1, rotate: 0 },
    visible: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: 8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 12,
      } as const,
    },
  };

  return (
    <div className="relative min-h-screen w-full bg-[#04150e] text-[#f4fbf7] overflow-hidden flex flex-col justify-between font-sans selection:bg-emerald-500 selection:text-black">
      
      <AnimatePresence mode="wait">
        {loading ? (
          /* MODERN SCI-FI LAB LOADER */
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 1.05,
              filter: "blur(10px)",
              transition: { duration: 0.5, ease: "easeInOut" } 
            }}
            className="absolute inset-0 bg-[#04150e] z-50 flex flex-col items-center justify-center px-6"
          >
            {/* Background Grid Pattern in Loader */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.2] bg-[linear-gradient(rgba(16,185,129,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.07)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="absolute inset-0 bg-grain z-5 pointer-events-none"></div>

            {/* Glowing laboratory flask/core symbol in loader */}
            <motion.div 
              animate={{ 
                scale: [1, 1.08, 1],
                boxShadow: [
                  "0 0 20px rgba(52,211,153,0.1)",
                  "0 0 35px rgba(52,211,153,0.3)",
                  "0 0 20px rgba(52,211,153,0.1)"
                ]
              }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-950 to-[#0c2e1f] border border-emerald-500/30 flex items-center justify-center mb-10 z-10"
            >
              <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </motion.div>

            {/* Progress Percentage Display */}
            <div className="text-center z-10 w-full max-w-sm">
              <div className="flex justify-between items-end mb-2 font-mono text-xs text-emerald-400">
                <span className="tracking-widest">LOGIC_LAB_LAUNCHER</span>
                <span className="font-bold">{progress}%</span>
              </div>

              {/* Glowing Custom Loading Bar */}
              <div className="w-full h-1 bg-emerald-950/50 rounded-full overflow-hidden border border-emerald-500/10">
                <motion.div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                ></motion.div>
              </div>

              {/* Console log ticker */}
              <div className="mt-4 h-6 overflow-hidden">
                <motion.div
                  key={consoleIndex}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.6 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="font-mono text-[9px] text-zinc-400 tracking-wider text-left pl-1"
                >
                  &gt; {consoleLines[consoleIndex]}
                </motion.div>
              </div>
            </div>

          </motion.div>
        ) : (
          /* MAIN BANNER CANVAS */
          <motion.div 
            key="main-canvas"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col justify-between"
          >
            {/* Background Grid Pattern & Grain Effect */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.25] bg-[linear-gradient(rgba(16,185,129,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.07)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="absolute inset-0 bg-grain z-5 pointer-events-none"></div>

            {/* Floating Radial Glow Elements */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vh] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow z-0"></div>
            <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[80px] pointer-events-none z-0"></div>

            {/* Faint Huge Background Text (Dynamic Slow Zoom Loop) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{ 
                opacity: { duration: 1.8, ease: "easeOut" },
                scale: { repeat: Infinity, duration: 24, ease: "easeInOut" }
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] font-black tracking-[-0.05em] text-white/[0.015] select-none pointer-events-none z-0 text-center font-mono leading-none"
            >
              LOGIC LAB
            </motion.div>

            {/* Main Hero Section */}
            <motion.main 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative z-10 w-full max-w-7xl mx-auto px-6 flex-1 flex flex-col items-center justify-center text-center py-16 md:py-24"
            >
              
              {/* Floating Core/Creative Badge */}
              <motion.div 
                variants={badgeVariants}
                className="relative mb-8 group cursor-pointer"
              >
                <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                <motion.div 
                  whileHover={{ y: -3, scale: 1.03 }}
                  className="relative bg-gradient-to-br from-[#0c2e1f] to-[#051910] border border-emerald-500/20 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300"
                >
                  <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-inner">
                    <svg className="w-4.5 h-4.5 text-[#04150e] font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-emerald-400/80 font-bold uppercase tracking-widest font-mono">ESTD 2026</div>
                    <div className="text-xs text-white font-medium">FULL-STACK LABORATORY</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Main Bold Headline */}
              <h1 className="max-w-5xl text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.05] mb-10 text-white select-none">
                <motion.span 
                  variants={titleTextVariants}
                  className="inline-block bg-gradient-to-r from-emerald-300 via-teal-100 to-white bg-clip-text text-transparent"
                >
                  ALL IN ONE
                </motion.span>
                <br />
                {/* Pill Outline container for Logic Lab Agency */}
                <motion.div 
                  variants={titlePillVariants}
                  whileHover={{ scale: 1.025 }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  className="inline-block mt-5 px-8 md:px-12 py-3.5 md:py-4.5 border-2 border-emerald-400/35 rounded-full bg-emerald-500/[0.02] shadow-[0_0_30px_rgba(52,211,153,0.06)] relative group overflow-hidden cursor-default"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                  <span className="relative text-emerald-300 tracking-wide font-sans text-3xl sm:text-5xl md:text-7xl font-bold flex items-center justify-center gap-4">
                    <motion.span 
                      animate={{ scale: [1, 1.25, 1] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                    ></motion.span>
                    LOGIC LAB AGENCY
                    <motion.span 
                      animate={{ scale: [1, 1.25, 1] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
                      className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                    ></motion.span>
                  </span>
                </motion.div>
              </h1>

              {/* Call to Action Container */}
              <motion.div 
                variants={ctaContainerVariants}
                className="flex flex-col sm:flex-row items-center gap-6 mt-6 max-w-2xl justify-center z-10"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(181, 246, 56, 0.45)" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2.5 bg-[#b5f638] text-black font-extrabold text-sm px-8 py-4.5 rounded-xl transition-all duration-300 group"
                >
                  EXPLORE SERVICES
                  <svg 
                    className="w-4.5 h-4.5 transform group-hover:translate-x-1.5 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
                <p className="text-zinc-400 text-xs sm:text-sm text-center sm:text-left max-w-sm leading-relaxed border-l-0 sm:border-l sm:border-emerald-500/20 sm:pl-6">
                  Direct collaboration with senior engineers. Custom architectures, clean coding patterns, and pixel-perfect design assets.
                </p>
              </motion.div>

            </motion.main>

            {/* Footer Stats / Bento Badges Section */}
            <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 pt-8 border-t border-emerald-500/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Card 1: UI/UX Design */}
                <motion.div 
                  initial={{ y: 60, scale: 0.4, opacity: 0 }}
                  whileInView={{ y: 0, scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: "spring", stiffness: 110, damping: 14, delay: 0.0 } as const}
                  whileHover="hover"
                  variants={{
                    hover: {
                      y: -10,
                      scale: 1.05,
                      borderColor: "rgba(52, 211, 153, 0.5)",
                      backgroundColor: "rgba(9, 38, 26, 0.8)",
                      boxShadow: "0 20px 45px rgba(16, 185, 129, 0.15)",
                      transition: { duration: 0.3, ease: "easeOut" } as const,
                    }
                  }}
                  className="flex items-center gap-4 bg-[#09261a]/40 border border-emerald-500/10 p-5 rounded-2xl cursor-pointer group"
                >
                  <motion.div 
                    variants={iconHoverVariants}
                    className="w-14 h-12 rounded-full bg-[#0c2e1f] border border-emerald-500/15 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.05)]"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">UI/UX Design</h4>
                    <p className="text-xs text-zinc-400 mt-1">Pixel-perfect Figma designs, custom design systems, and wireframes.</p>
                  </div>
                </motion.div>

                {/* Card 2: Frontend Engineering */}
                <motion.div 
                  initial={{ y: 60, scale: 0.4, opacity: 0 }}
                  whileInView={{ y: 0, scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: "spring", stiffness: 110, damping: 14, delay: 0.18 } as const}
                  whileHover="hover"
                  variants={{
                    hover: {
                      y: -10,
                      scale: 1.05,
                      borderColor: "rgba(52, 211, 153, 0.5)",
                      backgroundColor: "rgba(9, 38, 26, 0.8)",
                      boxShadow: "0 20px 45px rgba(16, 185, 129, 0.15)",
                      transition: { duration: 0.3, ease: "easeOut" } as const,
                    }
                  }}
                  className="flex items-center gap-4 bg-[#09261a]/40 border border-emerald-500/10 p-5 rounded-2xl cursor-pointer group"
                >
                  <motion.div 
                    variants={iconHoverVariants}
                    className="w-14 h-12 rounded-full bg-[#0c2e1f] border border-emerald-500/15 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.05)]"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Frontend Dev</h4>
                    <p className="text-xs text-zinc-400 mt-1">High-performance React/Next.js, Tailwind styling, and smooth interactions.</p>
                  </div>
                </motion.div>

                {/* Card 3: Backend Infrastructure */}
                <motion.div 
                  initial={{ y: 60, scale: 0.4, opacity: 0 }}
                  whileInView={{ y: 0, scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: "spring", stiffness: 110, damping: 14, delay: 0.36 } as const}
                  whileHover="hover"
                  variants={{
                    hover: {
                      y: -10,
                      scale: 1.05,
                      borderColor: "rgba(52, 211, 153, 0.5)",
                      backgroundColor: "rgba(9, 38, 26, 0.8)",
                      boxShadow: "0 20px 45px rgba(16, 185, 129, 0.15)",
                      transition: { duration: 0.3, ease: "easeOut" } as const,
                    }
                  }}
                  className="flex items-center gap-4 bg-[#09261a]/40 border border-emerald-500/10 p-5 rounded-2xl cursor-pointer group"
                >
                  <motion.div 
                    variants={iconHoverVariants}
                    className="w-14 h-12 rounded-full bg-[#0c2e1f] border border-emerald-500/15 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.05)]"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Backend Dev</h4>
                    <p className="text-xs text-zinc-400 mt-1">Scalable PostgreSQL/Node.js, server architecture, and secure APIs.</p>
                  </div>
                </motion.div>

                {/* Card 4: Flutter Mobile Development */}
                <motion.div 
                  initial={{ y: 60, scale: 0.4, opacity: 0 }}
                  whileInView={{ y: 0, scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: "spring", stiffness: 110, damping: 14, delay: 0.54 } as const}
                  whileHover="hover"
                  variants={{
                    hover: {
                      y: -10,
                      scale: 1.05,
                      borderColor: "rgba(52, 211, 153, 0.5)",
                      backgroundColor: "rgba(9, 38, 26, 0.8)",
                      boxShadow: "0 20px 45px rgba(16, 185, 129, 0.15)",
                      transition: { duration: 0.3, ease: "easeOut" } as const,
                    }
                  }}
                  className="flex items-center gap-4 bg-[#09261a]/40 border border-emerald-500/10 p-5 rounded-2xl cursor-pointer group"
                >
                  <motion.div 
                    variants={iconHoverVariants}
                    className="w-14 h-12 rounded-full bg-[#0c2e1f] border border-emerald-500/15 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.05)]"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zM14.357 12.316L9.743 17l4.614 4.614h7.37L17.114 17l4.614-4.684h-7.37z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Flutter Dev</h4>
                    <p className="text-xs text-zinc-400 mt-1">Cross-platform iOS & Android mobile apps, custom UI/UX, and native speed.</p>
                  </div>
                </motion.div>

              </div>

              {/* Small Bottom Info Badge */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-[10px] text-zinc-500 uppercase tracking-widest font-mono"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    STATUS: READY TO BUILD
                  </span>
                  <span>ENGINES: 100% ONLINE</span>
                </div>
              </motion.div>
            </footer>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Banner;