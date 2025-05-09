"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import CustomCursor from "../components/CustomCursor";

export default function Blogs() {
  return (
    <main className="bg-[#E9E9E9] min-h-screen">
      <CustomCursor />
      <PageTransition>
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            {/* Coming Soon Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl md:text-7xl font-bold text-[#222222] mb-6 text-center"
            >
              Coming Soon
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-[#444444] mb-12 text-center max-w-2xl"
            >
              We're working on creating amazing content for you. Stay tuned!
            </motion.p>
            
            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative w-32 h-32"
            >
              {/* Animated circles */}
              <div className="absolute inset-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full border-4 border-blue-500/30 rounded-full"
                />
              </div>
              <div className="absolute inset-4">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full border-4 border-purple-500/30 rounded-full"
                />
              </div>
              <div className="absolute inset-8">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </PageTransition>
    </main>
  );
}
