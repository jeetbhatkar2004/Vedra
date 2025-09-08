import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone
} from 'lucide-react';
import Cal from "@calcom/embed-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["contact@mvedra.com"],
      description: "Get in touch with our team"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+91 96540 07695"],
      description: "Business Hours: 11:00AM - 6:00PM"
    }
  ];

  const supportTopics = [
    {
      title: "DOI Generation",
      description: "Questions about creating and managing DOIs"
    },
    {
      title: "Pricing & Plans",
      description: "Information about our pricing structure"
    },
    {
      title: "Technical Support",
      description: "Help with platform and API integration"
    },
    {
      title: "Partnership",
      description: "Inquiries about institutional partnerships"
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
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 mt-12">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Have questions about our services? We're here to help. 
              Reach out to us and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-neutral-100 section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {info.description}
                </p>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-900 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Support Topics */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                   Book a Call
                </h2>

                <Cal
                  namespace="15min"
                  calLink="ajeant/15min"
                  style={{ width: "100%", height: "700px", overflow: "hidden" }}
                  config={{
                    layout: "month_view",
                    theme: "light"
                  }}
                />
              </div>
            </motion.div>

            {/* Support Topics */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    How can we help?
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Choose from the topics below to get quick answers to common questions.
                  </p>
                </div>

                <div className="space-y-4">
                  {supportTopics.map((topic, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="card p-6 cursor-pointer hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-gray-600">
                        {topic.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-vedra-hunter rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4 font-ibm-plex">
                    Need Immediate Help?
                  </h3>
                  <p className="text-white/90 mb-6 font-inter">
                    Our support team is available 24/7 to assist you with any urgent questions.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5" />
                      <span className="font-inter">+91 96540 07695</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5" />
                      <span className="font-inter">founder@mvedra.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Price Inquiry Form */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get a Custom Quote
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out our price inquiry form to receive a personalized quote for your DOI services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://forms.office.com/pages/responsepage.aspx?id=aY3FhK3E50KsBVuZFti-bEQBc7yPTsJPlwGNM1ilviFUQlkzUzhNV0tFV1JGS0lZSVBINVJLMEZRMS4u&route=shorturl"
                width="100%"
                height="800"
                frameBorder="0"
                title="Price Inquiry Form"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 