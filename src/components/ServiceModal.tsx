import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  } | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  if (!service) return null;

  const serviceImages: Record<number, string> = {
    1: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=90",
    2: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90",
    3: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=90",
    4: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=90",
    5: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=90",
    6: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=90",
    7: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=90",
    8: "https://images.unsplash.com/photo-1595855709915-38e47e2b5cde?w=1200&q=90",
    9: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=90"
  };

  const serviceDetails: Record<number, { features: string[]; process: string[]; benefits: string[] }> = {
    1: {
      features: [
        "Professional colour consultation",
        "Harmonious palette development",
        "Modern & traditional concepts",
        "Visual improvement strategies"
      ],
      process: [
        "Building analysis and assessment",
        "Colour scheme development",
        "Sample presentation",
        "Final approval and execution"
      ],
      benefits: [
        "Enhanced curb appeal",
        "Increased property value",
        "Modern aesthetic appeal",
        "Long-lasting colour solutions"
      ]
    },
    2: {
      features: [
        "Architectural element coordination",
        "Wall and column colour planning",
        "Professional colour zoning",
        "Visual balance optimization"
      ],
      process: [
        "Site analysis and documentation",
        "Architectural study",
        "Colour concept development",
        "Design refinement"
      ],
      benefits: [
        "Cohesive building appearance",
        "Enhanced architectural features",
        "Professional visual identity",
        "Balanced colour harmony"
      ]
    },
    3: {
      features: [
        "High-rise façade planning",
        "Vertical/horizontal treatment",
        "Modern residential schemes",
        "Elevation enhancement"
      ],
      process: [
        "Building elevation study",
        "Colour concept development",
        "Sample testing",
        "Implementation support"
      ],
      benefits: [
        "Modern high-rise appearance",
        "Distinctive building identity",
        "Enhanced market value",
        "Professional façade treatment"
      ]
    },
    4: {
      features: [
        "Child-friendly colour concepts",
        "Professional educational design",
        "Institutional identity",
        "Entrance beautification"
      ],
      process: [
        "Educational facility analysis",
        "Age-appropriate colour planning",
        "Safety considerations",
        "Brand identity integration"
      ],
      benefits: [
        "Inspiring learning environment",
        "Professional institutional appearance",
        "Enhanced school identity",
        "Safe and welcoming atmosphere"
      ]
    },
    5: {
      features: [
        "Brand-compatible exterior design",
        "Modern visual identity",
        "Street-facing enhancement",
        "Professional commercial appeal"
      ],
      process: [
        "Brand analysis",
        "Commercial space assessment",
        "Colour concept development",
        "Business identity integration"
      ],
      benefits: [
        "Enhanced brand visibility",
        "Professional business appearance",
        "Increased customer attraction",
        "Strong market presence"
      ]
    },
    6: {
      features: [
        "Society-wide coordination",
        "Township colour planning",
        "Consistent visual identity",
        "Multi-building harmonization"
      ],
      process: [
        "Township master planning",
        "Individual building analysis",
        "Colour scheme coordination",
        "Implementation guidelines"
      ],
      benefits: [
        "Unified community appearance",
        "Consistent township identity",
        "Enhanced property values",
        "Professional development image"
      ]
    },
    7: {
      features: [
        "Decorative band design",
        "Geometric pattern creation",
        "Accent wall planning",
        "Contemporary façade treatments"
      ],
      process: [
        "Architectural feature analysis",
        "Pattern design development",
        "Colour combination testing",
        "Precision implementation"
      ],
      benefits: [
        "Unique architectural character",
        "Visual interest enhancement",
        "Modern façade treatment",
        "Custom design elements"
      ]
    },
    8: {
      features: [
        "Main entrance enhancement",
        "Building elevation treatment",
        "Feature element design",
        "Architectural detailing"
      ],
      process: [
        "Entrance area analysis",
        "Focal point identification",
        "Design concept development",
        "Detailed implementation"
      ],
      benefits: [
        "Impressive first impression",
        "Enhanced building identity",
        "Welcoming entrance experience",
        "Architectural highlight creation"
      ]
    },
    9: {
      features: [
        "Existing building transformation",
        "Repainting colour planning",
        "Before/after improvement",
        "Modernization strategies"
      ],
      process: [
        "Building condition assessment",
        "Transformation planning",
        "Colour scheme development",
        "Renovation execution"
      ],
      benefits: [
        "Complete building makeover",
        "Modern appearance restoration",
        "Extended building life",
        "Cost-effective transformation"
      ]
    }
  };

  const details = serviceDetails[service.id] || { features: [], process: [], benefits: [] };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                {service.title}
              </h2>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Hero Image */}
              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-8">
                <img 
                  src={serviceImages[service.id] || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Features */}
                <div className="bg-secondary-light p-6 rounded-xl">
                  <h3 className="font-heading text-lg font-bold text-primary mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {details.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div className="bg-secondary-light p-6 rounded-xl">
                  <h3 className="font-heading text-lg font-bold text-primary mb-4">Our Process</h3>
                  <ul className="space-y-3">
                    {details.process.map((step, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-accent text-xs font-bold">{index + 1}</span>
                        </div>
                        <span className="text-gray-700 text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="bg-secondary-light p-6 rounded-xl">
                  <h3 className="font-heading text-lg font-bold text-primary mb-4">Benefits</h3>
                  <ul className="space-y-3">
                    {details.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <motion.a
                  href="#contact"
                  onClick={onClose}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-light transition-colors"
                >
                  Get a Quote for This Service
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
