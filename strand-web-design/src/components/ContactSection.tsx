'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

export default function ContactSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[rgb(var(--sea-light))] rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[rgb(var(--sea))] rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-text text-4xl md:text-5xl mb-6 text-white">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-300">
            Ready to transform your digital presence? We're here to help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:ring-2 focus:ring-[rgb(var(--sea))] focus:border-transparent transition-all duration-300 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:ring-2 focus:ring-[rgb(var(--sea))] focus:border-transparent transition-all duration-300 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:ring-2 focus:ring-[rgb(var(--sea))] focus:border-transparent transition-all duration-300 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[rgb(var(--sea))] to-[rgb(var(--sea-light))] text-white py-4 px-8 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[rgb(var(--sea-light))]/20 transition-all duration-300"
            >
              Send Message
              <FiSend className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:pl-12 space-y-12"
          >
            {/* Contact Cards */}
            <div className="grid gap-8">
              {/* Email Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:shadow-md transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[rgb(var(--sea))] bg-opacity-20 rounded-lg">
                    <FiMail className="w-6 h-6 text-[rgb(var(--sea-light))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email Us</h3>
                    <p className="text-gray-300">hello@strandwebdesign.com</p>
                    <p className="text-sm text-gray-400 mt-2">We aim to respond within 24 hours</p>
                  </div>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:shadow-md transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[rgb(var(--sea))] bg-opacity-20 rounded-lg">
                    <FiPhone className="w-6 h-6 text-[rgb(var(--sea-light))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Call Us</h3>
                    <p className="text-gray-300">+353 (0) 123 456 789</p>
                    <p className="text-sm text-gray-400 mt-2">Mon-Fri from 9am to 6pm</p>
                  </div>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:shadow-md transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[rgb(var(--sea))] bg-opacity-20 rounded-lg">
                    <FiMapPin className="w-6 h-6 text-[rgb(var(--sea-light))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Visit Us</h3>
                    <p className="text-gray-300">Dublin, Ireland</p>
                    <p className="text-sm text-gray-400 mt-2">Available for in-person meetings</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Trust Message */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm">
              <h4 className="font-semibold text-white mb-3">Why Choose Us?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--sea-light))]" />
                  <span>Expert team with years of experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--sea-light))]" />
                  <span>Tailored solutions for your business</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--sea-light))]" />
                  <span>Dedicated support throughout the process</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
