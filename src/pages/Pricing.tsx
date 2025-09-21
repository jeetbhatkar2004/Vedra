import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  Building, 
  BookOpen,
  ArrowRight,
  Zap,
  Calendar,
  Database
} from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Institution",
      icon: <Building className="w-8 h-8" />,
      description: "For universities and research institutions",
      features: [
        "Bulk DOIs",
        "Full metadata support",
        "Priority Support",
        "Quick Processing Time",
        "Monthly & Quarterly Billing",
        "Dedicated AM",
        "Custom DOI prefixes",
        "Custom integrations"
      ],
      popular: true,
      color: "from-vedra-hunter to-vedra-calpoly",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      name: "Publisher",
      icon: <BookOpen className="w-8 h-8" />,
      description: "For academic publishers and journals",
      features: [
        "Unlimited DOIs",
        "Advanced metadata support",
        "Priority Support",
        "Instant Processing Time",
        "Pay per usage",
        "Dedicated support team",
        "Custom DOI prefixes",
        "API access"
      ],
      popular: false,
      color: "from-vedra-hunter to-vedra-calpoly",
      bgColor: "from-green-50 to-emerald-50"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "40% Cost Savings",
      description: "Compared to other DOI services"
    },
    {
      icon: <span className="text-2xl font-bold">₹</span>,
      title: "Pay per usage",
      description: "Pay only for the DOIs you use. No extra charges."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Monthly Settlements",
      description: "Institutions can settle their invoices monthly"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Secure Storage",
      description: "Your research is safely stored and archived"
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
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-12 mb-6">
              <span className="text-gradient">Choose Your Plan</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Select the plan that best fits your organization's needs. Each plan serves different customer bases with specialized features.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-vedra-hunter text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center">
                      <Star className="w-5 h-5 mr-2" />
                      Choose Your Plan
                    </span>
                  </div>
                )}
                
                <div className={`card p-10 h-full border-2 ${plan.popular ? 'border-vedra-hunter shadow-2xl' : 'border-gray-200 shadow-xl'}`}>
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${plan.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <div className={`w-12 h-12 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center text-white`}>
                        {plan.icon}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                    <p className="text-gray-600 text-lg mb-8">{plan.description}</p>

                    <div className="space-y-4">
                      {plan.name === "Institution" ? (
                        <button className="w-full py-4 px-8 bg-gradient-to-r from-vedra-hunter to-vedra-calpoly text-white rounded-lg font-semibold text-lg transition-all duration-200 hover:from-vedra-calpoly hover:to-vedra-hunter transform hover:scale-105">
                          Get Started
                          <ArrowRight className="inline w-5 h-5 ml-2" />
                        </button>
                      ) : (
                        <Link to="/contact">
                          <button className="w-full py-4 px-8 bg-gradient-to-r from-vedra-hunter to-vedra-calpoly text-white rounded-lg font-semibold text-lg transition-all duration-200 hover:from-vedra-calpoly hover:to-vedra-hunter transform hover:scale-105">
                            Enquire Now
                            <ArrowRight className="inline w-5 h-5 ml-2" />
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="font-semibold text-gray-900 text-xl text-center">What's included:</h4>
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-4">
                          <CheckCircle className="w-6 h-6 text-vedra-calpoly flex-shrink-0" />
                          <span className="text-gray-700 text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="font-jsmath">m</span><span className="font-inter font-bold">Vedra</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer the best value for Indian researchers with local support and global standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vedra-hunter to-vedra-calpoly rounded-full flex items-center justify-center mx-auto mb-4 text-white/90">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our services.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Why do I need a DOI?
                </h3>
                <p className="text-gray-600">
                  A DOI (Digital Object Identifier) ensures your work is permanently findable, citable, and trackable across global research platforms and databases.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                 Does a DOI improve citations?
                </h3>
                <p className="text-gray-600">
                  Yes! DOIs increase visibility and discoverability, making your research easier to cite and reference in academic and professional publications. If you have an ORCID ID, your DOIs auto-sync to your profile, helping citations update automatically.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How long does DOI generation take?
                </h3>
                <p className="text-gray-600">
                  Bulk generation takes 1–2 hours. Individual DOI creation is near-instant—usually less than 2 minutes from submission to activation.                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                 How will I pay for the services?
                </h3>
                <p className="text-gray-600">
                 All payments are accepted in INR (₹) through UPI, Credit/Debit Cards, and Bank Transfer. 
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you offer bulk discounts?
                </h3>
                <p className="text-gray-600">
                  Yes, but only for Institutional and Publisher plans. These plans include significant savings for large-volume DOI generation.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you provide GST-compliant invoices?
                </h3>
                <p className="text-gray-600">
                  Absolutely. We do provide GST-compliant invoices valid for business accounting, reimbursement, and official expense claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing; 