import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
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
  Shield,
  Award,
  Search,
  Pill,
  Calendar as CalendarIcon,
  AlertTriangle,
  Mic,
  MicOff
} from 'lucide-react';

const DoctorDashboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isRecording, setIsRecording] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
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
      priority: 'normal',
      meetingId: 'meet-john-123'
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
      priority: 'high',
      meetingId: 'meet-sarah-456'
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
      priority: 'normal',
      meetingId: 'meet-michael-789'
    }
  ];

  const stats = [
    { 
      label: 'Today\'s Patients', 
      value: '12', 
      change: '+2', 
      icon: Users, 
      color: 'from-emerald-500 to-teal-600',
      description: 'Scheduled for today'
    },
    { 
      label: 'Completed', 
      value: '8', 
      change: '+3', 
      icon: UserCheck, 
      color: 'from-blue-500 to-indigo-600',
      description: 'Consultations done'
    },
    { 
      label: 'Pending Reviews', 
      value: '5', 
      change: '-1', 
      icon: ClipboardList, 
      color: 'from-orange-500 to-red-600',
      description: 'Lab results to review'
    },
    { 
      label: 'This Week', 
      value: '47', 
      change: '+12', 
      icon: TrendingUp, 
      color: 'from-purple-500 to-pink-600',
      description: 'Total appointments'
    }
  ];

  const notifications = [
    { id: 1, type: 'urgent', title: 'Critical lab results - John Doe', time: '5 min ago', color: 'red' },
    { id: 2, type: 'info', title: 'New patient registration - Emma Wilson', time: '15 min ago', color: 'blue' },
    { id: 3, type: 'reminder', title: 'Surgery scheduled for tomorrow', time: '1 hour ago', color: 'green' }
  ];

  const handleStartCall = (meetingId: string, patientName: string) => {
    toast({
      title: "Starting Video Call",
      description: `Connecting to ${patientName}...`,
    });
    
    setTimeout(() => {
      toast({
        title: "Call Connected",
        description: `You are now in a video call with ${patientName}`,
      });
    }, 2000);
  };

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    toast({
      title: isRecording ? "Recording Stopped" : "Recording Started",
      description: isRecording ? "Consultation recording has been saved." : "Now recording consultation session.",
    });
  };

  const handlePatientSearch = () => {
    if (!searchTerm) {
      toast({
        title: "Search Required",
        description: "Please enter a patient name or ID to search.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Searching Patient Records",
      description: `Looking for "${searchTerm}" in patient database...`,
    });
    
    setTimeout(() => {
      toast({
        title: "Search Results",
        description: `Found 3 patients matching "${searchTerm}"`,
      });
    }, 1500);
  };

  const PatientSearchDialog = () => {
    const [patientData, setPatientData] = useState({
      name: '',
      id: '',
      condition: ''
    });

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full justify-start hover:bg-white/60 transition-all duration-300 animate-fade-in p-4 rounded-xl transform hover:scale-105 shadow-sm hover:shadow-md">
            <Search className="h-5 w-5 mr-3 text-emerald-600" />
            <span className="font-medium">Patient Search</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md bg-white/95 backdrop-blur-lg border-0 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800">Search Patient</DialogTitle>
            <DialogDescription>
              Find patient records by name or ID
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="search">Patient Name or ID</Label>
              <Input
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter patient name or ID"
                className="border-emerald-200 focus:border-emerald-500"
              />
            </div>
            <Button onClick={handlePatientSearch} className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
              <Search className="h-4 w-4 mr-2" />
              Search Patient
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  const PrescriptionDialog = () => {
    const [prescription, setPrescription] = useState({
      patient: '',
      medication: '',
      dosage: '',
      frequency: '',
      duration: '',
      instructions: ''
    });

    const handleSubmitPrescription = () => {
      if (!prescription.patient || !prescription.medication) {
        toast({
          title: "Missing Information",
          description: "Please fill in patient and medication details.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Prescription Sent",
        description: `Prescription for ${prescription.patient} has been submitted to pharmacy.`,
      });

      setPrescription({
        patient: '',
        medication: '',
        dosage: '',
        frequency: '',
        duration: '',
        instructions: ''
      });
    };

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full justify-start hover:bg-white/60 transition-all duration-300 animate-fade-in p-4 rounded-xl transform hover:scale-105 shadow-sm hover:shadow-md">
            <Pill className="h-5 w-5 mr-3 text-blue-600" />
            <span className="font-medium">Write Prescription</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-lg border-0 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800">Write Prescription</DialogTitle>
            <DialogDescription>
              Create a new prescription for your patient
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="patient">Patient Name</Label>
                <Input
                  id="patient"
                  value={prescription.patient}
                  onChange={(e) => setPrescription({...prescription, patient: e.target.value})}
                  placeholder="Enter patient name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="medication">Medication</Label>
                <Input
                  id="medication"
                  value={prescription.medication}
                  onChange={(e) => setPrescription({...prescription, medication: e.target.value})}
                  placeholder="Enter medication name"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dosage">Dosage</Label>
                <Input
                  id="dosage"
                  value={prescription.dosage}
                  onChange={(e) => setPrescription({...prescription, dosage: e.target.value})}
                  placeholder="e.g., 500mg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="frequency">Frequency</Label>
                <Select value={prescription.frequency} onValueChange={(value) => setPrescription({...prescription, frequency: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="once-daily">Once Daily</SelectItem>
                    <SelectItem value="twice-daily">Twice Daily</SelectItem>
                    <SelectItem value="three-times">Three Times Daily</SelectItem>
                    <SelectItem value="as-needed">As Needed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  value={prescription.duration}
                  onChange={(e) => setPrescription({...prescription, duration: e.target.value})}
                  placeholder="e.g., 7 days"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="instructions">Special Instructions</Label>
              <Textarea
                id="instructions"
                value={prescription.instructions}
                onChange={(e) => setPrescription({...prescription, instructions: e.target.value})}
                placeholder="Additional instructions for the patient"
                rows={3}
              />
            </div>
            
            <Button onClick={handleSubmitPrescription} className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
              <Pill className="h-4 w-4 mr-2" />
              Send Prescription
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  const SurgeryScheduleDialog = () => {
    const [surgery, setSurgery] = useState({
      patient: '',
      procedure: '',
      date: '',
      time: '',
      room: '',
      notes: ''
    });

    const handleScheduleSurgery = () => {
      if (!surgery.patient || !surgery.procedure || !surgery.date) {
        toast({
          title: "Missing Information",
          description: "Please fill in patient, procedure, and date details.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Surgery Scheduled",
        description: `${surgery.procedure} for ${surgery.patient} scheduled for ${surgery.date}.`,
      });

      setSurgery({
        patient: '',
        procedure: '',
        date: '',
        time: '',
        room: '',
        notes: ''
      });
    };

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full justify-start hover:bg-white/60 transition-all duration-300 animate-fade-in p-4 rounded-xl transform hover:scale-105 shadow-sm hover:shadow-md">
            <CalendarIcon className="h-5 w-5 mr-3 text-purple-600" />
            <span className="font-medium">Schedule Surgery</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-lg border-0 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800">Schedule Surgery</DialogTitle>
            <DialogDescription>
              Schedule a surgical procedure for your patient
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="surgeryPatient">Patient Name</Label>
                <Input
                  id="surgeryPatient"
                  value={surgery.patient}
                  onChange={(e) => setSurgery({...surgery, patient: e.target.value})}
                  placeholder="Enter patient name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="procedure">Procedure</Label>
                <Input
                  id="procedure"
                  value={surgery.procedure}
                  onChange={(e) => setSurgery({...surgery, procedure: e.target.value})}
                  placeholder="Enter surgical procedure"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="surgeryDate">Date</Label>
                <Input
                  id="surgeryDate"
                  type="date"
                  value={surgery.date}
                  onChange={(e) => setSurgery({...surgery, date: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="surgeryTime">Time</Label>
                <Input
                  id="surgeryTime"
                  type="time"
                  value={surgery.time}
                  onChange={(e) => setSurgery({...surgery, time: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="room">Operating Room</Label>
                <Select value={surgery.room} onValueChange={(value) => setSurgery({...surgery, room: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select OR" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="or-1">OR-1</SelectItem>
                    <SelectItem value="or-2">OR-2</SelectItem>
                    <SelectItem value="or-3">OR-3</SelectItem>
                    <SelectItem value="or-4">OR-4</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="surgeryNotes">Pre-operative Notes</Label>
              <Textarea
                id="surgeryNotes"
                value={surgery.notes}
                onChange={(e) => setSurgery({...surgery, notes: e.target.value})}
                placeholder="Additional notes for the surgical team"
                rows={3}
              />
            </div>
            
            <Button onClick={handleScheduleSurgery} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <CalendarIcon className="h-4 w-4 mr-2" />
              Schedule Surgery
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  const handleEmergencyContact = () => {
    toast({
      title: "Emergency Protocol Activated",
      description: "Connecting to emergency medical team...",
      variant: "destructive"
    });
    
    setTimeout(() => {
      toast({
        title: "Emergency Team Connected",
        description: "Emergency medical team has been notified and is responding.",
        variant: "destructive"
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30">
      <Navigation />
      
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Enhanced Professional Header */}
        <div className="relative overflow-hidden bg-gradient-to-r from-slate-800 via-emerald-800 to-teal-800 rounded-2xl p-8 text-white mb-8 shadow-xl">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tight">
                    Good morning, {user?.name || 'Doctor'}
                  </h1>
                  <p className="text-emerald-100 text-lg font-medium">
                    Empowering lives through exceptional medical care
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-white/20 text-white border-0 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                    <Star className="w-4 h-4 mr-2" />
                    Rating: 4.9/5
                  </Badge>
                  <Badge className="bg-white/20 text-white border-0 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                    <Award className="w-4 h-4 mr-2" />
                    Excellence Award 2024
                  </Badge>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Stethoscope className="h-12 w-12 text-white/80" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Shield className="text-white w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-emerald-600 text-sm font-semibold">{stat.change}</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{stat.label}</p>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="appointments" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 bg-white shadow-md border-0 p-1 rounded-xl">
                <TabsTrigger value="appointments" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-lg transition-all duration-300">
                  Today's Schedule
                </TabsTrigger>
                <TabsTrigger value="patients" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg transition-all duration-300">
                  Patients
                </TabsTrigger>
                <TabsTrigger value="tasks" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-lg transition-all duration-300">
                  Tasks
                </TabsTrigger>
              </TabsList>

              <TabsContent value="appointments">
                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
                      <Calendar className="h-6 w-6 text-emerald-600" />
                      Today's Appointments
                    </CardTitle>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      <Calendar className="h-4 w-4 mr-2" />
                      Add Appointment
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {todaysAppointments.map((appointment, index) => (
                        <div key={appointment.id} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white to-emerald-50 border border-emerald-100 shadow-sm">
                          <div className="relative">
                            <img
                              src={appointment.avatar}
                              alt={appointment.patient}
                              className="w-14 h-14 rounded-full object-cover shadow-md"
                            />
                            {appointment.priority === 'high' && (
                              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">!</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="font-semibold text-gray-900 text-lg">{appointment.patient}</h4>
                                <p className="text-emerald-600 font-medium">{appointment.condition}</p>
                              </div>
                              <Badge className={`${
                                appointment.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800' :
                                appointment.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                                'bg-amber-100 text-amber-800'
                              } border-0`}>
                                {appointment.status}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center gap-6 text-sm text-gray-600 mb-3">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{appointment.time}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Activity className="h-4 w-4" />
                                <span>{appointment.duration}</span>
                              </div>
                              <Badge variant="outline" className="text-xs border-emerald-200 text-emerald-700">
                                {appointment.type}
                              </Badge>
                            </div>
                            
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                <Video className="h-4 w-4 mr-2" />
                                Start Call
                              </Button>
                              <Button size="sm" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                                {isRecording ? <MicOff className="h-4 w-4 mr-2" /> : <Mic className="h-4 w-4 mr-2" />}
                                {isRecording ? 'Stop Recording' : 'Record'}
                              </Button>
                              <Button size="sm" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                                <FileText className="h-4 w-4 mr-2" />
                                Records
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="patients">
                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
                      <Users className="h-6 w-6 text-blue-600" />
                      Patient Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <Users className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Advanced Patient System</h3>
                      <p className="text-gray-600">Comprehensive patient management tools coming soon...</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tasks">
                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
                      <ClipboardList className="h-6 w-6 text-purple-600" />
                      Task Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <ClipboardList className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Smart Task Engine</h3>
                      <p className="text-gray-600">Intelligent task prioritization system coming soon...</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-6">
            {/* Real-time Notifications */}
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-red-500" />
                  Live Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notifications.map((notification, index) => (
                    <div key={notification.id} className={`p-3 rounded-lg border-l-4 ${
                      notification.color === 'red' ? 'bg-red-50 border-red-500' :
                      notification.color === 'blue' ? 'bg-blue-50 border-blue-500' :
                      'bg-emerald-50 border-emerald-500'
                    }`}>
                      <p className={`text-sm font-medium ${
                        notification.color === 'red' ? 'text-red-800' :
                        notification.color === 'blue' ? 'text-blue-800' :
                        'text-emerald-800'
                      }`}>
                        {notification.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Medical Tools */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="text-slate-700 flex items-center gap-2">
                  <Stethoscope className="h-5 w-5" />
                  Quick Medical Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full justify-start hover:bg-white/80 p-3 rounded-xl">
                    <Search className="h-4 w-4 mr-3 text-emerald-600" />
                    <span className="font-medium">Patient Search</span>
                  </Button>
                  <Button className="w-full justify-start hover:bg-white/80 p-3 rounded-xl">
                    <Pill className="h-4 w-4 mr-3 text-blue-600" />
                    <span className="font-medium">Write Prescription</span>
                  </Button>
                  <Button className="w-full justify-start hover:bg-white/80 p-3 rounded-xl">
                    <CalendarIcon className="h-4 w-4 mr-3 text-purple-600" />
                    <span className="font-medium">Schedule Surgery</span>
                  </Button>
                  <Button className="w-full justify-start hover:bg-red-50 text-red-600 hover:text-red-700 p-3 rounded-xl bg-red-50 border border-red-200">
                    <AlertTriangle className="h-4 w-4 mr-3" />
                    <span className="font-medium">Emergency Contact</span>
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
