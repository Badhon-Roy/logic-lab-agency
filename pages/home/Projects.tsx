"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import IconSvg from "@/assets/images/icon-sub-heading.svg";

// Define TypeScript interfaces for our projects
interface Project {
  id: number;
  title: string;
  category: "UI/UX" | "Frontend" | "Flutter" | "Backend" | "N8N" | "3D Projects";
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  client: string;
  duration: string;
}

const categories = [
  "All",
  "UI/UX",
  "Frontend",
  "Flutter",
  "Backend",
  "N8N",
  "3D Projects",
] as const;

const projectsData: Project[] = [
  {
    id: 1,
    title: "AI Design Studio Workspace",
    category: "UI/UX",
    description: "Next-gen design system and landing page UI/UX for an AI creative workspace, featuring dark glassmorphism and custom interactive flows.",
    longDescription: "A comprehensive UI/UX design project for a leading AI creative studio. The goal was to establish a design language that feels intelligent, futuristic, and highly usable. We crafted a dark-themed design system with precise typography hierarchies, glassmorphic card overlays, and subtle glowing borders that guide user attention to critical call-to-actions.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Design System"],
    features: [
      "Custom Figma component library with 150+ components",
      "Dynamic dark/light mode adaptable color tokens",
      "Thorough user journey maps & interactive flow testing",
      "High-fidelity responsive mobile & desktop prototypes"
    ],
    client: "Aetheria Intelligence",
    duration: "4 Weeks"
  },
  {
    id: 2,
    title: "LogicLab SaaS Dashboard",
    category: "Frontend",
    description: "High-performance analytics dashboard built with Next.js, featuring real-time charts, dark mode, and seamless client-side state management.",
    longDescription: "A modern, client-facing SaaS analytics dashboard designed for fast, data-intensive operations. We integrated advanced charting libraries and optimized performance to achieve a 100/100 Google Lighthouse score. The interface allows drag-and-drop widget customization and loads data asynchronously via WebSocket streams.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts", "Framer Motion"],
    features: [
      "Real-time WebSocket data stream with zero layout shift",
      "Fully responsive Grid layout with customizable widgets",
      "Optimized Core Web Vitals (LCP < 1.2s)",
      "Dynamic client-side theme controls (Dark/Light/System)"
    ],
    client: "LogicLab Analytics",
    duration: "6 Weeks"
  },
  {
    id: 3,
    title: "Fintech Wallet App",
    category: "Flutter",
    description: "Cross-platform mobile application for instant payments, smart budgeting, and automated crypto portfolios built using Flutter.",
    longDescription: "A secure, cross-platform mobile wallet that simplifies peer-to-peer transfers and automates monthly savings plans. Leveraging Flutter's high-performance rendering engine, we crafted custom 60fps animations for transitions, transaction filtering, and interactive crypto value charts.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    tags: ["Flutter", "Dart", "Firebase", "State Management (Bloc)", "REST API", "Biometrics"],
    features: [
      "Secure biometric authentication (FaceID & Fingerprint)",
      "Butter-smooth 60fps micro-animations and route transitions",
      "Offline state synchronization using SQLite local store",
      "Real-time pushing alerts and SMS verification hooks"
    ],
    client: "Apex Pay",
    duration: "8 Weeks"
  },
  {
    id: 4,
    title: "Cloud Scaler API Gateway",
    category: "Backend",
    description: "A highly resilient backend gateway capable of routing, caching, and rate limiting millions of requests per second.",
    longDescription: "A backend scaling project addressing high-traffic request routing for an e-commerce giant. We built a custom gateway using Node.js and Go that manages requests dynamically, caches static resource endpoints in Redis, and enforces API rate limits to prevent server overloads during flash sales.",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
    tags: ["Node.js", "Go", "Redis", "Docker", "PostgreSQL", "GraphQL", "gRPC"],
    features: [
      "Distributed rate limiting utilizing Redis clustering",
      "Secure JWT and OAuth2 third-party authentication layer",
      "Comprehensive telemetry tracking with Prometheus & Grafana",
      "Auto-scaling configuration on Kubernetes clusters"
    ],
    client: "Nexus E-Commerce",
    duration: "10 Weeks"
  },
  {
    id: 5,
    title: "Automated Operations Sync",
    category: "N8N",
    description: "Enterprise-grade workflow automation built with N8N to sync Stripe payments, HubSpot leads, and support tickets dynamically.",
    longDescription: "An automation pipeline designed to remove manual data transfers across customer success, sales, and accounts. Using N8N, we built robust pipelines with built-in error handling and slack notification triggers that keep CRM platforms and billing tools in perfect sync.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    tags: ["N8N Workflow", "Stripe API", "HubSpot", "Zendesk", "JavaScript Webhooks"],
    features: [
      "Custom webhook listening nodes for instantaneous events",
      "Advanced error-catching loops with auto-retries and fallbacks",
      "Real-time reporting alerts sent directly to dedicated Slack channels",
      "Bi-directional synchronization of contact and payment logs"
    ],
    client: "Global SaaS Corp",
    duration: "3 Weeks"
  },
  {
    id: 6,
    title: "3D Metaverse Art Gallery",
    category: "3D Projects",
    description: "An immersive 3D virtual art gallery running directly in the browser with interactive physics, custom lighting, and spatial audio.",
    longDescription: "A unique 3D experience designed to showcase digital NFT art collections. Using React Three Fiber and custom WebGL shaders, we created a fully walk-through environment. Users can navigate using WASD keys or mobile touch gestures, explore artwork frames, and hear spatial audio adjust dynamically as they approach exhibits.",
    image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=800&q=80",
    tags: ["Three.js", "React Three Fiber", "WebGL", "GLSL Shaders", "GSAP Animations"],
    features: [
      "Fully interactive first-person spatial navigation system",
      "Dynamic shadow maps, ambient lighting, and custom textures",
      "Interactive media tags that display info cards on click",
      "Optimized assets asset loading (GLTF compression & pre-rendering)"
    ],
    client: "Solana Art Collective",
    duration: "7 Weeks"
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState<typeof categories[number]>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on activeTab
  const filteredProjects = activeTab === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="relative w-full bg-white text-gray-900 py-20 md:py-28 overflow-hidden">
      {/* Subtle light grid overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4] bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Background glow styling */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vh] bg-emerald-50 rounded-full blur-[140px] pointer-events-none z-0 opacity-50"></div>
      <div className="absolute bottom-1/4 left-0 w-[45vw] h-[45vh] bg-teal-50 rounded-full blur-[140px] pointer-events-none z-0 opacity-40"></div>

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
            Featured Projects
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-gray-900"
          >
            Our recent completed{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              masterpieces
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed mt-4"
          >
            We take pride in engineering tailored digital solutions that solve real business challenges. Explore our portfolio of works across various technical fields.
          </motion.p>
        </div>

        {/* Dynamic Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                  isActive 
                    ? "text-white border-transparent" 
                    : "text-gray-600 border-gray-200 hover:text-gray-900 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full z-0"
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative flex flex-col justify-between bg-white border border-gray-100 rounded-3xl p-5 shadow-xs hover:shadow-xl hover:border-emerald-200 transition-all duration-300 cursor-pointer"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity pointer-events-none"></div>
                  
                  {/* Category overlay tag */}
                  <div className="bg-white/20 backdrop-blur-md border border-white/10 text-white font-medium text-xs px-3.5 py-1.5 rounded-lg absolute bottom-4 left-4 z-10">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top Row: Title & Arrow */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200 tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      <div className="w-10 h-10 rounded-full border border-gray-150 bg-white flex items-center justify-center text-gray-400 group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-500 group-hover:text-white group-hover:border-transparent transition-all duration-300 shrink-0">
                        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </div>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technical Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-emerald-500/5 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="bg-gray-50 text-gray-500 text-xs font-semibold px-2.5 py-1 rounded-md">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Details Dialog Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#04150e]/60 backdrop-blur-sm"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md shadow-md flex items-center justify-center text-gray-600 hover:text-red-500 hover:scale-105 transition-all cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Left Column: Media / Image */}
              <div className="relative w-full md:w-5/12 min-h-[240px] md:min-h-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 z-10">
                  <span className="bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Right Column: Text & Features Scrollable Content */}
              <div className="flex-1 p-6 md:p-10 overflow-y-auto max-h-[50vh] md:max-h-[85vh]">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight leading-tight">
                  {selectedProject.title}
                </h3>
                
                {/* Meta details list */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 mb-6">
                  <div>
                    <span className="font-semibold text-gray-700">Client:</span> {selectedProject.client}
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 hidden sm:block"></div>
                  <div>
                    <span className="font-semibold text-gray-700">Duration:</span> {selectedProject.duration}
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Project Overview</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {selectedProject.longDescription}
                  </p>

                  <h4 className="text-lg font-bold text-gray-900 mb-3">Key Highlights & Features</h4>
                  <ul className="space-y-3 mb-6">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-600 mt-0.5">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-bold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-emerald-500/10 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="flex-1 py-3 px-6 bg-[#04150e] hover:bg-[#062419] text-white text-center rounded-xl font-semibold shadow-md transition-all cursor-pointer"
                    >
                      Close Details
                    </button>
                    <a
                      href="#contact"
                      onClick={() => setSelectedProject(null)}
                      className="flex-1 py-3 px-6 border border-gray-200 text-gray-700 hover:bg-gray-50 text-center rounded-xl font-semibold transition-all"
                    >
                      Start Project Like This
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
