import { motion } from 'framer-motion';
import { projectTypes } from '../data/projectTypes';
import * as Icons from 'lucide-react';

const ProjectTypes = () => {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
  };

  return (
    <section id="projects" className="section-padding bg-white" style={{ pointerEvents: 'auto' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Built for Every Kind of Space
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From residential complexes to public infrastructure, we serve diverse project types
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projectTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              {/* Background Image */}
              <div className="aspect-[4/3] relative">
                <img 
                  src={type.image} 
                  alt={type.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-white">
                      {getIcon(type.icon)}
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">
                    {type.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-300 line-clamp-2">
                  {type.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTypes;
