
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { useAuth } from '@/contexts/AuthContext';
import { Heart, ArrowLeft, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

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
    setIsLoading(true);

    try {
      const loginEmail = loginMethod === 'email' ? email : `${phone}@temp.com`;
      const success = await login(loginEmail, loginMethod === 'email' ? password : otp, 'patient');
      if (success) {
        toast({
          title: "Login Successful",
          description: "Welcome back to MediCare Plus!",
        });
        navigate('/patient-dashboard');
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-cyan-200 flex items-center justify-center p-4 transition-all duration-500 ease-in-out">
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
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center animate-bounce-slow">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-xl">+</span>
          </div>
        </div>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md lg:w-1/2 flex items-center justify-center">
        <Card className="w-full max-w-sm shadow-2xl border-0 bg-white/95 backdrop-blur-sm animate-scale-in">
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="bg-cyan-500 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-cyan-600">Lifeline</span>
            </div>
            <CardTitle className="text-2xl text-gray-800 mb-2">Welcome Back</CardTitle>
            <p className="text-gray-600 text-sm">Please enter your bank id to continue</p>
          </CardHeader>
          
          <CardContent>
            {/* Login Method Toggle */}
            <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
              <button
                type="button"
                onClick={() => setLoginMethod('email')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  loginMethod === 'email' 
                    ? 'bg-white text-cyan-600 shadow-sm' 
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
                    ? 'bg-white text-cyan-600 shadow-sm' 
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
                      className="w-full border-gray-300 focus:border-cyan-500"
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
                      className="w-full border-gray-300 focus:border-cyan-500"
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
                      className="w-full border-gray-300 focus:border-cyan-500"
                    />
                  </div>

                  {!showOtpInput ? (
                    <Button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={isLoading || !phone}
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
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
              <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-cyan-500">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-semibold text-cyan-600">Bank Id</span>
                  <span className="font-mono">564986544654164651658464</span>
                </div>
              </div>

              {/* Submit Button */}
              {(loginMethod === 'email' || showOtpInput) && (
                <Button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
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
                <Link to="/register" className="text-cyan-600 hover:text-cyan-700 font-semibold transition-colors">
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
        className="absolute top-6 left-6 inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 transition-all duration-300 hover:scale-105"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Homepage
      </Link>
    </div>
  );
};

export default Login;
