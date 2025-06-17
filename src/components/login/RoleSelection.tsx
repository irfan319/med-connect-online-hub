
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, ArrowLeft, User, Stethoscope } from 'lucide-react';

interface RoleSelectionProps {
  onRoleSelect: (role: 'patient' | 'doctor') => void;
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ onRoleSelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100 flex items-center justify-center p-4">
      {/* Medical Team Illustration */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <div className="relative">
          <div className="w-96 h-96 bg-white rounded-full flex items-center justify-center shadow-xl animate-pulse-gentle">
            <img 
              src="/lovable-uploads/15b648b5-6dd2-4582-ae62-6df83e40846a.png" 
              alt="Medical Team" 
              className="w-80 h-80 object-contain animate-float"
            />
          </div>
          {/* Floating medical icons */}
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center animate-bounce-slow">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-xl">+</span>
          </div>
        </div>
      </div>

      {/* Role Selection */}
      <div className="w-full max-w-md lg:w-1/2 flex items-center justify-center">
        <Card className="w-full max-w-sm shadow-2xl border-0 bg-white/95 backdrop-blur-sm animate-scale-in">
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="bg-purple-500 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-purple-600">Lifeline</span>
            </div>
            <CardTitle className="text-2xl text-gray-800 mb-2">Welcome to Lifeline</CardTitle>
            <p className="text-gray-600 text-sm">Please select your role to continue</p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Patient Role Button */}
            <button
              onClick={() => onRoleSelect('patient')}
              className="w-full p-6 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <User className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold">Patient</h3>
                  <p className="text-blue-100 text-sm">Access your health records</p>
                </div>
              </div>
            </button>

            {/* Doctor Role Button */}
            <button
              onClick={() => onRoleSelect('doctor')}
              className="w-full p-6 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold">Doctor</h3>
                  <p className="text-green-100 text-sm">Manage patient care</p>
                </div>
              </div>
            </button>

            {/* Back to Home */}
            <div className="text-center pt-4">
              <Link to="/" className="text-purple-600 hover:text-purple-700 text-sm transition-colors">
                <ArrowLeft className="w-4 h-4 inline mr-1" />
                Back to Homepage
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoleSelection;
