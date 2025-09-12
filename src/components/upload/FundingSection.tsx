import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface AwardItem {
  id: string;
  mode: 'standard' | 'custom';
  funderName?: string;
  awardNumber?: string;
  awardTitle?: string;
  text?: string;
}

interface FundingData {
  awards: AwardItem[];
}

interface FundingSectionProps {
  data: FundingData;
  updateFormData: (path: string, value: any) => void;
  addArrayItem: (path: string, item: any) => void;
  removeArrayItem: (path: string, id: string) => void;
  updateArrayItem: (path: string, id: string, updates: any) => void;
  generateId: () => string;
}

const FundingSection: React.FC<FundingSectionProps> = ({
  data,
  addArrayItem,
  removeArrayItem,
  updateArrayItem
}) => {
  return (
    <div className="space-y-6">
      {/* Awards/Grants */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Awards/Grants
          </label>
          <div className="flex space-x-2">
            <button
              onClick={() => addArrayItem('funding.awards', {
                mode: 'standard',
                funderName: '',
                awardNumber: '',
                awardTitle: ''
              })}
              className="flex items-center space-x-1 text-sm text-vedra-hunter hover:text-vedra-hunter/80"
            >
              <Plus className="w-4 h-4" />
              <span>Add Standard</span>
            </button>
            <button
              onClick={() => addArrayItem('funding.awards', {
                mode: 'custom',
                text: ''
              })}
              className="flex items-center space-x-1 text-sm text-vedra-hunter hover:text-vedra-hunter/80"
            >
              <Plus className="w-4 h-4" />
              <span>Add Custom</span>
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          {data.awards.map((award, index) => (
            <div key={award.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-700">
                  {award.mode === 'standard' ? 'Standard Award' : 'Custom Award'} {index + 1}
                </span>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    award.mode === 'standard' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {award.mode}
                  </span>
                  <button
                    onClick={() => removeArrayItem('funding.awards', award.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {award.mode === 'standard' ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Funder Name</label>
                    <input
                      type="text"
                      placeholder="National Science Foundation"
                      value={award.funderName || ''}
                      onChange={(e) => updateArrayItem('funding.awards', award.id, {
                        funderName: e.target.value
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Award Number</label>
                    <input
                      type="text"
                      placeholder="1234567"
                      value={award.awardNumber || ''}
                      onChange={(e) => updateArrayItem('funding.awards', award.id, {
                        awardNumber: e.target.value
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Award Title</label>
                    <input
                      type="text"
                      placeholder="Project Title"
                      value={award.awardTitle || ''}
                      onChange={(e) => updateArrayItem('funding.awards', award.id, {
                        awardTitle: e.target.value
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Custom Funding Acknowledgement</label>
                  <textarea
                    placeholder="Supported by Example Institute Seed Grant"
                    value={award.text || ''}
                    onChange={(e) => updateArrayItem('funding.awards', award.id, {
                      text: e.target.value
                    })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {data.awards.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p>No funding information added yet.</p>
            <p className="text-sm">Add standard awards with structured data or custom acknowledgements.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FundingSection;
