"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import Link from "next/link";
import CustomCursor from "../components/CustomCursor";

const AboutPage = () => {
  // Images for the slider from public folder
  const images = [
    "/aboutimages/IMG_7269.JPG",
    "/aboutimages/IMG_6630.JPG",
    "/aboutimages/IMG_6644.JPG",
    "/aboutimages/IMG_7270.JPG",
    "/aboutimages/IMG_6669.JPG",
    "/aboutimages/IMG_7267.JPG",
    "/aboutimages/IMG_8333.JPG",
    "/aboutimages/IMG_8332.JPG",
    "/aboutimages/IMG_8334.JPG",
    "/aboutimages/IMG_8341.JPG"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  // Auto-slide functionality
  useEffect(() => {
    startSlideTimer();
    return () => clearInterval(slideInterval.current);
  }, []);

  const startSlideTimer = () => {
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <main>
      <PageTransition>
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
          <CustomCursor />
        </div>
        <div className="bg-white pt-16"> {/* Added padding-top instead of margin */}
          {/* Modern Split-Screen Image Slider */}
          <div className="relative h-[80vh] md:h-[85vh] lg:h-[90vh] overflow-hidden bg-[#09182C]">
            {/* Left side - Image display */}
            <div className="absolute top-0 bottom-0 left-0 w-full md:w-4/6 overflow-hidden">
              <div className="relative w-full h-full">
                {/* Dynamic image slider */}
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{
                      opacity: index === currentIndex ? 1 : 0,
                      scale: index === currentIndex ? 1 : 1.1,
                      zIndex: index === currentIndex ? 10 : 5
                    }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  >
                    <div
                      className="w-full h-full transform transition-transform duration-30000 ease-linear hover:scale-105"
                      style={{
                        backgroundImage: `url('${image}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    ></div>

                    {/* Gradient overlay */}
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-[#09182C]/80 via-transparent to-transparent md:via-[#09182C]/50 md:to-[#09182C]/80"></div> */}
                  </motion.div>
                ))}

                {/* Decorative elements - floating particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-white/20 backdrop-blur-sm"
                      style={{
                        width: `${Math.random() * 8 + 4}px`,
                        height: `${Math.random() * 8 + 4}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, Math.random() * -100 - 50],
                        x: [0, (Math.random() - 0.5) * 50],
                        opacity: [0, 0.8, 0]
                      }}
                      transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        delay: Math.random() * 5
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="absolute top-0 bottom-0 right-0 w-full md:w-2/6 flex items-center z-20 px-8 md:px-12">
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    About <span className="text-blue-400">DW</span> Innovation
                  </h1>

                  <div className="w-20 h-1 bg-blue-500 mb-8"></div>

                  <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                    We're a team of passionate digital creators building innovative solutions for tomorrow's challenges.
                  </p>

                  {/* Slider navigation */}
                  <div className="flex items-center gap-6 mb-8">
                    <button
                      onClick={prevSlide}
                      className="group relative overflow-hidden rounded-full w-12 h-12 flex items-center justify-center border border-white/30 hover:border-white/60 transition-all duration-300"
                      aria-label="Previous slide"
                    >
                      <svg className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      onClick={nextSlide}
                      className="group relative overflow-hidden rounded-full w-12 h-12 flex items-center justify-center border border-white/30 hover:border-white/60 transition-all duration-300"
                      aria-label="Next slide"
                    >
                      <svg className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Progress indicators */}
                  <div className="flex items-center gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className="group relative h-1 rounded-full overflow-hidden transition-all duration-300"
                        style={{ width: `${100 / images.length}%` }}
                        aria-label={`Go to slide ${index + 1}`}
                      >
                        <div className="absolute inset-0 bg-white/20 group-hover:bg-white/40 transition-colors duration-300" />
                        {index === currentIndex && (
                          <motion.div
                            className="absolute inset-0 bg-blue-500"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 5, ease: "linear" }}
                            key={currentIndex}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Section - Clean & Elegant */}
        <div className="py-24 bg-[#E9E9E9] text-[#222222]">
          <div className="max-w-5xl mx-auto px-4">
            {/* Clean, centered heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-3">
                By the People, For the People
              </h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            </motion.div>
            
            {/* Our Story section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold mb-2">Our Story</h3>
            </motion.div>
            
            {/* Content paragraphs with elegant spacing */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-lg leading-relaxed mb-8 text-center">
                {/* DW INNOVATION PVT. LTD. was founded by a group of entrepreneurs who recognized the need for reliable and high-quality Development services. We are built around a company culture based on innovation, excellence and dedication to service. */}
                DW INNOVATION PVT. LTD. was founded by a team of forward-thinking entrepreneurs who recognized the need for reliable, high-impact development services. Driven by a culture of creativity, precision, and passion, we transform ideas into exceptional digital experiences.
              </p>
              <p className="text-lg leading-relaxed text-center">
              Today, we are a trusted global tech partner—delivering top-tier web and mobile development, custom product solutions, and scalable digital platforms. Our commitment to quality and client success has made us a standout name in the technology space.
                {/* Today, DW INNOVATION PVT. LTD. is a well-established company that specializes in web and mobile development, MVP and product development, and serves clients globally. Our dedication to quality work and helping clients achieve their goals has helped us become a trusted name in the technology industry. */}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="py-24 bg-white text-[#222222]">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-3">Our Mission & Vision</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            </motion.div>
            
            {/* Flex Container for Mission and Vision */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex-1 bg-[#f8f8f8] rounded-xl p-8 md:p-10 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold">Our Mission</h3>
                </div>
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2 text-blue-600">DW = Dream Work</h4>
                  <div className="w-12 h-1 bg-blue-500"></div>
                </div>
                <p className="text-lg leading-relaxed">
                  At DW Innovation, we're committed to turning dreams into work and work into reality. We strive to deliver innovative digital solutions that empower businesses to achieve their full potential in the digital landscape, while maintaining the highest standards of quality and client satisfaction.
                </p>
              </motion.div>
              
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex-1 bg-[#f8f8f8] rounded-xl p-8 md:p-10 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold">Our Vision</h3>
                </div>
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2 text-blue-600">Bringing Ideas into Reality</h4>
                  <div className="w-12 h-1 bg-blue-500"></div>
                </div>
                <p className="text-lg leading-relaxed">
                  We envision a world where technology seamlessly bridges the gap between imagination and implementation. Our goal is to be the catalyst that transforms bold ideas into tangible digital realities, creating solutions that not only meet current needs but anticipate future challenges.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Our Journey Section - Inspired by Scrobits */}
        <div className="py-24 bg-gradient-to-b from-white to-gray-50 text-[#222222] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Heading with animated underline */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">The story of how we've grown from a small idea to a global innovation leader</p>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-1 bg-blue-500 mx-auto"
              ></motion.div>
            </motion.div>
            
            {/* Timeline inspired by Scrobits */}
            <div className="relative">
              {/* Vertical line with animation */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500/20 z-0"
                style={{ top: 0 }}
              ></motion.div>
              
              {/* 2021 - Foundation */}
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 mb-32"
              >
                {/* Year bubble */}
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 transform -translate-x-1/2 -top-16 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl"
                >
                  <span className="text-4xl font-bold text-white">2021</span>
                </motion.div>
                
                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-20">
                  {/* Left content */}
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="md:text-right md:pr-16"
                  >
                    <h3 className="text-3xl font-bold mb-4 text-blue-600">Foundation</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      It all started with a vision and a small team of passionate developers. DW Innovation was founded with the ambition to transform digital experiences and create innovative solutions.                      
                    </p>
                  </motion.div>
                  
                  {/* Right content - image */}
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="md:pl-16"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.03 }}
                      className="rounded-xl overflow-hidden shadow-lg h-64 relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-transparent z-10"></div>
                      <img 
                        src="/aboutimages/IMG_7269.JPG" 
                        alt="DW Innovation Foundation" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 p-6 z-20">
                        <span className="text-white font-medium px-3 py-1 rounded-full bg-blue-600/70 text-sm">Our Beginning</span>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* 2022 - Growth */}
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 mb-32"
              >
                {/* Year bubble */}
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 transform -translate-x-1/2 -top-16 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl"
                >
                  <span className="text-4xl font-bold text-white">2022</span>
                </motion.div>
                
                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-20">
                  {/* Left content - image (reversed order) */}
                  <div className="md:pr-16 md:order-1 order-2">
                    <motion.div 
                      whileHover={{ scale: 1.03 }}
                      className="rounded-xl overflow-hidden shadow-lg h-64 relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/80 to-transparent z-10"></div>
                      <img 
                        src="/aboutimages/IMG_6644.JPG" 
                        alt="DW Innovation Growth" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 p-6 z-20">
                        <span className="text-white font-medium px-3 py-1 rounded-full bg-indigo-600/70 text-sm">Expanding Our Reach</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Right content */}
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="md:pl-16 md:text-left md:order-2 order-1"
                  >
                    <h3 className="text-3xl font-bold mb-4 text-indigo-600">Growth & Expansion</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Our team doubled in size as we expanded our service offerings to include mobile app development and UI/UX design. We established our first international partnerships and began building our reputation.                      
                    </p>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* 2023 - Innovation */}
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 mb-32"
              >
                {/* Year bubble */}
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 transform -translate-x-1/2 -top-16 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-xl"
                >
                  <span className="text-4xl font-bold text-white">2023</span>
                </motion.div>
                
                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-20">
                  {/* Left content */}
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="md:text-right md:pr-16"
                  >
                    <h3 className="text-3xl font-bold mb-4 text-purple-600">Innovation Hub</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      We launched our innovation lab focused on emerging technologies. Our team began developing custom solutions for enterprise clients and expanded our global footprint with new offices.                      
                    </p>
                  </motion.div>
                  
                  {/* Right content - image */}
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="md:pl-16"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.03 }}
                      className="rounded-xl overflow-hidden shadow-lg h-64 relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/80 to-transparent z-10"></div>
                      <img 
                        src="/aboutimages/IMG_7270.JPG" 
                        alt="DW Innovation Lab" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 p-6 z-20">
                        <span className="text-white font-medium px-3 py-1 rounded-full bg-purple-600/70 text-sm">Innovation Lab</span>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* 2024 - Recognition */}
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 mb-32"
              >
                {/* Year bubble */}
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 transform -translate-x-1/2 -top-16 w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center shadow-xl"
                >
                  <span className="text-4xl font-bold text-white">2024</span>
                </motion.div>
                
                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-20">
                  {/* Left content - image (reversed order) */}
                  <div className="md:pr-16 md:order-1 order-2">
                    <motion.div 
                      whileHover={{ scale: 1.03 }}
                      className="rounded-xl overflow-hidden shadow-lg h-64 relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-red-900/80 to-transparent z-10"></div>
                      <img 
                        src="/aboutimages/IMG_8333.JPG" 
                        alt="DW Innovation Awards" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 p-6 z-20">
                        <span className="text-white font-medium px-3 py-1 rounded-full bg-red-600/70 text-sm">Award Winning</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Right content */}
                  <div className="md:pl-16 md:text-left md:order-2 order-1">
                    <h3 className="text-3xl font-bold mb-4 text-red-600">Industry Recognition</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      We received multiple industry awards for our innovative projects. Our team established strategic partnerships with leading technology providers and expanded our service portfolio to meet growing client demands.                      
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* 2025 - Present */}
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10"
              >
                {/* Year bubble */}
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 transform -translate-x-1/2 -top-16 w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-xl"
                >
                  <span className="text-4xl font-bold text-white">2025</span>
                </motion.div>
                
                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-20">
                  {/* Left content */}
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="md:text-right md:pr-16"
                  >
                    <h3 className="text-3xl font-bold mb-4 text-blue-700">Global Impact</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Today, DW Innovation stands as a global leader in digital transformation. With offices across three continents and a diverse team of over 100 experts, we continue to push the boundaries of what's possible in the digital realm.                      
                    </p>
                  </motion.div>
                  
                  {/* Right content - image */}
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="md:pl-16"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.03 }}
                      className="rounded-xl overflow-hidden shadow-lg h-64 relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-transparent z-10"></div>
                      <img 
                        src="/aboutimages/IMG_8341.JPG" 
                        alt="DW Innovation Global" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 p-6 z-20">
                        <span className="text-white font-medium px-3 py-1 rounded-full bg-blue-700/70 text-sm">Global Presence</span>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                  opacity: [0.3, 0.8, 0.3] 
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
                className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-blue-500/10 z-0"
              ></motion.div>
              
              <motion.div 
                animate={{ 
                  y: [0, 20, 0],
                  opacity: [0.2, 0.6, 0.2] 
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1 
                }}
                className="absolute top-1/2 right-10 w-32 h-32 rounded-full bg-purple-500/10 z-0"
              ></motion.div>
              
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.2, 0.5, 0.2] 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2 
                }}
                className="absolute bottom-1/4 left-20 w-20 h-20 rounded-full bg-pink-500/10 z-0"
              ></motion.div>
            </div>
          </div>
        </div>
      </PageTransition>
    </main>
  );
};

export default AboutPage;