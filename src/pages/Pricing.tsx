import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  X, 
  Star, 
  Users, 
  Building, 
  BookOpen,
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Database
} from 'lucide-react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: "Individual",
      icon: <Users className="w-8 h-8" />,
      description: "Perfect for individual researchers and academicians",
      monthlyPrice: 500,
      yearlyPrice: 5000,
      features: [
        "Single DOI generation",
        "Basic metadata support",
        "Email support",
        "Standard processing time",
        "GST compliant invoicing",
        "Payment in INR"
      ],
      popular: false
    },
    {
      name: "Institution",
      icon: <Building className="w-8 h-8" />,
      description: "For universities and research institutions",
      monthlyPrice: 5000,
      yearlyPrice: 60000,
      features: [
        "Bulk DOI generation",
        "Advanced metadata support",
        "Priority support",
        "Fast processing time",
        "Quarterly billing",
        "Dedicated account manager",
        "Custom DOI prefixes",
        "API access"
      ],
      popular: true
    },
    {
      name: "Publisher",
      icon: <BookOpen className="w-8 h-8" />,
      description: "For academic publishers and journals",
      monthlyPrice: 10000,
      yearlyPrice: 120000,
      features: [
        "Unlimited DOI generation",
        "Full metadata support",
        "24/7 priority support",
        "Instant processing",
        "Custom integrations",
        "White-label solutions",
        "Advanced analytics",
        "Dedicated support team"
      ],
      popular: false
    }
  ];

  const comparisonFeatures = [
    {
      feature: "DOI Generation",
      individual: "Single",
      institution: "Bulk",
      publisher: "Unlimited"
    },
    {
      feature: "Processing Time",
      individual: "24 hours",
      institution: "4 hours",
      publisher: "Instant"
    },
    {
      feature: "Support",
      individual: "Email",
      institution: "Priority",
      publisher: "24/7 Dedicated"
    },
    {
      feature: "API Access",
      individual: "✗",
      institution: "✓",
      publisher: "✓"
    },
    {
      feature: "Custom Prefix",
      individual: "✗",
      institution: "✓",
      publisher: "✓"
    },
    {
      feature: "Bulk Upload",
      individual: "✗",
      institution: "✓",
      publisher: "✓"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "20% Cost Savings",
      description: "Compared to foreign DOI services"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Local Support",
      description: "Customer support in Hindi & English"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Standards",
      description: "Compliant with international DOI standards"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Secure Storage",
      description: "Your research is safely archived"
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
              Simple & <span className="text-gradient">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Choose the plan that best fits your needs. All plans include GST and are billed in INR.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-primary-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Yearly
                <span className="ml-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'transform scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-600 to-primary-800 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`card p-8 h-full ${plan.popular ? 'border-2 border-primary-600' : ''}`}>
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">
                        ₹{billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-500">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>

                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}>
                      Get Started
                      <ArrowRight className="inline w-4 h-4 ml-2" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
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

      {/* Comparison Table */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compare Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our different plans stack up against each other
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Individual</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Institution</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Publisher</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{feature.feature}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">{feature.individual}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">{feature.institution}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">{feature.publisher}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Vedra?
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
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
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
      <section className="bg-gray-50 section-padding">
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
              Get answers to common questions about our pricing and services.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you offer government-sponsored programs?
                </h3>
                <p className="text-gray-600">
                  Yes, we work with state governments to provide free DOI services for registered researchers and academicians.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can I pay in INR?
                </h3>
                <p className="text-gray-600">
                  Absolutely! All our pricing is in INR and we accept payments through UPI, bank transfers, and other Indian payment methods.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you provide GST invoices?
                </h3>
                <p className="text-gray-600">
                  Yes, all our invoices are GST compliant and can be used for business expense claims.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How long does DOI generation take?
                </h3>
                <p className="text-gray-600">
                  Processing time varies by plan: Individual (24 hours), Institution (4 hours), Publisher (instant).
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you offer bulk discounts?
                </h3>
                <p className="text-gray-600">
                  Yes, institutions and publishers get significant discounts for bulk DOI generation.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Is there a setup fee?
                </h3>
                <p className="text-gray-600">
                  No setup fees for individual plans. Institution and Publisher plans include one-time setup costs.
                </p>
              </div>
            </div>
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
              Choose your plan and start making your research globally discoverable today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing; 