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
  Search
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
      description: "Individual chapters from books and edited volumes"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Datasets",
      description: "Research datasets, surveys, and statistical data"
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Images & Graphics",
      description: "Research images, diagrams, charts, and visual content"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Videos & Films",
      description: "Educational videos, documentaries, and research films"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Audio Content",
      description: "Research interviews, lectures, and audio materials"
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
      title: "Upload Your Content",
      description: "Upload your research paper, dataset, or any academic content"
    },
    {
      step: "02",
      title: "Fill Metadata",
      description: "Provide essential information about your research"
    },
    {
      step: "03",
      title: "Generate DOI",
      description: "We create a unique Digital Object Identifier for your content"
    },
    {
      step: "04",
      title: "Global Access",
      description: "Your research becomes discoverable worldwide"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Comprehensive DOI indexing solutions for all types of research content. 
              From individual researchers to large institutions, we have you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Types Tabs */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Service Type
            </h2>
            <p className="text-lg text-gray-600">
              Select the service that best fits your needs and requirements
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === type.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.icon}
                <span>{type.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            {activeTab === 'individual' && (
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Individual Researcher Services
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Perfect for individual researchers, PhD students, and academicians who need 
                    to make their research discoverable and citable worldwide.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Single DOI generation for research papers</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Affordable pricing starting at ₹500</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Government-sponsored programs available</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Local support in Hindi & English</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">Quick Start</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">Upload Paper</span>
                      <Upload className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">Fill Details</span>
                      <FileText className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg border border-primary-200">
                      <span className="text-sm text-primary-700">Get DOI</span>
                      <Download className="w-4 h-4 text-primary-600" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'institution' && (
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Institution & University Services
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Bulk DOI generation services for universities, research institutions, 
                    and academic organizations with special pricing and dedicated support.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Bulk DOI generation for dissertations</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Consortium membership options</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Quarterly billing and invoicing</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Dedicated account manager</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">Institution Benefits</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Yearly Fee</span>
                      <span className="font-semibold">₹60,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">DOI Fee</span>
                      <span className="font-semibold">₹50/DOI</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Bulk Discount</span>
                      <span className="font-semibold text-green-600">Up to 40%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Support</span>
                      <span className="font-semibold">24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'publisher' && (
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Publisher & Journal Services
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Professional DOI services for academic publishers, journals, and 
                    research organizations with advanced features and API access.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>API integration for automated DOI generation</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Custom DOI prefixes</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Advanced metadata management</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>White-label solutions available</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">Publisher Features</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">API Access</span>
                      <span className="text-xs text-green-600">✓ Included</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">Custom Prefix</span>
                      <span className="text-xs text-green-600">✓ Available</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">Bulk Processing</span>
                      <span className="text-xs text-green-600">✓ Unlimited</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg border border-primary-200">
                      <span className="text-sm text-primary-700">Priority Support</span>
                      <span className="text-xs text-primary-600">✓ 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content Types */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              All Content Types Supported
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From research papers to multimedia content, we support all types of academic and research materials.
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
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  {content.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {content.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {content.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  <div className="text-3xl font-bold text-gradient mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of researchers who are already using Vedra to make their work globally discoverable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center">
                Start Your DOI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
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