"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Navbar from '../components/Navbar';
import Link from "next/link";
import PageTransition from '../components/PageTransition';
import CustomCursor from "../components/CustomCursor";

export default function Services() {
  // Refs for scroll animations
  const containerRef = useRef(null);

  // State for interactive elements
  const [activeCard, setActiveCard] = useState(null);

  // Custom animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, type: "spring", stiffness: 100 } }
  };

  // Function to handle card hover
  const handleCardHover = (index) => {
    setActiveCard(index);
  };
  return (
    <main>
      <PageTransition>
        <Navbar />
        <CustomCursor />

        {/* Hero Section */}
        <div className="relative bg-[ #E9E9E9] py-32 px-4 overflow-hidden">
          {/* Elegant background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 rounded-full filter blur-[80px] opacity-15"></div>
            <div className="absolute top-1/4 -right-20 w-60 h-60 bg-purple-500 rounded-full filter blur-[100px] opacity-15"></div>

            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 120 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-[#222222] mb-6 relative inline-block">
                  <span className="bg-clip-text text-[#09182C]">Our Services</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  ></motion.div>
                </h1>
              </motion.div>

              <motion.p
                className="text-xl md:text-2xl text-[#222222] mb-12"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                Comprehensive digital solutions to transform your ideas into reality with cutting-edge technology and expert craftsmanship.
              </motion.p>

              <motion.div
                className="flex justify-center"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >

              </motion.div>
            </motion.div>
          </div>
        </div>
        <hr />
        {/* Our Expertise Section */}
        <div className="relative py-28 px-4 bg-[#E9E9E9]">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-900/20 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-blue-900/20 to-transparent rounded-tr-full"></div>

            {/* Floating elements */}
            <div className="absolute top-20 left-[10%] w-6 h-6 bg-blue-500/30 rounded-full animate-float"></div>
            <div className="absolute top-40 right-[15%] w-4 h-4 bg-purple-500/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-32 left-[20%] w-8 h-8 bg-cyan-500/30 rounded-full animate-float" style={{ animationDelay: '2.2s' }}></div>
            <div className="absolute bottom-20 right-[25%] w-5 h-5 bg-pink-500/30 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
          </div>

          <div className="container mx-auto relative z-10">


            {/* Card Grid Layout with staggered animation */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
            >
              {/* Service Cards */}
              {/* Web Development Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => handleCardHover(0)}
                onHoverEnd={() => setActiveCard(null)}
                className="relative bg-[#E9E9E9] backdrop-blur-sm rounded-xl overflow-hidden group h-full flex flex-col"
                style={{
                  boxShadow: activeCard === 0 ? "0 15px 30px -8px rgba(79, 70, 229, 0.25)" : "0 8px 20px -10px rgba(2, 12, 27, 0.5)",
                  transition: "all 0.3s ease"
                }}
              >
                {/* 3D Tilt Effect Container */}
                <div className="relative flex flex-col h-full transition-all duration-300 ease-out">
                  {/* Card Header with Image */}
                  <div className="relative h-56 overflow-hidden">
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>

                    {/* Background image with gentle hover effect */}
                    <div className="absolute inset-0">
                      <div
                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                      ></div>
                    </div>

                    {/* Elegant gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09182C] via-[#09182C]/60 to-transparent"></div>

                    {/* Service number with glow effect */}
                    <div className="absolute top-4 left-4 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 rounded-full w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">01</span>
                      <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Card Content with hover effects */}
                  <div className="p-8 flex-grow flex flex-col relative z-10">
                    {/* Decorative elements */}
                    <div className="absolute -top-10 right-8 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Title with animated underline */}
                    <h3 className="text-2xl font-bold text-[#222222] mb-4 relative inline-block">
                      Web Development
                      <motion.div
                        className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"
                        initial={{ width: "30%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </h3>

                    {/* Description with subtle animation */}
                    <p className="text-[#222222] mb-6 text-sm flex-grow">
                      Custom web solutions built with cutting-edge technologies to create responsive, high-performance websites that deliver exceptional user experiences.
                    </p>

                    {/* Technology tags with hover effects */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <motion.span
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-md border border-blue-500/30 rounded-full text-xs text-[#222222]"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                        transition={{ duration: 0.2 }}
                      >React</motion.span>
                      <motion.span
                        className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-md border border-indigo-500/30 rounded-full text-xs text-[#222222]"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.3)" }}
                        transition={{ duration: 0.2 }}
                      >Next.js</motion.span>
                      <motion.span
                        className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-md border border-green-500/30 rounded-full text-xs text-[#222222]"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.3)" }}
                        transition={{ duration: 0.2 }}
                      >Node.js</motion.span>
                    </div>

                    {/* Learn more button with animated arrow */}
                    <motion.div
                      className="group inline-flex items-center gap-2 text-[#222222] cursor-pointer mt-auto"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-sm font-medium group-hover:text-blue-400 transition-colors duration-300">Learn more</span>
                      <motion.div
                        className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center group-hover:bg-blue-500/50 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-[#222222]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          initial={{ x: 0 }}
                          animate={{ x: activeCard === 0 ? 1 : 0 }}
                          transition={{ duration: 0.3, repeat: activeCard === 0 ? 9999 : 0, repeatType: "reverse" }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* App Development Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => handleCardHover(1)}
                onHoverEnd={() => setActiveCard(null)}
                className="relative bg-[#E9E9E9] backdrop-blur-md rounded-2xl overflow-hidden group h-full flex flex-col transform-gpu"
                style={{
                  boxShadow: activeCard === 1 ? "0 25px 50px -12px rgba(249, 115, 22, 0.4)" : "0 10px 30px -15px rgba(2, 12, 27, 0.7)",
                  transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                }}
              >
                {/* 3D Tilt Effect Container */}
                <div className="relative flex flex-col h-full transform transition-all duration-300 ease-out">
                  {/* Card Header with Image */}
                  <div className="relative h-56 overflow-hidden">
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-600 opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>

                    {/* Background image with parallax effect */}
                    <motion.div
                      className="absolute inset-0"
                      style={{ y: activeCard === 1 ? -10 : 0, transition: "transform 0.5s ease-out" }}
                    >
                      <div
                        className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-out"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                      ></div>
                    </motion.div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09182C] via-[#09182C]/70 to-transparent"></div>

                    {/* Animated particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDuration: "3s" }}></div>
                      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}></div>
                      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDuration: "4s", animationDelay: "1s" }}></div>
                    </div>

                    {/* Service number with glow effect */}
                    <div className="absolute top-4 left-4 bg-orange-500/20 backdrop-blur-md border border-orange-500/30 rounded-full w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">02</span>
                      <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Card Content with hover effects */}
                  <div className="p-8 flex-grow flex flex-col relative z-10">
                    {/* Decorative elements */}
                    <div className="absolute -top-10 right-8 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-pink-600/10 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Title with animated underline */}
                    <h3 className="text-2xl font-bold text-[#222222] mb-4 relative inline-block">
                      App Development
                      <motion.div
                        className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-orange-500 to-pink-600"
                        initial={{ width: "30%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </h3>

                    {/* Description with subtle animation */}
                    <p className="text-[#222222] mb-6 text-sm flex-grow">
                      Native and cross-platform mobile applications that provide seamless experiences across iOS and Android devices.
                    </p>

                    {/* Technology tags with hover effects */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <motion.span
                        className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-md border border-orange-500/30 rounded-full text-xs text-[#222222]"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(249, 115, 22, 0.3)" }}
                        transition={{ duration: 0.2 }}
                      >React Native</motion.span>
                      <motion.span
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-md border border-blue-500/30 rounded-full text-xs text-[#222222]"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                        transition={{ duration: 0.2 }}
                      >Flutter</motion.span>
                      <motion.span
                        className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-md border border-pink-500/30 rounded-full text-xs text-[#222222]"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(236, 72, 153, 0.3)" }}
                        transition={{ duration: 0.2 }}
                      >Swift</motion.span>
                    </div>

                    {/* Learn more button with animated arrow */}
                    <motion.div
                      className="group inline-flex items-center gap-2 text-[#222222] cursor-pointer mt-auto"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-sm font-medium group-hover:text-orange-400 transition-colors duration-300">Learn more</span>
                      <motion.div
                        className="w-6 h-6 rounded-full bg-orange-500/30 flex items-center justify-center group-hover:bg-orange-500/50 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          initial={{ x: 0 }}
                          animate={{ x: activeCard === 1 ? 1 : 0 }}
                          transition={{ duration: 0.3, repeat: activeCard === 1 ? Infinity : 0, repeatType: "reverse" }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Custom Software Development Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => handleCardHover(8)}
                onHoverEnd={() => setActiveCard(null)}
                className="relative bg-[#E9E9E9] backdrop-blur-sm rounded-xl overflow-hidden group h-full flex flex-col"
                style={{
                  boxShadow: activeCard === 8 ? "0 15px 30px -8px rgba(147, 51, 234, 0.25)" : "0 8px 20px -10px rgba(2, 12, 27, 0.5)",
                  transition: "all 0.3s ease"
                }}
              >
                {/* Card Header with Image */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-violet-600 opacity-30"></div>
                  <div className="absolute inset-0">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09182C] to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="text-white font-bold">08</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-[#222222] mb-3 relative inline-block">
                    Custom Software Development
                    <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-purple-600 to-violet-600"></div>
                  </h3>
                  <p className="text-[#222222] mb-4 text-sm flex-grow">
                    Tailored software solutions designed to meet your unique business requirements, streamline operations, and drive innovation.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-violet-600/20 backdrop-blur-md border border-purple-600/30 rounded-full text-xs text-[#222222]"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >Enterprise Solutions</motion.span>
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-violet-600/20 backdrop-blur-md border border-purple-600/30 rounded-full text-xs text-[#222222]"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >Cloud Applications</motion.span>
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-violet-600/20 backdrop-blur-md border border-purple-600/30 rounded-full text-xs text-[#222222]"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >API Integration</motion.span>
                  </div>
                  <motion.div
                    className="group inline-flex items-center gap-2 text-[#222222] cursor-pointer mt-auto"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm font-medium group-hover:text-purple-600 transition-colors duration-300">Learn more</span>
                    <motion.div
                      className="w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center group-hover:bg-purple-600/50 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        initial={{ x: 0 }}
                        animate={{ x: activeCard === 8 ? 1 : 0 }}
                        transition={{ duration: 0.3, repeat: activeCard === 8 ? Infinity : 0, repeatType: "reverse" }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* ERP & CRM Systems Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => handleCardHover(2)}
                onHoverEnd={() => setActiveCard(null)}
                className="relative bg-[#E9E9E9] backdrop-blur-sm rounded-xl overflow-hidden group h-full flex flex-col"
                style={{
                  boxShadow: activeCard === 2 ? "0 15px 30px -8px rgba(16, 185, 129, 0.25)" : "0 8px 20px -10px rgba(2, 12, 27, 0.5)",
                  transition: "all 0.3s ease"
                }}
              >
                {/* Card Header with Image */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-30"></div>
                  <div className="absolute inset-0">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09182C] to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="text-white font-bold">03</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-[#222222] mb-3 relative inline-block">
                    ERP & CRM Systems
                    <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-green-500 to-teal-600"></div>
                  </h3>
                  <p className="text-[#222222] mb-4 text-sm flex-grow">
                    Comprehensive enterprise solutions that streamline operations, enhance customer relationships, and drive business growth.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-teal-600/20 backdrop-blur-md border border-green-500/30 rounded-full text-xs text-[#222222]"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >Salesforce</motion.span>
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-teal-600/20 backdrop-blur-md border border-green-500/30 rounded-full text-xs text-[#222222]"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >SAP</motion.span>
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-teal-600/20 backdrop-blur-md border border-green-500/30 rounded-full text-xs text-[#222222]"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >Custom Solutions</motion.span>
                  </div>
                  <motion.div
                    className="group inline-flex items-center gap-2 text-[#222222] cursor-pointer mt-auto"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm font-medium group-hover:text-green-500 transition-colors duration-300">Learn more</span>
                    <motion.div
                      className="w-6 h-6 rounded-full bg-green-500/30 flex items-center justify-center group-hover:bg-green-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        initial={{ x: 0 }}
                        animate={{ x: activeCard === 2 ? 1 : 0 }}
                        transition={{ duration: 0.3, repeat: activeCard === 2 ? Infinity : 0, repeatType: "reverse" }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* UI/UX Design Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => handleCardHover(3)}
                onHoverEnd={() => setActiveCard(null)}
                className="relative bg-[#E9E9E9] backdrop-blur-sm rounded-xl overflow-hidden group h-full flex flex-col"
                style={{
                  boxShadow: activeCard === 3 ? "0 15px 30px -8px rgba(99, 102, 241, 0.25)" : "0 8px 20px -10px rgba(2, 12, 27, 0.5)",
                  transition: "all 0.3s ease"
                }}
              >
                {/* Card Header with Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-600 opacity-30"></div>
                  <div className="absolute inset-0">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09182C] to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="text-white font-bold">04</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-[#222222] mb-3 relative inline-block">
                    UI/UX Design
                    <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-indigo-500 to-blue-600"></div>
                  </h3>
                  <p className="text-[#222222] mb-4 text-sm flex-grow">
                    Intuitive and visually stunning interfaces that enhance user engagement and satisfaction while reflecting your brand identity.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-blue-600/20 backdrop-blur-md border border-indigo-500/30 rounded-full text-xs text-white"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >Figma</motion.span>
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-blue-600/20 backdrop-blur-md border border-indigo-500/30 rounded-full text-xs text-white"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >Adobe XD</motion.span>
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-blue-600/20 backdrop-blur-md border border-indigo-500/30 rounded-full text-xs text-white"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >Sketch</motion.span>
                  </div>
                  <motion.div
                    className="group inline-flex items-center gap-2 text-[#222222] cursor-pointer mt-auto"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm font-medium group-hover:text-indigo-500 transition-colors duration-300">Learn more</span>
                    <motion.div
                      className="w-6 h-6 rounded-full bg-indigo-500/30 flex items-center justify-center group-hover:bg-indigo-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        initial={{ x: 0 }}
                        animate={{ x: activeCard === 3 ? 1 : 0 }}
                        transition={{ duration: 0.3, repeat: activeCard === 3 ? Infinity : 0, repeatType: "reverse" }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Social Media Handling Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => handleCardHover(4)}
                onHoverEnd={() => setActiveCard(null)}
                className="relative bg-[#E9E9E9] backdrop-blur-sm rounded-xl overflow-hidden group h-full flex flex-col"
                style={{
                  boxShadow: activeCard === 4 ? "0 15px 30px -8px rgba(168, 85, 247, 0.25)" : "0 8px 20px -10px rgba(2, 12, 27, 0.5)",
                  transition: "all 0.3s ease"
                }}
              >
                {/* Card Header with Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 opacity-30"></div>
                  <div className="absolute inset-0">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09182C] to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="text-white font-bold">05</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-[#222222] mb-3 relative inline-block">
                    Social Media Handling
                    <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-purple-500 to-violet-600"></div>
                  </h3>
                  <p className="text-[#222222] mb-4 text-sm flex-grow">
                    Strategic social media management that builds your brand presence, engages your audience, and drives meaningful conversions.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-violet-600/20 backdrop-blur-md border border-purple-500/30 rounded-full text-xs text-white"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >Content Strategy</motion.span>
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-violet-600/20 backdrop-blur-md border border-purple-500/30 rounded-full text-xs text-white"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >Analytics</motion.span>
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-violet-600/20 backdrop-blur-md border border-purple-500/30 rounded-full text-xs text-white"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >Campaign Management</motion.span>
                  </div>
                  <motion.div
                    className="group inline-flex items-center gap-2 text-[#222222] cursor-pointer mt-auto"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm font-medium group-hover:text-purple-500 transition-colors duration-300">Learn more</span>
                    <motion.div
                      className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center group-hover:bg-purple-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        initial={{ x: 0 }}
                        animate={{ x: activeCard === 4 ? 1 : 0 }}
                        transition={{ duration: 0.3, repeat: activeCard === 4 ? Infinity : 0, repeatType: "reverse" }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Digital Marketing Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => handleCardHover(5)}
                onHoverEnd={() => setActiveCard(null)}
                className="relative bg-[#E9E9E9] backdrop-blur-sm rounded-xl overflow-hidden group h-full flex flex-col"
                style={{
                  boxShadow: activeCard === 5 ? "0 15px 30px -8px rgba(239, 68, 68, 0.25)" : "0 8px 20px -10px rgba(2, 12, 27, 0.5)",
                  transition: "all 0.3s ease"
                }}
              >
                {/* Card Header with Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600 opacity-30"></div>
                  <div className="absolute inset-0">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09182C] to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="text-white font-bold">06</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-[#222222] mb-3 relative inline-block">
                    Digital Marketing
                    <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-red-500 to-orange-600"></div>
                  </h3>
                  <p className="text-[#222222] mb-4 text-sm flex-grow">
                    Data-driven marketing strategies that increase your online visibility, drive targeted traffic, and maximize your ROI through multiple digital channels.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-red-500/20 to-orange-600/20 backdrop-blur-md border border-red-500/30 rounded-full text-xs text-white"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(239, 68, 68, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >SEO</motion.span>
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-red-500/20 to-orange-600/20 backdrop-blur-md border border-red-500/30 rounded-full text-xs text-white"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(239, 68, 68, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >PPC</motion.span>
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-red-500/20 to-orange-600/20 backdrop-blur-md border border-red-500/30 rounded-full text-xs text-white"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(239, 68, 68, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >Content Marketing</motion.span>
                  </div>
                  <motion.div
                    className="group inline-flex items-center gap-2 text-[#222222] cursor-pointer mt-auto"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm font-medium group-hover:text-red-500 transition-colors duration-300">Learn more</span>
                    <motion.div
                      className="w-6 h-6 rounded-full bg-red-500/30 flex items-center justify-center group-hover:bg-red-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        initial={{ x: 0 }}
                        animate={{ x: activeCard === 5 ? 1 : 0 }}
                        transition={{ duration: 0.3, repeat: activeCard === 5 ? Infinity : 0, repeatType: "reverse" }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* E-Commerce Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => handleCardHover(6)}
                onHoverEnd={() => setActiveCard(null)}
                className="relative bg-[#E9E9E9] backdrop-blur-sm rounded-xl overflow-hidden group h-full flex flex-col"
                style={{
                  boxShadow: activeCard === 6 ? "0 15px 30px -8px rgba(6, 182, 212, 0.25)" : "0 8px 20px -10px rgba(2, 12, 27, 0.5)",
                  transition: "all 0.3s ease"
                }}
              >
                {/* Card Header with Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-30"></div>
                  <div className="absolute inset-0">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09182C] to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="text-white font-bold">07</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-[#222222] mb-3 relative inline-block">
                    E-Commerce
                    <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                  </h3>
                  <p className="text-[#222222] mb-4 text-sm flex-grow">
                    End-to-end e-commerce solutions that transform your products into a thriving online business with seamless shopping experiences and secure transactions.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-md border border-cyan-500/30 rounded-full text-xs text-white"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >Shopify</motion.span>
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-md border border-cyan-500/30 rounded-full text-xs text-white"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >WooCommerce</motion.span>
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-md border border-cyan-500/30 rounded-full text-xs text-white"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >Magento</motion.span>
                  </div>
                  <motion.div
                    className="group inline-flex items-center gap-2 text-[#222222] cursor-pointer mt-auto"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm font-medium group-hover:text-cyan-500 transition-colors duration-300">Learn more</span>
                    <motion.div
                      className="w-6 h-6 rounded-full bg-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        initial={{ x: 0 }}
                        animate={{ x: activeCard === 6 ? 1 : 0 }}
                        transition={{ duration: 0.3, repeat: activeCard === 6 ? Infinity : 0, repeatType: "reverse" }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Resource-Outsource Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => handleCardHover(7)}
                onHoverEnd={() => setActiveCard(null)}
                className="relative bg-[#E9E9E9] backdrop-blur-sm rounded-xl overflow-hidden group h-full flex flex-col"
                style={{
                  boxShadow: activeCard === 7 ? "0 15px 30px -8px rgba(16, 185, 129, 0.25)" : "0 8px 20px -10px rgba(2, 12, 27, 0.5)",
                  transition: "all 0.3s ease"
                }}
              >
                {/* Card Header with Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 opacity-30"></div>
                  <div className="absolute inset-0">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09182C] to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="text-white font-bold">08</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-[#222222] mb-3 relative inline-block">
                    Resource-Outsource
                    <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-emerald-500 to-green-600"></div>
                  </h3>
                  <p className="text-[#222222] mb-4 text-sm flex-grow">
                    Flexible resource outsourcing solutions that provide skilled professionals to augment your team and accelerate project delivery.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-green-600/20 backdrop-blur-md border border-emerald-500/30 rounded-full text-xs text-white"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >Developers</motion.span>
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-green-600/20 backdrop-blur-md border border-emerald-500/30 rounded-full text-xs text-white"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >Designers</motion.span>
                    <motion.span
                      className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-green-600/20 backdrop-blur-md border border-emerald-500/30 rounded-full text-xs text-white"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.3)" }}
                      transition={{ duration: 0.2 }}
                    >Project Managers</motion.span>
                  </div>
                  <motion.div
                    className="group inline-flex items-center gap-2 text-[#222222] cursor-pointer mt-auto"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm font-medium group-hover:text-emerald-500 transition-colors duration-300">Learn more</span>
                    <motion.div
                      className="w-6 h-6 rounded-full bg-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        initial={{ x: 0 }}
                        animate={{ x: activeCard === 7 ? 1 : 0 }}
                        transition={{ duration: 0.3, repeat: activeCard === 7 ? Infinity : 0, repeatType: "reverse" }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <hr />

        {/* Call to Action Section */}
        <div className="relative py-32 bg-[#E9E9E9] overflow-hidden">
          {/* Elegant background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-15"></div>
            <div className="absolute top-1/3 -left-24 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-15"></div>
            <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-15"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 120 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6 relative inline-block">
                  Ready to Transform Your Digital Presence?
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-purple-400"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  ></motion.div>
                </h2>
              </motion.div>

              <motion.p
                className="text-xl text-[#222222]/90 mb-12"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                Let's discuss how our services can help you achieve your business goals and create exceptional digital experiences.
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{
                      scale: 1.02
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden group bg-white text-[#09182C] px-10 py-4 rounded-lg text-lg font-medium border border-white/10 transition-all duration-300 ease-in-out"
                  >
                    <span className="relative z-10">Schedule a Free Consultation</span>
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </PageTransition>
    </main>
  );
}
