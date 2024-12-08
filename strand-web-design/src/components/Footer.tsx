'use client';

import { motion } from 'framer-motion';
import Logo from './Logo';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const footerLinks = {
  services: [
    { name: 'Web Design', href: '/services#web-design' },
    { name: 'Development', href: '/services#development' },
    { name: 'E-commerce', href: '/services#ecommerce' },
    { name: 'SEO', href: '/services#seo' },
    { name: 'Maintenance', href: '/services#maintenance' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Process', href: '/#process' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ]
};

const socialLinks = [
  { name: 'GitHub', icon: FiGithub, href: '#' },
  { name: 'Twitter', icon: FiTwitter, href: '#' },
  { name: 'LinkedIn', icon: FiLinkedin, href: '#' },
  { name: 'Instagram', icon: FiInstagram, href: '#' }
];

const contactInfo = [
  { icon: FiMail, text: 'strandwebdesigns@gmail.com' },
  { icon: FiPhone, text: '+353 83 379 3342' },
  { icon: FiMapPin, text: 'Donegal, Ireland' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[rgba(var(--primary),0.1)] pt-24 pb-12">
      {/* Background effect */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ background: 'var(--gradient-surface)' }}
      />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="mb-12">
              <Logo />
            </div>
            <p className="text-[rgb(var(--text-secondary))]">
              Creating stunning digital experiences that convert visitors into customers.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-[rgb(var(--accent))] font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 2 }}>
                  <a
                    href={link.href}
                    className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--highlight))] transition-colors hover-lift"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-[rgb(var(--accent))] font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 2 }}>
                  <a
                    href={link.href}
                    className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--highlight))] transition-colors hover-lift"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-[rgb(var(--accent))] font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              {contactInfo.map((info) => (
                <motion.li
                  key={info.text}
                  className="flex items-center gap-3 text-gray-300"
                  whileHover={{ x: 2 }}
                >
                  <info.icon className="text-[rgb(var(--secondary))]" />
                  <a
                    href={info.icon === FiMail ? `mailto:${info.text}` : `tel:${info.text}`}
                    className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--highlight))] transition-colors hover-lift"
                  >
                    {info.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[rgba(var(--primary),0.1)]">
          <p className="text-[rgb(var(--text-secondary))] opacity-60 text-center">
            {currentYear} Strand Web Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
