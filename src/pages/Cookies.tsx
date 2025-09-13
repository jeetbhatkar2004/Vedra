import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, BarChart, Settings, Mail, Phone, MapPin, Bold } from 'lucide-react';

const Cookies: React.FC = () => {
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
              Cookie Policy
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
                <h2 className="text-3xl font-bold text-vedra-night mb-4 font-ibm-plex flex items-center">
                  <Cookie className="w-8 h-8 mr-3 text-vedra-hunter" />
                  How We Use Cookies
                </h2>

                <p className="text-lg text-vedra-night leading-relaxed mb-8 font-inter">
                  A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
                </p>

                <div className="bg-vedra-floral rounded-2xl p-4 mb-8 border border-vedra-hunter/20">
                  <h3 className="text-2xl font-bold text-vedra-night mb-4 font-ibm-plex flex items-center">
                    <BarChart className="w-6 h-6 mr-3 text-vedra-hunter"/>
                    Traffic Log Cookies
                  </h3>
                  <p className="text-lg text-vedra-night leading-relaxed font-inter">
                    We use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
                  </p>
                </div>

                <p className="text-lg text-vedra-night leading-relaxed mb-8 font-inter">
                  Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
                </p>

                <h2 className="text-3xl font-bold text-vedra-night mb-4 mt-8 font-ibm-plex flex items-center">
                  <Settings className="w-8 h-8 mr-3 text-vedra-hunter" />
                  Cookie Management
                </h2>

                <p className="text-lg text-vedra-night leading-relaxed mb-8 font-inter">
                  You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
                </p>

                <div className="bg-gradient-to-r from-vedra-hunter to-vedra-calpoly rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold text-white mb-4 font-ibm-plex">
                    Browser Settings
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed font-inter mb-4">
                    To manage cookies in your browser, you can typically find these settings in the "Privacy" or "Security" section of your browser's preferences. Here are some common browsers and where to find cookie settings:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-white/90 font-inter">
                    <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
                    <li>Firefox: Options → Privacy & Security → Cookies and Site Data</li>
                    <li>Safari: Preferences → Privacy → Manage Website Data</li>
                    <li>Edge: Settings → Cookies and site permissions → Cookies and site data</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-vedra-night mb-4 mt-8 font-ibm-plex">
                  Types of Cookies We Use
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white border border-neutral-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-vedra-night mb-3 font-ibm-plex">Essential Cookies</h3>
                    <p className="text-vedra-night font-inter">
                      These cookies are necessary for the website to function properly and cannot be disabled.
                    </p>
                  </div>
                  <div className="bg-white border border-neutral-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-vedra-night mb-3 font-ibm-plex">Analytics Cookies</h3>
                    <p className="text-vedra-night font-inter">
                      These cookies help us understand how visitors interact with our website by collecting anonymous information.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-vedra-night mb-4 mt-8 font-ibm-plex">
                  Your Rights
                </h2>

                <p className="text-lg text-vedra-night leading-relaxed mb-6 font-inter">
                  You have the right to:
                </p>

                <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-vedra-night font-inter">
                  <li>Accept or decline cookies when you first visit our website</li>
                  <li>Change your cookie preferences at any time through your browser settings</li>
                  <li>Delete cookies that have already been set on your device</li>
                  <li>Block cookies from specific websites</li>
                  <li>Receive information about what cookies we use and why</li>
                </ul>

                <p className="text-lg text-vedra-night leading-relaxed mb-8 font-inter">
                  Please note that disabling certain cookies may affect the functionality of our website and your user experience.
                </p>

                {/* Contact Information */}
                <div className="bg-vedra-floral rounded-2xl p-8 mt-12">
                  <h3 className="text-2xl font-bold text-vedra-night mb-6 font-ibm-plex">
                    Questions About Our Cookie Policy?
                  </h3>
                  <p className="text-lg text-vedra-night leading-relaxed mb-6 font-inter">
                    If you have any questions about our use of cookies or this cookie policy, please don't hesitate to contact us.
                  </p>
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

export default Cookies;
