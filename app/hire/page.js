"use client";
import { motion } from "framer-motion";
import { BsArrowRight, BsBriefcase, BsLightbulb, BsStars, BsClock } from "react-icons/bs";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";

const backgroundVariants = {
  initial: { backgroundPosition: '0% 0%' },
  animate: {
    backgroundPosition: ['0% 0%', '100% 100%'],
    transition: { duration: 20, repeat: Infinity, repeatType: 'reverse' }
  }
};

const positions = [
  {
    title: "Social Media Manager",
    description: "Join our team as a Social Media Manager to create and manage engaging content across all social platforms.",
    responsibilities: [
      "Develop and implement social media strategies",
      "Create engaging content for multiple platforms",
      "Monitor social media metrics and analytics",
      "Engage with followers and manage community",
      "Stay updated with social media trends"
    ],
    requirements: [
      "3+ years of social media management experience",
      "Proficiency in social media tools and analytics",
      "Strong copywriting and content creation skills",
      "Experience with paid social campaigns",
      "Bachelor's degree in Marketing or related field"
    ]
  },
  {
    title: "Graphics Designer",
    description: "Create stunning visuals that tell compelling stories and enhance our brand identity.",
    responsibilities: [
      "Design graphics for digital and print media",
      "Create brand assets and marketing materials",
      "Collaborate with marketing team on campaigns",
      "Maintain brand consistency across materials",
      "Design UI elements for web projects"
    ],
    requirements: [
      "3+ years of graphic design experience",
      "Expert in Adobe Creative Suite",
      "Strong portfolio demonstrating creativity",
      "Experience with UI/UX design principles",
      "Bachelor's degree in Design or related field"
    ]
  },
  {
    title: "UI/UX Designer",
    description: "Shape the future of digital experiences by creating intuitive and beautiful user interfaces.",
    responsibilities: [
      "Design user-centered interfaces and experiences",
      "Create wireframes and prototypes",
      "Conduct user research and testing",
      "Collaborate with development team",
      "Maintain design system documentation"
    ],
    requirements: [
      "4+ years of UI/UX design experience",
      "Proficiency in Figma and design tools",
      "Strong portfolio of web/mobile projects",
      "Experience with user research methods",
      "Knowledge of frontend development"
    ]
  },
  {
    title: "Video Editor",
    description: "Create compelling video content that captures attention and drives engagement.",
    responsibilities: [
      "Edit and produce high-quality video content",
      "Create motion graphics and animations",
      "Manage video project timelines",
      "Collaborate with creative team",
      "Maintain video content library"
    ],
    requirements: [
      "3+ years of video editing experience",
      "Expert in Premier Pro and After Effects",
      "Strong portfolio of video work",
      "Experience with motion graphics",
      "Knowledge of video production workflow"
    ]
  }
];

export default function Hire() {
  return (
    <>
      <Navbar />
      <CustomCursor />

    <PageTransition>
      <motion.div 
        className="min-h-screen text-[#222222] relative overflow-hidden"
        style={{
          background: 'linear-gradient(45deg, #E9E9E9, #F5F5F5, #E9E9E9)',
          backgroundSize: '400% 400%'
        }}
        variants={backgroundVariants}
        initial="initial"
        animate="animate">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <motion.div className="relative mb-16">
            <motion.div
              className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
            <motion.h1 
              className="text-7xl font-bold text-center bg-gradient-to-r from-[#222222] via-[#444444] to-[#222222] bg-clip-text text-transparent relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Join Our Team
            </motion.h1>
          </motion.div>
          <motion.p 
            className="text-xl text-center mb-16 text-[#444444] max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're looking for talented individuals to help shape the future of digital innovation. Join us in creating extraordinary experiences.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden group hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="flex items-center gap-3 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {index === 0 && <BsBriefcase className="text-3xl text-indigo-600 group-hover:scale-110 transition-transform duration-300" />}
                  {index === 1 && <BsStars className="text-3xl text-indigo-600 group-hover:scale-110 transition-transform duration-300" />}
                  {index === 2 && <BsLightbulb className="text-3xl text-indigo-600 group-hover:scale-110 transition-transform duration-300" />}
                  {index === 3 && <BsClock className="text-3xl text-indigo-600 group-hover:scale-110 transition-transform duration-300" />}
                  <h2 className="text-2xl font-bold">{position.title}</h2>
                </motion.div>
                <p className="text-[#444444] mb-6 leading-relaxed">{position.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Responsibilities</h3>
                  <ul className="space-y-2 text-[#444444]">
                    {position.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span>{resp}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Requirements</h3>
                  <ul className="space-y-2 text-[#444444]">
                    {position.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span>{req}</li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  className="flex items-center gap-2 bg-gradient-to-r from-[#222222] to-[#444444] text-white px-8 py-4 rounded-lg hover:from-black hover:to-[#222222] transition-all duration-300 mt-8 group-hover:scale-105 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now <BsArrowRight />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </motion.div>
    </PageTransition>
    </>
  );
}
