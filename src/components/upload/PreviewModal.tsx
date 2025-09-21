import React from 'react';
import { motion } from 'framer-motion';
import { X, FileText, Users, Tag, Award, BookOpen, Settings, Globe, Lock, Calendar } from 'lucide-react';

interface FormData {
  files: any[];
  basicInformation: any;
  recommendedInformation: any;
  funding: any;
  references: any[];
  publishingInformation: any;
  visibility: any;
}

interface PreviewModalProps {
  data: FormData;
  onClose: () => void;
  formatFileSize: (bytes: number) => string;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ data, onClose, formatFileSize }) => {
  const totalSize = data.files.reduce((sum, file) => sum + file.size, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Publication Preview</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="space-y-6">
            {/* Files Summary */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <FileText className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900">Files ({data.files.length})</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Total Size:</span>
                  <span className="ml-2 font-medium">{formatFileSize(totalSize)}</span>
                </div>
                <div>
                  <span className="text-gray-600">Files:</span>
                  <span className="ml-2 font-medium">{data.files.length} / 100</span>
                </div>
              </div>
            </div>

            {/* Basic Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <FileText className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900">Basic Information</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-600">DOI:</span>
                  <span className="ml-2">
                    {data.basicInformation.doi.hasExisting 
                      ? data.basicInformation.doi.value || 'Not provided'
                      : 'System will mint'
                    }
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Resource Type:</span>
                  <span className="ml-2">{data.basicInformation.resourceType}</span>
                </div>
                <div>
                  <span className="text-gray-600">Publication Date:</span>
                  <span className="ml-2">{data.basicInformation.publicationDate || 'Not provided'}</span>
                </div>
                <div>
                  <span className="text-gray-600">Titles:</span>
                  <div className="ml-2">
                    {data.basicInformation.titles.map((title: any, index: number) => (
                      <div key={index} className="text-xs text-gray-500">
                        • {title.title || 'Untitled'}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600">Creators:</span>
                  <div className="ml-2">
                    {data.basicInformation.creators.map((creator: any, index: number) => (
                      <div key={index} className="text-xs text-gray-500">
                        • {creator.name || 'Unnamed'} {creator.affiliation && `(${creator.affiliation})`}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Information */}
            {(data.recommendedInformation.contributors.length > 0 || 
              data.recommendedInformation.keywords.length > 0 ||
              data.recommendedInformation.languages.length > 0 ||
              data.recommendedInformation.dates.length > 0 ||
              data.recommendedInformation.version ||
              data.recommendedInformation.publisher) && (
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Tag className="w-5 h-5 text-gray-600" />
                  <h3 className="font-semibold text-gray-900">Recommended Information</h3>
                </div>
                <div className="space-y-2 text-sm">
                  {data.recommendedInformation.version && (
                    <div>
                      <span className="text-gray-600">Version:</span>
                      <span className="ml-2">{data.recommendedInformation.version}</span>
                    </div>
                  )}
                  {data.recommendedInformation.publisher && (
                    <div>
                      <span className="text-gray-600">Publisher:</span>
                      <span className="ml-2">{data.recommendedInformation.publisher}</span>
                    </div>
                  )}
                  {data.recommendedInformation.keywords.length > 0 && (
                    <div>
                      <span className="text-gray-600">Keywords:</span>
                      <div className="ml-2 flex flex-wrap gap-1 mt-1">
                        {data.recommendedInformation.keywords.map((keyword: string, index: number) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {data.recommendedInformation.languages.length > 0 && (
                    <div>
                      <span className="text-gray-600">Languages:</span>
                      <div className="ml-2 flex flex-wrap gap-1 mt-1">
                        {data.recommendedInformation.languages.map((language: string, index: number) => (
                          <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Funding */}
            {data.funding.awards.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Award className="w-5 h-5 text-gray-600" />
                  <h3 className="font-semibold text-gray-900">Funding ({data.funding.awards.length})</h3>
                </div>
                <div className="space-y-2">
                  {data.funding.awards.map((award: any, index: number) => (
                    <div key={index} className="text-sm p-2 bg-gray-50 rounded">
                      {award.mode === 'standard' ? (
                        <div>
                          <span className="font-medium">{award.funderName}</span>
                          {award.awardNumber && <span className="ml-2 text-gray-600">#{award.awardNumber}</span>}
                          {award.awardTitle && <div className="text-xs text-gray-500">{award.awardTitle}</div>}
                        </div>
                      ) : (
                        <div className="text-gray-700">{award.text}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* References */}
            {data.references.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <BookOpen className="w-5 h-5 text-gray-600" />
                  <h3 className="font-semibold text-gray-900">References ({data.references.length})</h3>
                </div>
                <div className="space-y-2">
                  {data.references.map((reference, index) => (
                    <div key={index} className="text-sm p-2 bg-gray-50 rounded text-gray-700">
                      <div>{reference.reference}</div>
                      {reference.doi && (
                        <div className="mt-1 text-xs text-blue-600 font-medium">
                          DOI: {reference.doi}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Publishing Information */}
            {(data.publishingInformation.journal.title ||
              data.publishingInformation.imprint.title ||
              data.publishingInformation.thesis.awardingUniversity) && (
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Settings className="w-5 h-5 text-gray-600" />
                  <h3 className="font-semibold text-gray-900">Publishing Information</h3>
                </div>
                <div className="space-y-3 text-sm">
                  {data.publishingInformation.journal.title && (
                    <div>
                      <span className="text-gray-600 font-medium">Journal:</span>
                      <div className="ml-2">
                        <div>{data.publishingInformation.journal.title}</div>
                        {data.publishingInformation.journal.issn && (
                          <div className="text-xs text-gray-500">ISSN: {data.publishingInformation.journal.issn}</div>
                        )}
                        {(data.publishingInformation.journal.volume || data.publishingInformation.journal.issue) && (
                          <div className="text-xs text-gray-500">
                            Vol. {data.publishingInformation.journal.volume}, 
                            Issue {data.publishingInformation.journal.issue}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  {data.publishingInformation.imprint.title && (
                    <div>
                      <span className="text-gray-600 font-medium">Imprint:</span>
                      <div className="ml-2">
                        <div>{data.publishingInformation.imprint.title}</div>
                        {data.publishingInformation.imprint.isbn && (
                          <div className="text-xs text-gray-500">ISBN: {data.publishingInformation.imprint.isbn}</div>
                        )}
                      </div>
                    </div>
                  )}
                  {data.publishingInformation.thesis.awardingUniversity && (
                    <div>
                      <span className="text-gray-600 font-medium">Thesis:</span>
                      <div className="ml-2">
                        <div>{data.publishingInformation.thesis.awardingUniversity}</div>
                        {data.publishingInformation.thesis.awardingDepartment && (
                          <div className="text-xs text-gray-500">{data.publishingInformation.thesis.awardingDepartment}</div>
                        )}
                        {data.publishingInformation.thesis.type && (
                          <div className="text-xs text-gray-500">{data.publishingInformation.thesis.type}</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Visibility */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                {data.visibility.level === 'Public' ? (
                  <Globe className="w-5 h-5 text-green-600" />
                ) : (
                  <Lock className="w-5 h-5 text-amber-600" />
                )}
                <h3 className="font-semibold text-gray-900">Visibility: {data.visibility.level}</h3>
              </div>
              {data.visibility.embargo.enabled && (
                <div className="text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <span className="text-amber-600 font-medium">Embargo Applied</span>
                  </div>
                  {data.visibility.embargo.until && (
                    <div className="ml-6 text-gray-600">Until: {data.visibility.embargo.until}</div>
                  )}
                  {data.visibility.embargo.reason && (
                    <div className="ml-6 text-gray-600">Reason: {data.visibility.embargo.reason}</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PreviewModal;
