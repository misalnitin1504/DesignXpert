import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Career = () => (
  <section id="career" className="section-padding bg-secondary-light">
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Careers</p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-primary md:text-4xl">
          Grow with DesignXpert
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Have a background in architecture, exterior colour design, or project coordination? Send us your résumé and portfolio for future opportunities.
        </p>
        <a
          href="mailto:designxpert03@gmail.com?subject=Career%20Enquiry"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-light"
        >
          <Mail className="h-5 w-5" />
          Send your profile
        </a>
      </motion.div>
    </div>
  </section>
);

export default Career;