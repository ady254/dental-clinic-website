import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Show button after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Hide tooltip after 10 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Dr. Chen! I would like to schedule a dental consultation. Please let me know your availability."
    );
    window.open(`https://wa.me/15551234567?text=${message}`, '_blank');
  };

  const hideTooltip = () => {
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 max-w-xs border animate-bounce">
          <button 
            onClick={hideTooltip}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="pr-4">
            <h4 className="font-semibold text-gray-900 text-sm mb-1">Need Quick Help?</h4>
            <p className="text-gray-600 text-xs">
              Chat with us on WhatsApp for instant support and appointment booking!
            </p>
          </div>
          {/* Speech bubble arrow */}
          <div className="absolute bottom-[-8px] right-6 w-4 h-4 bg-white border-b border-r border-gray-200 transform rotate-45"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:animate-pulse" />
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></div>
      </button>

      {/* Status indicator */}
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse border-2 border-white"></div>
    </div>
  );
};

export default WhatsAppButton;