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
  Brain,
  HeartHandshake,
  Zap,
  Award,
  Target,
  Shield,
  Sparkles,
  Search,
  Pill,
  Calendar as CalendarIcon,
  AlertTriangle,
  Mic,
  MicOff,
  VideoOff,
  PhoneCall
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Enhanced Professional Header with Dark Theme and More Animations */}
        <div className="relative overflow-hidden bg-gradient-to-r from-slate-800 via-emerald-800 to-teal-800 rounded-3xl p-8 text-white mb-8 animate-fade-in shadow-2xl">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-xl"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2 animate-slide-in-bottom">Good morning, {user?.name}!</h1>
                <p className="text-emerald-100 text-lg mb-4 animate-fade-slide-up" style={{ animationDelay: '0.2s' }}>Empowering lives through exceptional medical care</p>
                <div className="flex items-center gap-4 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                  <Badge className="bg-white/20 text-white border-0 px-4 py-2 text-sm backdrop-blur-sm animate-pulse-gentle">
                    <Star className="w-4 h-4 mr-2" />
                    Rating: 4.9/5
                  </Badge>
                  <Badge className="bg-white/20 text-white border-0 px-4 py-2 text-sm backdrop-blur-sm animate-heartbeat">
                    <HeartHandshake className="w-4 h-4 mr-2" />
                    1,247 Lives Touched
                  </Badge>
                  <Badge className="bg-white/20 text-white border-0 px-4 py-2 text-sm backdrop-blur-sm animate-sparkle">
                    <Award className="w-4 h-4 mr-2" />
                    Excellence Award 2024
                  </Badge>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse-gentle backdrop-blur-sm transform hover:scale-110 transition-transform duration-500">
                    <Stethoscope className="h-16 w-16 text-white/80 animate-float" />
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
          
          {/* Enhanced Floating Medical Elements */}
          <div className="absolute top-6 right-24 w-6 h-6 bg-emerald-400/30 rounded-full animate-float"></div>
          <div className="absolute bottom-8 left-24 w-4 h-4 bg-teal-400/30 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-1/3 right-12 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-12 left-1/3 w-3 h-3 bg-yellow-300/30 rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-12 right-1/4 w-5 h-5 bg-pink-300/30 rounded-full animate-morph" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Enhanced Stats Cards with Advanced Neumorphism */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-2xl bg-white/90 backdrop-blur-lg hover:shadow-3xl transition-all duration-500 animate-scale-in group transform hover:rotate-1 hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${stat.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="h-7 w-7 text-white animate-pulse-gentle" />
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-bold text-gray-800 mb-1 animate-number-count">{stat.value}</p>
                      <p className="text-emerald-600 text-sm font-semibold animate-fade-in">{stat.change}</p>
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
                      <Calendar className="h-7 w-7 text-emerald-500 animate-pulse" />
                      Today's Appointments
                    </CardTitle>
                    <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
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
                                  className="w-18 h-18 rounded-full object-cover shadow-xl ring-4 ring-white animate-pulse-gentle"
                                />
                                {appointment.priority === 'high' && (
                                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                                    <span className="text-white text-xs font-bold">!</span>
                                  </div>
                                )}
                              </div>
                              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-heartbeat">
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
                                } border-0 shadow-sm animate-pulse-gentle`}>
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
                              
                              <div className="flex gap-3 flex-wrap">
                                <Button 
                                  onClick={() => handleStartCall(appointment.meetingId, appointment.patient)} 
                                  size="sm" 
                                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                                >
                                  <Video className="h-4 w-4 mr-2" />
                                  Start Call
                                </Button>
                                <Button 
                                  onClick={handleToggleRecording}
                                  size="sm" 
                                  variant="outline" 
                                  className={`border-red-200 ${isRecording ? 'bg-red-50 text-red-600' : 'text-red-600'} hover:bg-red-50 shadow-md transition-all duration-300 transform hover:scale-105`}
                                >
                                  {isRecording ? <MicOff className="h-4 w-4 mr-2" /> : <Mic className="h-4 w-4 mr-2" />}
                                  {isRecording ? 'Stop Recording' : 'Record'}
                                </Button>
                                <Button size="sm" variant="outline" className="border-teal-200 text-teal-600 hover:bg-teal-50 shadow-md transform hover:scale-105 transition-all duration-300">
                                  <Phone className="h-4 w-4 mr-2" />
                                  Call
                                </Button>
                                <Button size="sm" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 shadow-md transform hover:scale-105 transition-all duration-300">
                                  <FileText className="h-4 w-4 mr-2" />
                                  Records
                                </Button>
                              </div>
                            </div>
                          </div>
                          
                          {/* Enhanced gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Enhanced other tab contents */}
              <TabsContent value="patients" className="animate-fade-slide-up">
                <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-gray-800">
                      <Users className="h-7 w-7 text-blue-500 animate-pulse" />
                      Patient Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-16">
                      <div className="relative inline-block">
                        <Brain className="h-20 w-20 mx-auto text-gray-400 mb-6 animate-float" />
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
                      <ClipboardList className="h-7 w-7 text-purple-500 animate-pulse" />
                      Task Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-16">
                      <div className="relative inline-block">
                        <Target className="h-20 w-20 mx-auto text-gray-400 mb-6 animate-float" />
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

          {/* Enhanced Sidebar with Functional Tools */}
          <div className="space-y-8">
            {/* Enhanced Real-time Notifications */}
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

            {/* Enhanced Quick Access Tools with Functional Dialogs */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 animate-fade-slide-up" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="text-slate-700 flex items-center gap-2">
                  <Zap className="h-6 w-6 animate-pulse" />
                  Quick Medical Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <PatientSearchDialog />
                  <PrescriptionDialog />
                  <SurgeryScheduleDialog />
                  <Button 
                    onClick={handleEmergencyContact}
                    className="w-full justify-start hover:bg-red-50 text-red-600 hover:text-red-700 transition-all duration-300 animate-fade-in p-4 rounded-xl transform hover:scale-105 shadow-sm hover:shadow-md bg-gradient-to-r from-red-50 to-pink-50 border border-red-200"
                  >
                    <AlertTriangle className="h-5 w-5 mr-3 animate-pulse" />
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
