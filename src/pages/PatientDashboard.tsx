
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { 
  Calendar, 
  FileText, 
  Heart, 
  Bell, 
  Clock, 
  User, 
  Phone,
  MapPin,
  Activity,
  Pill,
  Download,
  TrendingUp,
  Shield,
  Plus,
  Sparkles,
  Zap,
  Video,
  AlertTriangle
} from 'lucide-react';

const PatientDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: '2024-06-15',
      time: '10:00 AM',
      type: 'Consultation',
      status: 'confirmed',
      meetingId: 'meet-12345',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'General Medicine',
      date: '2024-06-20',
      time: '2:30 PM',
      type: 'Follow-up',
      status: 'pending',
      meetingId: 'meet-67890',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const healthMetrics = [
    { label: 'Heart Rate', value: '72', unit: 'bpm', status: 'normal', color: 'text-emerald-500', progress: 85, icon: Heart },
    { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', status: 'normal', color: 'text-blue-500', progress: 90, icon: Activity },
    { label: 'Temperature', value: '98.6', unit: '°F', status: 'normal', color: 'text-orange-500', progress: 95, icon: TrendingUp },
    { label: 'Oxygen Level', value: '98', unit: '%', status: 'excellent', color: 'text-cyan-500', progress: 98, icon: Zap }
  ];

  const recentActivities = [
    { id: 1, type: 'appointment', title: 'Completed checkup with Dr. Johnson', time: '2 hours ago', icon: Calendar },
    { id: 2, type: 'medication', title: 'Took morning medication', time: '4 hours ago', icon: Pill },
    { id: 3, type: 'test', title: 'Blood test results available', time: '1 day ago', icon: FileText },
    { id: 4, type: 'appointment', title: 'Scheduled follow-up appointment', time: '2 days ago', icon: Clock }
  ];

  const handleJoinCall = (meetingId: string, doctorName: string) => {
    toast({
      title: "Joining Video Call",
      description: `Connecting you to ${doctorName}...`,
    });
    
    // Simulate joining call
    setTimeout(() => {
      toast({
        title: "Call Connected",
        description: `You are now in a video call with ${doctorName}`,
      });
    }, 2000);
  };

  const handleEmergencyCall = () => {
    toast({
      title: "Emergency Call Initiated",
      description: "Connecting to emergency services...",
      variant: "destructive"
    });
    
    // Simulate emergency call
    setTimeout(() => {
      toast({
        title: "Emergency Services Connected",
        description: "You are now connected to emergency medical services.",
        variant: "destructive"
      });
    }, 1500);
  };

  const handleBookAppointment = () => {
    navigate('/appointments');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header with Glassmorphism and Enhanced Animations */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 rounded-3xl p-8 text-white mb-8 animate-fade-in">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xl"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2 animate-slide-in-bottom">Welcome back, {user?.name}!</h1>
                <p className="text-blue-100 text-lg mb-4 animate-fade-slide-up" style={{ animationDelay: '0.2s' }}>Your health journey continues with us today</p>
                <div className="flex items-center gap-4 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                  <Badge className="bg-white/20 text-white border-0 px-4 py-2 backdrop-blur-sm animate-pulse-gentle">
                    <Shield className="w-4 h-4 mr-2" />
                    Health Score: 94%
                  </Badge>
                  <Badge className="bg-white/20 text-white border-0 px-4 py-2 backdrop-blur-sm animate-heartbeat">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Premium Member
                  </Badge>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse-gentle backdrop-blur-sm transform hover:scale-110 transition-transform duration-500">
                  <User className="h-16 w-16 text-white/80 animate-float" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-heartbeat">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Floating Background Elements */}
          <div className="absolute top-6 right-24 w-6 h-6 bg-white/20 rounded-full animate-float"></div>
          <div className="absolute bottom-8 left-24 w-4 h-4 bg-white/20 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-1/3 right-12 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-16 left-1/4 w-3 h-3 bg-yellow-300/30 rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-16 right-1/3 w-5 h-5 bg-pink-300/30 rounded-full animate-morph" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            {/* Health Metrics Cards with Enhanced Neumorphism */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {healthMetrics.map((metric, index) => (
                <Card key={index} className="relative overflow-hidden border-0 bg-white/80 backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-500 animate-scale-in group transform hover:rotate-1 hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent group-hover:from-white/60 transition-all duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${metric.color.includes('emerald') ? 'from-emerald-100 to-emerald-200' : 
                                      metric.color.includes('blue') ? 'from-blue-100 to-blue-200' :
                                      metric.color.includes('orange') ? 'from-orange-100 to-orange-200' : 'from-cyan-100 to-cyan-200'} shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                          <metric.icon className={`w-6 h-6 ${metric.color} animate-pulse-gentle`} />
                        </div>
                        <Badge className={`${metric.status === 'excellent' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'} border-0 shadow-sm animate-fade-in`}>
                          {metric.status}
                        </Badge>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                        <p className="text-3xl font-bold text-gray-800 animate-number-count">
                          {metric.value}
                          <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>
                        </p>
                        <div className="relative">
                          <Progress value={metric.progress} className="h-3 bg-gray-100" />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions with Enhanced Ripple Effects */}
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-lg animate-fade-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-gray-800">
                  <Zap className="h-7 w-7 text-purple-500 animate-pulse" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { icon: Calendar, label: 'Book Appointment', color: 'from-blue-500 via-blue-600 to-purple-600', action: handleBookAppointment },
                    { icon: FileText, label: 'View Records', color: 'from-emerald-500 via-green-600 to-teal-600', action: () => toast({ title: "Medical Records", description: "Opening your medical records..." }) },
                    { icon: Pill, label: 'Medications', color: 'from-purple-500 via-indigo-600 to-blue-600', action: () => toast({ title: "Medications", description: "Loading your medication schedule..." }) },
                    { icon: Phone, label: 'Contact Doctor', color: 'from-orange-500 via-red-500 to-pink-600', action: () => toast({ title: "Contacting Doctor", description: "Connecting you to your primary care physician..." }) }
                  ].map((action, index) => (
                    <Button 
                      key={index} 
                      onClick={action.action}
                      className={`w-full h-24 bg-gradient-to-r ${action.color} hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-scale-in group relative overflow-hidden transform hover:rotate-2`} 
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex flex-col items-center gap-3 relative z-10">
                        <action.icon className="h-7 w-7 animate-pulse-gentle" />
                        <span className="text-sm font-semibold">{action.label}</span>
                      </div>
                      <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 animate-ripple"></div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Appointments with Video Call Functionality */}
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-lg animate-fade-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-2xl text-gray-800">
                  <Calendar className="h-7 w-7 text-blue-500 animate-pulse" />
                  Upcoming Appointments
                </CardTitle>
                <Button 
                  onClick={handleBookAppointment}
                  variant="outline" 
                  size="sm" 
                  className="border-purple-200 text-purple-600 hover:bg-purple-50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add New
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {upcomingAppointments.map((appointment, index) => (
                    <div key={appointment.id} className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-gray-50 via-blue-50 to-purple-50 hover:from-blue-50 hover:via-purple-50 hover:to-pink-50 transition-all duration-500 border border-gray-100 hover:border-purple-200 animate-fade-in shadow-lg hover:shadow-xl transform hover:scale-[1.02]" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="relative">
                        <img
                          src={appointment.avatar}
                          alt={appointment.doctor}
                          className="w-16 h-16 rounded-full object-cover shadow-lg ring-4 ring-white animate-pulse-gentle"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md animate-heartbeat">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-lg mb-1">{appointment.doctor}</h4>
                        <p className="text-purple-600 font-semibold mb-2">{appointment.specialty}</p>
                        <div className="flex items-center gap-6 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {appointment.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {appointment.time}
                          </div>
                        </div>
                      </div>
                      <div className="text-right space-y-3">
                        <Badge className={`${appointment.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'} border-0 shadow-sm animate-pulse-gentle`}>
                          {appointment.status}
                        </Badge>
                        <Button 
                          onClick={() => handleJoinCall(appointment.meetingId, appointment.doctor)}
                          size="sm" 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 block shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-heartbeat"
                        >
                          <Video className="h-4 w-4 mr-2" />
                          Join Call
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Sidebar - 1 column */}
          <div className="space-y-8">
            {/* Recent Activity with Enhanced Glassmorphism */}
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-lg animate-fade-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Activity className="h-6 w-6 text-indigo-500 animate-pulse" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={activity.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 animate-fade-in transform hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 shadow-inner animate-pulse-gentle">
                        <activity.icon className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Health Tips with Enhanced Gradient */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 animate-fade-slide-up" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-700">
                  <Heart className="h-6 w-6 animate-heartbeat" />
                  Daily Health Tip
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-white/60 rounded-xl backdrop-blur-sm shadow-inner animate-pulse-gentle">
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      "Stay hydrated! Aim for 8 glasses of water daily to maintain optimal health and energy levels."
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center shadow-md animate-float">
                      <span className="text-teal-600 text-lg">💡</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-600 font-medium">Health Tip</span>
                      <p className="text-xs text-gray-500">From Dr. Johnson</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact with Enhanced Pulsing Animation */}
            <Card className="bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 border-red-200 shadow-2xl animate-fade-slide-up border-2" style={{ animationDelay: '0.5s' }}>
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <Phone className="h-6 w-6 animate-pulse" />
                  Emergency Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="p-4 bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl shadow-inner animate-pulse-gentle">
                    <p className="text-red-600 font-bold text-2xl mb-1 animate-heartbeat">
                      +1 (555) 911-HELP
                    </p>
                    <p className="text-red-600 text-sm font-medium">24/7 Emergency Line</p>
                  </div>
                  <Button 
                    onClick={handleEmergencyCall}
                    className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 animate-pulse-gentle shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <AlertTriangle className="w-4 h-4 mr-2 animate-pulse" />
                    Call Emergency
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PatientDashboard;
