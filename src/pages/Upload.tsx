import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Upload as UploadIcon, 
  X, 
  CheckCircle, 
  AlertCircle,
  FileText,
  Users,
  Tag,
  Award,
  BookOpen,
  Settings
} from 'lucide-react';
import BasicInfoSection from '../components/upload/BasicInfoSection';
import RecommendedInfoSection from '../components/upload/RecommendedInfoSection';
import FundingSection from '../components/upload/FundingSection';
import ReferencesSection from '../components/upload/ReferencesSection';
import PublishingInfoSection from '../components/upload/PublishingInfoSection';
import FooterActionBar from '../components/upload/FooterActionBar';
import PreviewModal from '../components/upload/PreviewModal';

// Types
interface FileItem {
  id: string;
  name: string;
  size: number;
  status: 'queued' | 'uploading' | 'done' | 'error';
  progress: number;
}

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

interface AwardItem {
  id: string;
  mode: 'standard' | 'custom';
  funderName?: string;
  awardNumber?: string;
  awardTitle?: string;
  text?: string;
}

interface ReferenceItem {
  id: string;
  reference: string;
}

interface FormData {
  files: FileItem[];
  basicInformation: {
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
  };
  recommendedInformation: {
    contributors: ContributorItem[];
    keywords: string[];
    languages: string[];
    dates: DateItem[];
    version: string;
    publisher: string;
  };
  funding: {
    awards: AwardItem[];
  };
  references: ReferenceItem[];
  publishingInformation: {
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
  };
  visibility: {
    level: string;
    embargo: {
      enabled: boolean;
      until: string;
      reason: string;
    };
  };
}

const Upload: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Initialize form data
  const [formData, setFormData] = useState<FormData>({
    files: [],
    basicInformation: {
      doi: { hasExisting: false, value: '' },
      resourceType: 'Dataset',
      titles: [{ id: '1', title: '', type: 'main' }],
      publicationDate: '',
      creators: [{ id: '1', name: '' }],
      descriptions: [{ id: '1', text: '', type: 'abstract' }],
      licenses: [{
        id: '1',
        scheme: 'spdx',
        id_license: 'CC-BY-4.0',
        name: 'Creative Commons Attribution 4.0 International',
        url: 'https://creativecommons.org/licenses/by/4.0/'
      }],
      copyright: ''
    },
    recommendedInformation: {
      contributors: [],
      keywords: [],
      languages: ['eng'],
      dates: [],
      version: '',
      publisher: ''
    },
    funding: {
      awards: []
    },
    references: [],
    publishingInformation: {
      journal: {
        title: '',
        issn: '',
        volume: '',
        issue: '',
        pagesOrArticleNumber: ''
      },
      imprint: {
        title: '',
        isbn: '',
        place: '',
        pagination: '',
        edition: ''
      },
      thesis: {
        awardingUniversity: '',
        awardingDepartment: '',
        type: '',
        submissionDate: '',
        defenseDate: ''
      }
    },
    visibility: {
      level: 'Public',
      embargo: {
        enabled: false,
        until: '',
        reason: ''
      }
    }
  });

  // Section states
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['files']));
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [showPreview, setShowPreview] = useState(false);

  // Helper functions
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const generateId = (): string => {
    return Math.random().toString(36).substr(2, 9);
  };

  const toggleSection = (section: string) => {
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(section)) {
      newOpenSections.delete(section);
    } else {
      newOpenSections.add(section);
    }
    setOpenSections(newOpenSections);
  };

  const isSectionComplete = (section: string): boolean => {
    switch (section) {
      case 'basic':
        return (
          formData.basicInformation.titles.some((t: any) => !!t.title.trim()) &&
          formData.basicInformation.creators.some((c: any) => !!c.name.trim()) &&
          (!formData.basicInformation.doi.hasExisting || !!formData.basicInformation.doi.value.trim())
        );
      default:
        return true;
    }
  };

  // File handling
  const addFiles = useCallback((files: File[]) => {
    const newFiles: FileItem[] = files.map(file => ({
      id: generateId(),
      name: file.name,
      size: file.size,
      status: 'queued' as const,
      progress: 0
    }));

    const updatedFiles = [...formData.files, ...newFiles];
    
    // Check limits
    const totalFiles = updatedFiles.length;
    const totalSize = updatedFiles.reduce((sum, file) => sum + file.size, 0);
    
    if (totalFiles > 100) {
      alert('Maximum 100 files allowed');
      return;
    }
    
    if (totalSize > 50 * 1024 * 1024 * 1024) { // 50GB
      alert('Maximum 50GB storage exceeded');
      return;
    }

    setFormData(prev => ({
      ...prev,
      files: updatedFiles
    }));
  }, [formData.files]);

  const removeFile = (fileId: string) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter(f => f.id !== fileId)
    }));
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    addFiles(files);
  }, [addFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    addFiles(files);
  };

  // Form handlers
  const updateFormData = (path: string, value: any) => {
    setFormData(prev => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current: any = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const addArrayItem = (path: string, item: any) => {
    setFormData(prev => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current: any = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = [...current[keys[keys.length - 1]], { ...item, id: generateId() }];
      return newData;
    });
  };

  const removeArrayItem = (path: string, id: string) => {
    setFormData(prev => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current: any = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = current[keys[keys.length - 1]].filter((item: any) => item.id !== id);
      return newData;
    });
  };

  const updateArrayItem = (path: string, id: string, updates: any) => {
    setFormData(prev => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current: any = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      
      const array = current[keys[keys.length - 1]];
      const index = array.findIndex((item: any) => item.id === id);
      if (index !== -1) {
        array[index] = { ...array[index], ...updates };
      }
      return newData;
    });
  };

  // Action handlers
  const handleSaveDraft = () => {
    // Demo: show toast
    alert('Draft saved (demo)');
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handlePublish = () => {
    const errors: string[] = [];
    
    // Validate basic information
    if (!formData.basicInformation.titles.some(t => t.title.trim())) {
      errors.push('At least one title is required');
    }
    
    if (!formData.basicInformation.creators.some(c => c.name.trim())) {
      errors.push('At least one creator is required');
    }
    
    if (formData.basicInformation.doi.hasExisting && !formData.basicInformation.doi.value.trim()) {
      errors.push('DOI is required when "Yes, I already have one" is selected');
    }
    
    if (errors.length > 0) {
      alert('Validation errors:\n' + errors.join('\n'));
      return;
    }
    
    alert('Publish functionality not implemented in demo');
  };

  const handleShare = () => {
    navigator.clipboard.writeText('https://vedra.com/publication/demo-link');
    alert('Share link copied to clipboard (demo)');
  };

  const handleVisibilityChange = (level: string) => {
    updateFormData('visibility.level', level);
    if (level !== 'Restricted') {
      updateFormData('visibility.embargo.enabled', false);
      updateFormData('visibility.embargo.until', '');
      updateFormData('visibility.embargo.reason', '');
    }
  };

  // Calculate storage usage
  const totalFiles = formData.files.length;
  const totalSize = formData.files.reduce((sum, file) => sum + file.size, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">Upload New Publication</h1>
          <p className="text-gray-600 mt-1">Create and manage your research publications</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 pb-32">
        {/* Community Selector Placeholder */}
        <div className="mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-gray-400" />
              <span className="text-gray-500">Community: Default Community (placeholder)</span>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {/* Files Section */}
          <SectionAccordion
            title="Files"
            icon={<FileText className="w-5 h-5" />}
            isOpen={openSections.has('files')}
            onToggle={() => toggleSection('files')}
            isComplete={true}
          >
            <FilesSection
              files={formData.files}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              isDragOver={isDragOver}
              onFileInput={handleFileInput}
              onFileSelect={handleFileSelect}
              fileInputRef={fileInputRef}
              onRemoveFile={removeFile}
              totalFiles={totalFiles}
              totalSize={totalSize}
              formatFileSize={formatFileSize}
            />
          </SectionAccordion>

          {/* Basic Information Section */}
          <SectionAccordion
            title="Basic Information"
            icon={<FileText className="w-5 h-5" />}
            isOpen={openSections.has('basic')}
            onToggle={() => toggleSection('basic')}
            isComplete={isSectionComplete('basic')}
          >
            <BasicInfoSection
              data={formData.basicInformation}
              updateFormData={updateFormData}
              addArrayItem={addArrayItem}
              removeArrayItem={removeArrayItem}
              updateArrayItem={updateArrayItem}
              generateId={generateId}
            />
          </SectionAccordion>

          {/* Recommended Information Section */}
          <SectionAccordion
            title="Recommended Information"
            icon={<Tag className="w-5 h-5" />}
            isOpen={openSections.has('recommended')}
            onToggle={() => toggleSection('recommended')}
            isComplete={true}
          >
            <RecommendedInfoSection
              data={formData.recommendedInformation}
              updateFormData={updateFormData}
              addArrayItem={addArrayItem}
              removeArrayItem={removeArrayItem}
              updateArrayItem={updateArrayItem}
              generateId={generateId}
            />
          </SectionAccordion>

          {/* Funding Section */}
          <SectionAccordion
            title="Funding"
            icon={<Award className="w-5 h-5" />}
            isOpen={openSections.has('funding')}
            onToggle={() => toggleSection('funding')}
            isComplete={true}
          >
            <FundingSection
              data={formData.funding}
              updateFormData={updateFormData}
              addArrayItem={addArrayItem}
              removeArrayItem={removeArrayItem}
              updateArrayItem={updateArrayItem}
              generateId={generateId}
            />
          </SectionAccordion>

          {/* References Section */}
          <SectionAccordion
            title="References"
            icon={<BookOpen className="w-5 h-5" />}
            isOpen={openSections.has('references')}
            onToggle={() => toggleSection('references')}
            isComplete={true}
          >
            <ReferencesSection
              data={{ references: formData.references }}
              addArrayItem={addArrayItem}
              removeArrayItem={removeArrayItem}
              updateArrayItem={updateArrayItem}
              generateId={generateId}
            />
          </SectionAccordion>

          {/* Publishing Information Section */}
          <SectionAccordion
            title="Publishing Information"
            icon={<Settings className="w-5 h-5" />}
            isOpen={openSections.has('publishing')}
            onToggle={() => toggleSection('publishing')}
            isComplete={true}
          >
            <PublishingInfoSection
              data={formData.publishingInformation}
              updateFormData={updateFormData}
            />
          </SectionAccordion>
        </div>
      </div>

      {/* Footer Action Bar */}
      <FooterActionBar
        visibility={formData.visibility}
        onVisibilityChange={handleVisibilityChange}
        onSaveDraft={handleSaveDraft}
        onPreview={handlePreview}
        onPublish={handlePublish}
        onShare={handleShare}
        updateFormData={updateFormData}
      />

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <PreviewModal
            data={formData}
            onClose={() => setShowPreview(false)}
            formatFileSize={formatFileSize}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Section Accordion Component
interface SectionAccordionProps {
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  isComplete: boolean;
  children: React.ReactNode;
}

const SectionAccordion: React.FC<SectionAccordionProps> = ({
  title,
  icon,
  isOpen,
  onToggle,
  isComplete,
  children
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            {icon}
            <span className="font-semibold text-gray-900">{title}</span>
          </div>
          <div className="flex items-center space-x-2">
            {isComplete ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <AlertCircle className="w-4 h-4 text-amber-500" />
            )}
            <span className={`text-sm ${isComplete ? 'text-green-600' : 'text-amber-600'}`}>
              {isComplete ? 'Complete' : 'Incomplete'}
            </span>
          </div>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-6 border-t border-gray-100">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Files Section Component
interface FilesSectionProps {
  files: FileItem[];
  onDrop: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  isDragOver: boolean;
  onFileInput: () => void;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onRemoveFile: (id: string) => void;
  totalFiles: number;
  totalSize: number;
  formatFileSize: (bytes: number) => string;
}

const FilesSection: React.FC<FilesSectionProps> = ({
  files,
  onDrop,
  onDragOver,
  onDragLeave,
  isDragOver,
  onFileInput,
  onFileSelect,
  fileInputRef,
  onRemoveFile,
  totalFiles,
  totalSize,
  formatFileSize
}) => {
  return (
    <div>
      {/* Storage Summary */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm text-gray-600">Files</div>
          <div className="text-2xl font-semibold text-gray-900">{totalFiles} / 100</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm text-gray-600">Storage</div>
          <div className="text-2xl font-semibold text-gray-900">{formatFileSize(totalSize)} / 50.00 GB</div>
        </div>
      </div>

      {/* Drop Zone */}
      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragOver
            ? 'border-vedra-hunter bg-vedra-hunter/5'
            : 'border-gray-300 hover:border-gray-400'
        }`}
      >
        <UploadIcon className="w-12 h-12 mx-auto text-gray-400 mb-4" />
        <p className="text-lg font-medium text-gray-900 mb-2">Drop files here</p>
        <p className="text-gray-500 mb-4">or</p>
        <button
          onClick={onFileInput}
          className="bg-vedra-hunter text-white px-6 py-2 rounded-lg hover:bg-vedra-hunter/90 transition-colors"
        >
          Upload Files
        </button>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Uploaded Files</h3>
          <div className="space-y-2">
            {files.map((file) => (
              <FileListItem
                key={file.id}
                file={file}
                onRemove={() => onRemoveFile(file.id)}
                formatFileSize={formatFileSize}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// File List Item Component
interface FileListItemProps {
  file: FileItem;
  onRemove: () => void;
  formatFileSize: (bytes: number) => string;
}

const FileListItem: React.FC<FileListItemProps> = ({ file, onRemove, formatFileSize }) => {
  const getStatusColor = () => {
    switch (file.status) {
      case 'done': return 'text-green-600';
      case 'error': return 'text-red-600';
      case 'uploading': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = () => {
    switch (file.status) {
      case 'done': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'error': return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'uploading': return <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />;
      default: return <div className="w-4 h-4 bg-gray-300 rounded-full" />;
    }
  };

  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-3">
        {getStatusIcon()}
        <div>
          <div className="font-medium text-gray-900">{file.name}</div>
          <div className="text-sm text-gray-500">{formatFileSize(file.size)}</div>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        {file.status === 'uploading' && (
          <div className="w-20">
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${file.progress}%` }}
              />
            </div>
          </div>
        )}
        
        <span className={`text-sm ${getStatusColor()}`}>
          {file.status.charAt(0).toUpperCase() + file.status.slice(1)}
        </span>
        
        <button
          onClick={onRemove}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Upload;
