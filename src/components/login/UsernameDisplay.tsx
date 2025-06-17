
import React from 'react';
import { User, Stethoscope } from 'lucide-react';

interface UsernameDisplayProps {
  displayName: string;
  selectedRole: 'patient' | 'doctor';
}

const UsernameDisplay: React.FC<UsernameDisplayProps> = ({ displayName, selectedRole }) => {
  if (!displayName) return null;

  return (
    <div className={`mt-4 p-3 rounded-lg border-l-4 bg-gradient-to-r from-gray-50 to-gray-100 animate-fade-in ${
      selectedRole === 'patient' ? 'border-blue-500' : 'border-green-500'
    }`}>
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-full ${
          selectedRole === 'patient' ? 'bg-blue-100' : 'bg-green-100'
        }`}>
          {selectedRole === 'patient' ? 
            <User className="w-4 h-4 text-blue-600" /> : 
            <Stethoscope className="w-4 h-4 text-green-600" />
          }
        </div>
        <div className="text-left">
          <p className="text-xs text-gray-500 font-medium">Welcome</p>
          <p className={`font-semibold text-sm ${
            selectedRole === 'patient' ? 'text-blue-700' : 'text-green-700'
          }`}>
            {displayName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UsernameDisplay;
