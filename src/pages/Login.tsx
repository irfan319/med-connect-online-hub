
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { useAuth } from '@/contexts/AuthContext';
import { Heart, ArrowLeft, Phone, Mail, User, Stethoscope, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [selectedRole, setSelectedRole] = useState<'patient' | 'doctor' | null>(null);
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [displayName, setDisplayName] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock user data for demonstration
  const mockUsers = {
    patient: {
      'john.doe@email.com': 'John Doe',
      '+1234567890': 'John Doe',
      'jane.smith@email.com': 'Jane Smith',
      '+0987654321': 'Jane Smith',
    },
    doctor: {
      'dr.sarah@hospital.com': 'Dr. Sarah Johnson',
      '+1122334455': 'Dr. Sarah Johnson',
      'dr.michael@hospital.com': 'Dr. Michael Chen',
      '+5566778899': 'Dr. Michael Chen',
    }
  };

  // Update display name based on email/phone input
  useEffect(() => {
    if (!selectedRole) return;
    
    const identifier = loginMethod === 'email' ? email : phone;
    if (identifier) {
      const userName = mockUsers[selectedRole][identifier];
      setDisplayName(userName || '');
    } else {
      setDisplayName('');
    }
  }, [email, phone, selectedRole, loginMethod]);

  const handleRoleSelect = (role: 'patient' | 'doctor') => {
    setSelectedRole(role);
    setDisplayName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setOtp('');
    setShowOtpInput(false);
  };

  const handleSendOtp = async () => {
    if (!phone) return;
    setIsLoading(true);
    // Simulate OTP sending
    await new Promise(resolve => setTimeout(resolve, 1000));
    setShowOtpInput(true);
    setIsLoading(false);
    toast({
      title: "OTP Sent",
      description: "Please check your phone for the verification code.",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole) return;
    
    setIsLoading(true);

    try {
      const loginEmail = loginMethod === 'email' ? email : `${phone}@temp.com`;
      const success = await login(loginEmail, loginMethod === 'email' ? password : otp, selectedRole);
      if (success) {
        toast({
          title: "Login Successful",
          description: `Welcome back, ${displayName}!`,
        });
        // Navigate to appropriate dashboard based on role
        if (selectedRole === 'patient') {
          navigate('/patient-dashboard');
        } else {
          navigate('/doctor-dashboard');
        }
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Please check your credentials and try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Role Selection Screen
  if (!selectedRole) {
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
                onClick={() => handleRoleSelect('patient')}
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
                onClick={() => handleRoleSelect('doctor')}
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
  }

  // Login Form Screen
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

      {/* Login Card */}
      <div className="w-full max-w-md lg:w-1/2 flex items-center justify-center">
        <Card className="w-full max-w-sm shadow-2xl border-0 bg-white/95 backdrop-blur-sm animate-scale-in">
          <CardHeader className="text-center pb-6">
            {/* Role Header */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className={`p-2 rounded-lg ${selectedRole === 'patient' ? 'bg-blue-500' : 'bg-green-500'}`}>
                {selectedRole === 'patient' ? 
                  <User className="h-6 w-6 text-white" /> : 
                  <Stethoscope className="h-6 w-6 text-white" />
                }
              </div>
              <span className={`text-xl font-bold ${selectedRole === 'patient' ? 'text-blue-600' : 'text-green-600'}`}>
                {selectedRole === 'patient' ? 'Patient Login' : 'Doctor Login'}
              </span>
            </div>
            <CardTitle className="text-2xl text-gray-800 mb-2">Welcome Back</CardTitle>
            <p className="text-gray-600 text-sm">Please enter your credentials to continue</p>
            
            {/* Username Display Section */}
            {displayName && (
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
            )}
            
            {/* Role Switch Button */}
            <button
              onClick={() => setSelectedRole(null)}
              className="text-purple-600 hover:text-purple-700 text-sm mt-2 transition-colors"
            >
              Switch Role
            </button>
          </CardHeader>
          
          <CardContent>
            {/* Login Method Toggle */}
            <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
              <button
                type="button"
                onClick={() => setLoginMethod('email')}
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
                onClick={() => setLoginMethod('phone')}
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

            <form onSubmit={handleSubmit} className="space-y-4">
              {loginMethod === 'email' ? (
                <>
                  {/* Email Login */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className={`w-full border-gray-300 ${selectedRole === 'patient' ? 'focus:border-blue-500' : 'focus:border-green-500'}`}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className={`w-full border-gray-300 ${selectedRole === 'patient' ? 'focus:border-blue-500' : 'focus:border-green-500'}`}
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Phone Login */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className={`w-full border-gray-300 ${selectedRole === 'patient' ? 'focus:border-blue-500' : 'focus:border-green-500'}`}
                    />
                  </div>

                  {!showOtpInput ? (
                    <Button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={isLoading || !phone}
                      className={`w-full ${selectedRole === 'patient' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
                    >
                      {isLoading ? 'Sending...' : 'Send OTP'}
                    </Button>
                  ) : (
                    <div className="space-y-2">
                      <Label htmlFor="otp" className="text-gray-700">Enter OTP</Label>
                      <div className="flex justify-center">
                        <InputOTP value={otp} onChange={setOtp} maxLength={6}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Bank ID Display */}
              <div className={`bg-gray-50 p-3 rounded-lg border-l-4 ${selectedRole === 'patient' ? 'border-blue-500' : 'border-green-500'}`}>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className={`font-semibold ${selectedRole === 'patient' ? 'text-blue-600' : 'text-green-600'}`}>Bank Id</span>
                  <span className="font-mono">564986544654164651658464</span>
                </div>
              </div>

              {/* Submit Button */}
              {(loginMethod === 'email' || showOtpInput) && (
                <Button
                  type="submit"
                  className={`w-full ${selectedRole === 'patient' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'} text-white py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Signing In...
                    </div>
                  ) : (
                    'LOGIN'
                  )}
                </Button>
              )}
            </form>

            {/* Register Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Don't have an account?{' '}
                <Link to="/register" className={`${selectedRole === 'patient' ? 'text-blue-600 hover:text-blue-700' : 'text-green-600 hover:text-green-700'} font-semibold transition-colors`}>
                  Create Account
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Back to Home */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-all duration-300 hover:scale-105"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Homepage
      </Link>
    </div>
  );
};

export default Login;
