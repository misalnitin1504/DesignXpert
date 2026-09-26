import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const LargeScaleProjects = () => {
  const highlights = [
    "Multi-building colour planning",
    "Society & township projects",
    "Corporate projects",
    "Government projects",
    "Public infrastructure",
    "Multi-location execution"
  ];

  return (
    <section id="large-scale-projects" className="section-padding bg-secondary-light" style={{ pointerEvents: 'auto' }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=90"
                alt="Large scale township project"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Large-Scale & Multi-Location Projects
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              From individual buildings to large residential, institutional, corporate and public projects, DesignXpert can develop consistent exterior colour concepts across multiple buildings and locations.
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-xl mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-primary font-medium">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-light transition-colors"
            >
              Discuss Your Project
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LargeScaleProjects;
