import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Eye,
  Edit,
  Trash2,
  TrendingUp,
  Users,
  FileText,
  Globe,
  Settings,
  Bell,
  User,
  LogOut,
  ArrowLeft
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const stats = [
    {
      title: "Total DOIs",
      value: "1,247",
      change: "+12%",
      icon: <BookOpen className="w-6 h-6" />,
      color: "text-blue-600"
    },
    {
      title: "This Month",
      value: "89",
      change: "+8%",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-green-600"
    },
    {
      title: "Active Users",
      value: "156",
      change: "+5%",
      icon: <Users className="w-6 h-6" />,
      color: "text-purple-600"
    },
    {
      title: "Global Reach",
      value: "45",
      change: "+15%",
      icon: <Globe className="w-6 h-6" />,
      color: "text-orange-600"
    }
  ];

  const recentDOIs = [
    {
      id: "10.1234/vedra.2024.001",
      title: "Machine Learning Applications in Healthcare",
      author: "Dr. Rajesh Kumar",
      date: "2024-01-15",
      status: "active",
      views: 245
    },
    {
      id: "10.1234/vedra.2024.002",
      title: "Sustainable Energy Solutions for Rural India",
      author: "Dr. Priya Sharma",
      date: "2024-01-14",
      status: "active",
      views: 189
    },
    {
      id: "10.1234/vedra.2024.003",
      title: "Digital Transformation in Education",
      author: "Prof. Amit Patel",
      date: "2024-01-13",
      status: "pending",
      views: 0
    },
    {
      id: "10.1234/vedra.2024.004",
      title: "Climate Change Impact on Agriculture",
      author: "Dr. Meera Singh",
      date: "2024-01-12",
      status: "active",
      views: 312
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'dois', name: 'My DOIs', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'analytics', name: 'Analytics', icon: <FileText className="w-5 h-5" /> },
    { id: 'settings', name: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderOverviewTab = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center ${stat.color}`}>
                {stat.icon}
              </div>
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View All
          </button>
        </div>
        
        <div className="space-y-4">
          {recentDOIs.slice(0, 3).map((doi, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-vedra-hunter to-vedra-calpoly rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white/90" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{doi.title}</h4>
                  <p className="text-sm text-gray-600">{doi.author}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{doi.id}</p>
                <p className="text-xs text-gray-500">{doi.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">DOI Growth</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">This Week</span>
              <span className="font-medium">12 DOIs</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">This Month</span>
              <span className="font-medium">89 DOIs</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">This Year</span>
              <span className="font-medium">1,247 DOIs</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Performance</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Average Views</span>
              <span className="font-medium">156</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Citations</span>
              <span className="font-medium">23</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Downloads</span>
              <span className="font-medium">89</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderDOIsTab = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
              <input
                type="text"
                placeholder="Search DOIs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New DOI</span>
          </button>
        </div>
      </div>

      {/* DOIs Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  DOI
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentDOIs.map((doi, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {doi.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {doi.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {doi.author}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {doi.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(doi.status)}`}>
                      {doi.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {doi.views}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-primary-600 hover:text-primary-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );

  const renderAnalyticsTab = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Analytics Dashboard</h2>
        <p className="text-gray-600">Detailed analytics and insights coming soon...</p>
      </div>
    </motion.div>
  );

  const renderSettingsTab = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Account Settings</h2>
        <p className="text-gray-600">Account settings and preferences coming soon...</p>
      </div>
    </motion.div>
  );

  return (
    <div className="dashboard-wrapper min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-vedra-floral shadow-sm border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Link to="/" className="hover:bg-white/50 p-2 rounded-lg transition-colors">
                <ArrowLeft className="w-6 h-6 text-vedra-night" />
              </Link>
              <div className="flex items-center space-x-3">
                <img 
                  src="/vedrawebsite_transparent.png" 
                  alt="mVEDRA Icon" 
                  className="h-10 w-auto"
                />
                <div className="flex items-center">
                  <span className="font-jsmath text-2xl text-black mt-1">m</span>
                  <span className="font-inter text-2xl font-bold text-black">Vedra</span>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-vedra-night font-ibm-plex">mVEDRA Dashboard</h1>
                <p className="text-sm text-neutral-600 font-inter">Welcome back, Dr. Rajesh Kumar</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-neutral-600 hover:text-vedra-night hover:bg-white/50 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-vedra-hunter to-vedra-calpoly rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white/90" />
                </div>
                <button className="p-2 text-neutral-600 hover:text-vedra-night hover:bg-white/50 rounded-lg transition-colors">
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <Plus className="w-4 h-4" />
                    <span>Create New DOI</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Export Data</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <Settings className="w-4 h-4" />
                    <span>Account Settings</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && renderOverviewTab()}
            {activeTab === 'dois' && renderDOIsTab()}
            {activeTab === 'analytics' && renderAnalyticsTab()}
            {activeTab === 'settings' && renderSettingsTab()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 