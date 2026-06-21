"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import IconSvg from "@/assets/images/icon-sub-heading.svg";

const blogPosts = [
  {
    title: "How to choose the right insurance plan for your family",
    image: "https://demo.awaikenthemes.com/covar/wp-content/uploads/2026/03/post-1.jpg",
    link: "#",
  },
  {
    title: "5 Common insurance mistakes and how to avoid them",
    image: "https://demo.awaikenthemes.com/covar/wp-content/uploads/2026/03/post-2.jpg",
    link: "#",
  },
  {
    title: "Health insurance explained: what your policy really covers",
    image: "https://demo.awaikenthemes.com/covar/wp-content/uploads/2026/03/post-3.jpg",
    link: "#",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="relative w-full bg-[#f8f7f4] text-gray-900 py-20 md:py-28 overflow-hidden">
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
            Latest Blogs
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-gray-900"
          >
            Latest news, guides & updates
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl"
          >
            Keep up with our latest articles covering insurance trends, policy insights, and expert recommendations for better coverage planning.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="blog-card flex flex-col justify-between bg-white border border-gray-100 rounded-[32px] p-6 shadow-xs hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] w-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              </div>

              {/* Title Content */}
              <div className="mt-6 flex-1 flex flex-col justify-between">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 tracking-tight group-hover:text-[#10B981] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <div>
                  {/* Divider */}
                  <div className="w-full h-px bg-gray-100 mb-6"></div>

                  {/* Read More Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 font-bold text-[15px] group-hover:text-[#10B981] transition-colors">
                      Read More
                    </span>
                    {/* Circle Arrow Button */}
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-[#10B981] flex items-center justify-center group-hover:bg-[#10B981] group-hover:text-white transition-all duration-300">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
