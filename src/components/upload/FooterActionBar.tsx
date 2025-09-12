import React from 'react';
import { Save, Eye, Share, Globe, Lock, Calendar } from 'lucide-react';

interface VisibilityData {
  level: string;
  embargo: {
    enabled: boolean;
    until: string;
    reason: string;
  };
}

interface FooterActionBarProps {
  visibility: VisibilityData;
  onVisibilityChange: (level: string) => void;
  onSaveDraft: () => void;
  onPreview: () => void;
  onPublish: () => void;
  onShare: () => void;
  updateFormData: (path: string, value: any) => void;
}

const FooterActionBar: React.FC<FooterActionBarProps> = ({
  visibility,
  onVisibilityChange,
  onSaveDraft,
  onPreview,
  onPublish,
  onShare,
  updateFormData
}) => {
  const visibilityOptions = [
    { value: 'Files only', label: 'Files only', icon: <Lock className="w-4 h-4" /> },
    { value: 'Public', label: 'Public', icon: <Globe className="w-4 h-4" /> },
    { value: 'Restricted', label: 'Restricted', icon: <Lock className="w-4 h-4" /> }
  ];

  const handleEmbargoToggle = (enabled: boolean) => {
    updateFormData('visibility.embargo.enabled', enabled);
    if (!enabled) {
      updateFormData('visibility.embargo.until', '');
      updateFormData('visibility.embargo.reason', '');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Mobile Layout */}
        <div className="block lg:hidden space-y-4">
          {/* Action buttons - Mobile */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onSaveDraft}
              className="flex items-center justify-center space-x-2 px-3 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm"
            >
              <Save className="w-4 h-4" />
              <span>Save Draft</span>
            </button>
            
            <button
              onClick={onPreview}
              className="flex items-center justify-center space-x-2 px-3 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm"
            >
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </button>
            
            <button
              onClick={onPublish}
              className="flex items-center justify-center space-x-2 px-3 py-2 bg-vedra-hunter text-white rounded-lg hover:bg-vedra-hunter/90 transition-colors text-sm col-span-2"
            >
              <span>Publish</span>
            </button>
            
            <button
              onClick={onShare}
              className="flex items-center justify-center space-x-2 px-3 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm col-span-2"
            >
              <Share className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          {/* Visibility - Mobile */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Visibility:</span>
            </div>
            <div className="flex space-x-2 overflow-x-auto">
              {visibilityOptions.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg cursor-pointer transition-colors whitespace-nowrap ${
                    visibility.level === option.value
                      ? 'bg-vedra-hunter text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="visibility"
                    value={option.value}
                    checked={visibility.level === option.value}
                    onChange={(e) => onVisibilityChange(e.target.value)}
                    className="sr-only"
                  />
                  {option.icon}
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Embargo - Mobile */}
          <div className="flex items-center space-x-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={visibility.embargo.enabled}
                onChange={(e) => handleEmbargoToggle(e.target.checked)}
                disabled={visibility.level !== 'Restricted'}
                className="w-4 h-4 text-vedra-hunter border-gray-300 rounded focus:ring-vedra-hunter disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <span className={`text-sm ${visibility.level !== 'Restricted' ? 'text-gray-400' : 'text-gray-700'}`}>
                Apply embargo
              </span>
            </label>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Left side - Action buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onSaveDraft}
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Save Draft</span>
            </button>
            
            <button
              onClick={onPreview}
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </button>
            
            <button
              onClick={onPublish}
              className="flex items-center space-x-2 px-6 py-2 bg-vedra-hunter text-white rounded-lg hover:bg-vedra-hunter/90 transition-colors"
            >
              <span>Publish</span>
            </button>
            
            <button
              onClick={onShare}
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Share className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          {/* Right side - Visibility and Embargo controls */}
          <div className="flex items-center space-x-6">
            {/* Visibility */}
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-700">Visibility:</span>
              <div className="flex space-x-2">
                {visibilityOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                      visibility.level === option.value
                        ? 'bg-vedra-hunter text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="visibility"
                      value={option.value}
                      checked={visibility.level === option.value}
                      onChange={(e) => onVisibilityChange(e.target.value)}
                      className="sr-only"
                    />
                    {option.icon}
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Embargo */}
            <div className="flex items-center space-x-3">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={visibility.embargo.enabled}
                  onChange={(e) => handleEmbargoToggle(e.target.checked)}
                  disabled={visibility.level !== 'Restricted'}
                  className="w-4 h-4 text-vedra-hunter border-gray-300 rounded focus:ring-vedra-hunter disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <span className={`text-sm ${visibility.level !== 'Restricted' ? 'text-gray-400' : 'text-gray-700'}`}>
                  Apply embargo
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Embargo details - shown when embargo is enabled */}
        {visibility.embargo.enabled && visibility.level === 'Restricted' && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Embargo Until
                </label>
                <input
                  type="date"
                  value={visibility.embargo.until}
                  onChange={(e) => updateFormData('visibility.embargo.until', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason
                </label>
                <input
                  type="text"
                  placeholder="Reason for embargo"
                  value={visibility.embargo.reason}
                  onChange={(e) => updateFormData('visibility.embargo.reason', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}

        {/* Helper text for embargo */}
        {visibility.level !== 'Restricted' && (
          <div className="mt-2">
            <p className="text-xs text-gray-500">
              Record or files protection must be restricted to apply an embargo.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FooterActionBar;
