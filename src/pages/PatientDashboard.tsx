
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
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
  Zap,
  Plus
} from 'lucide-react';

const PatientDashboard = () => {
  const { user } = useAuth();
  
  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: '2024-06-15',
      time: '10:00 AM',
      type: 'Consultation',
      status: 'confirmed',
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
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const healthMetrics = [
    { label: 'Heart Rate', value: '72', unit: 'bpm', status: 'normal', color: 'text-green-500', progress: 85, icon: Heart },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header with Floating Animation */}
        <div className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 text-white mb-8 animate-fade-in">
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2 animate-slide-in-bottom">Welcome back, {user?.name}!</h1>
                <p className="text-cyan-100 text-lg">Your health journey continues today</p>
                <div className="flex items-center gap-4 mt-4">
                  <Badge className="bg-white/20 text-white border-0 px-4 py-2">
                    <Shield className="w-4 h-4 mr-2" />
                    Health Score: 94%
                  </Badge>
                  <Badge className="bg-white/20 text-white border-0 px-4 py-2">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Improving
                  </Badge>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse-gentle">
                  <User className="h-16 w-16 text-white/80" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Background Elements */}
          <div className="absolute top-4 right-20 w-6 h-6 bg-white/20 rounded-full animate-float"></div>
          <div className="absolute bottom-8 left-20 w-4 h-4 bg-white/20 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-1/2 right-8 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            {/* Health Metrics Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {healthMetrics.map((metric, index) => (
                <Card key={index} className="relative overflow-hidden border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-scale-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${metric.color.includes('green') ? 'from-green-100 to-green-200' : 
                                    metric.color.includes('blue') ? 'from-blue-100 to-blue-200' :
                                    metric.color.includes('orange') ? 'from-orange-100 to-orange-200' : 'from-cyan-100 to-cyan-200'}`}>
                        <metric.icon className={`w-6 h-6 ${metric.color}`} />
                      </div>
                      <Badge className={`${metric.status === 'excellent' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'} border-0`}>
                        {metric.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                      <p className="text-2xl font-bold text-gray-800">
                        {metric.value}
                        <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>
                      </p>
                      <Progress value={metric.progress} className="h-2" />
                    </div>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 group-hover:to-white/10 transition-all duration-300"></div>
                </Card>
              ))}
            </div>

            {/* Quick Actions with Ripple Effect */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Zap className="h-6 w-6 text-cyan-500" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { icon: Calendar, label: 'Book Appointment', color: 'from-blue-500 to-blue-600', link: '/appointments' },
                    { icon: FileText, label: 'View Records', color: 'from-green-500 to-green-600', link: '#' },
                    { icon: Pill, label: 'Medications', color: 'from-purple-500 to-purple-600', link: '#' },
                    { icon: Phone, label: 'Contact Doctor', color: 'from-orange-500 to-orange-600', link: '#' }
                  ].map((action, index) => (
                    <Link key={index} to={action.link}>
                      <Button className={`w-full h-20 bg-gradient-to-r ${action.color} hover:shadow-lg hover:scale-105 transition-all duration-300 animate-scale-in group relative overflow-hidden`} style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="flex flex-col items-center gap-2 relative z-10">
                          <action.icon className="h-6 w-6" />
                          <span className="text-sm font-medium">{action.label}</span>
                        </div>
                        <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 animate-ripple"></div>
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Calendar className="h-6 w-6 text-blue-500" />
                  Upcoming Appointments
                </CardTitle>
                <Button variant="outline" size="sm" className="border-cyan-200 text-cyan-600 hover:bg-cyan-50">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment, index) => (
                    <div key={appointment.id} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 border border-gray-100 hover:border-cyan-200 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <img
                        src={appointment.avatar}
                        alt={appointment.doctor}
                        className="w-14 h-14 rounded-full object-cover shadow-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 text-lg">{appointment.doctor}</h4>
                        <p className="text-cyan-600 font-medium">{appointment.specialty}</p>
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
                      <div className="text-right">
                        <Badge className={`${appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'} border-0 mb-2`}>
                          {appointment.status}
                        </Badge>
                        <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 block">
                          Join Call
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-purple-500" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={activity.id} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="p-2 rounded-lg bg-purple-100">
                        <activity.icon className="w-4 h-4 text-purple-600" />
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

            {/* Health Tips */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-blue-50 animate-fade-slide-up" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Heart className="h-5 w-5" />
                  Daily Health Tip
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    "Remember to stay hydrated! Aim for 8 glasses of water daily to maintain optimal health."
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">💡</span>
                    </div>
                    <span className="text-xs text-gray-600">Pro tip from Dr. Johnson</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-red-200 shadow-lg animate-fade-slide-up" style={{ animationDelay: '0.5s' }}>
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-3">
                  <div className="p-4 bg-red-100 rounded-xl">
                    <p className="text-red-600 font-bold text-xl mb-1">
                      +1 (555) 911-HELP
                    </p>
                    <p className="text-red-600 text-sm">24/7 Emergency Line</p>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 animate-pulse-gentle">
                    <Phone className="w-4 h-4 mr-2" />
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
