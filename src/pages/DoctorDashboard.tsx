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
  Zap
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
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      description: 'Scheduled for today'
    },
    { 
      label: 'Completed', 
      value: '8', 
      change: '+3', 
      icon: UserCheck, 
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      description: 'Consultations done'
    },
    { 
      label: 'Pending Reviews', 
      value: '5', 
      change: '-1', 
      icon: ClipboardList, 
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      description: 'Lab results to review'
    },
    { 
      label: 'This Week', 
      value: '47', 
      change: '+12', 
      icon: TrendingUp, 
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      description: 'Total appointments'
    }
  ];

  const notifications = [
    { id: 1, type: 'urgent', title: 'Critical lab results - John Doe', time: '5 min ago', color: 'red' },
    { id: 2, type: 'info', title: 'New patient registration - Emma Wilson', time: '15 min ago', color: 'blue' },
    { id: 3, type: 'reminder', title: 'Surgery scheduled for tomorrow', time: '1 hour ago', color: 'green' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Professional Header */}
        <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 rounded-3xl p-8 text-white mb-8 animate-fade-in">
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2 animate-slide-in-bottom">Good morning, {user?.name}!</h1>
                <p className="text-blue-100 text-lg mb-4">Ready to make a difference in patients' lives today</p>
                <div className="flex items-center gap-4">
                  <Badge className="bg-white/20 text-white border-0 px-4 py-2 text-sm">
                    <Star className="w-4 h-4 mr-2" />
                    Rating: 4.9/5
                  </Badge>
                  <Badge className="bg-white/20 text-white border-0 px-4 py-2 text-sm">
                    <HeartHandshake className="w-4 h-4 mr-2" />
                    1,247 Patients Treated
                  </Badge>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse-gentle relative">
                  <Stethoscope className="h-16 w-16 text-white/80" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-heartbeat">
                    <span className="text-white text-xs font-bold">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Medical Elements */}
          <div className="absolute top-6 right-24 w-6 h-6 bg-white/20 rounded-full animate-float"></div>
          <div className="absolute bottom-8 left-24 w-4 h-4 bg-white/20 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-1/3 right-12 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
        </div>

        {/* Stats Cards with Advanced Design */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-scale-in group" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                      <p className="text-green-600 text-sm font-medium">{stat.change}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">{stat.label}</p>
                    <p className="text-gray-600 text-sm">{stat.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="appointments" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm shadow-lg border-0">
                <TabsTrigger value="appointments" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  Today's Schedule
                </TabsTrigger>
                <TabsTrigger value="patients" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  Patients
                </TabsTrigger>
                <TabsTrigger value="tasks" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  Tasks
                </TabsTrigger>
              </TabsList>

              <TabsContent value="appointments" className="animate-fade-slide-up">
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Calendar className="h-6 w-6 text-blue-500" />
                      Today's Appointments
                    </CardTitle>
                    <Button className="bg-blue-500 hover:bg-blue-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      Add Appointment
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {todaysAppointments.map((appointment, index) => (
                        <div key={appointment.id} className="relative overflow-hidden p-6 rounded-xl bg-gradient-to-r from-white to-blue-50 border border-blue-100 hover:border-blue-300 transition-all duration-300 animate-fade-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <img
                                src={appointment.avatar}
                                alt={appointment.patient}
                                className="w-16 h-16 rounded-full object-cover shadow-md"
                              />
                              {appointment.priority === 'high' && (
                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                                  <span className="text-white text-xs">!</span>
                                </div>
                              )}
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h4 className="font-bold text-gray-800 text-lg">{appointment.patient}</h4>
                                  <p className="text-blue-600 font-medium">{appointment.condition}</p>
                                </div>
                                <Badge className={`${
                                  appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                  appointment.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                                  'bg-yellow-100 text-yellow-800'
                                } border-0`}>
                                  {appointment.status}
                                </Badge>
                              </div>
                              
                              <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {appointment.time}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Activity className="h-4 w-4" />
                                  {appointment.duration}
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  {appointment.type}
                                </Badge>
                              </div>
                              
                              <div className="flex gap-3">
                                <Button size="sm" className="bg-green-500 hover:bg-green-600">
                                  <Video className="h-4 w-4 mr-2" />
                                  Start Call
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Phone className="h-4 w-4 mr-2" />
                                  Call
                                </Button>
                                <Button size="sm" variant="outline">
                                  <FileText className="h-4 w-4 mr-2" />
                                  Records
                                </Button>
                              </div>
                            </div>
                          </div>
                          
                          {/* Gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Other tab contents remain similar but with enhanced styling */}
              <TabsContent value="patients" className="animate-fade-slide-up">
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Users className="h-6 w-6 text-green-500" />
                      Recent Patients
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <Brain className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-600">Patient management system coming soon...</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tasks" className="animate-fade-slide-up">
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <ClipboardList className="h-6 w-6 text-orange-500" />
                      Pending Tasks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <Zap className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-600">Task management system coming soon...</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-6">
            {/* Real-time Notifications */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-red-500 animate-pulse" />
                  Live Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notifications.map((notification, index) => (
                    <div key={notification.id} className={`p-3 rounded-lg transition-all duration-300 hover:shadow-md animate-fade-in ${
                      notification.color === 'red' ? 'bg-red-50 border-l-4 border-red-500' :
                      notification.color === 'blue' ? 'bg-blue-50 border-l-4 border-blue-500' :
                      'bg-green-50 border-l-4 border-green-500'
                    }`} style={{ animationDelay: `${index * 0.1}s` }}>
                      <p className={`text-sm font-medium ${
                        notification.color === 'red' ? 'text-red-800' :
                        notification.color === 'blue' ? 'text-blue-800' :
                        'text-green-800'
                      }`}>
                        {notification.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Access Tools */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-blue-50 animate-fade-slide-up" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="text-indigo-700">Quick Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { icon: Users, label: 'Patient Search', color: 'indigo' },
                    { icon: FileText, label: 'Write Prescription', color: 'blue' },
                    { icon: Calendar, label: 'Schedule Surgery', color: 'purple' },
                    { icon: Phone, label: 'Emergency Contact', color: 'red' }
                  ].map((tool, index) => (
                    <Button key={index} variant="ghost" className="w-full justify-start hover:bg-white/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <tool.icon className="h-4 w-4 mr-3" />
                      {tool.label}
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
