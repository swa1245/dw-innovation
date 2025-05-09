"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from './components/Navbar';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import PageTransition from './components/PageTransition';
import profile1 from './profileimages/profile1.jpg';
import profile2 from './profileimages/profile2.jpg';
import profile3 from './profileimages/profile3.jpg';
import profile31 from './profileimages/profile31.jpg';
import profile5 from './profileimages/profile5.jpg';
import profile6 from './profileimages/profile6.jpg';

// Import logo images
import logo1 from './logoimage/WhatsApp Image 2025-05-09 at 10.40.20_108884c8.jpg';
import logo2 from './logoimage/WhatsApp Image 2025-05-09 at 10.40.20_199c5863.jpg';
import logo3 from './logoimage/WhatsApp Image 2025-05-09 at 10.40.20_5847bdf6.jpg';
import logo4 from './logoimage/WhatsApp Image 2025-05-09 at 10.40.20_5b4ef7af.jpg';
import logo5 from './logoimage/WhatsApp Image 2025-05-09 at 10.40.20_a6859df3.jpg';
import logo6 from './logoimage/WhatsApp Image 2025-05-09 at 10.40.20_a900b386.jpg';
import logo7 from './logoimage/WhatsApp Image 2025-05-09 at 10.40.20_d943b8b4.jpg';

// Import project images
import projImage1 from './projimage/WhatsApp Image 2025-05-01 at 11.44.28_22f3fe78.jpg';
import projImage2 from './projimage/WhatsApp Image 2025-05-01 at 11.44.28_4cde3a57.jpg';
import projImage3 from './projimage/WhatsApp Image 2025-05-01 at 11.44.29_849feeb7.jpg';
import projImage4 from './projimage/WhatsApp Image 2025-05-01 at 11.44.29_bf4a0a1b.jpg';
import projImage5 from './projimage/WhatsApp Image 2025-05-01 at 11.44.30_5850cf38.jpg';
import projImage6 from './projimage/WhatsApp Image 2025-05-01 at 11.44.30_5e8179ad.jpg';
import projImage7 from './projimage/WhatsApp Image 2025-05-01 at 11.44.30_86737192.jpg';


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
  
  // State for pausing marquee animations on hover
  const [pauseFirstRow, setPauseFirstRow] = useState(false);
  const [pauseSecondRow, setPauseSecondRow] = useState(false);

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
      <PageTransition>
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
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold tracking-tight mb-8">
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

      {/* Partners & Customers Section */}
      <div className="bg-[#f5f7ff] py-16 overflow-hidden relative">
        <div className="container mx-auto relative">
          <div className="flex flex-col md:flex-row items-center">
            {/* Logo Marquee - Takes 75% width on desktop */}
            <div className="w-full md:w-3/4 overflow-hidden">
              <div className="marquee-container">
                <div className="marquee marquee-left-to-right">
                  {Array(3).fill().map((_, i) => (
                    <div key={`marquee-${i}`} className="marquee-content">
                      {[
                        logo1, logo2, logo3, logo4, logo5, logo6, logo7
                      ].map((logo, index) => (
                        <div 
                          key={`marquee-${i}-${index}`} 
                          className="mx-4 my-2 flex items-center justify-center"
                        >
                          {/* Hexagon container for logo */}
                          <div className="relative">
                            {/* Hexagon shape */}
                            <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-xl transform rotate-45 shadow-sm"></div>
                            {/* Logo centered inside hexagon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Image 
                                src={logo} 
                                alt={`Partner Logo ${index + 1}`} 
                                width={80} 
                                height={80} 
                                className="object-contain w-16 h-16 md:w-20 md:h-20 transform -rotate-45"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Title Section - Takes 25% width on desktop */}
            <div className="w-full md:w-1/4 p-6 md:p-8 flex items-center justify-center md:justify-start">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#09182C]">
                  Customers &<br />
                  <span className="text-blue-600">Partners</span>
                </h2>
              </div>
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
                  projectImage: projImage1
                },
                {
                  name: "APP DEVELOPMENT",
                  year: "4+ yrs",
                  projectImage: projImage2
                },
                {
                  name: "UI/UX DESIGN",
                  year: "5+ yrs",
                  projectImage: projImage3
                },
                {
                  name: "E-COMMERCE",
                  year: "3+ yrs",
                  projectImage: projImage4
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
                        <Image
                          src={company.projectImage}
                          alt={`${company.name} project`}
                          fill
                          className="w-full h-full object-cover"
                          sizes="(max-width: 768px) 100vw, 400px"
                          priority={index === 0}
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
                        style={{ backgroundImage: `url(${company.image})` }}></div>
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

      {/* Projects Marquee Section - Simple Image Version */}
      <div className="py-24 bg-[#E9E9E9] text-[#222222] overflow-hidden relative">
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#222222] mb-6 relative inline-block">
              Our Work
              <motion.div
                className="absolute -bottom-3 left-1/2 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600"
                initial={{ width: "0%", x: "-50%" }}
                whileInView={{ width: "100%", x: "-50%" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              ></motion.div>
            </h2>
            <p className="text-lg text-[#222222] max-w-3xl mx-auto">
              A showcase of our recent projects
            </p>
          </motion.div>
        </div>

        {/* Simple Image Marquee */}
        <div className="relative pb-16">
          {/* Marquee rows will pause on hover using the state variables */}
          {/* First Row - Left to Right */}
          <div className="relative mb-12 h-[350px] flex items-center">
            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: pauseFirstRow ? "0%" : "-50%" }}
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
                  image: projImage1
                },
                {
                  title: "Banking Mobile App",
                  client: "FinTech Solutions",
                  category: "App Development",
                  image: projImage2
                },
                {
                  title: "CRM Implementation",
                  client: "Global Logistics",
                  category: "ERP & CRM Systems",
                  image: projImage3
                },
                {
                  title: "Brand Redesign",
                  client: "Organic Foods Co.",
                  category: "UI/UX Design",
                  image: projImage4
                },
                {
                  title: "SEO Campaign",
                  client: "TechStart Inc.",
                  category: "Digital Marketing",
                  image: projImage5
                },
                {
                  title: "Online Marketplace",
                  client: "ArtisanCraft",
                  category: "E-Commerce",
                  image: projImage6
                },
                // Duplicate for continuous effect
                {
                  title: "E-Commerce Platform",
                  client: "FashionRetail Inc.",
                  category: "Web Development",
                  image: projImage1
                },
                {
                  title: "Banking Mobile App",
                  client: "FinTech Solutions",
                  category: "App Development",
                  image: projImage2
                },
                {
                  title: "CRM Implementation",
                  client: "Global Logistics",
                  category: "ERP & CRM Systems",
                  image: projImage3
                },
                {
                  title: "Brand Redesign",
                  client: "Organic Foods Co.",
                  category: "UI/UX Design",
                  image: projImage4
                },
                {
                  title: "SEO Campaign",
                  client: "TechStart Inc.",
                  category: "Digital Marketing",
                  image: projImage5
                },
                {
                  title: "Online Marketplace",
                  client: "ArtisanCraft",
                  category: "E-Commerce",
                  image: projImage6
                },
              ].map((project, index) => (
                <div
                  key={`project1-${index}`}
                  className="w-[500px] h-[300px] flex-shrink-0 rounded-xl overflow-hidden group relative"
                  onMouseEnter={() => setPauseFirstRow(true)}
                  onMouseLeave={() => setPauseFirstRow(false)}
                >
                  {/* Next.js Image component with hover effect */}
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority={index < 2}
                    />
                  </div>

                  {/* Overlay that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                    <p className="text-gray-300 text-sm mt-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</p>
                    <p className="text-gray-400 text-sm mt-1 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-100">Client: {project.client}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative h-[350px] flex items-center">
            <motion.div
              initial={{ x: "-50%" }}
              animate={{ x: pauseSecondRow ? "-50%" : "0%" }}
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
                  image: projImage7
                },
                {
                  title: "Fitness Tracker App",
                  client: "FitLife Inc.",
                  category: "App Development",
                  image: projImage1
                },
                {
                  title: "Inventory Management",
                  client: "Global Manufacturing",
                  category: "ERP & CRM Systems",
                  image: projImage2
                },
                {
                  title: "Travel Platform UI",
                  client: "Wanderlust Travel",
                  category: "UI/UX Design",
                  image: projImage3
                },
                {
                  title: "Content Strategy",
                  client: "Media Publishing",
                  category: "Digital Marketing",
                  image: projImage4
                },
                {
                  title: "Subscription Service",
                  client: "BoxDelivery Co.",
                  category: "E-Commerce",
                  image: projImage5
                },
                // Duplicate for continuous effect
                {
                  title: "Healthcare Portal",
                  client: "MediCare Group",
                  category: "Web Development",
                  image: projImage7
                },
                {
                  title: "Fitness Tracker App",
                  client: "FitLife Inc.",
                  category: "App Development",
                  image: projImage1
                },
                {
                  title: "Inventory Management",
                  client: "Global Manufacturing",
                  category: "ERP & CRM Systems",
                  image: projImage2
                },
                {
                  title: "Travel Platform UI",
                  client: "Wanderlust Travel",
                  category: "UI/UX Design",
                  image: projImage3
                },
                {
                  title: "Content Strategy",
                  client: "Media Publishing",
                  category: "Digital Marketing",
                  image: projImage4
                },
                {
                  title: "Subscription Service",
                  client: "BoxDelivery Co.",
                  category: "E-Commerce",
                  image: projImage5
                },
              ].map((project, index) => (
                <div
                  key={`project2-${index}`}
                  className="w-[500px] h-[300px] flex-shrink-0 rounded-xl overflow-hidden group relative"
                  onMouseEnter={() => setPauseSecondRow(true)}
                  onMouseLeave={() => setPauseSecondRow(false)}
                >
                  {/* Next.js Image component with hover effect */}
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority={index < 2}
                    />
                  </div>

                  {/* Overlay that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                    <p className="text-gray-300 text-sm mt-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</p>
                    <p className="text-gray-400 text-sm mt-1 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-100">Client: {project.client}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#222222] text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ease-in-out inline-flex items-center gap-2"
            >
              <span>View All Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="bg-[#E9E9E9] py-24 px-4 overflow-hidden">
        <div className="container mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">Our Process</h2>
            <p className="text-[#222222]/80 text-lg max-w-2xl mx-auto">
              We follow a structured yet flexible approach to deliver exceptional results for every project.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 hidden md:block overflow-hidden">
              {/* Main line that grows as you scroll */}
              <motion.div 
                className="w-full bg-gradient-to-b from-blue-500 to-purple-600 absolute top-0 bottom-0"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
                transition={{ 
                  duration: 1.5, 
                  ease: "easeOut",
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1] 
                }}
                style={{ originY: 0 }}
                viewport={{ once: false, amount: 0.05, margin: "-100px 0px -100px 0px" }}
              />
              
              {/* Glowing dot that moves down the line */}
              <motion.div 
                className="w-4 h-4 rounded-full bg-blue-500 absolute z-10 shadow-[0_0_10px_3px_rgba(59,130,246,0.5)]"
                style={{ left: "-7px" }}
                initial={{ top: "0%" }}
                whileInView={{ top: ["0%", "20%", "40%", "60%", "80%", "100%"] }}
                transition={{ 
                  duration: 1.5, 
                  ease: "easeOut", 
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1] 
                }}
                viewport={{ once: false, amount: 0.05, margin: "-100px 0px -100px 0px" }}
              />
              
              {/* Smaller trailing dots */}
              <motion.div 
                className="w-2 h-2 rounded-full bg-blue-300/70 absolute z-10"
                style={{ left: "-6px" }}
                initial={{ top: "0%" }}
                whileInView={{ top: ["0%", "20%", "40%", "60%", "80%", "100%"] }}
                transition={{ 
                  duration: 1.5, 
                  ease: "easeOut", 
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  delay: 0.1
                }}
                viewport={{ once: false, amount: 0.05, margin: "-100px 0px -100px 0px" }}
              />
              <motion.div 
                className="w-1 h-1 rounded-full bg-blue-200/50 absolute z-10"
                style={{ left: "-5.5px" }}
                initial={{ top: "0%" }}
                whileInView={{ top: ["0%", "20%", "40%", "60%", "80%", "100%"] }}
                transition={{ 
                  duration: 1.5, 
                  ease: "easeOut", 
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  delay: 0.2
                }}
                viewport={{ once: false, amount: 0.05, margin: "-100px 0px -100px 0px" }}
              />
            </div>
            
            {/* Process Steps Container */}
            <div className="space-y-16 relative">
              {/* Step 1 - Discovery */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center"
              >
                {/* Left Content */}
                <div className="w-full md:w-1/2 md:pr-16 text-right order-2 md:order-1">
                  <h3 className="text-3xl font-bold text-[#222222] mb-4">Discovery</h3>
                  <p className="text-[#222222]/80 text-lg mb-6">
                    We begin by understanding your business, goals, and target audience. This phase involves in-depth research, stakeholder interviews, and competitive analysis to establish a solid foundation for your project.
                  </p>
                  <div className="flex justify-end gap-3">
                    <span className="px-4 py-2 bg-[#222222]/5 rounded-full text-sm font-medium text-[#222222]">Research</span>
                    <span className="px-4 py-2 bg-[#222222]/5 rounded-full text-sm font-medium text-[#222222]">Analysis</span>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="relative z-10 order-1 md:order-2 mb-8 md:mb-0">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: 360 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: false, margin: "-100px" }}
                    className="absolute -inset-6 rounded-full border-2 border-dashed border-blue-300/30 -z-10"
                  ></motion.div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg relative"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      01
                    </motion.span>
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-white opacity-20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: [0, 1.5, 1] }}
                      transition={{ duration: 1, times: [0, 0.7, 1] }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 0.8, 0.4] }}
                    transition={{ duration: 2, times: [0, 0.5, 1], repeat: Infinity, repeatType: "reverse" }}
                    className="absolute -inset-3 bg-[#E9E9E9] rounded-full -z-10 blur-lg"
                  ></motion.div>
                </div>

                {/* Right Content - Empty for layout */}
                <div className="w-full md:w-1/2 md:pl-16 order-3"></div>
              </motion.div>

              {/* Step 2 - Strategy */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center"
              >
                {/* Left Content - Empty for layout */}
                <div className="w-full md:w-1/2 md:pr-16 order-2"></div>

                {/* Center Circle */}
                <div className="relative z-10 order-1 md:order-2 mb-8 md:mb-0">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: -360 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: false, margin: "-100px" }}
                    className="absolute -inset-6 rounded-full border-2 border-dashed border-purple-300/30 -z-10"
                  ></motion.div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg relative"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      02
                    </motion.span>
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-white opacity-20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: [0, 1.5, 1] }}
                      transition={{ duration: 1, times: [0, 0.7, 1] }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 0.8, 0.4] }}
                    transition={{ duration: 2, times: [0, 0.5, 1], repeat: Infinity, repeatType: "reverse" }}
                    className="absolute -inset-3 bg-[#E9E9E9] rounded-full -z-10 blur-lg"
                  ></motion.div>
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 md:pl-16 text-left order-3">
                  <h3 className="text-3xl font-bold text-[#222222] mb-4">Strategy</h3>
                  <p className="text-[#222222]/80 text-lg mb-6">
                    Based on our discoveries, we develop a comprehensive strategy that outlines the project scope, timeline, technical approach, and creative direction to achieve your business objectives.
                  </p>
                  <div className="flex gap-3">
                    <span className="px-4 py-2 bg-[#222222]/5 rounded-full text-sm font-medium text-[#222222]">Planning</span>
                    <span className="px-4 py-2 bg-[#222222]/5 rounded-full text-sm font-medium text-[#222222]">Architecture</span>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 - Design */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center"
              >
                {/* Left Content */}
                <div className="w-full md:w-1/2 md:pr-16 text-right order-2 md:order-1">
                  <h3 className="text-3xl font-bold text-[#222222] mb-4">Design</h3>
                  <p className="text-[#222222]/80 text-lg mb-6">
                    Our creative team crafts visually stunning and intuitive interfaces that align with your brand identity. We focus on user experience, accessibility, and creating designs that stand out in the digital landscape.
                  </p>
                  <div className="flex justify-end gap-3">
                    <span className="px-4 py-2 bg-[#222222]/5 rounded-full text-sm font-medium text-[#222222]">UI/UX</span>
                    <span className="px-4 py-2 bg-[#222222]/5 rounded-full text-sm font-medium text-[#222222]">Prototyping</span>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="relative z-10 order-1 md:order-2 mb-8 md:mb-0">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: 360 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: false, margin: "-100px" }}
                    className="absolute -inset-6 rounded-full border-2 border-dashed border-blue-300/30 -z-10"
                  ></motion.div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg relative"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      03
                    </motion.span>
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-white opacity-20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: [0, 1.5, 1] }}
                      transition={{ duration: 1, times: [0, 0.7, 1] }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 0.8, 0.4] }}
                    transition={{ duration: 2, times: [0, 0.5, 1], repeat: Infinity, repeatType: "reverse" }}
                    className="absolute -inset-3 bg-[#E9E9E9] rounded-full -z-10 blur-lg"
                  ></motion.div>
                </div>

                {/* Right Content - Empty for layout */}
                <div className="w-full md:w-1/2 md:pl-16 order-3"></div>
              </motion.div>

              {/* Step 4 - Development */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center"
              >
                {/* Left Content - Empty for layout */}
                <div className="w-full md:w-1/2 md:pr-16 order-2"></div>

                {/* Center Circle */}
                <div className="relative z-10 order-1 md:order-2 mb-8 md:mb-0">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: -360 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: false, margin: "-100px" }}
                    className="absolute -inset-6 rounded-full border-2 border-dashed border-purple-300/30 -z-10"
                  ></motion.div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg relative"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      04
                    </motion.span>
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-white opacity-20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: [0, 1.5, 1] }}
                      transition={{ duration: 1, times: [0, 0.7, 1] }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 0.8, 0.4] }}
                    transition={{ duration: 2, times: [0, 0.5, 1], repeat: Infinity, repeatType: "reverse" }}
                    className="absolute -inset-3 bg-[#E9E9E9] rounded-full -z-10 blur-lg"
                  ></motion.div>
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 md:pl-16 text-left order-3">
                  <h3 className="text-3xl font-bold text-[#222222] mb-4">Development</h3>
                  <p className="text-[#222222]/80 text-lg mb-6">
                    Our development team brings designs to life using the latest technologies and best practices. We follow agile methodologies, ensuring regular updates and flexibility to adapt to changing requirements.
                  </p>
                  <div className="flex gap-3">
                    <span className="px-4 py-2 bg-[#222222]/5 rounded-full text-sm font-medium text-[#222222]">Coding</span>
                    <span className="px-4 py-2 bg-[#222222]/5 rounded-full text-sm font-medium text-[#222222]">Integration</span>
                  </div>
                </div>
              </motion.div>

              {/* Step 5 - Testing & Launch */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center"
              >
                {/* Left Content */}
                <div className="w-full md:w-1/2 md:pr-16 text-right order-2 md:order-1">
                  <h3 className="text-3xl font-bold text-[#222222] mb-4">Testing & Launch</h3>
                  <p className="text-[#222222]/80 text-lg mb-6">
                    We rigorously test all aspects of your project to ensure quality, performance, and security. After thorough quality assurance, we handle the deployment process for a smooth and successful launch.
                  </p>
                  <div className="flex justify-end gap-3">
                    <span className="px-4 py-2 bg-[#222222]/5 rounded-full text-sm font-medium text-[#222222]">QA</span>
                    <span className="px-4 py-2 bg-[#222222]/5 rounded-full text-sm font-medium text-[#222222]">Deployment</span>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="relative z-10 order-1 md:order-2 mb-8 md:mb-0">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: 360 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: false, margin: "-100px" }}
                    className="absolute -inset-6 rounded-full border-2 border-dashed border-blue-300/30 -z-10"
                  ></motion.div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg relative"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      05
                    </motion.span>
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-white opacity-20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: [0, 1.5, 1] }}
                      transition={{ duration: 1, times: [0, 0.7, 1] }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 0.8, 0.4] }}
                    transition={{ duration: 2, times: [0, 0.5, 1], repeat: Infinity, repeatType: "reverse" }}
                    className="absolute -inset-3 bg-[#E9E9E9] rounded-full -z-10 blur-lg"
                  ></motion.div>
                </div>

                {/* Right Content - Empty for layout */}
                <div className="w-full md:w-1/2 md:pl-16 order-3"></div>
              </motion.div>

              {/* Step 6 - Support & Growth */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center"
              >
                {/* Left Content - Empty for layout */}
                <div className="w-full md:w-1/2 md:pr-16 order-2"></div>

                {/* Center Circle */}
                <div className="relative z-10 order-1 md:order-2 mb-8 md:mb-0">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: -360 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: false, margin: "-100px" }}
                    className="absolute -inset-6 rounded-full border-2 border-dashed border-purple-300/30 -z-10"
                  ></motion.div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg relative"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      06
                    </motion.span>
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-white opacity-20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: [0, 1.5, 1] }}
                      transition={{ duration: 1, times: [0, 0.7, 1] }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 0.8, 0.4] }}
                    transition={{ duration: 2, times: [0, 0.5, 1], repeat: Infinity, repeatType: "reverse" }}
                    className="absolute -inset-3 bg-[#E9E9E9] rounded-full -z-10 blur-lg"
                  ></motion.div>
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 md:pl-16 text-left order-3">
                  <h3 className="text-3xl font-bold text-[#222222] mb-4">Support & Growth</h3>
                  <p className="text-[#222222]/80 text-lg mb-6">
                    Our relationship doesn't end at launch. We provide ongoing support, maintenance, and strategic guidance to help your digital product evolve and grow with your business needs and user feedback.
                  </p>
                  <div className="flex gap-3">
                    <span className="px-4 py-2 bg-[#222222]/5 rounded-full text-sm font-medium text-[#222222]">Maintenance</span>
                    <span className="px-4 py-2 bg-[#222222]/5 rounded-full text-sm font-medium text-[#222222]">Analytics</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Idea to Product Section */}
          <div className="bg-[#09182C] py-24 px-4 overflow-hidden relative mt-24 rounded-3xl">
            <div className="container mx-auto relative z-10">
              <div className="max-w-5xl mx-auto">
                {/* Section Content */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                  {/* Left Content */}
                  <motion.div 
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E9E9E9] mb-6 leading-tight">
                      <span className="text-blue-400">Idea to Product</span> <br />In 30-45 Days
                    </h2>
                    <p className="text-[#E9E9E9]/90 text-lg mb-8">
                      Starting up is hard, lonely and scary! We at DW INNOVATION PVT. LTD. help such daring entrepreneurs.
                    </p>
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 ease-in-out inline-flex items-center gap-2 shadow-lg"
                      >
                        <span>Connect with us</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.button>
                    </Link>
                  </motion.div>
                  
                  {/* Right Content - Decorative Elements */}
                  <motion.div 
                    className="w-full md:w-1/2 relative"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="aspect-square max-w-md mx-auto relative">
                      {/* Decorative Circle */}
                      <motion.div 
                        className="absolute inset-0 rounded-full border-4 border-blue-400/30"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      ></motion.div>
                      
                      {/* Inner Circle with Timeline */}
                      <div className="absolute inset-8 rounded-full border-2 border-[#E9E9E9]/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-5xl font-bold text-[#E9E9E9]">30-45</div>
                          <div className="text-[#E9E9E9]/80 mt-2">Days</div>
                        </div>
                      </div>
                      
                      {/* Floating Elements */}
                      <motion.div 
                        className="absolute top-1/4 -right-4 w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg"
                        animate={{ y: ["-10%", "10%", "-10%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </motion.div>
                      
                      <motion.div 
                        className="absolute bottom-1/4 -left-4 w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg"
                        animate={{ y: ["10%", "-10%", "10%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

      
        </div>
      </div>
      </PageTransition>
    </main>
  );
}
