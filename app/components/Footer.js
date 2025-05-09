"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#09182C] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between"
        >
          {/* DW Innovation */}
          <motion.div variants={itemVariants} className="mb-8 lg:mb-0 lg:w-1/4">
            <h3 className="text-xl font-bold mb-4">DW Innovation</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              We create elegant web, mobile, and digital experiences that bring ideas into reality.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/company/dw-innovation-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#0077B5" }}
                transition={{ duration: 0.2 }}
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={20} />
              </motion.a>
              {/* <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#1DA1F2" }}
                transition={{ duration: 0.2 }}
                className="text-gray-300 hover:text-white"
              >
                <FaTwitter size={20} />
              </motion.a> */}
              <motion.a
                href="https://www.instagram.com/dw_innovation_?utm_source=qr&igsh=MXFhYnB5YjI4YnVsMw=="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#E1306C" }}
                transition={{ duration: 0.2 }}
                className="text-gray-300 hover:text-white"
              >
                <FaInstagram size={20} />
              </motion.a>
              {/* <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#6e5494" }}
                transition={{ duration: 0.2 }}
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={20} />
              </motion.a> */}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="mb-8 lg:mb-0 lg:w-1/5">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Our Clients", path: "/clients" },
                { name: "Blog", path: "/blog" },
                { name: "About Us", path: "/about" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm inline-block relative group"
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="mb-8 lg:mb-0 lg:w-1/5">
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { name: "Web Development", path: "/services#web" },
                { name: "App Development", path: "/services#app" },
                { name: "ERP & CRM Systems", path: "/services#erp" },
                { name: "UI/UX Design", path: "/services#design" },
                { name: "Digital Marketing", path: "/services#marketing" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm inline-block relative group"
                  >
                    {service.name}
                    <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div variants={itemVariants} className="mb-8 lg:mb-0 lg:w-2/5">
            <h3 className="text-xl font-bold mb-4">Technologies</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {/* Frontend */}
              <div>
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Frontend</h4>
                <ul className="space-y-2">
                  {[
                    { name: "React", path: "/technologies#react" },
                    { name: "Angular", path: "/technologies#angular" },
                    { name: "Next.js", path: "/technologies#nextjs" },
                    { name: "Vue.js", path: "/technologies#vue" },
                    { name: "HTML/CSS/JS", path: "/technologies#web" },
                    { name: "TypeScript", path: "/technologies#typescript" },
                  ].map((tech) => (
                    <li key={tech.name}>
                      <Link
                        href={tech.path}
                        className="text-gray-300 hover:text-white transition-colors duration-300 text-sm inline-block relative group"
                      >
                        {tech.name}
                        <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Backend */}
              <div>
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Backend</h4>
                <ul className="space-y-2">
                  {[
                    { name: "Node.js", path: "/technologies#nodejs" },
                    { name: "Python", path: "/technologies#python" },
                    { name: "Java", path: "/technologies#java" },
                    { name: ".NET", path: "/technologies#dotnet" },
                    { name: "websocket", path: "/technologies#websocket" }

                  ].map((tech) => (
                    <li key={tech.name}>
                      <Link
                        href={tech.path}
                        className="text-gray-300 hover:text-white transition-colors duration-300 text-sm inline-block relative group"
                      >
                        {tech.name}
                        <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Mobile</h4>
                <ul className="space-y-2">
                  {[
                    { name: "React Native", path: "/technologies#reactnative" },
                    { name: "Flutter", path: "/technologies#flutter" },
                  ].map((tech) => (
                    <li key={tech.name}>
                      <Link
                        href={tech.path}
                        className="text-gray-300 hover:text-white transition-colors duration-300 text-sm inline-block relative group"
                      >
                        {tech.name}
                        <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stacks & Others */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Stacks & Others</h4>
                <ul className="space-y-2">
                  {[
                    { name: "MERN Stack", path: "/technologies#mern" },
                    { name: "MEAN Stack", path: "/technologies#mean" },
                    { name: "Java Full Stack", path: "/technologies#javafullstack" },
                    { name: "UI/UX Design", path: "/technologies#uiux" },
                    { name: "DevOps", path: "/technologies#devops" }
                  ].map((tech) => (
                    <li key={tech.name}>
                      <Link
                        href={tech.path}
                        className="text-gray-300 hover:text-white transition-colors duration-300 text-sm inline-block relative group"
                      >
                        {tech.name}
                        <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="mb-8 lg:mb-0 lg:w-1/5">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span>Shreya Hub,Office no 13 ,3rd floor,Pari chouk, 41, near CNG Gas Station, Narhe, Katraj,Pune, Maharashtra 411041</span>
              </p>
              <p className="text-gray-300 text-sm flex items-center">
                <span className="mr-2">📞</span>
               
                <span>HR: 9284117439</span>
              </p>
              <p className="text-gray-300 text-sm flex items-center">
                <span className="mr-2 text-red-500">✉️</span>
                <a
                  href="mailto:hr@dwi4u.com"
                  className="hover:text-white transition-colors duration-300 relative group"
                >
                  hr@dwi4u.com

                  <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                </a>

              </p>
              <p className="text-gray-300 text-sm flex items-center">
              <span className="mr-2">✉️</span>
                <a
                  href="mailto:marketing@dwi4u.com"
                  className="hover:text-white transition-colors duration-300 relative group"
                >
                  marketing@dwi4u.com

                  <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                </a>

              </p>
            </div>
            <div className="pt-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#09182C] px-5 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-300"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Copyright Bar */}
      <div className="py-6 border-t border-gray-800 bg-[#071525]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} DW Innovation Pvt. Ltd. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
