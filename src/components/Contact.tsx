import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import building2 from '../assets/building2.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    projectLocation: '',
    message: ''
  });

  const projectTypes = [
    'Residential',
    'High-Rise Residential',
    'Commercial',
    'Corporate',
    'School',
    'Hospital',
    'Institutional',
    'Government',
    'Public Infrastructure',
    'Society / Township',
    'Renovation / Repainting',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will contact you soon.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: '',
      projectLocation: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-white" style={{ pointerEvents: 'auto' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Let's Discuss Your Project
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for professional exterior colour planning and façade design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Hero Image */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img 
                src={building2}
                alt="School facade with a bright, multicolour exterior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary mb-1">Phone</h3>
                  <a href="tel:+918780833976" className="text-gray-600 hover:text-accent transition-colors">
                    +91 8780833976
                  </a>
                  <br />
                  <a href="tel:+916353863352" className="text-gray-600 hover:text-accent transition-colors">
                    +91 6353863352
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary mb-1">Email</h3>
                  <a href="mailto:designxpert03@gmail.com" className="text-gray-600 hover:text-accent transition-colors">
                    designxpert03@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary mb-1">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Plot No. 55, First Floor,<br />
                    Shop No. 3, Sai Baba Nagar Society,<br />
                    Gate No. 1, Bamroli Road,<br />
                    Pandesara, Surat,<br />
                    Gujarat - 394221
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 bg-secondary-light rounded-xl overflow-hidden h-64 flex items-center justify-center border border-gray-200"
            >
              <iframe
                title="DesignXpert location in Pandesara, Surat"
                src="https://maps.google.com/maps?q=Plot%20No.%2055%2C%20First%20Floor%2C%20Shop%20No.%203%2C%20Sai%20Baba%20Nagar%20Society%2C%20Gate%20No.%201%2C%20Bamroli%20Road%2C%20Pandesara%2C%20Surat%2C%20Gujarat%20394221&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-primary mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="projectLocation" className="block text-sm font-medium text-primary mb-2">
                  Project Location *
                </label>
                <input
                  type="text"
                  id="projectLocation"
                  name="projectLocation"
                  value={formData.projectLocation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="City, State"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Request a Consultation
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
