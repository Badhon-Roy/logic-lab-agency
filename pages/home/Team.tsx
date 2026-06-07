"use client";
import { motion } from "framer-motion";
import IconSvg from "@/assets/images/icon-sub-heading.svg";
import Image from "next/image";

const teamMembers = [
  {
    name: "Tarek Mahmud",
    role: "Lead of Logic Lab",
    image: "https://i.postimg.cc/zXzWvdP3/photo-2025-05-06-12-09-07.jpg",
  },
  {
    name: "Michael Anderson",
    role: "Senior Full-Stack Engineer",
    image:
      "https://demo.awaikenthemes.com/covar/wp-content/uploads/2026/03/team-2.jpg",
  },
  {
    name: "David Martinez",
    role: "Cloud Solutions Architect",
    image:
      "https://demo.awaikenthemes.com/covar/wp-content/uploads/2026/03/team-3.jpg",
  },
  {
    name: "David Martinez",
    role: "Cloud Solutions Architect",
    image:
      "https://demo.awaikenthemes.com/covar/wp-content/uploads/2026/04/why-choose-image-2-stone.jpg",
  },
];

const Team = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-24 pb-32">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-[#17351C] bg-transparent text-[#17351C] text-sm font-bold tracking-widest px-3 py-1.5 rounded-full mb-6"
          >
            <Image src={IconSvg} alt="icon" width={16} height={16} />
            Our Expert Team
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-gray-900"
          >
            Our skilled digital{" "}
            <span className="bg-linear-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              experts
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-base md:text-lg leading-relaxed"
          >
            With extensive industry knowledge and a client-first approach, our
            experts are committed to helping businesses engineer reliable,
            scalable products.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="relative group rounded-3xl overflow-hidden aspect-[3/4] max-w-sm mx-auto w-full shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />

              {/* Gradient Overlay bottom to top */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#04150e] via-[#04150e]/60 to-transparent opacity-90"></div>

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-center z-10">
                {/* Hover Socials */}
                <div className="flex justify-center gap-3 mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  {[
                    {
                      icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                    }, // X (Twitter)
                    {
                      icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                    }, // Facebook
                    {
                      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
                    }, // Instagram
                    {
                      icon: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.366 18.624 0 12.017 0z",
                    }, // Pinterest
                  ].map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-linear-to-r from-emerald-600 to-teal-500 flex items-center justify-center transition-colors duration-300"
                    >
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>

                <div className="w-12 h-px bg-white/20 mx-auto mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <h4 className="text-2xl font-medium text-white mb-2">
                  {member.name}
                </h4>
                <p className="text-[#10b981] text-xl">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
