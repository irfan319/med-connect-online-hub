
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
  Download
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
      status: 'confirmed'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'General Medicine',
      date: '2024-06-20',
      time: '2:30 PM',
      type: 'Follow-up',
      status: 'pending'
    }
  ];

  const recentResults = [
    {
      id: 1,
      test: 'Blood Test Panel',
      date: '2024-06-10',
      status: 'completed',
      doctor: 'Dr. Sarah Johnson'
    },
    {
      id: 2,
      test: 'X-Ray Chest',
      date: '2024-06-08',
      status: 'completed',
      doctor: 'Dr. Michael Chen'
    }
  ];

  const medications = [
    {
      id: 1,
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      remaining: 15,
      total: 30
    },
    {
      id: 2,
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      remaining: 45,
      total: 60
    }
  ];

  const healthMetrics = [
    { label: 'Blood Pressure', value: '120/80', status: 'normal', color: 'text-green-600' },
    { label: 'Heart Rate', value: '72 bpm', status: 'normal', color: 'text-green-600' },
    { label: 'BMI', value: '24.5', status: 'normal', color: 'text-green-600' },
    { label: 'Cholesterol', value: '180 mg/dL', status: 'normal', color: 'text-green-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white mb-8 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
              <p className="text-blue-100">Here's your health overview for today</p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/20 p-4 rounded-lg">
                <User className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-blue-600" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link to="/appointments">
                    <Button className="w-full h-16 bg-blue-600 hover:bg-blue-700">
                      <div className="text-center">
                        <Calendar className="h-6 w-6 mx-auto mb-1" />
                        <div className="text-sm">Book Appointment</div>
                      </div>
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full h-16">
                    <div className="text-center">
                      <FileText className="h-6 w-6 mx-auto mb-1" />
                      <div className="text-sm">View Records</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="w-full h-16">
                    <div className="text-center">
                      <Phone className="h-6 w-6 mx-auto mb-1" />
                      <div className="text-sm">Contact Doctor</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Upcoming Appointments
                </CardTitle>
                <Link to="/appointments">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-800">{appointment.doctor}</h4>
                          <p className="text-gray-600">{appointment.specialty}</p>
                        </div>
                        <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                          {appointment.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
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
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Test Results */}
            <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Recent Test Results
                </CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentResults.map((result) => (
                    <div key={result.id} className="border rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-gray-800">{result.test}</h4>
                        <p className="text-gray-600">Dr. {result.doctor}</p>
                        <p className="text-sm text-gray-500">{result.date}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-800">
                          {result.status}
                        </Badge>
                        <Button size="sm" variant="ghost">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Health Metrics */}
            <Card className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  Health Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {healthMetrics.map((metric, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600">{metric.label}</span>
                      <span className={`font-semibold ${metric.color}`}>
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Medications */}
            <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Pill className="h-5 w-5 text-orange-500" />
                  Medications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {medications.map((med) => (
                    <div key={med.id} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-800">{med.name}</h4>
                          <p className="text-sm text-gray-600">{med.dosage} - {med.frequency}</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Remaining</span>
                          <span>{med.remaining}/{med.total} pills</span>
                        </div>
                        <Progress value={(med.remaining / med.total) * 100} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-red-600 font-semibold text-lg mb-2">
                    +1 (555) 911-HELP
                  </p>
                  <p className="text-red-600 text-sm">
                    Available 24/7 for medical emergencies
                  </p>
                  <Link to="/emergency">
                    <Button className="w-full mt-3 bg-red-600 hover:bg-red-700">
                      Emergency Services
                    </Button>
                  </Link>
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
