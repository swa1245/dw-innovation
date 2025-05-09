"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiUser, FiMail, FiMessageSquare, FiSend, FiDollarSign, FiList, FiMapPin, FiPhone, FiMail as FiMailIcon } from 'react-icons/fi';
import Image from 'next/image';
import ContactImage from '../contactimage/Image.png';
import GoogleMap from './GoogleMap';
import CustomCursor from "./CustomCursor";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    budget: 10000,
    currency: "INR",
    message: ""
  });

  // Exchange rate (1 USD = 83 INR approximately)
  const exchangeRate = 83;

  const getBudgetRange = () => {
    const minBudget = formData.currency === "USD" ? 121 : 10000; // 10,000 INR ≈ 121 USD
    const maxBudget = formData.currency === "USD" ? 50000 : 50000 * exchangeRate;
    const step = formData.currency === "USD" ? 100 : 5000;
    return { min: minBudget, max: maxBudget, step };
  };

  const formatBudget = (value) => {
    return new Intl.NumberFormat(formData.currency === "USD" ? "en-US" : "en-IN", {
      style: "currency",
      currency: formData.currency,
      maximumFractionDigits: 0
    }).format(value);
  };

  const serviceOptions = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "E-commerce Solutions",
    "Custom Software Development",
    "Other"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] py-20 px-4 relative overflow-hidden">
      <CustomCursor />
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-300/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-400/50 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200 shadow-2xl relative z-10"
      >
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Form Section */}
          <div className="flex-1 w-full lg:w-1/2">
            <motion.div className="text-left space-y-4 mb-12">
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4"
              >
                Let's Create Something Amazing
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-[var(--foreground)] max-w-2xl text-lg opacity-80"
              >
                Have a project in mind? We'd love to hear about it. Drop us a message and let's build something extraordinary together.
              </motion.p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                  <input
                    type="text"
                    className="w-full px-12 py-4 bg-white/90 rounded-xl border border-gray-300 text-[var(--foreground)] placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200 transition-all"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                  <input
                    type="email"
                    className="w-full px-12 py-4 bg-white/90 rounded-xl border border-gray-300 text-[var(--foreground)] placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200 transition-all"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="relative">
                <FiMessageSquare className="absolute left-4 top-6 text-gray-600" />
                <input
                  type="text"
                  className="w-full px-12 py-4 bg-white/90 rounded-xl border border-gray-300 text-[var(--foreground)] placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200 transition-all"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <FiList className="absolute left-4 top-6 text-gray-600" />
                <select
                  className="w-full px-12 py-4 bg-white/90 rounded-xl border border-gray-300 text-[#222222] placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200 transition-all appearance-none"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="" disabled>Select a Service</option>
                  {serviceOptions.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-600">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-[var(--foreground)] font-medium">Budget Range</label>
                  <span className="text-[var(--foreground)] font-medium">{formatBudget(formData.budget)}</span>
                </div>
                <motion.div variants={itemVariants} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-gray-600">Currency:</label>
                    <select
                      className="px-4 py-2 bg-white/90 rounded-xl border border-gray-300 text-[var(--foreground)] focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200 transition-all"
                      value={formData.currency}
                      onChange={(e) => {
                        const newCurrency = e.target.value;
                        const oldBudget = formData.budget;
                        const newBudget = newCurrency === "USD" 
                          ? Math.round(oldBudget / exchangeRate)
                          : Math.round(oldBudget * exchangeRate);
                        setFormData({...formData, currency: newCurrency, budget: newBudget});
                      }}
                    >
                      <option value="USD">USD</option>
                      <option value="INR">INR</option>
                    </select>
                  </div>
                  <div className="relative">
                    {formData.currency === "USD" ? (
                      <FiDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                    ) : (
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600">₹</span>
                    )}
                    <input
                      type="range"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      min={getBudgetRange().min}
                      max={getBudgetRange().max}
                      step={getBudgetRange().step}
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: parseInt(e.target.value)})}
                    />
                    <div className="text-center mt-2 text-gray-600">
                      Budget: {formatBudget(formData.budget)}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <textarea
                  rows="6"
                  className="w-full px-6 py-4 bg-white/90 rounded-xl border border-gray-300 text-[var(--foreground)] placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200 transition-all resize-none"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="text-left"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 34, 34, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[var(--foreground)] text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all flex items-center gap-2"
                  type="submit"
                >
                  <span>Send Message</span>
                  <FiSend className="text-xl" />
                </motion.button>
              </motion.div>
            </form>
          </div>

          {/* Image Section */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 w-full lg:w-1/2 relative h-[800px] rounded-3xl overflow-hidden"
          >
            <Image
              src={ContactImage}
              alt="Contact Us"
              className="object-cover rounded-3xl"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Map and Contact Info Section */}
      <div className="mt-20 bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200 shadow-2xl relative z-10 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Our Location</h2>
          <p className="text-[var(--foreground)] opacity-80 max-w-2xl mx-auto">Visit our office or get in touch with us using the contact information below.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Map */}
          <div className="flex-1 w-full lg:w-2/3">
            <GoogleMap />
          </div>
          
          {/* Contact Information */}
          <div className="flex-1 w-full lg:w-1/3 flex flex-col justify-center space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <FiMapPin className="text-xl text-[var(--foreground)]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--foreground)]">Address</h3>
                <p className="text-[var(--foreground)] opacity-80">Shreya Hub,Office no 13 ,3rd floor,Pari chouk, 41, near CNG Gas Station, Narhe, Katraj,Pune, Maharashtra 411041</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <FiPhone className="text-xl text-[var(--foreground)]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--foreground)]">Phone</h3>
                <p className="text-[var(--foreground)] opacity-80">+91 9284117439</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <FiMailIcon className="text-xl text-[var(--foreground)]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--foreground)]">HR Email</h3>
                <p className="text-[var(--foreground)] opacity-80">hr@dwi4u.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--foreground)]">Marketing Email</h3>
                <p className="text-[var(--foreground)] opacity-80">marketing@dwi4u.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--foreground)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--foreground)]">LinkedIn</h3>
                <p className="text-[var(--foreground)] opacity-80">linkedin.com/company/dw-innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}