
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
  Video
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
      duration: '30 min'
    },
    {
      id: 2,
      patient: 'Sarah Wilson',
      time: '10:30 AM',
      type: 'Follow-up',
      status: 'confirmed',
      duration: '15 min'
    },
    {
      id: 3,
      patient: 'Michael Brown',
      time: '2:00 PM',
      type: 'Check-up',
      status: 'pending',
      duration: '45 min'
    },
    {
      id: 4,
      patient: 'Emma Davis',
      time: '3:30 PM',
      type: 'Consultation',
      status: 'confirmed',
      duration: '30 min'
    }
  ];

  const recentPatients = [
    {
      id: 1,
      name: 'Alice Johnson',
      lastVisit: '2024-06-12',
      condition: 'Hypertension',
      status: 'stable'
    },
    {
      id: 2,
      name: 'Robert Miller',
      lastVisit: '2024-06-10',
      condition: 'Diabetes',
      status: 'monitoring'
    },
    {
      id: 3,
      name: 'Lisa Anderson',
      lastVisit: '2024-06-08',
      condition: 'Follow-up',
      status: 'recovered'
    }
  ];

  const pendingTasks = [
    { id: 1, task: 'Review lab results for John Smith', priority: 'high', time: '2 hours ago' },
    { id: 2, task: 'Update treatment plan for Sarah Wilson', priority: 'medium', time: '4 hours ago' },
    { id: 3, task: 'Sign discharge summary for Mike Brown', priority: 'low', time: '1 day ago' }
  ];

  const stats = [
    { label: 'Today\'s Patients', value: '12', change: '+2', icon: Users, color: 'bg-blue-100 text-blue-600' },
    { label: 'Completed Consultations', value: '8', change: '+3', icon: UserCheck, color: 'bg-green-100 text-green-600' },
    { label: 'Pending Reviews', value: '5', change: '-1', icon: ClipboardList, color: 'bg-orange-100 text-orange-600' },
    { label: 'This Week', value: '47', change: '+12', icon: TrendingUp, color: 'bg-purple-100 text-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white mb-8 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Good morning, {user?.name}!</h1>
              <p className="text-blue-100">You have 12 appointments scheduled for today</p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/20 p-4 rounded-lg">
                <Stethoscope className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                    <p className="text-green-600 text-sm mt-1">{stat.change} from yesterday</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="appointments" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="appointments">Today's Schedule</TabsTrigger>
                <TabsTrigger value="patients">Recent Patients</TabsTrigger>
                <TabsTrigger value="tasks">Pending Tasks</TabsTrigger>
              </TabsList>

              <TabsContent value="appointments" className="animate-fade-in">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      Today's Appointments
                    </CardTitle>
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      View Calendar
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {todaysAppointments.map((appointment) => (
                        <div key={appointment.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-sm font-semibold">
                                  {appointment.patient.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800">{appointment.patient}</h4>
                                <p className="text-gray-600 text-sm">{appointment.type}</p>
                              </div>
                            </div>
                            <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                              {appointment.status}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {appointment.time}
                              </div>
                              <span>Duration: {appointment.duration}</span>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Phone className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Video className="h-4 w-4" />
                              </Button>
                              <Button size="sm">Start</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="patients" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-600" />
                      Recent Patients
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentPatients.map((patient) => (
                        <div key={patient.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-sm font-semibold">
                                  {patient.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800">{patient.name}</h4>
                                <p className="text-gray-600 text-sm">{patient.condition}</p>
                                <p className="text-gray-500 text-xs">Last visit: {patient.lastVisit}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant={patient.status === 'stable' ? 'default' : 
                                           patient.status === 'recovered' ? 'secondary' : 'outline'}>
                                {patient.status}
                              </Badge>
                              <Button size="sm" variant="outline">
                                <FileText className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tasks" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ClipboardList className="h-5 w-5 text-blue-600" />
                      Pending Tasks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pendingTasks.map((task) => (
                        <div key={task.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-800 mb-1">{task.task}</h4>
                              <p className="text-gray-500 text-sm">{task.time}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant={task.priority === 'high' ? 'destructive' : 
                                           task.priority === 'medium' ? 'default' : 'secondary'}>
                                {task.priority}
                              </Badge>
                              <Button size="sm">Complete</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Add New Patient
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Appointment
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Write Prescription
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <ClipboardList className="h-4 w-4 mr-2" />
                    View Lab Results
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-orange-500" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800 font-medium">New lab results available</p>
                    <p className="text-xs text-blue-600">5 minutes ago</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm text-orange-800 font-medium">Urgent: Patient requesting callback</p>
                    <p className="text-xs text-orange-600">15 minutes ago</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">Surgery scheduled confirmed</p>
                    <p className="text-xs text-green-600">1 hour ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency Line
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-red-600 font-semibold text-lg mb-2">
                    +1 (555) 911-HELP
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
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

export default DoctorDashboard;
