import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-vedra-floral to-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-vedra-night mb-6 mt-10 font-ibm-plex">
              Privacy Policy
            </h1>
            <p className="text-xl text-vedra-night leading-relaxed font-inter">
              Last updated on Sep 13, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="card p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-vedra-night leading-relaxed mb-8 font-inter">
                  This privacy policy sets out how VEDRA SOLUTIONS PRIVATE LIMITED uses and protects any information that you give VEDRA SOLUTIONS PRIVATE LIMITED when you visit their website and/or agree to purchase from them.
                </p>

                <p className="text-lg text-vedra-night leading-relaxed mb-8 font-inter">
                  VEDRA SOLUTIONS PRIVATE LIMITED is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement.
                </p>

                <p className="text-lg text-vedra-night leading-relaxed mb-8 font-inter">
                  VEDRA SOLUTIONS PRIVATE LIMITED may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you adhere to these changes.
                </p>

                <h2 className="text-3xl font-bold text-vedra-night mb-4 mt-8 font-ibm-plex flex items-center">
                  <Shield className="w-8 h-8 mr-3 text-vedra-hunter" />
                  Information We Collect
                </h2>

                <p className="text-lg text-vedra-night leading-relaxed mb-6 font-inter">
                  We may collect the following information:
                </p>

                <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-vedra-night font-inter">
                  <li>Name</li>
                  <li>Contact information including email address</li>
                  <li>Demographic information such as postcode, preferences and interests, if required</li>
                  <li>Other information relevant to customer surveys and/or offers</li>
                </ul>

                <h2 className="text-3xl font-bold text-vedra-night mb-4 mt-8 font-ibm-plex">
                  What We Do With Your Information
                </h2>

                <p className="text-lg text-vedra-night leading-relaxed mb-6 font-inter">
                  We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
                </p>

                <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-vedra-night font-inter">
                  <li>Internal record keeping</li>
                  <li>We may use the information to improve our products and services</li>
                  <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided</li>
                </ul>
                <p className="text-lg text-vedra-night leading-relaxed mb-6 font-inter">
                  From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.
                </p>
                <p className="text-lg text-vedra-night leading-relaxed mb-8 font-inter">
                  We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in suitable measures.
                </p>

                <h2 className="text-3xl font-bold text-vedra-night mb-4 mt-8 font-ibm-plex">
                  Controlling Your Personal Information
                </h2>

                <p className="text-lg text-vedra-night leading-relaxed mb-6 font-inter">
                  You may choose to restrict the collection or use of your personal information in the following ways:
                </p>

                <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-vedra-night font-inter">
                  <li>Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes.</li>
                  <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at contact@mvedra.com</li>
                </ul>

                <p className="text-lg text-vedra-night leading-relaxed mb-8 font-inter">
                  We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
                </p>

                <p className="text-lg text-vedra-night leading-relaxed mb-8 font-inter">
                  If you believe that any information we are holding on you is incorrect or incomplete, please write to Floor 19, WeWork Berger Delhi One, C-001/A2, Sector 16 Noida UTTAR PRADESH 201301 or contact us at +91 96540 07695 or contact@mvedra.com as soon as possible. We will promptly correct any information found to be incorrect.
                </p>

                {/* Contact Information */}
                <div className="bg-vedra-floral rounded-2xl p-8 mt-12">
                  <h3 className="text-2xl font-bold text-vedra-night mb-6 font-ibm-plex">
                    Contact Us
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-vedra-hunter" />
                      <span className="text-vedra-night font-inter">contact@mvedra.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-vedra-hunter" />
                      <span className="text-vedra-night font-inter">+91 96540 07695</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-vedra-hunter mt-1" />
                      <span className="text-vedra-night font-inter">
                        Floor 19, WeWork Berger Delhi One, C-001/A2, Sector 16 Noida UTTAR PRADESH 201301
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
