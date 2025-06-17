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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
      <Navigation />
      
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Enhanced Professional Welcome Header */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-8 shadow-xl">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tight">
                    Welcome back, {user?.name || 'Patient'}
                  </h1>
                  <p className="text-blue-100 text-lg font-medium">
                    Your health journey continues today
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-white/20 text-white border-0 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                    <Shield className="w-4 h-4 mr-2" />
                    Health Score: 94%
                  </Badge>
                  <Badge className="bg-white/20 text-white border-0 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Premium Care
                  </Badge>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <User className="h-12 w-12 text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Enhanced Health Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {healthMetrics.map((metric, index) => (
                <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${
                        metric.color.includes('emerald') ? 'from-emerald-100 to-emerald-200' : 
                        metric.color.includes('blue') ? 'from-blue-100 to-blue-200' :
                        metric.color.includes('orange') ? 'from-orange-100 to-orange-200' : 'from-cyan-100 to-cyan-200'
                      }`}>
                        <metric.icon className={`w-5 h-5 ${metric.color}`} />
                      </div>
                      <Badge className={`${metric.status === 'excellent' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'} border-0`}>
                        {metric.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {metric.value}
                        <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>
                      </p>
                      <Progress value={metric.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Enhanced Quick Actions */}
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
                  <Zap className="h-6 w-6 text-blue-600" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { icon: Calendar, label: 'Book Appointment', color: 'from-blue-500 to-blue-600', action: () => navigate('/appointments') },
                    { icon: FileText, label: 'View Records', color: 'from-emerald-500 to-emerald-600', action: () => toast({ title: "Medical Records", description: "Opening your medical records..." }) },
                    { icon: Pill, label: 'Medications', color: 'from-purple-500 to-purple-600', action: () => toast({ title: "Medications", description: "Loading your medication schedule..." }) },
                    { icon: Phone, label: 'Contact Doctor', color: 'from-orange-500 to-orange-600', action: () => toast({ title: "Contacting Doctor", description: "Connecting you to your primary care physician..." }) }
                  ].map((action, index) => (
                    <Button 
                      key={index} 
                      onClick={action.action}
                      className={`w-full h-20 bg-gradient-to-r ${action.color} hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-2`}
                    >
                      <action.icon className="h-6 w-6" />
                      <span className="text-sm font-medium">{action.label}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Appointments */}
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  Upcoming Appointments
                </CardTitle>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment, index) => (
                    <div key={appointment.id} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-100">
                      <img
                        src={appointment.avatar}
                        alt={appointment.doctor}
                        className="w-12 h-12 rounded-full object-cover shadow-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{appointment.doctor}</h4>
                        <p className="text-blue-600 font-medium text-sm">{appointment.specialty}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {appointment.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {appointment.time}
                          </div>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <Badge className={`${appointment.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'} border-0`}>
                          {appointment.status}
                        </Badge>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 w-full">
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

          {/* Enhanced Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-gray-900">
                  <Activity className="h-5 w-5 text-indigo-600" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="p-2 rounded-lg bg-indigo-100">
                        <activity.icon className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Health Tips */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-700">
                  <Heart className="h-5 w-5" />
                  Daily Health Tip
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    "Stay hydrated! Aim for 8 glasses of water daily to maintain optimal health and energy levels."
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <span>💡 Health Tip</span>
                    <span>• From Dr. Johnson</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-red-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-3">
                  <p className="text-red-600 font-bold text-xl">
                    +1 (555) 911-HELP
                  </p>
                  <p className="text-red-600 text-sm">24/7 Emergency Line</p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <AlertTriangle className="w-4 h-4 mr-2" />
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
