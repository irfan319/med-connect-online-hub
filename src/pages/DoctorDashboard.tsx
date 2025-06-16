
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Calendar, 
  Users, 
  ClipboardList, 
  Bell, 
  Clock, 
  UserCheck,
  Stethoscope,
  FileText,
  TrendingUp,
  Phone,
  Video,
  Star,
  Activity,
  Brain,
  HeartHandshake,
  Zap,
  Award,
  Target,
  Shield,
  Sparkles
} from 'lucide-react';

const DoctorDashboard = () => {
  const { user } = useAuth();
  
  const todaysAppointments = [
    {
      id: 1,
      patient: 'John Smith',
      time: '9:00 AM',
      type: 'Consultation',
      status: 'confirmed',
      duration: '30 min',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      condition: 'Hypertension Follow-up',
      priority: 'normal'
    },
    {
      id: 2,
      patient: 'Sarah Wilson',
      time: '10:30 AM',
      type: 'Follow-up',
      status: 'in-progress',
      duration: '15 min',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
      condition: 'Post-surgery Check',
      priority: 'high'
    },
    {
      id: 3,
      patient: 'Michael Brown',
      time: '2:00 PM',
      type: 'Check-up',
      status: 'pending',
      duration: '45 min',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      condition: 'Annual Physical',
      priority: 'normal'
    }
  ];

  const stats = [
    { 
      label: 'Today\'s Patients', 
      value: '12', 
      change: '+2', 
      icon: Users, 
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-100',
      description: 'Scheduled for today'
    },
    { 
      label: 'Completed', 
      value: '8', 
      change: '+3', 
      icon: UserCheck, 
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-100',
      description: 'Consultations done'
    },
    { 
      label: 'Pending Reviews', 
      value: '5', 
      change: '-1', 
      icon: ClipboardList, 
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-100',
      description: 'Lab results to review'
    },
    { 
      label: 'This Week', 
      value: '47', 
      change: '+12', 
      icon: TrendingUp, 
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-100',
      description: 'Total appointments'
    }
  ];

  const notifications = [
    { id: 1, type: 'urgent', title: 'Critical lab results - John Doe', time: '5 min ago', color: 'red' },
    { id: 2, type: 'info', title: 'New patient registration - Emma Wilson', time: '15 min ago', color: 'blue' },
    { id: 3, type: 'reminder', title: 'Surgery scheduled for tomorrow', time: '1 hour ago', color: 'green' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Professional Header with Dark Theme */}
        <div className="relative overflow-hidden bg-gradient-to-r from-slate-800 via-emerald-800 to-teal-800 rounded-3xl p-8 text-white mb-8 animate-fade-in shadow-2xl">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-xl"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2 animate-slide-in-bottom">Good morning, {user?.name}!</h1>
                <p className="text-emerald-100 text-lg mb-4">Empowering lives through exceptional medical care</p>
                <div className="flex items-center gap-4">
                  <Badge className="bg-white/20 text-white border-0 px-4 py-2 text-sm backdrop-blur-sm">
                    <Star className="w-4 h-4 mr-2" />
                    Rating: 4.9/5
                  </Badge>
                  <Badge className="bg-white/20 text-white border-0 px-4 py-2 text-sm backdrop-blur-sm">
                    <HeartHandshake className="w-4 h-4 mr-2" />
                    1,247 Lives Touched
                  </Badge>
                  <Badge className="bg-white/20 text-white border-0 px-4 py-2 text-sm backdrop-blur-sm">
                    <Award className="w-4 h-4 mr-2" />
                    Excellence Award 2024
                  </Badge>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse-gentle backdrop-blur-sm">
                    <Stethoscope className="h-16 w-16 text-white/80" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-heartbeat shadow-lg">
                    <Shield className="text-white w-5 h-5" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full flex items-center justify-center animate-bounce-slow shadow-lg">
                    <Sparkles className="text-white w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Medical Elements */}
          <div className="absolute top-6 right-24 w-6 h-6 bg-emerald-400/30 rounded-full animate-float"></div>
          <div className="absolute bottom-8 left-24 w-4 h-4 bg-teal-400/30 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-1/3 right-12 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
        </div>

        {/* Stats Cards with Advanced Neumorphism */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-2xl bg-white/90 backdrop-blur-lg hover:shadow-3xl transition-all duration-500 animate-scale-in group transform hover:rotate-1" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${stat.color} shadow-xl`}>
                      <stat.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-bold text-gray-800 mb-1">{stat.value}</p>
                      <p className="text-emerald-600 text-sm font-semibold">{stat.change}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 mb-1 text-lg">{stat.label}</p>
                    <p className="text-gray-600 text-sm">{stat.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="appointments" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 bg-white/90 backdrop-blur-lg shadow-xl border-0 p-2 rounded-2xl">
                <TabsTrigger value="appointments" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white rounded-xl transition-all duration-300 data-[state=active]:shadow-lg">
                  Today's Schedule
                </TabsTrigger>
                <TabsTrigger value="patients" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white rounded-xl transition-all duration-300 data-[state=active]:shadow-lg">
                  Patients
                </TabsTrigger>
                <TabsTrigger value="tasks" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-xl transition-all duration-300 data-[state=active]:shadow-lg">
                  Tasks
                </TabsTrigger>
              </TabsList>

              <TabsContent value="appointments" className="animate-fade-slide-up">
                <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-lg">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-2xl text-gray-800">
                      <Calendar className="h-7 w-7 text-emerald-500" />
                      Today's Appointments
                    </CardTitle>
                    <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg hover:shadow-xl transition-all duration-300">
                      <Calendar className="h-4 w-4 mr-2" />
                      Add Appointment
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {todaysAppointments.map((appointment, index) => (
                        <div key={appointment.id} className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-r from-white via-emerald-50 to-teal-50 border border-emerald-100 hover:border-emerald-300 transition-all duration-500 animate-fade-in group shadow-lg hover:shadow-xl transform hover:scale-[1.02]" style={{ animationDelay: `${index * 0.1}s` }}>
                          <div className="flex items-center gap-6">
                            <div className="relative">
                              <div className="relative">
                                <img
                                  src={appointment.avatar}
                                  alt={appointment.patient}
                                  className="w-18 h-18 rounded-full object-cover shadow-xl ring-4 ring-white"
                                />
                                {appointment.priority === 'high' && (
                                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                                    <span className="text-white text-xs font-bold">!</span>
                                  </div>
                                )}
                              </div>
                              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white text-xs font-bold">✓</span>
                              </div>
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-3">
                                <div>
                                  <h4 className="font-bold text-gray-800 text-xl mb-1">{appointment.patient}</h4>
                                  <p className="text-emerald-600 font-semibold text-lg">{appointment.condition}</p>
                                </div>
                                <Badge className={`${
                                  appointment.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800' :
                                  appointment.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                                  'bg-amber-100 text-amber-800'
                                } border-0 shadow-sm`}>
                                  {appointment.status}
                                </Badge>
                              </div>
                              
                              <div className="flex items-center gap-8 text-sm text-gray-600 mb-4">
                                <div className="flex items-center gap-2">
                                  <Clock className="h-5 w-5" />
                                  <span className="font-medium">{appointment.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Activity className="h-5 w-5" />
                                  <span className="font-medium">{appointment.duration}</span>
                                </div>
                                <Badge variant="outline" className="text-xs border-emerald-200 text-emerald-700">
                                  {appointment.type}
                                </Badge>
                              </div>
                              
                              <div className="flex gap-3">
                                <Button size="sm" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-md hover:shadow-lg transition-all duration-300">
                                  <Video className="h-4 w-4 mr-2" />
                                  Start Call
                                </Button>
                                <Button size="sm" variant="outline" className="border-teal-200 text-teal-600 hover:bg-teal-50 shadow-md">
                                  <Phone className="h-4 w-4 mr-2" />
                                  Call
                                </Button>
                                <Button size="sm" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 shadow-md">
                                  <FileText className="h-4 w-4 mr-2" />
                                  Records
                                </Button>
                              </div>
                            </div>
                          </div>
                          
                          {/* Gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Other tab contents remain similar but with enhanced styling */}
              <TabsContent value="patients" className="animate-fade-slide-up">
                <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-gray-800">
                      <Users className="h-7 w-7 text-blue-500" />
                      Patient Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-16">
                      <div className="relative inline-block">
                        <Brain className="h-20 w-20 mx-auto text-gray-400 mb-6" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center animate-pulse">
                          <Sparkles className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-700 mb-2">Advanced Patient System</h3>
                      <p className="text-gray-600">Comprehensive patient management tools coming soon...</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tasks" className="animate-fade-slide-up">
                <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-gray-800">
                      <ClipboardList className="h-7 w-7 text-purple-500" />
                      Task Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-16">
                      <div className="relative inline-block">
                        <Target className="h-20 w-20 mx-auto text-gray-400 mb-6" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                          <Zap className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-700 mb-2">Smart Task Engine</h3>
                      <p className="text-gray-600">Intelligent task prioritization system coming soon...</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-8">
            {/* Real-time Notifications */}
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-lg animate-fade-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-6 w-6 text-red-500 animate-pulse" />
                  Live Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification, index) => (
                    <div key={notification.id} className={`p-4 rounded-xl transition-all duration-300 hover:shadow-lg animate-fade-in transform hover:scale-105 ${
                      notification.color === 'red' ? 'bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500' :
                      notification.color === 'blue' ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500' :
                      'bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500'
                    }`} style={{ animationDelay: `${index * 0.1}s` }}>
                      <p className={`text-sm font-semibold ${
                        notification.color === 'red' ? 'text-red-800' :
                        notification.color === 'blue' ? 'text-blue-800' :
                        'text-emerald-800'
                      }`}>
                        {notification.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 font-medium">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Access Tools */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 animate-fade-slide-up" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="text-slate-700 flex items-center gap-2">
                  <Zap className="h-6 w-6" />
                  Quick Medical Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { icon: Users, label: 'Patient Search', color: 'emerald' },
                    { icon: FileText, label: 'Write Prescription', color: 'blue' },
                    { icon: Calendar, label: 'Schedule Surgery', color: 'purple' },
                    { icon: Phone, label: 'Emergency Contact', color: 'red' }
                  ].map((tool, index) => (
                    <Button key={index} variant="ghost" className="w-full justify-start hover:bg-white/60 transition-all duration-300 animate-fade-in p-4 rounded-xl transform hover:scale-105 shadow-sm hover:shadow-md" style={{ animationDelay: `${index * 0.1}s` }}>
                      <tool.icon className="h-5 w-5 mr-3" />
                      <span className="font-medium">{tool.label}</span>
                    </Button>
                  ))}
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

export default DoctorDashboard;
