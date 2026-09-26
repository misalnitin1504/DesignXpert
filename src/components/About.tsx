import { motion } from 'framer-motion';
import { Award, Building2, Palette, TrendingUp, Users, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Building2, label: "Building Types", value: "15+" },
    { icon: Palette, label: "Colour Concepts", value: "50+" },
    { icon: Users, label: "Project Types", value: "20+" },
    { icon: Zap, label: "Design Excellence", value: "100%" }
  ];

  const focusAreas = [
    {
      icon: Palette,
      title: "Architectural Colour Planning",
      description: "Strategic colour schemes that enhance building aesthetics and visual harmony"
    },
    {
      icon: TrendingUp,
      title: "Exterior Visual Transformation",
      description: "Complete exterior makeovers that modernize and revitalize building appearances"
    },
    {
      icon: Building2,
      title: "Façade Enhancement",
      description: "Professional façade treatments that add character and architectural interest"
    },
    {
      icon: Award,
      title: "Institutional & Commercial Projects",
      description: "Specialized expertise for schools, hospitals, corporate offices and public buildings"
    },
    {
      icon: Users,
      title: "Residential Development",
      description: "Colour planning for apartments, villas, townships and housing societies"
    },
    {
      icon: Zap,
      title: "Large-Scale Project Execution",
      description: "Consistent design coordination across multiple buildings and locations"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white" style={{ pointerEvents: 'auto' }}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            About DesignXpert
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transforming buildings through the power of colour and architectural design
          </p>
        </motion.div>

        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
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
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=90"
                alt="Modern building architecture"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">
              Professional Exterior Colour Design
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              DesignXpert specializes in professional building exterior colour combinations, architectural colour planning and façade enhancement. Our approach combines colour harmony, architectural elements and visual composition to create exterior designs that are modern, balanced and visually distinctive.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We work with residential societies, corporate offices, educational institutions, healthcare facilities, and government projects to create exterior colour concepts that enhance building identity and visual appeal.
            </p>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-light transition-colors"
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-secondary-light p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="font-heading text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
            Our Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-accent hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <area.icon className="w-7 h-7 text-accent group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-heading text-lg font-bold text-primary mb-2">
                  {area.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
