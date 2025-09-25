import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen,
  FileText,
  Image,
  Music,
  Database,
  // Users and Building icons are not used currently
  Shield,
  Zap,
  Search,
  Newspaper,
} from "lucide-react";
import DataCiteLogo from "../Logo_Schwoop-grey-light.svg";

const Services: React.FC = () => {
  // (serviceTypes tabs were unused and removed for clarity)

  const contentTypes = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Research Papers",
      description:
        "Academic papers, journal articles, and scholarly publications",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Book Chapters",
      description: "Individual chapters from books and\nedited volumes",
    },
    {
      icon: <Newspaper className="w-8 h-8" />,
      title: "Grey Research",
      description: "Dissertations, thesis, and projects\nby students",
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Audio Visuals",
      description:
        "Educational videos, charts, diagrams, photographs, documentaries",
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Audio Content",
      description: "Research interviews, lectures, and audio materials",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Datasets",
      description: "Research datasets, surveys, and statistical data",
    },
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Advanced Metadata",
      description: "Adopt Open Metadata Standards and track citation metrics",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Storage",
      description: "Your research is safely archived and protected",
    },
    {
      icon: <img src={DataCiteLogo} alt="DataCite" className="w-8 h-8" />,
      title: "Global Discovery",
      description: (
        <>
          Make your work discoverable worldwide through{" "}
          <a
            href="https://commons.datacite.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-vedra-calpoly hover:underline font-semibold"
          >
            DataCite Commons
          </a>
        </>
      ),
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "AI Powered Search",
      description: "Powerful search and indexing capabilities",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Upload Content",
      description:
        "Upload your research paper, dataset, or any academic content",
    },
    {
      step: "02",
      title: "Fill Metadata",
      description: "Provide basic information about your research and authors",
    },
    {
      step: "03",
      title: "Review & Submit",
      description: "Review the information and submit for DOI generation",
    },
    {
      step: "04",
      title: "Get DOI",
      description: "Receive your unique DOI within minutes",
    },
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
              Solutions for{" "}
              <span className="text-gradient">Indian Research</span>
            </h1>
            <p className="text-xl text-vedra-night leading-relaxed mb-8 font-inter">
              Comprehensive DOI generation and indexing services tailored
              towards the{" "}
              <a
                href="https://www.unesco.org/en/open-science/about?hub=686"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-vedra-hunter hover:text-vedra-calpoly transition-colors"
              >
                2021 UNESCO recommendation on Open Science
              </a>
              .
            </p>
            {/* Direct membership options */}
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <a
                href="https://rzp.io/rzp/mvedra-govt"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg bg-vedra-hunter text-white hover:bg-vedra-calpoly transition-colors shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vedra-hunter"
              >
                <div className="px-6 py-4 text-center">
                  <div className="text-lg font-semibold">
                    Public Institute Membership
                  </div>
                  <div className="text-sm text-white/90">
                    For government universities and publicly funded institutions
                  </div>
                </div>
              </a>
              <a
                href="https://rzp.io/rzp/mvedra-pvt"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg bg-vedra-hunter text-white hover:bg-vedra-calpoly transition-colors shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vedra-hunter"
              >
                <div className="px-6 py-4 text-center">
                  <div className="text-lg font-semibold">
                    Private Institute Membership
                  </div>
                  <div className="text-sm text-white/90">
                    For private universities, colleges, and autonomous
                    institutes
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
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

      {/* Content Types */}
      <section className="section-padding relative overflow-hidden">
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
              We support a wide range of academic and research content for DOI
              generation.
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

          <div className="text-left mt-8">
            <span className="relative group">
              <span className="text-vedra-night italic  text-lg leading-relaxed font-inter cursor-help">
                And 24 more content types...
              </span>
              <div className="absolute bottom-full left-0 mb-2 px-4 py-3 bg-vedra-night text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 w-96">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>Audiovisual</div>
                  <div>Award</div>
                  <div>Book</div>
                  <div>Book Chapter</div>
                  <div>Collection</div>
                  <div>Computational Notebook</div>
                  <div>Conference Paper</div>
                  <div>Conference Proceeding</div>
                  <div>Data Paper</div>
                  <div>Dataset</div>
                  <div>Dissertation</div>
                  <div>Event</div>
                  <div>Image</div>
                  <div>Interactive Resource</div>
                  <div>Instrument</div>
                  <div>Journal</div>
                  <div>Journal Article</div>
                  <div>Model</div>
                  <div>Output Management Plan</div>
                  <div>Peer Review</div>
                  <div>Physical Object</div>
                  <div>Preprint</div>
                  <div>Project</div>
                  <div>Report</div>
                  <div>Service</div>
                  <div>Software</div>
                  <div>Sound</div>
                  <div>Standard</div>
                  <div>Study Registration</div>
                  <div>Text</div>
                  <div>Workflow</div>
                  <div>And others</div>
                </div>
                <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-vedra-night"></div>
              </div>
            </span>
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
              We provide the best DOI services with features designed
              specifically for Indian researchers.
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
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white/90 mb-6 font-ibm-plex">
              Ready to Make Your Research Global?
            </h2>
            <p className="text-xl text-white/80 mb-8 font-inter">
              We’re preparing to launch mVedra in the coming months to help
              researchers make their work globally discoverable. Be among the
              first to transform your research with open metadata and global
              indexing.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 mb-10">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white/90 mb-2 font-ibm-plex">
                  ₹2.5L+
                </div>
                <div className="text-white/70 font-inter">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white/90 mb-2 font-ibm-plex">
                  1000+
                </div>
                <div className="text-white/70 font-inter">
                  Researchers Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white/90 mb-2 font-ibm-plex">
                  50+
                </div>
                <div className="text-white/70 font-inter">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white/90 mb-2 font-ibm-plex">
                  2400+
                </div>
                <div className="text-white/70 font-inter">Hours Saved</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-neutral-100 text-vedra-hunter hover:bg-neutral-200 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 font-inter"
              >
                Join the Waitlist
              </Link>
              <Link
                to="/pricing"
                className="bg-neutral-100 text-vedra-hunter hover:bg-neutral-200 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 font-inter"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
