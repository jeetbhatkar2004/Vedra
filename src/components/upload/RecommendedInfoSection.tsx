import React, { useState } from 'react';
import { Plus, Trash2, X } from 'lucide-react';

interface ContributorItem {
  id: string;
  name: string;
  role: string;
  identifier?: string;
}

interface DateItem {
  id: string;
  value: string;
  type: string;
  description?: string;
}

interface RecommendedInfoData {
  contributors: ContributorItem[];
  keywords: string[];
  languages: string[];
  dates: DateItem[];
  version: string;
  publisher: string;
}

interface RecommendedInfoSectionProps {
  data: RecommendedInfoData;
  updateFormData: (path: string, value: any) => void;
  addArrayItem: (path: string, item: any) => void;
  removeArrayItem: (path: string, id: string) => void;
  updateArrayItem: (path: string, id: string, updates: any) => void;
  generateId: () => string;
}

const RecommendedInfoSection: React.FC<RecommendedInfoSectionProps> = ({
  data,
  updateFormData,
  addArrayItem,
  removeArrayItem,
  updateArrayItem,
  generateId
}) => {
  const [newKeyword, setNewKeyword] = useState('');
  const [newLanguage, setNewLanguage] = useState('');

  const dateTypes = [
    'Accepted', 'Available', 'Collected', 'Copyrighted', 'Created', 
    'Issued', 'Other', 'Submitted', 'Updated', 'Valid', 'Withdrawn'
  ];

  const contributorRoles = [
    'ContactPerson', 'DataCollector', 'DataCurator', 'DataManager', 
    'Distributor', 'Editor', 'Funder', 'HostingInstitution', 'Producer', 
    'ProjectLeader', 'ProjectManager', 'ProjectMember', 'RegistrationAgency', 
    'RegistrationAuthority', 'RelatedPerson', 'ResearchGroup', 'RightsHolder', 
    'Sponsor', 'Supervisor', 'WorkPackageLeader', 'Other'
  ];

  const addKeyword = () => {
    if (newKeyword.trim() && !data.keywords.includes(newKeyword.trim())) {
      updateFormData('recommendedInformation.keywords', [...data.keywords, newKeyword.trim()]);
      setNewKeyword('');
    }
  };

  const removeKeyword = (keyword: string) => {
    updateFormData('recommendedInformation.keywords', data.keywords.filter(k => k !== keyword));
  };

  const addLanguage = () => {
    if (newLanguage.trim() && !data.languages.includes(newLanguage.trim())) {
      updateFormData('recommendedInformation.languages', [...data.languages, newLanguage.trim()]);
      setNewLanguage('');
    }
  };

  const removeLanguage = (language: string) => {
    updateFormData('recommendedInformation.languages', data.languages.filter(l => l !== language));
  };

  const handleKeywordKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addKeyword();
    }
  };

  const handleLanguageKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addLanguage();
    }
  };

  return (
    <div className="space-y-8">
      {/* Contributors */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="block text-sm font-medium text-gray-700">
            Contributors
          </label>
          <button
            onClick={() => addArrayItem('recommendedInformation.contributors', {
              name: '',
              role: 'Other',
              identifier: ''
            })}
            className="flex items-center space-x-1 text-sm text-vedra-hunter hover:text-vedra-hunter/80"
          >
            <Plus className="w-4 h-4" />
            <span>Add Contributor</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {data.contributors.map((contributor, index) => (
            <div key={contributor.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">Contributor {index + 1}</span>
                <button
                  onClick={() => removeArrayItem('recommendedInformation.contributors', contributor.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={contributor.name}
                    onChange={(e) => updateArrayItem('recommendedInformation.contributors', contributor.id, {
                      name: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Role</label>
                  <select
                    value={contributor.role}
                    onChange={(e) => updateArrayItem('recommendedInformation.contributors', contributor.id, {
                      role: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
                  >
                    {contributorRoles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Identifier</label>
                  <input
                    type="text"
                    placeholder="ORCID, ISNI, etc."
                    value={contributor.identifier || ''}
                    onChange={(e) => updateArrayItem('recommendedInformation.contributors', contributor.id, {
                      identifier: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keywords and Subjects */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Keywords and Subjects
        </label>
        
        {/* Add new keyword */}
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="Search for a subject by name"
            value={newKeyword}
            onChange={(e) => setNewKeyword(e.target.value)}
            onKeyPress={handleKeywordKeyPress}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
          />
          <button
            onClick={addKeyword}
            className="px-4 py-2 bg-vedra-hunter text-white rounded-md hover:bg-vedra-hunter/90 transition-colors"
          >
            Add
          </button>
        </div>
        
        {/* Keywords list */}
        <div className="flex flex-wrap gap-2">
          {data.keywords.map((keyword, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
            >
              {keyword}
              <button
                onClick={() => removeKeyword(keyword)}
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Languages
        </label>
        
        {/* Add new language */}
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="English, Hindi, etc."
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
            onKeyPress={handleLanguageKeyPress}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
          />
          <button
            onClick={addLanguage}
            className="px-4 py-2 bg-vedra-hunter text-white rounded-md hover:bg-vedra-hunter/90 transition-colors"
          >
            Add
          </button>
        </div>
        
        {/* Languages list */}
        <div className="flex flex-wrap gap-2">
          {data.languages.map((language, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800"
            >
              {language}
              <button
                onClick={() => removeLanguage(language)}
                className="ml-2 text-green-600 hover:text-green-800"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Dates */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="block text-sm font-medium text-gray-700">
            Dates
          </label>
          <button
            onClick={() => addArrayItem('recommendedInformation.dates', {
              value: '',
              type: 'Created',
              description: ''
            })}
            className="flex items-center space-x-1 text-sm text-vedra-hunter hover:text-vedra-hunter/80"
          >
            <Plus className="w-4 h-4" />
            <span>Add Date</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {data.dates.map((date, index) => (
            <div key={date.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">Date {index + 1}</span>
                <button
                  onClick={() => removeArrayItem('recommendedInformation.dates', date.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Date</label>
                  <input
                    type="text"
                    placeholder="YYYY-MM-DD or YYYY-MM-DD/YYYY-MM-DD"
                    value={date.value}
                    onChange={(e) => updateArrayItem('recommendedInformation.dates', date.id, {
                      value: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Type</label>
                  <select
                    value={date.type}
                    onChange={(e) => updateArrayItem('recommendedInformation.dates', date.id, {
                      type: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
                  >
                    {dateTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Description</label>
                  <input
                    type="text"
                    placeholder="Optional description"
                    value={date.description || ''}
                    onChange={(e) => updateArrayItem('recommendedInformation.dates', date.id, {
                      description: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Version */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Version
        </label>
        <input
          type="text"
          placeholder="1.0.0"
          value={data.version}
          onChange={(e) => updateFormData('recommendedInformation.version', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
        />
        <p className="text-xs text-gray-500 mt-1">
          Semantic version preferred (semver.org), but any string accepted
        </p>
      </div>

      {/* Publisher */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Publisher
        </label>
        <input
          type="text"
          placeholder="Publisher name"
          value={data.publisher}
          onChange={(e) => updateFormData('recommendedInformation.publisher', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
        />
        <p className="text-xs text-gray-500 mt-1">
          Used to formulate the citation, consider prominence of the role
        </p>
      </div>
    </div>
  );
};

export default RecommendedInfoSection;
