import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  Image, 
  Video, 
  Music, 
  Database,
  Users,
  Building,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Download,
  Upload,
  Search,
  Newspaper
} from 'lucide-react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('individual');

  const serviceTypes = [
    {
      id: 'individual',
      title: 'Individual Researchers',
      icon: <Users className="w-6 h-6" />,
      description: 'Perfect for individual researchers and academicians'
    },
    {
      id: 'institution',
      title: 'Institutions & Universities',
      icon: <Building className="w-6 h-6" />,
      description: 'Bulk DOI generation for universities and research institutions'
    },
    {
      id: 'publisher',
      title: 'Publishers & Journals',
      icon: <BookOpen className="w-6 h-6" />,
      description: 'Professional DOI services for publishers and academic journals'
    }
  ];

  const contentTypes = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Research Papers",
      description: "Academic papers, journal articles, and scholarly publications"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Book Chapters",
      description: "Individual chapters from books and\nedited volumes"
    },
    {
      icon: <Newspaper className="w-8 h-8" />,
      title: "Grey Research",
      description: "Dissertations, thesis, and projects\nby students"
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Audio Visuals",
      description: "Educational videos, charts, diagrams, photographs, documentaries"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Audio Content",
      description: "Research interviews, lectures, and audio materials"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Datasets",
      description: "Research datasets, surveys, and statistical data"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Processing",
      description: "Get your DOI within minutes, not days"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Storage",
      description: "Your research is safely archived and protected"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Discovery",
      description: "Make your work discoverable worldwide"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Advanced Search",
      description: "Powerful search and indexing capabilities"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Upload Content",
      description: "Upload your research paper, dataset, or any academic content"
    },
    {
      step: "02",
      title: "Fill Metadata",
      description: "Provide basic information about your research and authors"
    },
    {
      step: "03",
      title: "Review & Submit",
      description: "Review the information and submit for DOI generation"
    },
    {
      step: "04",
      title: "Get DOI",
      description: "Receive your unique DOI identifier within minutes"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-vedra-floral to-secondary-50 section-padding">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-vedra-night mb-6 mt-12 font-ibm-plex">
              DOI Services for <span className="text-gradient">Indian Research</span>
            </h1>
            <p className="text-xl text-vedra-night leading-relaxed mb-8 font-inter">
              Comprehensive DOI generation and indexing services tailored for Indian researchers, 
              institutions, and publishers. Make your research globally discoverable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Types */}
      <section className="section-padding relative bg-neutral-200 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 z-0"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-vedra-night mb-4 font-ibm-plex">
              Choose Your Service Type
            </h2>
            <p className="text-xl text-vedra-night max-w-3xl mx-auto font-inter">
              We offer specialized DOI services for different types of users and organizations.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 font-inter ${
                  activeTab === type.id
                    ? 'bg-gradient-to-r from-vedra-hunter to-vedra-calpoly text-white shadow-lg transform scale-105'
                    : 'bg-neutral-400 text-neutral-800 hover:bg-neutral-500 hover:shadow-md'
                }`}
              >
                {type.title}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card p-6 text-center transition-all duration-200 ${
                  activeTab === type.id ? 'ring-2 ring-vedra-hunter shadow-xl' : ''
                }`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vedra-hunter to-vedra-calpoly rounded-full flex items-center justify-center mx-auto mb-4 text-white/90">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-vedra-night mb-3 font-ibm-plex">
                  {type.title}
                </h3>
                <p className="text-vedra-night leading-relaxed font-inter">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="bg-neutral-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-vedra-night mb-4 font-ibm-plex">
              Supported Content Types
            </h2>
            <p className="text-xl text-vedra-night max-w-3xl mx-auto font-inter">
              We support a wide range of academic and research content for DOI generation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((content, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vedra-hunter to-vedra-calpoly rounded-full flex items-center justify-center mx-auto mb-4 text-white/90">
                  {content.icon}
                </div>
                <h3 className="text-xl font-semibold text-vedra-night mb-3 font-ibm-plex">
                  {content.title}
                </h3>
                <p className="text-vedra-night leading-relaxed font-inter">
                  {content.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding relative bg-neutral-200 overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 z-0"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-vedra-night mb-4 font-ibm-plex">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-vedra-night max-w-3xl mx-auto font-inter">
              Simple, fast, and secure - get your DOI in just a few steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="card p-6 text-center">
                  <div className="text-3xl font-bold text-gradient mb-4 font-ibm-plex">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-vedra-night mb-3 font-ibm-plex">
                    {step.title}
                  </h3>
                  <p className="text-vedra-night text-sm leading-relaxed font-inter">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-vedra-hunter to-vedra-calpoly transform -translate-y-1/2 z-0"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-vedra-night mb-4 font-ibm-plex">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-vedra-night max-w-3xl mx-auto font-inter">
              We provide the best DOI services with features designed specifically for Indian researchers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vedra-hunter to-vedra-calpoly rounded-full flex items-center justify-center mx-auto mb-4 text-white/90">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-vedra-night mb-3 font-ibm-plex">
                  {feature.title}
                </h3>
                <p className="text-vedra-night leading-relaxed font-inter">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-vedra-hunter to-vedra-calpoly section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white/90 mb-6 font-ibm-plex">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-8 font-inter">
              Join thousands of researchers who are already using mVEDRA to make their work globally discoverable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="border-2 border-white text-white hover:bg-white hover:text-vedra-hunter font-semibold py-3 px-8 rounded-lg transition-all duration-200 font-inter">
                Start Your DOI Journey
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-vedra-hunter font-semibold py-3 px-8 rounded-lg transition-all duration-200 font-inter">
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 