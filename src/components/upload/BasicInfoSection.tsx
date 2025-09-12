import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface TitleItem {
  id: string;
  title: string;
  language?: string;
  type?: string;
}

interface CreatorItem {
  id: string;
  name: string;
  affiliation?: string;
  orcid?: string;
  role?: string;
}

interface DescriptionItem {
  id: string;
  text: string;
  type?: string;
  language?: string;
}

interface LicenseItem {
  id: string;
  scheme?: string;
  id_license?: string;
  name: string;
  url?: string;
}

interface BasicInfoData {
  doi: {
    hasExisting: boolean;
    value: string;
  };
  resourceType: string;
  titles: TitleItem[];
  publicationDate: string;
  creators: CreatorItem[];
  descriptions: DescriptionItem[];
  licenses: LicenseItem[];
  copyright: string;
}

interface BasicInfoSectionProps {
  data: BasicInfoData;
  updateFormData: (path: string, value: any) => void;
  addArrayItem: (path: string, item: any) => void;
  removeArrayItem: (path: string, id: string) => void;
  updateArrayItem: (path: string, id: string, updates: any) => void;
  generateId: () => string;
}

const BasicInfoSection: React.FC<BasicInfoSectionProps> = ({
  data,
  updateFormData,
  addArrayItem,
  removeArrayItem,
  updateArrayItem,
  generateId
}) => {
  const resourceTypes = [
    'Dataset',
    'Event',
    'Image',
    'Lesson',
    'Model',
    'Other',
    'Physical object',
    'Poster',
    'Presentation',
    'Publication',
    'Software',
    'Video/Audio',
    'Workflow'
  ];

  const imageSubtypes = ['Diagram', 'Drawing', 'Figure', 'Other', 'Photo', 'Plot'];
  const publicationSubtypes = [
    'Annotation collection', 'Book', 'Book chapter', 'Conference paper', 
    'Conference proceeding', 'Data paper', 'Dissertation', 'Journal', 
    'Journal article', 'Other', 'Output management plan', 'Patent', 
    'Peer review', 'Preprint', 'Project deliverable', 'Project milestone', 
    'Proposal', 'Report', 'Software documentation', 'Standard', 
    'Taxonomic treatment', 'Technical note', 'Thesis', 'Working paper'
  ];

  const softwareSubtypes = ['Computational notebook'];

  const titleTypes = ['Main', 'Alternative', 'Subtitle', 'Translated', 'Other'];
  const languages = ['eng', 'fra', 'deu', 'spa', 'ita', 'por', 'rus', 'chi', 'jpn', 'ara', 'hin'];

  const getResourceTypeOptions = () => {
    const options = [];
    for (const type of resourceTypes) {
      options.push({ value: type, label: type });
      
      if (type === 'Image') {
        for (const subtype of imageSubtypes) {
          options.push({ value: `${type}: ${subtype}`, label: `${type}: ${subtype}` });
        }
      } else if (type === 'Publication') {
        for (const subtype of publicationSubtypes) {
          options.push({ value: `${type}: ${subtype}`, label: `${type}: ${subtype}` });
        }
      } else if (type === 'Software') {
        for (const subtype of softwareSubtypes) {
          options.push({ value: `${type}: ${subtype}`, label: `${type}: ${subtype}` });
        }
      }
    }
    return options;
  };

  return (
    <div className="space-y-8">
      {/* DOI Ownership */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          DOI Ownership
        </label>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="radio"
              name="doi-ownership"
              checked={!data.doi.hasExisting}
              onChange={() => updateFormData('basicInformation.doi.hasExisting', false)}
              className="mr-3"
            />
            <span className="text-sm text-gray-700">No, I need one (system will mint)</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="doi-ownership"
              checked={data.doi.hasExisting}
              onChange={() => updateFormData('basicInformation.doi.hasExisting', true)}
              className="mr-3"
            />
            <span className="text-sm text-gray-700">Yes, I already have one</span>
          </label>
        </div>
        
        {data.doi.hasExisting && (
          <div className="mt-4">
            <input
              type="text"
              placeholder="10.xxxx/xxxxx"
              value={data.doi.value}
              onChange={(e) => updateFormData('basicInformation.doi.value', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">DOI format: 10.xxxx/xxxxx</p>
          </div>
        )}
      </div>

      {/* Resource Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Resource Type
        </label>
        <select
          value={data.resourceType}
          onChange={(e) => updateFormData('basicInformation.resourceType', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
        >
          {getResourceTypeOptions().map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Titles */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="block text-sm font-medium text-gray-700">
            Titles
          </label>
          <button
            onClick={() => addArrayItem('basicInformation.titles', {
              title: '',
              type: 'main'
            })}
            className="flex items-center space-x-1 text-sm text-vedra-hunter hover:text-vedra-hunter/80"
          >
            <Plus className="w-4 h-4" />
            <span>Add Title</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {data.titles.map((title, index) => (
            <div key={title.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">Title {index + 1}</span>
                {data.titles.length > 1 && (
                  <button
                    onClick={() => removeArrayItem('basicInformation.titles', title.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <input
                    type="text"
                    placeholder="Enter title"
                    value={title.title}
                    onChange={(e) => updateArrayItem('basicInformation.titles', title.id, {
                      title: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
                  />
                </div>
                <div>
                  <select
                    value={title.type || 'main'}
                    onChange={(e) => updateArrayItem('basicInformation.titles', title.id, {
                      type: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
                  >
                    {titleTypes.map((type) => (
                      <option key={type} value={type.toLowerCase()}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Publication Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Publication Date
        </label>
        <input
          type="text"
          placeholder="YYYY-MM-DD, YYYY-MM, or YYYY"
          value={data.publicationDate}
          onChange={(e) => updateFormData('basicInformation.publicationDate', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
        />
        <p className="text-xs text-gray-500 mt-1">
          Format: YYYY-MM-DD, YYYY-MM, or YYYY. Intervals allowed: DATE/DATE (e.g., 1939/1945)
        </p>
      </div>

      {/* Creators */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="block text-sm font-medium text-gray-700">
            Creators
          </label>
          <button
            onClick={() => addArrayItem('basicInformation.creators', {
              name: '',
              affiliation: '',
              orcid: '',
              role: ''
            })}
            className="flex items-center space-x-1 text-sm text-vedra-hunter hover:text-vedra-hunter/80"
          >
            <Plus className="w-4 h-4" />
            <span>Add Creator</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {data.creators.map((creator, index) => (
            <div key={creator.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">Creator {index + 1}</span>
                <button
                  onClick={() => removeArrayItem('basicInformation.creators', creator.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Name *</label>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={creator.name}
                    onChange={(e) => updateArrayItem('basicInformation.creators', creator.id, {
                      name: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Affiliation</label>
                  <input
                    type="text"
                    placeholder="University/Organization"
                    value={creator.affiliation || ''}
                    onChange={(e) => updateArrayItem('basicInformation.creators', creator.id, {
                      affiliation: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">ORCID</label>
                  <input
                    type="text"
                    placeholder="0000-0000-0000-0000"
                    value={creator.orcid || ''}
                    onChange={(e) => updateArrayItem('basicInformation.creators', creator.id, {
                      orcid: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Role</label>
                  <input
                    type="text"
                    placeholder="Author, Editor, etc."
                    value={creator.role || ''}
                    onChange={(e) => updateArrayItem('basicInformation.creators', creator.id, {
                      role: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Descriptions */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="block text-sm font-medium text-gray-700">
            Descriptions
          </label>
          <button
            onClick={() => addArrayItem('basicInformation.descriptions', {
              text: '',
              type: 'abstract',
              language: 'eng'
            })}
            className="flex items-center space-x-1 text-sm text-vedra-hunter hover:text-vedra-hunter/80"
          >
            <Plus className="w-4 h-4" />
            <span>Add Description</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {data.descriptions.map((description, index) => (
            <div key={description.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">Description {index + 1}</span>
                <button
                  onClick={() => removeArrayItem('basicInformation.descriptions', description.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              
              <textarea
                placeholder="Enter description or abstract"
                value={description.text}
                onChange={(e) => updateArrayItem('basicInformation.descriptions', description.id, {
                  text: e.target.value
                })}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Licenses */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="block text-sm font-medium text-gray-700">
            Licenses
          </label>
          <div className="flex space-x-2">
            <button className="text-sm text-vedra-hunter hover:text-vedra-hunter/80">
              Add Standard
            </button>
            <button className="text-sm text-vedra-hunter hover:text-vedra-hunter/80">
              Add Custom
            </button>
          </div>
        </div>
        
        <div className="space-y-3">
          {data.licenses.map((license, index) => (
            <div key={license.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{license.name}</div>
                  {license.url && (
                    <div className="text-sm text-gray-500 mt-1">{license.url}</div>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button className="text-sm text-vedra-hunter hover:text-vedra-hunter/80">
                    Edit
                  </button>
                  <button
                    onClick={() => removeArrayItem('basicInformation.licenses', license.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-xs text-gray-500 mt-2">
          The Creative Commons Attribution license allows re-distribution and re-use of a licensed work on the condition that the creator is appropriately credited.
        </p>
      </div>

      {/* Copyright */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Copyright
        </label>
        <input
          type="text"
          placeholder="Copyright statement"
          value={data.copyright}
          onChange={(e) => updateFormData('basicInformation.copyright', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
        />
      </div>
    </div>
  );
};

export default BasicInfoSection;
