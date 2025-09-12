import React from 'react';

interface PublishingInfoData {
  journal: {
    title: string;
    issn: string;
    volume: string;
    issue: string;
    pagesOrArticleNumber: string;
  };
  imprint: {
    title: string;
    isbn: string;
    place: string;
    pagination: string;
    edition: string;
  };
  thesis: {
    awardingUniversity: string;
    awardingDepartment: string;
    type: string;
    submissionDate: string;
    defenseDate: string;
  };
}

interface PublishingInfoSectionProps {
  data: PublishingInfoData;
  updateFormData: (path: string, value: any) => void;
}

const PublishingInfoSection: React.FC<PublishingInfoSectionProps> = ({
  data,
  updateFormData
}) => {
  const thesisTypes = ['Masters', 'PhD', 'Bachelor', 'Diploma', 'Other'];

  return (
    <div className="space-y-8">
      {/* Journal Information */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Journal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              placeholder="Journal of Example Research"
              value={data.journal.title}
              onChange={(e) => updateFormData('publishingInformation.journal.title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ISSN</label>
            <input
              type="text"
              placeholder="1234-5678"
              value={data.journal.issn}
              onChange={(e) => updateFormData('publishingInformation.journal.issn', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Volume</label>
            <input
              type="text"
              placeholder="15"
              value={data.journal.volume}
              onChange={(e) => updateFormData('publishingInformation.journal.volume', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Issue</label>
            <input
              type="text"
              placeholder="3"
              value={data.journal.issue}
              onChange={(e) => updateFormData('publishingInformation.journal.issue', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Page Range or Article Number</label>
            <input
              type="text"
              placeholder="100-110 or e12345"
              value={data.journal.pagesOrArticleNumber}
              onChange={(e) => updateFormData('publishingInformation.journal.pagesOrArticleNumber', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Imprint Information */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Imprint (Book, Report, or Conference Proceedings)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Book/Report/Proceedings Title</label>
            <input
              type="text"
              placeholder="Proceedings of the Example Conference"
              value={data.imprint.title}
              onChange={(e) => updateFormData('publishingInformation.imprint.title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ISBN</label>
            <input
              type="text"
              placeholder="978-1-234-56789-0"
              value={data.imprint.isbn}
              onChange={(e) => updateFormData('publishingInformation.imprint.isbn', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Place</label>
            <input
              type="text"
              placeholder="New York, NY"
              value={data.imprint.place}
              onChange={(e) => updateFormData('publishingInformation.imprint.place', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Pagination</label>
            <input
              type="text"
              placeholder="250 pages"
              value={data.imprint.pagination}
              onChange={(e) => updateFormData('publishingInformation.imprint.pagination', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Edition</label>
            <input
              type="text"
              placeholder="2nd edition"
              value={data.imprint.edition}
              onChange={(e) => updateFormData('publishingInformation.imprint.edition', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Thesis Information */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Thesis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Awarding University</label>
            <input
              type="text"
              placeholder="University of Example"
              value={data.thesis.awardingUniversity}
              onChange={(e) => updateFormData('publishingInformation.thesis.awardingUniversity', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Awarding Department</label>
            <input
              type="text"
              placeholder="Department of Computer Science"
              value={data.thesis.awardingDepartment}
              onChange={(e) => updateFormData('publishingInformation.thesis.awardingDepartment', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Thesis Type</label>
            <select
              value={data.thesis.type}
              onChange={(e) => updateFormData('publishingInformation.thesis.type', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
            >
              <option value="">Select type</option>
              {thesisTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Submission Date</label>
            <input
              type="date"
              value={data.thesis.submissionDate}
              onChange={(e) => updateFormData('publishingInformation.thesis.submissionDate', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Defense Date</label>
            <input
              type="date"
              value={data.thesis.defenseDate}
              onChange={(e) => updateFormData('publishingInformation.thesis.defenseDate', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishingInfoSection;
