import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';

const Terms: React.FC = () => {
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
              Terms of Service
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
                  For the purpose of these Terms and Conditions, The term "we", "us", "our" used anywhere on this page shall mean VEDRA SOLUTIONS PRIVATE LIMITED, whose registered/operational office is Floor 19, WeWork Berger Delhi One, C-001/A2, Sector 16 Noida UTTAR PRADESH 201301. "you", "your", "user", "visitor" shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.
                </p>

                <p className="text-lg text-vedra-night leading-relaxed mb-8 font-inter font-semibold">
                  Your use of the website and/or purchase from us are governed by following Terms and Conditions:
                </p>

                <ul className="list-disc list-inside space-y-4 mb-8 text-lg text-vedra-night font-inter">
                  <li>The content of the pages of this website is subject to change without notice.</li>
                  <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
                  <li>Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through our website and/or product pages meet your specific requirements.</li>
                  <li>Our website contains material which is owned by or licensed to us. This material includes, but are not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
                  <li>All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website.</li>
                  <li>Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.</li>
                  <li>From time to time our website may also include links to other websites. These links are provided for your convenience to provide further information.</li>
                  <li>You may not create a link to our website from another website or document without VEDRA SOLUTIONS PRIVATE LIMITED's prior written consent.</li>
                  <li>Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India.</li>
                  <li>We, shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.</li>
                </ul>

                <h2 className="text-3xl font-bold text-vedra-night mb-4 mt-8 font-ibm-plex flex items-center">
                  <AlertCircle className="w-8 h-8 mr-3 text-vedra-hunter" />
                  Refund Policy
                </h2>

                <p className="text-lg text-vedra-night leading-relaxed mb-6 font-inter">
                  VEDRA SOLUTIONS PRIVATE LIMITED believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
                </p>

                <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-vedra-night font-inter">
                  <li>VEDRA SOLUTIONS PRIVATE LIMITED does not accept cancellation requests our products – a DOI cannot be cancelled or deleted after creation, only edited.</li>
                  <li>In case you feel that the service received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service as soon as possible. The Customer Service Team after looking into your complaint will take an appropriate decision.</li>
                  <li>In case of any Refunds approved by the VEDRA SOLUTIONS PRIVATE LIMITED, it'll take 10 working days for the refund to be processed to the end customer.</li>
                </ul>

                <h2 className="text-3xl font-bold text-vedra-night mb-6 mt-12 font-ibm-plex flex items-center">
                  <FileText className="w-8 h-8 mr-3 text-vedra-hunter" />
                  Shipping Policy
                </h2>

                <p className="text-lg text-vedra-night leading-relaxed mb-6 font-inter">
                  For international and domestic buyers, please note that <strong>VEDRA SOLUTIONS PRIVATE LIMITED does not sell or ship any physical products</strong>. All our offerings are in the form of digital services, memberships, courses, or online resources.
                </p>

                <p className="text-lg text-vedra-night leading-relaxed mb-8 font-inter">
                  Delivery of these services will be confirmed via the email address provided during registration or purchase. For any issues in accessing or utilizing our services, you may contact our helpdesk at +91 96540 07695 or contact@mvedra.com.
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

export default Terms;
