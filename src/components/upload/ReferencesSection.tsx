import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface ReferenceItem {
  id: string;
  reference: string;
}

interface ReferencesData {
  references: ReferenceItem[];
}

interface ReferencesSectionProps {
  data: ReferencesData;
  addArrayItem: (path: string, item: any) => void;
  removeArrayItem: (path: string, id: string) => void;
  updateArrayItem: (path: string, id: string, updates: any) => void;
  generateId: () => string;
}

const ReferencesSection: React.FC<ReferencesSectionProps> = ({
  data,
  addArrayItem,
  removeArrayItem,
  updateArrayItem
}) => {
  return (
    <div className="space-y-6">
      {/* References */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="block text-sm font-medium text-gray-700">
            References
          </label>
          <button
            onClick={() => addArrayItem('references', {
              reference: ''
            })}
            className="flex items-center space-x-1 text-sm text-vedra-hunter hover:text-vedra-hunter/80"
          >
            <Plus className="w-4 h-4" />
            <span>Add Reference</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {data.references.map((reference, index) => (
            <div key={reference.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">Reference {index + 1}</span>
                <button
                  onClick={() => removeArrayItem('references', reference.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              
              <textarea
                placeholder="Doe, J. (2020). Title. Journal, 10(2), 100–110. https://doi.org/10.1234/example"
                value={reference.reference}
                onChange={(e) => updateArrayItem('references', reference.id, {
                  reference: e.target.value
                })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
              />
            </div>
          ))}
        </div>
        
        {data.references.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p>No references added yet.</p>
            <p className="text-sm">Add bibliographic references for related works.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReferencesSection;
