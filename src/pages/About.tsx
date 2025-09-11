import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Users, 
  Globe, 
  CheckCircle,
  Shield,
  Mail,
  Heart
} from 'lucide-react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import DataCiteLogo from '../DataCite-Logos_secondary.svg';
const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Accessibility",
      description: "Making DOI services affordable and accessible to every Indian researcher."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reliability",
      description: "Providing robust and secure indexing solutions that researchers can trust."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building a collaborative ecosystem for Indian research and academia."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Connecting Indian research with the global academic community."
    }
  ];

  const milestones = [
    {
      year: "2025",
      title: "Company Founded",
      description: "Vedra established with the vision to democratize DOI services in India."
    },
    {
      year: "2025",
      title: "DataCite Consortium Lead",
      description: "Established the 1st DataCite Consortium in India, to provide official DOI services."
    },
    {
      year: "2026",
      title: "National Expansion",
      description: "Expanded services across all states and major research institutions."
    }
  ];

  const team = [
    {
      name: "Ajeant Sharma",
      role: "Founder & CEO",
      description: "Leading Vedra's mission to democratize research indexing in India.",
      photo: "/ajeant-ceo.jpg",
      linkedin: "https://www.linkedin.com/in/ajeant/",
      github:"",
      email: "founder@mvedra.com"
    },
    {
      name: "Aditya Rana",
      role: "Co-Founder & CTO",
      description: "Technology expert specializing in digital archiving and indexing systems.",
      photo: "/aditya-cto.jpg",
      linkedin: "https://www.linkedin.com/in/aditya-rana-043625241/",
      github:"https://github.com/adityarana-ar",
      email: "founder@mvedra.com"
    },
    {
      name: "Jeet Bhatkar",
      role: "Tech Lead",
      description: "Technology expert specializing in digital archiving and indexing systems.",
      photo: "/jeet-cto.jpg",
      linkedin: "https://www.linkedin.com/in/jeetbhatkar/",
      github:"https://github.com/jeetbhatkar2004",
      email: "founder@mvedra.com"
    },
    {
      name: "Umang Agarwal",
      role: "CFO",
      description: "Managing financial operations and strategic partnerships for sustainable growth.",
      photo: null,
      linkedin: "",
      github:"",
      email: "founder@mvedra.com"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-vedra-floral to-secondary-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-vedra-night mb-6 mt-10 font-ibm-plex">
              About <span className="text-gradient"><span className="font-jsmath">m</span><span className="font-inter font-bold">Vedra</span></span>
            </h1>
            <p className="text-xl text-vedra-night leading-relaxed mb-8 font-inter">
            We are India’s bridge to the global DataCite community, enhancing metadata quality to enable open science and advance knowledge.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-neutral-600 font-inter">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-vedra-calpoly" />
                <span>Made in India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span>For Indian Researchers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-blue-500" />
                <span>Global Standards</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-vedra-floral section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="w-8 h-8 text-vedra-hunter" />
                    <h2 className="text-3xl font-bold text-vedra-night font-ibm-plex">Our Mission</h2>
                  </div>
                  <p className="text-lg text-vedra-night leading-relaxed font-inter">
                  To create an affordable and globally accessible system for indexing and archiving research data for the Indian population, improving open access to research and high-quality metadata that enhances visibility, reuse, and collaboration.
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="w-8 h-8 text-vedra-hunter" />
                    <h2 className="text-3xl font-bold text-vedra-night font-ibm-plex">Our Vision</h2>
                  </div>
                  <p className="text-lg text-vedra-night leading-relaxed font-inter">
                  To be the leading DOI consortium in India, fostering a vibrant research community by enabling affordability, global discoverability, advancing open science, and strengthening collaboration through trusted metadata.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-vedra-hunter rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-ibm-plex">The Problem We Solve</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold font-inter">Open Access Research</h4>
                        <p className="text-white/80 text-sm font-inter">Lack of local DOI infrastructure limits visibility and discoverability.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold font-inter">Language Barriers</h4>
                        <p className="text-white/80 text-sm font-inter">Limited support in local languages</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold font-inter">Limited Accessibility</h4>
                        <p className="text-white/80 text-sm font-inter">Only 20% of Indian researchers currently have digitised research.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold font-inter">Affordability</h4>
                        <p className="text-white/80 text-sm font-inter">Being part of our DataCite Consortium is a more economical way to avail DOI functionality, including payments in INR.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-200 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-1"
          >
             <h2 className="text-4xl font-bold text-vedra-night mb-4 font-ibm-plex">
               Our Role in the DataCite Community
               <span className="relative group">
                 <span className="align-super text-lg text-vedra-calpoly font-bold ml-1 cursor-help">*</span>
                 <div className="absolute bottom-full right-0 mb-2 px-4 py-3 bg-vedra-night text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 w-48 sm:w-56">
                   We are in the final stages of securing approval from DataCite's Board and look forward to sharing updates soon.
                   <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-vedra-night"></div>
                 </div>
               </span>
             </h2>
            <p className="text-xl text-vedra-night max-w-3xl mx-auto font-inter">
              As part of the global DataCite community, mVedra is building India's DOI consortium. By connecting researchers and institutions to trusted global infrastructure, we ensure research outputs are visible, reusable, and impactful.
            </p>
             {/* Centered logo with equal spacing */}
             <img src={DataCiteLogo} alt="DataCite Logo" className="mt-12 mx-auto w-80" />
              
          </motion.div>
        </div>
      
      </section>
      {/* Values Section */}
      <section className="bg-neutral-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-vedra-night mb-4 font-ibm-plex">
              Our Core Values
            </h2>
            <p className="text-xl text-vedra-night max-w-3xl mx-auto font-inter">
              These principles guide everything we do and shape our commitment to the Indian research community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vedra-hunter to-vedra-calpoly rounded-full flex items-center justify-center mx-auto mb-4 text-white/90">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-vedra-night mb-3 font-ibm-plex">
                  {value.title}
                </h3>
                <p className="text-vedra-night leading-relaxed font-inter">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="bg-vedra-floral section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-vedra-night mb-4 font-ibm-plex">
              Our Journey
            </h2>
            <p className="text-xl text-vedra-night max-w-3xl mx-auto font-inter">
              From concept to reality, here's how we're building the future of Indian research indexing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="card p-6 text-center">
                  <div className="text-2xl font-bold text-gradient mb-3 font-ibm-plex">
                    {milestone.year}
                  </div>
                  <h3 className="text-lg font-semibold text-vedra-night mb-3 font-ibm-plex">
                    {milestone.title}
                  </h3>
                  <p className="text-vedra-night text-sm leading-relaxed font-inter">
                    {milestone.description}
                  </p>
                </div>
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200 transform -translate-y-1/2 z-0"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-neutral-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-vedra-night mb-4 font-ibm-plex">
              Meet Our Team
            </h2>
            <p className="text-xl text-vedra-night max-w-3xl mx-auto font-inter">
              Passionate individuals dedicated to revolutionizing research indexing in India.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 justify-items-center">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-2xl shadow-xl px-8 pt-20 pb-10 text-center"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg bg-vedra-hunter absolute left-1/2 -translate-x-1/2 -top-6">
                  {member.photo ? (
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className='w-full h-full flex items-center justify-center'>
                      <Users className="w-10 h-10 text-white" />
                    </div>
                  )}
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-vedra-night font-ibm-plex">
                  {member.name}
                </h3>
                <p className="text-vedra-hunter font-medium mt-1 mb-3 font-inter">
                  {member.role}
                </p>
                <div className="mt-4 mb-6 flex justify-center gap-5">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                      className="text-vedra-hunter/90 hover:text-vedra-hunter">
                      <FaLinkedinIn className="w-5 h-5" />
                    </a>
                  )}
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer"
                      className="text-vedra-hunter/90 hover:text-vedra-hunter">
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="text-vedra-hunter/90 hover:text-vedra-hunter">
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <p className="mt-5 text-vedra-night leading-relaxed font-inter max-w-[44ch] mx-auto">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gradient-to-r from-vedra-hunter to-vedra-calpoly section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white/90 mb-6 font-ibm-plex">
              Our Impact on Indian Research
            </h2>
            <p className="text-xl text-white/80 mb-12 font-inter">
              We're committed to transforming the landscape of research indexing in India, 
              making it more accessible, affordable, and globally connected.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white/90 mb-2 font-ibm-plex">₹2.5L+</div>
                <div className="text-white/70 font-inter">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white/90 mb-2 font-ibm-plex">1000+</div>
                <div className="text-white/70 font-inter">Researchers Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white/90 mb-2 font-ibm-plex">50+</div>
                <div className="text-white/70 font-inter">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white/90 mb-2 font-ibm-plex">2400+</div>
                <div className="text-white/70 font-inter">Hours Saved</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 