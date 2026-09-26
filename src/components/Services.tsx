import { useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import * as Icons from 'lucide-react';
import ServiceModal from './ServiceModal';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
  };

  const serviceImages = [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=90", // Building Exterior Colour Combination
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90", // Architectural Colour Planning
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=90", // High-Rise Residential
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=90", // School Building
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=90", // Commercial Building
    "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=90", // Society/Township
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=90", // Feature Bands
    "https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&q=90", // Entrance Enhancement - Modern building entrance with architectural details
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=90"  // Renovation
  ];

  return (
    <>
      <section id="services" className="section-padding bg-secondary-light" style={{ pointerEvents: 'auto' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional exterior colour design and architectural planning services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group overflow-hidden"
              >
                {/* Image Header */}
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img 
                    src={serviceImages[index % serviceImages.length]} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-3 group-hover:bg-accent-light transition-colors">
                      <div className="text-white">
                        {getIcon(service.icon)}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <motion.button
                    onClick={() => setSelectedService(service.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-accent font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Explore Service
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService !== null ? services.find(s => s.id === selectedService) || null : null}
      />
    </>
  );
};

export default Services;
