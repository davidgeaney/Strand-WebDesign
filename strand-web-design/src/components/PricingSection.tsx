'use client';

import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

const plans = [
  {
    name: 'LUMP SUM',
    price: '€2,999',
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
      'Training Session'
    ]
  },
  {
    name: 'MONTHLY',
    price: '€299',
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
      'Monthly Strategy Call'
    ]
  },
  {
    name: 'E-COMMERCE',
    price: '€4,999',
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
      'Staff Training Sessions'
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[rgb(var(--text-primary))] font-bold">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-[rgb(var(--text-secondary))] max-w-3xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                  
                  <h3 className="text-2xl font-bold text-[rgb(var(--text-primary))] mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[rgb(var(--accent))]">{plan.price}</span>
                    <span className="text-[rgb(var(--text-secondary))]">
                      {plan.name === 'MONTHLY' ? ' /month' : ''}
                    </span>
                  </div>
                  <p className="text-[rgb(var(--text-secondary))]">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="p-8 border-t border-[rgba(var(--primary),0.2)]">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <motion.li 
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-start gap-3 group"
                      >
                        <FiCheck className="w-5 h-5 mt-0.5 text-[rgb(var(--accent))]" />
                        <span className="text-[rgb(var(--text-secondary))]">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.a
                    href="#contact"
                    className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-xl text-[rgb(var(--text-primary))] transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Button Background */}
                    <div 
                      className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      style={{ background: `linear-gradient(135deg, ${plan.gradient})` }}
                    />
                    
                    <span className="relative">Get Started</span>
                    <FiArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>
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
            { title: 'Money Back', text: '30-day guarantee' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <h4 className="text-[rgb(var(--accent))] font-semibold mb-2">{item.title}</h4>
              <p className="text-[rgb(var(--text-secondary))] text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
