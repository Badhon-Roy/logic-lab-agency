"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [systemTime, setSystemTime] = useState("");
  const [latency, setLatency] = useState(12);

  // Auto-updating simulator for lab metrics
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSystemTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    const latencyInterval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 8) + 8); // fluctuates between 8ms and 15ms
    }, 3000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(latencyInterval);
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Stagger variants for columns
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative w-full bg-[#020b07] text-[#f4fbf7] pt-24 pb-12 overflow-hidden border-t border-emerald-500/10 selection:bg-emerald-500 selection:text-black">
      {/* Background Grid Pattern & Grain Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15] bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute inset-0 bg-grain z-5 pointer-events-none"></div>

      {/* Floating Radial Glow Elements */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[30vh] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 w-[50vw] h-[30vh] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Main Footer Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-emerald-500/10"
        >
          {/* Column 1: Brand & Bio (Span 4) */}
          <motion.div variants={childVariants} className="lg:col-span-4 flex flex-col gap-6">
            <div onClick={scrollToTop} className="flex items-center gap-3 group cursor-pointer w-fit">
              {/* Flask Logo with pulse and hover-spin */}
              <motion.div
                whileHover={{ rotate: 15, scale: 1.05 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-950 to-[#0c2e1f] border border-emerald-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:border-emerald-500/60 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </motion.div>
              <div>
                <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-widest block leading-none mb-1">
                  ESTD 2026
                </span>
                <span className="text-xl font-bold font-sans tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  LOGIC LAB
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              We are a full-stack digital product laboratory. We engineer custom architectures, clean-coded websites, scalable databases, and high-fidelity design assets.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-3 font-sans text-sm text-zinc-400 mt-2">
              <a href="mailto:hello@logiclabagency.com" className="flex items-center gap-3 hover:text-emerald-400 transition-colors w-fit group">
                <svg className="w-4 h-4 text-emerald-500/80 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@logiclabagency.com
              </a>
              <a href="tel:+123456798" className="flex items-center gap-3 hover:text-emerald-400 transition-colors w-fit group">
                <svg className="w-4 h-4 text-emerald-500/80 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +(123) 456-798
              </a>
              <span className="flex items-center gap-3 w-fit">
                <svg className="w-4 h-4 text-emerald-500/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Silicon Valley, CA, USA
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5 mt-2">
              {[
                {
                  name: "GitHub",
                  url: "#github",
                  svg: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  url: "#linkedin",
                  svg: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                },
                {
                  name: "Twitter/X",
                  url: "#twitter",
                  svg: (
                    <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  name: "Figma",
                  url: "#figma",
                  svg: (
                    <svg className="w-4 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5 5 5 0 0 0 5-5V7a5 5 0 0 0-5-5zm-5 15a5 5 0 0 0 5 5 5 5 0 0 0 5-5v-1H7v1zm5-8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 10a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ y: -3, scale: 1.1, backgroundColor: "rgba(16, 185, 129, 0.15)", borderColor: "rgba(16, 185, 129, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg border border-emerald-500/10 bg-emerald-950/20 flex items-center justify-center text-emerald-400 transition-colors shadow-inner"
                  title={social.name}
                >
                  {social.svg}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Services (Span 2) */}
          <motion.div variants={childVariants} className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-white font-semibold font-sans tracking-wide text-[15px] uppercase relative pl-3 border-l-2 border-emerald-500">
              Services
            </h4>
            <ul className="flex flex-col gap-3.5 text-zinc-400 text-sm">
              {[
                { label: "UI/UX Design", href: "#services" },
                { label: "Frontend Dev", href: "#services" },
                { label: "Backend Dev", href: "#services" },
                { label: "Flutter Apps", href: "#services" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-emerald-400 transition-colors relative py-1 group flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Company (Span 2) */}
          <motion.div variants={childVariants} className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-white font-semibold font-sans tracking-wide text-[15px] uppercase relative pl-3 border-l-2 border-emerald-500">
              Company
            </h4>
            <ul className="flex flex-col gap-3.5 text-zinc-400 text-sm">
              {[
                { label: "About Us", href: "#about" },
                { label: "Why Us", href: "#why-choose-us" },
                { label: "Our Team", href: "#team" },
                { label: "FAQs", href: "#faq" },
                { label: "Contact Us", href: "#contact" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-emerald-400 transition-colors relative py-1 group flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Newsletter & Lab Status (Span 4) */}
          <motion.div variants={childVariants} className="lg:col-span-4 flex flex-col gap-6">
            <h4 className="text-white font-semibold font-sans tracking-wide text-[15px] uppercase relative pl-3 border-l-2 border-emerald-500">
              Join the Lab
            </h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Get raw, unfiltered updates on engineering patterns, UI guidelines, and digital products we publish.
            </p>

            <form onSubmit={handleSubscribe} className="relative w-full flex flex-col gap-3">
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={subscribed}
                  className="w-full bg-emerald-950/20 border border-emerald-500/15 rounded-xl py-3.5 pl-4 pr-32 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all shadow-inner disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={subscribed}
                  className="absolute right-1.5 cursor-pointer bg-linear-to-r from-emerald-600 to-teal-500 text-white font-semibold text-xs px-4.5 py-2.5 rounded-lg hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-200 disabled:opacity-50"
                >
                  SUBSCRIBE
                </button>
              </div>

              {/* Animate subscription confirmation */}
              <AnimatePresence>
                {subscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 pl-1"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    SECURE NODE SYNCED. THANK YOU!
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            {/* Micro Lab Status Widget */}
            <div className="bg-[#04150e]/60 border border-emerald-500/5 p-4 rounded-xl font-mono text-[11px] text-zinc-500 tracking-wider flex flex-col gap-2.5 shadow-inner mt-2">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  NODE_STATUS
                </span>
                <span className="text-emerald-400 font-semibold">100% OPERATIONAL</span>
              </div>
              <div className="flex justify-between">
                <span>LOCAL_LATENCY</span>
                <span className="text-zinc-400">{latency} ms</span>
              </div>
              <div className="flex justify-between">
                <span>LAB_TIME</span>
                <span className="text-zinc-400">{systemTime || "00:00:00"} UTC+6</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs text-zinc-500 font-mono tracking-wider flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} LOGIC LAB AGENCY. ALL RIGHTS RESERVED.</span>
            <div className="flex items-center gap-4">
              <a href="#privacy" onClick={(e) => handleLinkClick(e, "#privacy")} className="hover:text-zinc-300 transition-colors">PRIVACY_POLICY</a>
              <span className="text-zinc-700">|</span>
              <a href="#terms" onClick={(e) => handleLinkClick(e, "#terms")} className="hover:text-zinc-300 transition-colors">TERMS_OF_SERVICE</a>
            </div>
          </div>

          {/* Premium Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, borderColor: "rgba(16, 185, 129, 0.4)", backgroundColor: "rgba(16, 185, 129, 0.05)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 cursor-pointer border border-emerald-500/10 rounded-full px-5 py-3 bg-[#030d08]/50 text-emerald-400 text-xs font-mono tracking-widest shadow-lg transition-all group"
          >
            BACK_TO_TOP
            <svg
              className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform text-emerald-400 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
