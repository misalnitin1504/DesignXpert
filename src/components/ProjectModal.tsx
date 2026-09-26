import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Building, ArrowUp } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  type: string;
  description: string;
  image: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle scroll to show/hide scroll-to-top button
  const handleScroll = () => {
    if (contentRef.current) {
      const scrollTop = contentRef.current.scrollTop;
      setShowScrollTop(scrollTop > 300);
    }
  };

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!project) return null;

  const projectDetails: Record<number, {
    location: string;
    year: string;
    area: string;
    features: string[];
    challenges: string[];
    solutions: string[];
  }> = {
    1: {
      location: "Mumbai, Maharashtra",
      year: "2023",
      area: "45,000 sq. ft",
      features: [
        "Geometric façade patterns",
        "Contemporary colour palette",
        "Modern architectural elements",
        "Sustainable materials"
      ],
      challenges: [
        "Building height considerations",
        "Weather-resistant coatings",
        "Local regulations compliance"
      ],
      solutions: [
        "Advanced coating technology",
        "Custom colour formulation",
        "Professional execution team"
      ]
    },
    2: {
      location: "Bangalore, Karnataka",
      year: "2023",
      area: "60,000 sq. ft",
      features: [
        "Brand-aligned colour scheme",
        "Professional corporate identity",
        "Modern glass façade integration",
        "Energy-efficient design"
      ],
      challenges: [
        "Brand consistency requirements",
        "Large surface area coverage",
        "Minimal disruption to operations"
      ],
      solutions: [
        "Phased implementation approach",
        "High-performance coatings",
        "Weekend execution schedule"
      ]
    },
    3: {
      location: "Pune, Maharashtra",
      year: "2022",
      area: "35,000 sq. ft",
      features: [
        "Child-friendly colour concepts",
        "Vibrant yet professional colours",
        "Educational theme integration",
        "Safety-first design"
      ],
      challenges: [
        "Age-appropriate colour selection",
        "Durability requirements",
        "Educational authority approval"
      ],
      solutions: [
        "Educational psychology consultation",
        "Heavy-duty coating systems",
        "Stakeholder engagement process"
      ]
    },
    4: {
      location: "Delhi NCR",
      year: "2023",
      area: "50,000 sq. ft",
      features: [
        "Soothing colour concept",
        "Healing-focused design",
        "Professional medical aesthetics",
        "Accessible entrance design"
      ],
      challenges: [
        "Healthcare regulatory compliance",
        "Patient comfort considerations",
        "24/7 facility operations"
      ],
      solutions: [
        "Healthcare-grade materials",
        "Low-VOC emission coatings",
        "Night shift execution planning"
      ]
    },
    5: {
      location: "Ahmedabad, Gujarat",
      year: "2022",
      area: "120,000 sq. ft",
      features: [
        "Consistent colour planning",
        "Multi-building harmonization",
        "Community identity creation",
        "Sustainable development focus"
      ],
      challenges: [
        "Multiple building coordination",
        "Resident community engagement",
        "Long-term maintenance planning"
      ],
      solutions: [
        "Master colour plan development",
        "Community consultation process",
        "Maintenance program establishment"
      ]
    },
    6: {
      location: "Hyderabad, Telangana",
      year: "2023",
      area: "80,000 sq. ft",
      features: [
        "Modern exterior design",
        "Mixed-use functionality",
        "Commercial aesthetic appeal",
        "High-traffic durability"
      ],
      challenges: [
        "Mixed-use space requirements",
        "High foot traffic areas",
        "Multiple tenant considerations"
      ],
      solutions: [
        "Zone-based colour planning",
        "Heavy-duty coating systems",
        "Flexible design approach"
      ]
    },
    7: {
      location: "Chennai, Tamil Nadu",
      year: "2022",
      area: "25,000 sq. ft",
      features: [
        "Civic identity colours",
        "Public space beautification",
        "Community-focused design",
        "Accessible public interface"
      ],
      challenges: [
        "Government project requirements",
        "Public safety considerations",
        "Budget constraints"
      ],
      solutions: [
        "Value engineering approach",
        "Public safety compliance",
        "Transparent bidding process"
      ]
    },
    8: {
      location: "Kolkata, West Bengal",
      year: "2023",
      area: "40,000 sq. ft",
      features: [
        "Complete exterior transformation",
        "Strategic colour planning",
        "Modernization focus",
        "Cost-effective renovation"
      ],
      challenges: [
        "Existing building condition",
        "Structural limitations",
        "Weather damage repair"
      ],
      solutions: [
        "Comprehensive surface preparation",
        "Structural repair integration",
        "Weather-resistant coating system"
      ]
    },
    9: {
      location: "Mumbai, Maharashtra",
      year: "2023",
      area: "55,000 sq. ft",
      features: [
        "Premium colour design",
        "High-end aesthetic appeal",
        "Luxury residential positioning",
        "Exclusive colour palette"
      ],
      challenges: [
        "Premium quality expectations",
        "High-end market positioning",
        "Exclusive resident requirements"
      ],
      solutions: [
        "Premium coating materials",
        "Custom colour development",
        "White-glove service delivery"
      ]
    },
    10: {
      location: "Bangalore, Karnataka",
      year: "2023",
      area: "90,000 sq. ft",
      features: [
        "Innovative colour concepts",
        "Tech-forward design",
        "Modern campus identity",
        "Collaborative space integration"
      ],
      challenges: [
        "Tech brand alignment",
        "Innovation-focused requirements",
        "Employee experience focus"
      ],
      solutions: [
        "Brand identity consultation",
        "Innovation-driven design process",
        "Employee engagement input"
      ]
    },
    11: {
      location: "Delhi NCR",
      year: "2022",
      area: "70,000 sq. ft",
      features: [
        "Academic identity creation",
        "Institutional professional appearance",
        "Heritage-modern blend",
        "Scholarly atmosphere design"
      ],
      challenges: [
        "Academic institution requirements",
        "Heritage preservation considerations",
        "Modern functionality needs"
      ],
      solutions: [
        "Academic stakeholder consultation",
        "Heritage-sensitive approach",
        "Modern-classic design balance"
      ]
    },
    12: {
      location: "Mumbai, Maharashtra",
      year: "2023",
      area: "100,000 sq. ft",
      features: [
        "Attractive commercial façade",
        "Retail-focused design",
        "Customer experience enhancement",
        "Brand visibility optimization"
      ],
      challenges: [
        "Retail timing constraints",
        "Customer flow considerations",
        "Multiple brand integration"
      ],
      solutions: [
        "Off-peak execution scheduling",
        "Customer experience mapping",
        "Flexible brand integration"
      ]
    },
    13: {
      location: "Pune, Maharashtra",
      year: "2022",
      area: "65,000 sq. ft",
      features: [
        "Dynamic colour design",
        "Sports facility aesthetics",
        "Recreational atmosphere",
        "High-energy colour palette"
      ],
      challenges: [
        "Sports facility requirements",
        "Durability under high usage",
        "Safety compliance"
      ],
      solutions: [
        "Sports-grade coating systems",
        "Heavy-duty surface preparation",
        "Safety-first material selection"
      ]
    },
    14: {
      location: "Chennai, Tamil Nadu",
      year: "2023",
      area: "45,000 sq. ft",
      features: [
        "Inspiring exterior design",
        "Cultural institution aesthetics",
        "Educational functionality",
        "Community hub design"
      ],
      challenges: [
        "Cultural sensitivity requirements",
        "Multi-functional space needs",
        "Community accessibility"
      ],
      solutions: [
        "Cultural consultation process",
        "Multi-zone design approach",
        "Universal design principles"
      ]
    },
    15: {
      location: "Hyderabad, Telangana",
      year: "2023",
      area: "150,000 sq. ft",
      features: [
        "Integrated colour planning",
        "Multi-use functionality",
        "Coordinated design approach",
        "Urban development integration"
      ],
      challenges: [
        "Complex mixed-use requirements",
        "Multiple stakeholder coordination",
        "Urban planning compliance"
      ],
      solutions: [
        "Integrated design team approach",
        "Stakeholder management system",
        "Urban planning consultation"
      ]
    },
    16: {
      location: "Goa",
      year: "2023",
      area: "75,000 sq. ft",
      features: [
        "Elegant exterior design",
        "Hospitality-focused aesthetics",
        "Guest experience enhancement",
        "Resort-style colour palette"
      ],
      challenges: [
        "Hospitality industry standards",
        "Guest experience priorities",
        "Coastal weather considerations"
      ],
      solutions: [
        "Hospitality design expertise",
        "Guest journey mapping",
        "Coastal-resistant coating systems"
      ]
    },
    17: {
      location: "Pune, Maharashtra",
      year: "2023",
      area: "85,000 sq. ft",
      features: [
        "Premium villa community design",
        "Mediterranean colour influence",
        "Luxury residential aesthetics",
        "Community harmonization"
      ],
      challenges: [
        "Luxury market expectations",
        "Individual villa customization",
        "Community cohesion requirements"
      ],
      solutions: [
        "Premium colour consultation",
        "Custom villa palettes",
        "Master colour planning"
      ]
    },
    18: {
      location: "Gurugram, Haryana",
      year: "2023",
      area: "200,000 sq. ft",
      features: [
        "Cohesive corporate branding",
        "Multi-building coordination",
        "Modern business park design",
        "Professional identity"
      ],
      challenges: [
        "Multiple tenant requirements",
        "Brand consistency across buildings",
        "Large-scale coordination"
      ],
      solutions: [
        "Master brand colour plan",
        "Phased implementation",
        "Brand guidelines development"
      ]
    },
    19: {
      location: "Bangalore, Karnataka",
      year: "2022",
      area: "95,000 sq. ft",
      features: [
        "Professional research facility design",
        "Scientific aesthetic",
        "Modern laboratory appearance",
        "Innovation-focused colours"
      ],
      challenges: [
        "Specialized facility requirements",
        "Research environment considerations",
        "Technical functionality needs"
      ],
      solutions: [
        "Technical facility consultation",
        "Clean room compatible materials",
        "Professional appearance planning"
      ]
    },
    20: {
      location: "Mumbai, Maharashtra",
      year: "2023",
      area: "120,000 sq. ft",
      features: [
        "Modern retail appeal",
        "Customer experience focus",
        "Brand visibility enhancement",
        "High-traffic durability"
      ],
      challenges: [
        "Retail operation continuity",
        "Multiple tenant coordination",
        "Customer flow optimization"
      ],
      solutions: [
        "Phased renovation approach",
        "Tenant communication plan",
        "Customer experience design"
      ]
    },
    21: {
      location: "Chennai, Tamil Nadu",
      year: "2023",
      area: "65,000 sq. ft",
      features: [
        "Warm accessible colours",
        "Wellness-focused design",
        "Senior-friendly aesthetics",
        "Community atmosphere"
      ],
      challenges: [
        "Accessibility requirements",
        "Senior comfort considerations",
        "Wellness design integration"
      ],
      solutions: [
        "Accessibility consultation",
        "Age-appropriate colour psychology",
        "Wellness-focused palette"
      ]
    },
    22: {
      location: "Delhi NCR",
      year: "2022",
      area: "180,000 sq. ft",
      features: [
        "Grand civic design",
        "Modern convention aesthetics",
        "Civic pride elements",
        "Versatile space appearance"
      ],
      challenges: [
        "Government project requirements",
        "Public facility standards",
        "Multi-purpose functionality"
      ],
      solutions: [
        "Civic design expertise",
        "Public safety compliance",
        "Multi-functional design approach"
      ]
    },
    23: {
      location: "Mumbai, Maharashtra",
      year: "2023",
      area: "55,000 sq. ft",
      features: [
        "Creative cultural design",
        "Artistic façade elements",
        "Cultural sophistication",
        "Gallery-inspired aesthetics"
      ],
      challenges: [
        "Artistic expression requirements",
        "Cultural sensitivity",
        "Gallery functionality needs"
      ],
      solutions: [
        "Art consultation process",
        "Cultural stakeholder engagement",
        "Functional artistic design"
      ]
    },
    24: {
      location: "Bangalore, Karnataka",
      year: "2023",
      area: "45,000 sq. ft",
      features: [
        "Innovative startup design",
        "Modern tech aesthetics",
        "Collaborative space appearance",
        "Dynamic energy colours"
      ],
      challenges: [
        "Startup culture requirements",
        "Collaborative space needs",
        "Tech brand integration"
      ],
      solutions: [
        "Startup culture consultation",
        "Flexible design approach",
        "Tech-forward colour concepts"
      ]
    },
    25: {
      location: "Mumbai, Maharashtra",
      year: "2023",
      area: "70,000 sq. ft",
      features: [
        "Urban sophistication",
        "Premium tower aesthetics",
        "Modern high-rise design",
        "City skyline integration"
      ],
      challenges: [
        "High-rise building requirements",
        "Urban context integration",
        "Premium market positioning"
      ],
      solutions: [
        "High-rise design expertise",
        "Urban context analysis",
        "Premium material selection"
      ]
    },
    26: {
      location: "Mumbai, Maharashtra",
      year: "2022",
      area: "90,000 sq. ft",
      features: [
        "Authoritative banking design",
        "Welcoming corporate appearance",
        "Financial institution aesthetics",
        "Trust-building colours"
      ],
      challenges: [
        "Banking industry standards",
        "Security considerations",
        "Trust and confidence requirements"
      ],
      solutions: [
        "Financial design expertise",
        "Security-compliant materials",
        "Trust-focused colour psychology"
      ]
    },
    27: {
      location: "Pune, Maharashtra",
      year: "2023",
      area: "40,000 sq. ft",
      features: [
        "Inviting community design",
        "Multi-functional appearance",
        "Accessible aesthetics",
        "Local community integration"
      ],
      challenges: [
        "Diverse community needs",
        "Multi-purpose functionality",
        "Community engagement requirements"
      ],
      solutions: [
        "Community consultation process",
        "Multi-functional design",
        "Local context integration"
      ]
    },
    28: {
      location: "Delhi NCR",
      year: "2023",
      area: "110,000 sq. ft",
      features: [
        "Healing-focused design",
        "Multi-specialty aesthetics",
        "Medical facility appearance",
        "Patient comfort colours"
      ],
      challenges: [
        "Healthcare regulations",
        "Multiple specialty requirements",
        "Patient comfort priorities"
      ],
      solutions: [
        "Healthcare design expertise",
        "Specialty consultation",
        "Patient-centered design"
      ]
    },
    29: {
      location: "Hyderabad, Telangana",
      year: "2022",
      area: "80,000 sq. ft",
      features: [
        "Coordinated retail planning",
        "Tenant brand integration",
        "Strip mall aesthetics",
        "Local business support"
      ],
      challenges: [
        "Multiple tenant coordination",
        "Brand diversity management",
        "Local business integration"
      ],
      solutions: [
        "Tenant coordination strategy",
        "Brand guideline development",
        "Local business consultation"
      ]
    },
    30: {
      location: "Bangalore, Karnataka",
      year: "2023",
      area: "100,000 sq. ft",
      features: [
        "Comprehensive educational design",
        "Multi-age group aesthetics",
        "Educational hub appearance",
        "Learning-focused colours"
      ],
      challenges: [
        "Multiple age group requirements",
        "Educational functionality",
        "Diverse learning needs"
      ],
      solutions: [
        "Educational consultation",
        "Age-appropriate zoning",
        "Learning environment design"
      ]
    },
    31: {
      location: "Chennai, Tamil Nadu",
      year: "2022",
      area: "150,000 sq. ft",
      features: [
        "Professional industrial design",
        "Safety-focused colours",
        "Industrial branding",
        "Operational efficiency aesthetics"
      ],
      challenges: [
        "Industrial safety requirements",
        "Operational continuity",
        "Heavy-duty durability needs"
      ],
      solutions: [
        "Industrial safety consultation",
        "Operational planning",
        "Heavy-duty coating systems"
      ]
    },
    32: {
      location: "Delhi NCR",
      year: "2023",
      area: "85,000 sq. ft",
      features: [
        "Dignified civic design",
        "Government identity",
        "Public trust aesthetics",
        "Official appearance"
      ],
      challenges: [
        "Government protocol requirements",
        "Official standards compliance",
        "Public trust considerations"
      ],
      solutions: [
        "Government design expertise",
        "Official standard compliance",
        "Public trust colour psychology"
      ]
    }
  };

  const details = projectDetails[project.id] || {
    location: "India",
    year: "2023",
    area: "TBD",
    features: ["Professional design execution"],
    challenges: ["Project-specific requirements"],
    solutions: ["Customized approach"]
  };

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
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                {project.title}
              </h2>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div 
              ref={contentRef}
              onScroll={handleScroll}
              className="p-6 md:p-8 scroll-smooth"
            >
              {/* Hero Image */}
              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-8">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Project Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-secondary-light p-4 rounded-xl">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-medium text-primary">{details.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-secondary-light p-4 rounded-xl">
                  <Calendar className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs text-gray-500">Year</p>
                    <p className="font-medium text-primary">{details.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-secondary-light p-4 rounded-xl">
                  <Building className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs text-gray-500">Area</p>
                    <p className="font-medium text-primary">{details.area}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-heading text-lg font-bold text-primary mb-2">Project Type</h3>
                <p className="text-gray-600">{project.type}</p>
              </div>

              <div className="mb-8">
                <h3 className="font-heading text-lg font-bold text-primary mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

                {/* Challenges */}
                <div className="bg-secondary-light p-6 rounded-xl">
                  <h3 className="font-heading text-lg font-bold text-primary mb-4">Challenges</h3>
                  <ul className="space-y-3">
                    {details.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="bg-secondary-light p-6 rounded-xl">
                  <h3 className="font-heading text-lg font-bold text-primary mb-4">Our Solutions</h3>
                  <ul className="space-y-3">
                    {details.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <motion.a
                  href="#contact"
                  onClick={onClose}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-light transition-colors"
                >
                  Get a Quote for Similar Project
                </motion.a>
              </div>
            </div>

            {/* Scroll to Top Button */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  onClick={scrollToTop}
                  className="fixed bottom-8 right-8 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-accent-light transition-colors z-50"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
