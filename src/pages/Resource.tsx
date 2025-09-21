import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Calendar, 
  User, 
  Tag, 
  Globe, 
  FileText, 
  Award,
  ExternalLink,
  ArrowLeft,
  Share2,
  Eye,
  Maximize2,
  X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Resource: React.FC = () => {
  const navigate = useNavigate();
  const [showFullScreenPDF, setShowFullScreenPDF] = useState(false);

  // Demo data (same as used in Upload page)
  const resourceData = {
    doi: 'doi.org/10.59467/WJASR.2022-23.12-13.11',
    resourceType: 'Publication: Journal article',
    titles: [
      { 
        title: 'Survey on Prevalence and Awareness of Gynecological Disorders among Rural Women of Gautam Buddha Nagar, Uttar Pradesh', 
        type: 'main', 
        language: 'English' 
      },
      { 
        title: 'गौतम बुद्ध नगर, उत्तर प्रदेश की ग्रामीण महिलाओं में स्त्री रोग संबंधी विकारों की व्यापकता और जागरूकता पर सर्वेक्षण', 
        type: 'translated', 
        language: 'Hindi' 
      }
    ],
    publicationDate: '30-Jul-2022',
    creators: [
      {
        name: 'DINESH C. SHARMA',
        affiliation: 'Km. Mayawati Government Girls PG College Badalpur',
        orcid: '0000-0002-7447-460X',
        role: 'Author'
      },
      {
        name: 'AZMI NAQVI',
        affiliation: 'Km. Mayawati Government Girls PG College Badalpur',
        orcid: '',
        role: 'Co-Author'
      },
      {
        name: 'ARPANA RATHOUR',
        affiliation: 'Km. Mayawati Government Girls PG College Badalpur',
        orcid: '',
        role: 'Co-Author'
      }
    ],
    description: 'Polycystic ovarian disease and cancers of the ovaries and uterus are common gynecological diseases, increasingly affecting even rural communities. These conditions pose significant challenges in rural India due to a lack of awareness, high screening costs, and ignorance of symptoms. This cross-sectional, community-based study assessed the prevalence of gynecological disorders and awareness among women aged 18–55 years in Lal Kuan, Badalpur, and Achheja, Gautam Buddha Nagar, Uttar Pradesh, India. The study revealed a gynecological disturbance prevalence of 31.7%. Menstrual irregularities affected 28.6% of participants, and 12% reported polycystic ovary syndrome. Alarmingly, 73% of women did not seek medical care for such issues due to hesitation and various sociocultural barriers. This highlights the urgent need for awareness programs and affordable healthcare interventions in rural communities.',
    keywords: ['Gynecological disorders', 'Polycystic ovarian disease', 'Irregular periods', 'Menstrual cycle irregularities', 'Rural health awareness'],
    languages: ['English'],
    publisher: 'Connect Journals',
    funding: [
      {
        funderName: 'DST-CURIE',
        awardTitle: 'Women Scientists\' Grant 2023'
      }
    ],
    references: [
      'Antonio, A., Sandro, L.V., Rocco, R., Alessandra, G., Rossella, E.N., Aldo, E. and Alberto, F. (2020) Fundamental concepts and novel aspects of polycystic ovarian syndrome: Expert consensus resolution. Front. Endocrinol. (Lausanne), 11, 516.',
      'Balarajan, Y., Selvaraj, S. and Subramanian, S.V. (2011) Health care and equity in India. Lancet, 377, 505–515.',
      'Ferguson, H.B., Bovaird, S. and Muller, M.P. (2007) The impact of poverty on educational outcomes for children. Paediatr. Child Health, 12, 701–706.'
    ],
    publishingInfo: {
      journalTitle: 'World Journal of Applied Sciences & Research (WJASR)',
      issn: '2249-4197',
      volume: '2022-23, 12-13',
      issue: '01-02',
      pageNumber: '11'
    },
    files: [
      {
        name: 'Prefill Document for mVedra Demo.pdf',
        type: 'PDF',
        size: '2.4 MB',
        url: '/Prefill Document for mVedra Demo.pdf'
      }
    ]
  };

  const handleDownload = (file: any) => {
    // Create a temporary link to download the file
    const link = document.createElement('a');
    link.href = file.url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => navigate('/upload')}
                className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              {/* WJASR Logo */}
              <div className="flex items-center">
                <img 
                  src="/logo-wjasr.webp" 
                  alt="WJASR Journal Logo" 
                  className="h-24 w-auto"
                />
                <span className="ml-4 text-gray-600 text-2xl font-bold">World Journal of Applied Sciences & Research (WJASR)</span>
              </div>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 px-4 py-2 bg-vedra-hunter text-white rounded-lg hover:bg-vedra-hunter/90 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Main Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8"
        >
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-vedra-hunter text-white text-sm font-medium rounded-full mb-4">
              {resourceData.resourceType}
            </span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {resourceData.titles[0].title}
          </h1>
          
          {resourceData.titles[1] && (
            <h2 className="text-xl text-gray-700 mb-4 leading-relaxed">
              {resourceData.titles[1].title}
            </h2>
          )}
          
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{resourceData.publicationDate}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Globe className="w-4 h-4" />
              <span>{resourceData.doi}</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Description
              </h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {resourceData.description}
                </p>
              </div>
            </motion.div>

            {/* PDF Preview Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Document Preview
                </h3>
                <button
                  onClick={() => setShowFullScreenPDF(true)}
                  className="flex items-center space-x-2 px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>Full Screen</span>
                </button>
              </div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="/Prefill Document for mVedra Demo.pdf#toolbar=1&navpanes=1&scrollbar=1"
                  className="w-full h-96"
                  title="PDF Preview"
                />
              </div>
            </motion.div>

            {/* Files Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Files
              </h3>
              <div className="space-y-4">
                {resourceData.files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{file.name}</div>
                        <div className="text-sm text-gray-500">{file.type} • {file.size}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDownload(file)}
                      className="flex items-center space-x-2 px-4 py-2 bg-vedra-hunter text-white rounded-lg hover:bg-vedra-hunter/90 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* References Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                References
              </h3>
              <div className="space-y-3">
                {resourceData.references.map((ref, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {ref}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Authors Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2" />
                Authors
              </h3>
              <div className="space-y-4">
                {resourceData.creators.map((creator, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                    <div className="font-medium text-gray-900">{creator.name}</div>
                    <div className="text-sm text-gray-600">{creator.affiliation}</div>
                    {creator.orcid && (
                      <div className="text-sm text-vedra-hunter mt-1">
                        ORCID: {creator.orcid}
                      </div>
                    )}
                    <div className="text-xs text-gray-500 mt-1">{creator.role}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Keywords Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2" />
                Keywords
              </h3>
              <div className="flex flex-wrap gap-2">
                {resourceData.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Funding Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Funding
              </h3>
              <div className="space-y-3">
                {resourceData.funding.map((fund, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-medium text-gray-900">{fund.funderName}</div>
                    <div className="text-sm text-gray-600">{fund.awardTitle}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Publishing Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <ExternalLink className="w-5 h-5 mr-2" />
                Publishing Information
              </h3>
              <div className="space-y-2 text-sm">
                <div><span className="font-medium">Journal:</span> {resourceData.publishingInfo.journalTitle}</div>
                <div><span className="font-medium">ISSN:</span> {resourceData.publishingInfo.issn}</div>
                <div><span className="font-medium">Volume:</span> {resourceData.publishingInfo.volume}</div>
                <div><span className="font-medium">Issue:</span> {resourceData.publishingInfo.issue}</div>
                <div><span className="font-medium">Page:</span> {resourceData.publishingInfo.pageNumber}</div>
                <div><span className="font-medium">Publisher:</span> {resourceData.publisher}</div>
                <div><span className="font-medium">Languages:</span> {resourceData.languages.join(', ')}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full Screen PDF Modal */}
      {showFullScreenPDF && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setShowFullScreenPDF(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg shadow-xl max-w-7xl w-full max-h-[95vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
              <h3 className="text-lg font-semibold text-gray-900">Document Preview - Full Screen</h3>
              <button
                onClick={() => setShowFullScreenPDF(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            {/* PDF Viewer */}
            <div className="h-[calc(95vh-80px)]">
                <iframe
                  src="/Prefill Document for mVedra Demo.pdf#toolbar=1&navpanes=1&scrollbar=1&view=FitH"
                  className="w-full h-full"
                  title="PDF Full Screen Preview"
                />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Resource;
