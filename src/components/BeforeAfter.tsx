import { useState } from 'react';
import { motion } from 'framer-motion';
import { beforeAfterProjects } from '../data/projects';

const BeforeAfter = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="before-after" className="section-padding bg-white" style={{ pointerEvents: 'auto' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            From Ordinary to Outstanding
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every exterior has its own character. We plan colours around a building's proportions, materials, and purpose, using contrast to define key details and a coordinated palette to bring the whole facade together. Explore design directions for homes, schools, workplaces, and public spaces.
          </p>
        </motion.div>

        {/* Project Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {beforeAfterProjects.map((project, index) => (
            <motion.button
              key={project.id}
              onClick={() => {
                setActiveProject(index);
                setSliderPosition(50);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeProject === index
                  ? 'bg-accent text-white'
                  : 'bg-secondary-light text-primary hover:bg-gray-200'
              }`}
            >
              {project.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Before/After Slider */}
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            {/* Before Image */}
            <div className="absolute inset-0">
              <img 
                src={beforeAfterProjects[activeProject].beforeImage}
                alt="Before"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium">
                Before
              </div>
            </div>

            {/* After Image with Clipping */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src={beforeAfterProjects[activeProject].afterImage}
                alt="After"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium">
                After
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent rounded-full shadow-lg flex items-center justify-center">
                <div className="w-6 h-0.5 bg-white absolute" />
                <div className="h-6 w-0.5 bg-white absolute" />
              </div>
            </div>
          </div>

          {/* Range Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={handleSliderChange}
            className="w-full mt-6 accent-accent"
            aria-label="Before/After slider"
          />

          <div className="mt-6 border-t border-gray-200 pt-5">
            <p className="text-sm font-semibold uppercase text-accent mb-2">Design focus</p>
            <p className="text-gray-600 leading-relaxed">
              {beforeAfterProjects[activeProject].designFocus}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
