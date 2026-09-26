import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Site & Requirement Understanding',
      description: 'Understand the building, architecture, surroundings and project objectives.',
      details: ['Building analysis', 'Site assessment', 'Project objectives', 'Client requirements']
    },
    {
      number: '02',
      title: 'Architectural Analysis',
      description: 'Study elevation elements, proportions, projections and visual hierarchy.',
      details: ['Elevation study', 'Element analysis', 'Visual hierarchy', 'Proportion review']
    },
    {
      number: '03',
      title: 'Colour Concept Development',
      description: 'Develop suitable colour combinations and façade concepts.',
      details: ['Palette creation', 'Concept design', 'Material selection', 'Color testing']
    },
    {
      number: '04',
      title: 'Design Finalization',
      description: 'Refine the selected concept based on project requirements.',
      details: ['Design refinement', 'Client approval', 'Technical documentation', 'Final specs']
    },
    {
      number: '05',
      title: 'Project Execution Support',
      description: 'Support implementation and coordinate the design across the project.',
      details: ['Implementation guidance', 'Quality control', 'Site coordination', 'Final inspection']
    }
  ];

  return (
    <section id="process" className="section-padding bg-white" style={{ pointerEvents: 'auto' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Professional Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A systematic, refined approach to creating exceptional exterior colour designs with attention to every detail
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-accent hover:shadow-xl transition-all duration-300 relative z-10">
                  {/* Number Badge */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-2xl flex items-center justify-center mb-6 mx-auto text-white font-heading font-bold text-2xl shadow-lg"
                  >
                    {step.number}
                  </motion.div>
                  
                  <h3 className="font-heading text-lg font-bold text-primary mb-3 text-center min-h-[60px] flex items-center justify-center">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 text-center mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2 mt-4">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4">
                    <div className="w-8 h-8 border-r-2 border-b-2 border-accent/30 transform rotate-45" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-secondary-light to-white p-8 rounded-2xl border border-accent/10"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold text-primary mb-2">
                Multi-Location Project Excellence
              </h4>
              <p className="text-gray-600 leading-relaxed">
                For large-scale projects across multiple buildings or locations, we ensure consistent colour concepts and design coordination throughout the entire development, maintaining quality and visual harmony across all sites.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
