
import React from 'react';
import { Mail, Phone } from 'lucide-react';

interface LoginMethodToggleProps {
  loginMethod: 'email' | 'phone';
  selectedRole: 'patient' | 'doctor';
  onMethodChange: (method: 'email' | 'phone') => void;
}

const LoginMethodToggle: React.FC<LoginMethodToggleProps> = ({ 
  loginMethod, 
  selectedRole, 
  onMethodChange 
}) => {
  return (
    <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
      <button
        type="button"
        onClick={() => onMethodChange('email')}
        className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-all ${
          loginMethod === 'email' 
            ? `bg-white ${selectedRole === 'patient' ? 'text-blue-600' : 'text-green-600'} shadow-sm` 
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        <Mail className="w-4 h-4" />
        Email
      </button>
      <button
        type="button"
        onClick={() => onMethodChange('phone')}
        className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-all ${
          loginMethod === 'phone' 
            ? `bg-white ${selectedRole === 'patient' ? 'text-blue-600' : 'text-green-600'} shadow-sm` 
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        <Phone className="w-4 h-4" />
        Phone
      </button>
    </div>
  );
};

export default LoginMethodToggle;
