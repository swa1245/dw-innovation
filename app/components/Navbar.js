"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from '../logo/DWI logo ong.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
  const handleNavigation = (path, e) => {
    e.preventDefault();
    setIsOpen(false);
    // Small delay to allow exit animation to start before navigation
    setTimeout(() => {
      router.push(path);
    }, 100);
  };

  return (
    <motion.nav 
     
      className="bg-[#09182C] h-16 flex items-center px-6 shadow-md relative"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-lg px-3 py-1"
        >
         <Image src={logo} alt="DW Innovation Logo" width={128} height={40} className="w-32 object-contain" priority /> 
        </motion.div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation items - Desktop */}
        <div className="hidden md:flex gap-8">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "About Us", path: "/about" },
            { name: "Our Clients", path: "/clients" },
            { name: "Blog", path: "/blogs" },
            { name: "Industries", path: "/industries" },
            { name: "Hire", path: "/hire" }
          ].map((item, index) => (
            <motion.div key={item.name}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <Link
                href={item.path}
                className="text-white hover:text-gray-300 text-sm uppercase tracking-wide relative group"
                onClick={(e) => handleNavigation(item.path, e)}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Contact Us - Desktop */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="hidden md:block"
        >
          <Link
            href="/contact"
            className="text-white hover:text-gray-300 font-medium text-sm uppercase tracking-wide relative group"
            onClick={(e) => handleNavigation('/contact', e)}
          >
            Contact Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
        className={`absolute top-16 left-0 right-0 bg-[#09182C] shadow-lg md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Our Clients", path: "/clients" },
            { name: "Blog", path: "/blog" },
            { name: "Industries", path: "/industries" },
            { name: "About Us", path: "/about" },
            { name: "Hire", path: "/hire" },
            { name: "Contact Us", path: "/contact" }
          ].map((item, index) => (
            <motion.div key={item.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                href={item.path}
                className="text-white text-sm uppercase tracking-wide hover:text-gray-300 relative group"
                onClick={(e) => handleNavigation(item.path, e)}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}