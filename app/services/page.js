"use client";
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import Link from "next/link";
import PageTransition from '../components/PageTransition';

export default function Services() {
  return (
    <main>
      <PageTransition>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-[#09182C] py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 mb-12">
              Comprehensive digital solutions to transform your ideas into reality with cutting-edge technology and expert craftsmanship.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 0.95 }}
                  className="bg-white text-[#09182C] px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all duration-300 ease-in-out"
                >
                  Get a Free Quote
                </motion.button>
              </Link>
            </div>
          </motion.div>
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
              We deliver innovative solutions tailored to your business needs, leveraging cutting-edge technologies and industry best practices.
            </p>
          </motion.div>

          <div className="flex flex-col gap-24 mt-12">
            {/* Web Development */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                {/* Left side - Number and Image */}
                <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto md:h-[450px] overflow-visible">
                  <div className="absolute -top-12 -left-6 text-[120px] font-bold text-white opacity-20 z-10">01</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl transform rotate-3 scale-95 opacity-70"></div>
                  <div className="absolute inset-0 overflow-hidden rounded-3xl transform -rotate-3">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center hover:scale-110 transition-transform duration-700 ease-in-out"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09182C] via-transparent to-transparent opacity-50 rounded-3xl"></div>
                </div>
                
                {/* Right side - Content */}
                <div className="w-full md:w-1/2 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 inline-block relative">
                      Web Development
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                    </h3>
                    <p className="text-gray-300 mb-8 text-lg">
                      Custom websites and web applications built with modern frameworks and technologies that deliver exceptional user experiences.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white">React</span>
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white">Next.js</span>
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white">Node.js</span>
                    </div>
                    <div className="group inline-flex items-center gap-2 text-white cursor-pointer">
                      <span className="font-medium">Learn more</span>
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* App Development */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                {/* Right side - Number and Image */}
                <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto md:h-[450px] overflow-visible">
                  <div className="absolute -top-12 -right-6 text-[120px] font-bold text-white opacity-20 z-10">02</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-600 rounded-3xl transform -rotate-3 scale-95 opacity-70"></div>
                  <div className="absolute inset-0 overflow-hidden rounded-3xl transform rotate-3">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center hover:scale-110 transition-transform duration-700 ease-in-out"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09182C] via-transparent to-transparent opacity-50 rounded-3xl"></div>
                </div>
                
                {/* Left side - Content */}
                <div className="w-full md:w-1/2 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 inline-block relative">
                      App Development
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-pink-600"></div>
                    </h3>
                    <p className="text-gray-300 mb-8 text-lg">
                      Native and cross-platform mobile applications that provide seamless experiences across iOS and Android devices.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white">React Native</span>
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white">Flutter</span>
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white">Swift</span>
                    </div>
                    <div className="group inline-flex items-center gap-2 text-white cursor-pointer">
                      <span className="font-medium">Learn more</span>
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* ERP and CRM Systems */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                {/* Left side - Number and Image */}
                <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto md:h-[450px] overflow-visible">
                  <div className="absolute -top-12 -left-6 text-[120px] font-bold text-white opacity-20 z-10">03</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl transform rotate-3 scale-95 opacity-70"></div>
                  <div className="absolute inset-0 overflow-hidden rounded-3xl transform -rotate-3">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center hover:scale-110 transition-transform duration-700 ease-in-out"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09182C] via-transparent to-transparent opacity-50 rounded-3xl"></div>
                </div>
                
                {/* Right side - Content */}
                <div className="w-full md:w-1/2 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 inline-block relative">
                      ERP & CRM Systems
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-600"></div>
                    </h3>
                    <p className="text-gray-300 mb-8 text-lg">
                      Comprehensive enterprise solutions that streamline operations, enhance customer relationships, and drive business growth.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white">Salesforce</span>
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white">SAP</span>
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white">Custom Solutions</span>
                    </div>
                    <div className="group inline-flex items-center gap-2 text-white cursor-pointer">
                      <span className="font-medium">Learn more</span>
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* UI/UX Design */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                {/* Right side - Number and Image */}
                <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto md:h-[450px] overflow-visible">
                  <div className="absolute -top-12 -right-6 text-[120px] font-bold text-white opacity-20 z-10">04</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl transform -rotate-3 scale-95 opacity-70"></div>
                  <div className="absolute inset-0 overflow-hidden rounded-3xl transform rotate-3">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center hover:scale-110 transition-transform duration-700 ease-in-out"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09182C] via-transparent to-transparent opacity-50 rounded-3xl"></div>
                </div>
                
                {/* Left side - Content */}
                <div className="w-full md:w-1/2 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 inline-block relative">
                      UI/UX Design
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-600"></div>
                    </h3>
                    <p className="text-gray-300 mb-8 text-lg">
                      Intuitive and visually stunning interfaces that enhance user engagement and satisfaction while reflecting your brand identity.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white">Figma</span>
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white">Adobe XD</span>
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white">Sketch</span>
                    </div>
                    <div className="group inline-flex items-center gap-2 text-white cursor-pointer">
                      <span className="font-medium">Learn more</span>
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Social Media Handling */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                {/* Left side - Number and Image */}
                <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto md:h-[450px] overflow-visible">
                  <div className="absolute -top-12 -left-6 text-[120px] font-bold text-white opacity-20 z-10">05</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-3xl transform rotate-3 scale-95 opacity-70"></div>
                  <div className="absolute inset-0 overflow-hidden rounded-3xl transform -rotate-3">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center hover:scale-110 transition-transform duration-700 ease-in-out"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09182C] via-transparent to-transparent opacity-50 rounded-3xl"></div>
                </div>
                
                {/* Right side - Content */}
                <div className="w-full md:w-1/2 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 inline-block relative">
                      Social Media Handling
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-violet-600"></div>
                    </h3>
                    <p className="text-gray-300 mb-8 text-lg">
                      Strategic social media management that builds your brand presence, engages your audience, and drives meaningful conversions.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white">Content Strategy</span>
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white">Analytics</span>
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white">Campaign Management</span>
                    </div>
                    <div className="group inline-flex items-center gap-2 text-white cursor-pointer">
                      <span className="font-medium">Learn more</span>
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-white/80 mb-10">
              Let's discuss how our services can help you achieve your business goals and create exceptional digital experiences.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 0.95 }}
                className="bg-white text-[#09182C] px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all duration-300 ease-in-out"
              >
                Schedule a Free Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
      </PageTransition>
    </main>
  );
}
