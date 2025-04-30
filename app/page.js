"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from './components/Navbar';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import profile1 from './profileimages/profile1.jpg';
import profile2 from './profileimages/profile2.jpg';
import profile3 from './profileimages/profile3.jpg';
import profile31 from './profileimages/profile31.jpg';
import profile5 from './profileimages/profile5.jpg';
import profile6 from './profileimages/profile6.jpg';


// Counter component for animated counting effect
const Counter = ({ end, duration = 2000, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration) {
        const nextCount = Math.floor((progress / duration) * end);
        setCount(nextCount);
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-2">
        {count}{suffix}
      </div>
      <div className="text-[var(--foreground)] text-sm md:text-base opacity-80">{label}</div>
    </div>
  );
};

export default function Home() {
  // State for custom cursor position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!cursorVisible) setCursorVisible(true);
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    const handleMouseEnter = () => {
      setCursorVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorVisible]);

  return (
    <main>  {/* Keep default cursor visible */}
      {/* Custom cursor */}
      <div 
        className={`fixed w-3 h-3 rounded-full bg-white pointer-events-none z-50 transition-opacity duration-300 mix-blend-difference ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
      <Navbar />
      {/* Hero Section */}
      <div className="bg-[#09182C]  h-[75vh]   flex items-center justify-center px-4 py-2">
        <div className="container mx-auto text-center">
          {/* Title with Profile Images */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto mb-12 px-4"
          >
            {/* Title Text */}
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center flex-col sm:flex-row gap-4 sm:gap-2"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src={profile1}
                    alt="Profile 1"
                    width={64}
                    height={70}
                    className="object-cover"
                  />
                </div>
                <span className="block">Elegant Web, Mobile</span>  
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-center flex-col sm:flex-row gap-4 sm:gap-2 mt-4 sm:mt-0"
              >
                <span className="block">&amp; Digital</span>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src={profile2}
                    alt="Profile 2"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <span>Experiences</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center justify-center flex-col sm:flex-row gap-4 sm:gap-2 mt-4 sm:mt-0"
              >
                <span className="block">Bringing Your Ideas</span>  
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src={profile6}
                    alt="Profile3"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center justify-center flex-col sm:flex-row gap-4 sm:gap-2 mt-4 sm:mt-0"
              >
                <span className="block">Into Reality! </span>  
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src={profile5}
                    alt="Profile 5"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </h2>
          </motion.div>

          {/* CTA Button */}
          <Link href="/contact">
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-[var(--background)] hover:scale-90 text-[#09182C] cursor-pointer px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-opacity-90 transition-all duration-300 ease-in-out"
            >
              Schedule a Free Consultation!
            </motion.button>
          </Link>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-[#E9E9E9] py-16 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 text-center"
          >
            <Counter end={100} suffix="+" label="Projects Completed" />
            <Counter end={30} suffix="+" label="Expert Developers" />
            <Counter end={100} suffix="%" label="Client Satisfaction" />
            <Counter end={4} suffix="+" label="Years Experience" />
            <Counter end={26} suffix="+" label="Customer Served" />
          </motion.div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="bg-[#E9E9E9] py-10 overflow-hidden">
        <div className="relative">
          {/* First Marquee - Left to Right */}
          <div className="marquee-container">
            <div className="marquee marquee-left-to-right">
              {Array(2).fill().map((_, i) => (
                <div key={`left-${i}`} className="marquee-content">
                  {[
                    "React", "Next.js", "Angular", "Vue", "Node.js", "Express", 
                    "MongoDB", "PostgreSQL", "Firebase", "AWS", "Azure", 
                    "TypeScript", "JavaScript", "Python", "Java", "Swift", "Kotlin"
                  ].map((name, index) => (
                    <div key={`left-${i}-${index}`} className="mx-8 text-[#222222] text-xl md:text-2xl font-medium opacity-80">
                      {name}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* Second Marquee - Right to Left */}
          <div className="marquee-container mt-8">
            <div className="marquee marquee-right-to-left">
              {Array(2).fill().map((_, i) => (
                <div key={`right-${i}`} className="marquee-content">
                  {[
                    "HTML5", "CSS3", "TailwindCSS", "Bootstrap", "Material UI", 
                    "Redux", "GraphQL", "REST API", "Docker", "Kubernetes", 
                    "CI/CD", "Git", "GitHub", "Figma", "Adobe XD", "Sketch", "WordPress"
                  ].map((name, index) => (
                    <div key={`right-${i}-${index}`} className="mx-8 text-[#222222] text-xl md:text-2xl font-medium opacity-80">
                      {name}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Expertise Section */}
      <div className="py-20 px-4 bg-[#09182C]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Expertise</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We've worked with industry leaders to deliver exceptional digital experiences.
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Companies we've worked with */}
            <div className="space-y-8">
              {/* Define expertise areas with their details */}
              {[
                { 
                  name: "WEB DEVELOPMENT", 
                  year: "5+ yrs", 
                  image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  projectImage: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                { 
                  name: "APP DEVELOPMENT", 
                  year: "4+ yrs", 
                  image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  projectImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                { 
                  name: "ERP & CRM SYSTEMS", 
                  year: "3+ yrs", 
                  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  projectImage: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                { 
                  name: "UI/UX DESIGN", 
                  year: "5+ yrs", 
                  image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  projectImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                { 
                  name: "DIGITAL MARKETING", 
                  year: "4+ yrs", 
                  image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  projectImage: "https://images.unsplash.com/photo-1642132652806-8c3ad9f9ab7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                { 
                  name: "E-COMMERCE", 
                  year: "3+ yrs", 
                  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  projectImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
              ].map((company, index) => {
                // State for tracking mouse position within this specific section
                const [sectionMousePos, setSectionMousePos] = useState({ x: 0, y: 0 });
                const [isHovered, setIsHovered] = useState(false);
                
                // Handle mouse movement within this section
                const handleSectionMouseMove = (e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setSectionMousePos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                  });
                };
                
                return (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative border-t border-gray-700 py-6"
                    onMouseMove={handleSectionMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-4xl md:text-6xl font-bold text-gray-300 group-hover:text-white transition-colors duration-300">
                        {company.name}
                      </h3>
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                        {company.year}
                      </span>
                    </div>
                    
                    {/* Project Image - follows mouse movement within this section */}
                    {isHovered && (
                      <motion.div 
                        className="absolute w-80 h-56 rounded-lg overflow-hidden shadow-2xl pointer-events-none z-20"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          x: sectionMousePos.x - 120, // Offset to position relative to mouse
                          y: sectionMousePos.y - 180  // Position above the mouse
                        }}
                        transition={{ 
                          opacity: { duration: 0.3 },
                          scale: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
                          x: { duration: 0.2, ease: "easeOut" },
                          y: { duration: 0.2, ease: "easeOut" }
                        }}
                      >
                      <img 
                        src={company.projectImage} 
                        alt={`${company.name} project`} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      
                      {/* Centered circular view button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center space-y-2">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                          <span className="text-white text-sm font-medium">View Project</span>
                        </div>
                      </div>
                    </motion.div>
                    )}
                    
                    {/* Background hover effect */}
                    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ease-in-out overflow-hidden">
                      <div className="w-full h-full bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                           style={{backgroundImage: `url(${company.image})`}}></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Services Section */}
          {/* <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Web Development", tags: ["React", "Next.js", "Node.js"] },
              { name: "App Development", tags: ["React Native", "Flutter", "Swift"] },
              { name: "ERP & CRM Systems", tags: ["Salesforce", "SAP", "Custom Solutions"] },
              { name: "UI/UX Design", tags: ["Figma", "Adobe XD", "Sketch"] },
              { name: "Digital Marketing", tags: ["SEO", "PPC", "Social Media"] },
              { name: "E-commerce", tags: ["Shopify", "WooCommerce", "Magento"] },
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div> */}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 0.95 }}
                className="bg-white text-[#09182C] px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all duration-300 ease-in-out"
              >
                View All Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
      {/* Projects Marquee Section - Enhanced Version */}
<div className="py-24 bg-gradient-to-b from-[#E9E9E9] to-[#F5F5F5] text-[#222222] overflow-hidden relative">
  {/* Background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
  </div>
  
  <div className="container mx-auto mb-16 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6 relative inline-block">
        Projects We've Worked On
        <motion.div 
          className="absolute -bottom-2 left-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ width: "0%", x: "-50%" }}
          whileInView={{ width: "100%", x: "-50%" }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        ></motion.div>
      </h2>
      <p className="text-lg text-[#222222] max-w-3xl mx-auto">
        A showcase of our recent successful projects across various industries.
      </p>
    </motion.div>
  </div>

  {/* Project Cards Container */}
  <div className="relative pb-16">
    {/* First Row of Project Cards - Left to Right */}
    <div className="relative mb-12 h-[400px] flex items-center">
      <motion.div 
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{ 
          repeat: Infinity, 
          duration: 30,
          ease: "linear"
        }}
        className="flex gap-6 absolute"
        style={{ width: "200%" }}
      >
        {[
          { 
            title: "E-Commerce Platform", 
            client: "FashionRetail Inc.",
            category: "Web Development",
            image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            title: "Banking Mobile App", 
            client: "FinTech Solutions",
            category: "App Development",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            title: "CRM Implementation", 
            client: "Global Logistics",
            category: "ERP & CRM Systems",
            image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            title: "Brand Redesign", 
            client: "Organic Foods Co.",
            category: "UI/UX Design",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            title: "SEO Campaign", 
            client: "TechStart Inc.",
            category: "Digital Marketing",
            image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            title: "Online Marketplace", 
            client: "ArtisanCraft",
            category: "E-Commerce",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          // Duplicate for continuous effect
          { 
            title: "E-Commerce Platform", 
            client: "FashionRetail Inc.",
            category: "Web Development",
            image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            title: "Banking Mobile App", 
            client: "FinTech Solutions",
            category: "App Development",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            title: "CRM Implementation", 
            client: "Global Logistics",
            category: "ERP & CRM Systems",
            image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            title: "Brand Redesign", 
            client: "Organic Foods Co.",
            category: "UI/UX Design",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            title: "SEO Campaign", 
            client: "TechStart Inc.",
            category: "Digital Marketing",
            image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            title: "Online Marketplace", 
            client: "ArtisanCraft",
            category: "E-Commerce",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
        ].map((project, index) => (
          <motion.div 
            key={`project1-${index}`} 
            className="w-80 flex-shrink-0 rounded-xl overflow-hidden group relative"
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            {/* Card with 3D effect */}
            <div className="relative h-full transform transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(10deg)]">
              {/* Front face */}
              <div className="h-[380px] bg-white rounded-xl overflow-hidden shadow-lg relative">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium px-3 py-1 bg-white/90 rounded-full backdrop-blur-sm shadow-md text-[#222222]">{project.category}</span>
                </div>
                
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-[#222222] mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">Client: {project.client}</p>
                  
                  {/* Project stats */}
                  <div className="flex gap-4 mb-6">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Duration</span>
                      <span className="text-sm font-medium">3 months</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Team</span>
                      <span className="text-sm font-medium">5 people</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Year</span>
                      <span className="text-sm font-medium">2024</span>
                    </div>
                  </div>
                  
                  {/* View project button */}
                  <div className="absolute bottom-6 right-6">
                    <div className="w-10 h-10 rounded-full bg-[#222222] flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Shadow effect */}
              <div className="absolute -bottom-10 left-5 right-5 h-[20px] bg-black/20 blur-xl rounded-full transform transition-all duration-500 group-hover:blur-2xl group-hover:h-[25px] group-hover:-bottom-8"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Second Row of Project Cards - Right to Left */}
    <div className="relative h-[400px] flex items-center">
      <motion.div 
        initial={{ x: "-50%" }}
        animate={{ x: "0%" }}
        transition={{ 
          repeat: Infinity, 
          duration: 30,
          ease: "linear"
        }}
        className="flex gap-6 absolute"
        style={{ width: "200%" }}
      >
        {[
          { 
            title: "Healthcare Portal", 
            client: "MediCare Group",
            category: "Web Development",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            title: "Fitness Tracker App", 
            client: "FitLife Inc.",
            category: "App Development",
            image: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            title: "Inventory Management", 
            client: "Global Manufacturing",
            category: "ERP & CRM Systems",
            image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            title: "Travel Platform UI", 
            client: "Wanderlust Travel",
            category: "UI/UX Design",
            image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            title: "Content Strategy", 
            client: "Media Publishing",
            category: "Digital Marketing",
            image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            title: "Subscription Service", 
            client: "BoxDelivery Co.",
            category: "E-Commerce",
            image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          // Duplicate for continuous effect
          { 
            title: "Healthcare Portal", 
            client: "MediCare Group",
            category: "Web Development",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            title: "Fitness Tracker App", 
            client: "FitLife Inc.",
            category: "App Development",
            image: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            title: "Inventory Management", 
            client: "Global Manufacturing",
            category: "ERP & CRM Systems",
            image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            title: "Travel Platform UI", 
            client: "Wanderlust Travel",
            category: "UI/UX Design",
            image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            title: "Content Strategy", 
            client: "Media Publishing",
            category: "Digital Marketing",
            image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            title: "Subscription Service", 
            client: "BoxDelivery Co.",
            category: "E-Commerce",
            image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
        ].map((project, index) => (
          <motion.div 
            key={`project2-${index}`} 
            className="w-80 flex-shrink-0 rounded-xl overflow-hidden group relative"
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            {/* Card with 3D effect */}
            <div className="relative h-full transform transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(-10deg)]">
              {/* Front face */}
              <div className="h-[380px] bg-white rounded-xl overflow-hidden shadow-lg relative">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium px-3 py-1 bg-white/90 rounded-full backdrop-blur-sm shadow-md text-[#222222]">{project.category}</span>
                </div>
                
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-[#222222] mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">Client: {project.client}</p>
                  
                  {/* Project stats */}
                  <div className="flex gap-4 mb-6">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Duration</span>
                      <span className="text-sm font-medium">4 months</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Team</span>
                      <span className="text-sm font-medium">6 people</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Year</span>
                      <span className="text-sm font-medium">2023</span>
                    </div>
                  </div>
                  
                  {/* View project button */}
                  <div className="absolute bottom-6 right-6">
                    <div className="w-10 h-10 rounded-full bg-[#222222] flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Shadow effect */}
              <div className="absolute -bottom-10 left-5 right-5 h-[20px] bg-black/20 blur-xl rounded-full transform transition-all duration-500 group-hover:blur-2xl group-hover:h-[25px] group-hover:-bottom-8"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    
    {/* View All Projects Button */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="text-center mt-16"
    >
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#222222] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 ease-in-out flex items-center gap-2 mx-auto"
      >
        <span>View All Projects</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </motion.button>
    </motion.div>
  </div>
</div>
      </main>
  );
}
