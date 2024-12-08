'use client';

import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

const plans = [
  {
    name: 'LUMP SUM',
    price: '€2000',
    description: 'One-time payment for a complete website build',
    gradient: 'from-[rgb(var(--primary))] to-[rgb(var(--secondary))]',
    features: [
      'Custom Design & Development',
      'Mobile Responsive',
      'Up to 5 Pages',
      'Contact Form Integration',
      'Basic SEO Setup',
      'Social Media Integration',
      'One-time Payment',
      '2 Months Support',
    ]
  },
  {
    name: 'MONTHLY',
    price: '€100',
    description: 'Flexible monthly payments with ongoing support',
    gradient: 'from-[rgb(var(--accent))] to-[rgb(var(--highlight))]',
    features: [
      'Custom Design & Development',
      'Mobile Responsive',
      'Up to 3 Pages',
      'Monthly Content Updates',
      'Ongoing SEO Management',
      'Analytics Reporting',
      'Monthly Hosting Included',
      'Continuous Support',
    ]
  },
  {
    name: 'E-COMMERCE',
    price: '€2,500',
    description: 'Complete online store setup and management',
    gradient: 'from-[rgb(var(--secondary))] to-[rgb(var(--highlight))]',
    features: [
      'Full E-commerce Setup',
      'Product Management System',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Processing System',
      'Shopping Cart Setup',
      'Product Categories & Filters',
      '3 Months Support',
    ]
  }
];

export default function PricingSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[rgb(var(--primary))] rounded-full opacity-10 blur-3xl transform -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[rgb(var(--secondary))] rounded-full opacity-10 blur-3xl transform -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto">
            Quality web design doesn't have to break the bank. Choose a plan that works for your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="h-full rounded-2xl backdrop-blur-sm border border-[rgba(var(--primary),0.2)] bg-[rgba(var(--surface),0.8)] overflow-hidden relative group"
              >
                {/* Header */}
                <div className="p-8 relative overflow-hidden">
                  {/* Gradient Background */}
                  <div 
                    className="absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
                    style={{ background: `linear-gradient(135deg, ${plan.gradient})` }}
                  />
                  
                  <h3 className="font-poppins text-2xl text-white mb-4">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="font-poppins text-4xl text-[rgb(var(--accent))]">
                      {plan.price}
                    </span>
                    <span className="font-poppins text-gray-400 ml-2">
                      {plan.name === 'MONTHLY' ? ' /month' : ''}
                    </span>
                  </div>
                  <p className="font-poppins text-gray-300">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="p-8 border-t border-[rgba(var(--primary),0.2)]">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="font-poppins text-gray-300 flex items-center">
                        <FiCheck className="w-5 h-5 text-[rgb(var(--sea))] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full group relative flex items-center justify-center gap-2 px-6 py-3 rounded-lg overflow-hidden"
                  >
                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--sea))] to-[rgb(var(--sea-light))] opacity-90 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Content */}
                    <span className="relative font-poppins text-white">
                      Get Started
                    </span>
                    <svg 
                      className="w-4 h-4 relative text-white transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Highlight border on hover */}
                <div 
                  className="absolute inset-0 border-2 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ borderImage: `linear-gradient(135deg, ${plan.gradient}) 1` }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: 'No Hidden Fees', text: 'Transparent pricing' },
            { title: 'Pay Your Way', text: 'Flexible payment options' },
            { title: 'Expert Support', text: 'Help when you need it' },
            { title: 'Risk-Free', text: 'Pay Only After Approval' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <h4 className="text-[rgb(var(--accent))] font-semibold font-poppins mb-2">{item.title}</h4>
              <p className="text-[rgb(var(--text-secondary))] text-sm font-poppins">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
