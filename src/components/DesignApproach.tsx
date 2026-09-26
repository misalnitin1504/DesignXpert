import { motion } from 'framer-motion';

const DesignApproach = () => {
  const pillars = [
    {
      number: '01',
      title: 'COLOUR',
      description: 'Professional colour combinations that create visual harmony.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=90'
    },
    {
      number: '02',
      title: 'ARCHITECTURE',
      description: 'Colour planning aligned with architectural forms and elevation elements.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=90'
    },
    {
      number: '03',
      title: 'IDENTITY',
      description: 'A distinctive exterior appearance appropriate to the building\'s purpose.',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=90'
    }
  ];

  return (
    <section id="design-approach" className="section-padding bg-primary text-white" style={{ pointerEvents: 'auto' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Colour + Architecture + Identity
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our three-pillar approach to creating exceptional building exteriors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="text-center group"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 mx-auto max-w-xs">
                <img 
                  src={pillar.image} 
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white font-heading font-bold text-3xl border-4 border-white"
                  >
                    {pillar.number}
                  </motion.div>
                </div>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignApproach;
