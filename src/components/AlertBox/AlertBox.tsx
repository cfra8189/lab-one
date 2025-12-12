// AlertBox component implementation will go here
import React from 'react';
import type { AlertBoxProps } from '../../types';

export const AlertBox: React.FC<AlertBoxProps> = ({
  type,
  message,
  onClose,
  children
}) => {
  // Define color schemes for different alert types
  const alertStyles = {
    success: 'bg-white/70 border-green-500 text-green-700',
    error: 'bg-white/70 border-red-500 text-red-700',
    warning: 'bg-white/70 border-yellow-500 text-yellow-700',
    info: 'bg-white/70 border-blue-500 text-blue-700'
  };

  return (
    <div className={`p-4 border-l-4 ${alertStyles[type]} rounded-md`}>
      <div className="flex justify-between items-center">
        <p className="font-medium">{message}</p>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            aria-label="Close alert"
          >
            ×
          </button>
        )}
      </div>
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default AlertBox;
