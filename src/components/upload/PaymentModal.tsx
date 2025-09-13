import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Smartphone } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, amount }) => {
  const [selectedMethod, setSelectedMethod] = useState<'qr' | 'upi'>('qr');
  const [upiId, setUpiId] = useState('');

  const handleContinue = () => {
    // Handle payment processing
    console.log('Processing payment:', { method: selectedMethod, amount, upiId });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-vedra-hunter rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Vedra Store</h2>
                  <div className="flex items-center space-x-1 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-600 font-medium">Trusted Business</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Order Info */}
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Smartphone className="w-4 h-4" />
                <span>1,000+ payments made to mVedra last month</span>
              </div>
            </div>

            {/* Payment Content */}
            <div className="p-6">
              {/* Payment Method Tabs */}
              <div className="flex space-x-4 mb-6">
                <button
                  onClick={() => setSelectedMethod('qr')}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                    selectedMethod === 'qr'
                      ? 'bg-vedra-hunter text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  UPI QR
                </button>
                <button
                  onClick={() => setSelectedMethod('upi')}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                    selectedMethod === 'upi'
                      ? 'bg-vedra-hunter text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  UPI ID
                </button>
              </div>

              {/* UPI QR Section */}
              {selectedMethod === 'qr' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-block p-4 bg-white border-2 border-gray-200 rounded-lg">
                      {/* QR Code Image */}
                      <img
                        src="/ajeant's-upi-qr.png"
                        alt="UPI QR Code"
                        className="w-48 h-48"
                      />
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 mb-2">Scan the QR using any UPI App</p>
                      
                      {/* UPI App Logos */}
                      <div className="flex justify-center space-x-3 mb-4">
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">P</span>
                          </div>
                          <span>Paytm</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">G</span>
                          </div>
                          <span>Google Pay</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">B</span>
                          </div>
                          <span>BHIM</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">P</span>
                          </div>
                          <span>PhonePe</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <div className="w-6 h-6 bg-orange-400 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">A</span>
                          </div>
                          <span>Amazon Pay</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timer
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Valid for 11:14</span>
                  </div> */}
                </div>
              )}

              {/* UPI ID Section */}
              {selectedMethod === 'upi' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pay with UPI ID / Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="example@okhdfcbank"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vedra-hunter focus:border-transparent"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                          <div className="w-4 h-4 border border-gray-400"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="text-lg font-semibold text-gray-900">₹{amount}</p>
                  <button className="text-sm text-vedra-hunter hover:underline">
                    View Details
                  </button>
                </div>
                <button
                  onClick={handleContinue}
                  className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Continue
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;
