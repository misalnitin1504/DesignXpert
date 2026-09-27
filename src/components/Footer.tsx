import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Exterior Colour Combination',
    'Architectural Colour Planning',
    'Façade Design',
    'Elevation Enhancement',
    'Renovation Projects'
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/logo.png"
                alt="DesignXpert Logo"
                className="h-10 w-10 rounded-full bg-white p-1 object-contain"
              />
              <span className="font-heading font-bold text-xl">DesignXpert</span>
            </div>
            <p className="text-gray-400 mb-4">
              Architectural Colour Planning
            </p>
            <p className="text-gray-400 mb-4">
              Building Exterior Design
            </p>
            <p className="text-gray-400">
              Façade Enhancement
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="font-heading font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="font-heading font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow" />
                <div>
                  <a href="tel:+918780833976" className="text-gray-400 hover:text-yellow transition-colors">
                    +91 8780833976
                  </a>
                  <br />
                  <a href="tel:+916353863352" className="text-gray-400 hover:text-yellow transition-colors">
                    +91 6353863352
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow" />
                <a href="mailto:designxpert03@gmail.com" className="text-gray-400 hover:text-yellow transition-colors">
                  designxpert03@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm">
                  Pandesara, Surat, Gujarat - 394221
                </p>
              </div>
              
              {/* Social Media Icons */}
              <div className="mt-6">
                <h4 className="font-heading font-semibold mb-4 text-gray-300">Follow Us</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://www.facebook.com/p/Design-Xpert-61576556795848/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/designxpert03/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label="YouTube"
                  >
                    <FaYoutube className="w-5 h-5 text-white" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center text-gray-400 text-sm"
          >
            © 2026 DesignXpert. All Rights Reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
