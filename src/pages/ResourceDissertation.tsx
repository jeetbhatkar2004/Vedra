import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Calendar,
  User,
  Tag,
  Globe,
  FileText,
  ArrowLeft,
  Share2,
  Eye,
  Maximize2,
  X,
  GraduationCap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ResourceDissertation: React.FC = () => {
  const navigate = useNavigate();
  const [showFullScreenPDF, setShowFullScreenPDF] = useState(false);

  // Dissertation demo data
  const resourceData = {
    doi: "doi.org/10.59467/WJASR.2022-23.12-13.11",
    resourceType: "Dissertation",
    titles: [
      {
        title:
          "Critical Study of Directors: Shaunak Sen, Zoya Akhtar & James Cameron",
        type: "main",
        language: "English",
      },
      {
        title:
          "निर्देशकों का आलोचनात्मक अध्ययन: शौनक सेन, ज़ोया अख्तर और जेम्स कैमरन",
        type: "translated",
        language: "Hindi",
      },
    ],
    publicationDate: "19-Jun-2025",
    creators: [
      {
        name: "Ajeant Sharma",
        affiliation:
          "Tilak School of Mass Communication, Ch. Charan Singh University, Meerut",
        orcid: "",
        role: "Author",
      },
      {
        name: "Dr. Manoj Kumar Srivastava",
        affiliation:
          "Tilak School of Mass Communication, Ch. Charan Singh University, Meerut",
        orcid: "",
        role: "Guide",
      },
    ],
    description:
      "This dissertation presents a comparative critical study of the directorial styles of Shaunak Sen, Zoya Akhtar, and James Cameron, examining their work as distinct paradigms of regional, national, and international filmmaking. Employing a qualitative methodology, the research conducts an in-depth analysis of the directors' most significant films – including All That Breathes, Zindagi Na Milegi Dobara, Dil Dhadakne Do, and Avatar – by focusing on narrative structure, cinematographic language, thematic concerns, and socio-industrial positioning.",
    keywords: [
      "Film",
      "Critical Study",
      "Director",
      "Filmmaking",
      "narrative structure",
      "cinematographic language",
      "thematic concerns",
      "socio-industrial positioning",
    ],
    languages: ["English"],
    publisher: "",
    funding: [],
    references: [],
    publishingInfo: {
      awardingUniversity: "Ch. Charan Singh University",
      awardingDepartment: "Tilak School of Mass Communication and Journalism",
      thesisType: "Bachelors",
      submissionDate: "19-Jun-2025",
      defenseDate: "",
    },
    files: [
      {
        name: "CCSU Dissertation Draft 01.pdf",
        type: "PDF",
        size: "2.4 MB",
        url: "/CCSU Dissertation Draft 01.pdf",
      },
    ],
  };

  const handleDownload = (file: any) => {
    // Create a temporary link to download the file
    const link = document.createElement("a");
    link.href = file.url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => navigate("/upload")}
                className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              {/* University Logo/Info */}
              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <span className="ml-4 text-gray-600 text-xl font-bold">
                  Ch. Charan Singh University
                </span>
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

      <div className="max-w-7xl mx-auto py-8">
        {/* Main Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8 mx-6"
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
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mx-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Abstract
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
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mx-6"
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
                  src="/CCSU Dissertation Draft 01.pdf#toolbar=1&navpanes=1&scrollbar=1"
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
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mx-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Files
              </h3>
              <div className="space-y-4">
                {resourceData.files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {file.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {file.type} • {file.size}
                        </div>
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
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Authors Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mx-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2" />
                Authors & Guide
              </h3>
              <div className="space-y-4">
                {resourceData.creators.map((creator, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="font-medium text-gray-900">
                      {creator.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {creator.affiliation}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {creator.role}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Keywords Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mx-6"
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

            {/* Academic Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mx-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                Academic Information
              </h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium">University:</span>{" "}
                  {resourceData.publishingInfo.awardingUniversity}
                </div>
                <div>
                  <span className="font-medium">Department:</span>{" "}
                  {resourceData.publishingInfo.awardingDepartment}
                </div>
                <div>
                  <span className="font-medium">Degree Type:</span>{" "}
                  {resourceData.publishingInfo.thesisType}
                </div>
                <div>
                  <span className="font-medium">Submission Date:</span>{" "}
                  {resourceData.publishingInfo.submissionDate}
                </div>
                <div>
                  <span className="font-medium">Languages:</span>{" "}
                  {resourceData.languages.join(", ")}
                </div>
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
              <h3 className="text-lg font-semibold text-gray-900">
                Document Preview - Full Screen
              </h3>
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
                src="/CCSU Dissertation Draft 01.pdf#toolbar=1&navpanes=1&scrollbar=1&view=FitH"
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

export default ResourceDissertation;
