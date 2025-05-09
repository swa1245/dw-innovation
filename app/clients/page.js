"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import { FaQuoteLeft } from "react-icons/fa";
import CustomCursor from "../components/CustomCursor";
import { useState, useEffect } from "react";
import logo1 from '../logoimage/WhatsApp Image 2025-05-09 at 10.40.20_108884c8.jpg';
import logo2 from '../logoimage/WhatsApp Image 2025-05-09 at 10.40.20_199c5863.jpg';
import logo3 from '../logoimage/WhatsApp Image 2025-05-09 at 10.40.20_5847bdf6.jpg';
import logo4 from '../logoimage/WhatsApp Image 2025-05-09 at 10.40.20_5b4ef7af.jpg';
import logo5 from '../logoimage/WhatsApp Image 2025-05-09 at 10.40.20_a6859df3.jpg';
import logo6 from '../logoimage/WhatsApp Image 2025-05-09 at 10.40.20_a900b386.jpg';
import logo7 from '../logoimage/WhatsApp Image 2025-05-09 at 10.40.20_d943b8b4.jpg';


const clients = [
  {
    name: "TechVision Solutions",
    logo: logo1,
    description: "Leading software development company specializing in AI and machine learning solutions.",
    testimonial: "DW Innovation has been instrumental in transforming our digital presence. Their expertise in web development and innovative solutions has helped us stay ahead of the competition.",
    author: "Sarah Chen",
    position: "CTO"
  },
  {
    name: "EcoSmart Systems",
    logo: logo2,
    description: "Sustainable technology solutions provider focusing on green energy innovations.",
    testimonial: "Working with DW Innovation has been a game-changer for our business. Their dedication to quality and attention to detail is unmatched.",
    author: "Michael Roberts",
    position: "CEO"
  },
  {
    name: "HealthTech Innovations",
    logo: logo3,
    description: "Healthcare technology company revolutionizing patient care through digital solutions.",
    testimonial: "The team at DW Innovation understood our complex requirements and delivered a solution that exceeded our expectations.",
    author: "Dr. Emily Wilson",
    position: "Director of Innovation"
  },
  {
    name: "FinServ Solutions",
    logo: logo4,
    description: "Financial services technology provider specializing in secure payment solutions.",
    testimonial: "DW Innovation's expertise in secure web applications has helped us maintain the highest standards of security and user experience.",
    author: "James Anderson",
    position: "Head of Technology"
  },
  {
    name: "RetailTech Pro",
    logo: logo5,
    description: "Retail technology solutions provider enhancing shopping experiences.",
    testimonial: "The e-commerce solution developed by DW Innovation has significantly improved our online sales and customer satisfaction.",
    author: "Lisa Thompson",
    position: "Digital Director"
  },
  {
    name: "DataFlow Analytics",
    logo: logo6,
    description: "Data analytics company providing business intelligence solutions.",
    testimonial: "DW Innovation's data visualization solutions have transformed how we present insights to our clients.",
    author: "David Martinez",
    position: "Analytics Lead"
  },
  {
    name: "CloudTech Solutions",
    logo: logo7,
    description: "Cloud infrastructure and services provider for enterprise solutions.",
    testimonial: "The cloud migration project handled by DW Innovation was seamless and highly professional.",
    author: "Rachel Kim",
    position: "Cloud Architect"
  }
];

const AnimatedCounter = ({ value, duration = 1000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.min(progress / duration, 1) * value;
      
      setCount(Math.floor(increment));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return count;
};

export default function Clients() {
  return (
    <main className="bg-[#E9E9E9] min-h-screen">
      <CustomCursor />
      <PageTransition>
        <Navbar />

        {/* Hero Section */}
        <div className="relative py-24 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="container mx-auto text-center"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-[#222222] mb-6"
            >
              Our Trusted Clients
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-xl text-[#444444] max-w-3xl mx-auto"
            >
              We're proud to work with industry leaders who trust us to deliver exceptional digital solutions
            </motion.p>
          </motion.div>
        </div>
     {/* Stats Section */}
     <div className="bg-[#E9E9E9] text-[#222222] py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-6"
              >
                <h3 className="text-6xl font-bold mb-2"><AnimatedCounter value={26} />+</h3>
                <p className="text-[#222222] text-xl">Satisfied Clients</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="p-6"
              >
                <h3 className="text-6xl font-bold mb-2"><AnimatedCounter value={100} />+</h3>
                <p className="text-[#222222] text-xl">Projects Completed</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="p-6"
              >
                <h3 className="text-6xl font-bold mb-2"><AnimatedCounter value={3} />+</h3>
                <p className="text-[#222222] text-xl">Countries Served</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="p-6"
              >
                <h3 className="text-6xl font-bold mb-2"><AnimatedCounter value={100} />%</h3>
                <p className="text-[#222222] text-xl">Client Retention</p>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Clients Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full h-40 mb-6">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={300}
                    height={160}
                    style={{ objectFit: "contain", width: "100%", height: "100%" }}
                    priority={index < 3}
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#222222] mb-3">{client.name}</h3>
                <p className="text-[#666666] mb-6">{client.description}</p>
                
                <div className="relative">
                  <FaQuoteLeft className="text-4xl text-indigo-100 absolute -top-4 -left-2" />
                  <blockquote className="text-[#444444] italic pl-8 border-l-4 border-indigo-100 mb-4">
                    "{client.testimonial}"
                  </blockquote>
                  <div className="text-right">
                    <p className="font-semibold text-[#222222]">{client.author}</p>
                    <p className="text-sm text-[#666666]">{client.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

       
      </PageTransition>
    </main>
  );
}
