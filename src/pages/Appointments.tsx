
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, FileText, Sparkles, Heart } from 'lucide-react';
import { format } from 'date-fns';

const Appointments = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    department: '',
    time: '',
    reason: ''
  });
  const { toast } = useToast();

  const doctors = [
    { id: 'sarah-johnson', name: 'Dr. Sarah Johnson', specialty: 'Cardiology' },
    { id: 'emily-rodriguez', name: 'Dr. Emily Rodriguez', specialty: 'Neurology' },
    { id: 'michael-chen', name: 'Dr. Michael Chen', specialty: 'General Medicine' }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !formData.doctor || !formData.time) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate booking appointment
    toast({
      title: "Appointment Booked Successfully!",
      description: `Your appointment with ${formData.doctor} on ${format(date, 'PPP')} at ${formData.time} has been confirmed.`,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      doctor: '',
      department: '',
      time: '',
      reason: ''
    });
    setDate(undefined);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule a consultation with our expert medical professionals
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-lg animate-scale-in">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse-gentle">
                  <CalendarIcon className="h-8 w-8 text-white" />
                </div>
                Schedule Appointment
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Fill out the form below to book your appointment
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-semibold flex items-center gap-2">
                        <User className="h-4 w-4 text-blue-500" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your full name"
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-semibold flex items-center gap-2">
                        <Mail className="h-4 w-4 text-green-500" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="Enter your email"
                        required
                        className="border-gray-300 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 font-semibold flex items-center gap-2">
                        <Phone className="h-4 w-4 text-purple-500" />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="Enter your phone number"
                        required
                        className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label className="text-gray-700 font-semibold">Select Doctor *</Label>
                      <Select value={formData.doctor} onValueChange={(value) => setFormData({...formData, doctor: value})}>
                        <SelectTrigger className="border-gray-300 focus:border-blue-500 transition-all duration-300">
                          <SelectValue placeholder="Choose a doctor" />
                        </SelectTrigger>
                        <SelectContent>
                          {doctors.map((doctor) => (
                            <SelectItem key={doctor.id} value={doctor.name}>
                              {doctor.name} - {doctor.specialty}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-gray-700 font-semibold">Select Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal border-gray-300 hover:border-blue-500 transition-all duration-300"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-gray-700 font-semibold flex items-center gap-2">
                        <Clock className="h-4 w-4 text-orange-500" />
                        Select Time *
                      </Label>
                      <Select value={formData.time} onValueChange={(value) => setFormData({...formData, time: value})}>
                        <SelectTrigger className="border-gray-300 focus:border-orange-500 transition-all duration-300">
                          <SelectValue placeholder="Choose a time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Reason for Visit */}
                <div className="space-y-2">
                  <Label htmlFor="reason" className="text-gray-700 font-semibold flex items-center gap-2">
                    <FileText className="h-4 w-4 text-indigo-500" />
                    Reason for Visit
                  </Label>
                  <Textarea
                    id="reason"
                    value={formData.reason}
                    onChange={(e) => setFormData({...formData, reason: e.target.value})}
                    placeholder="Please describe your symptoms or reason for the appointment"
                    rows={4}
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    className="w-full md:w-auto px-12 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-heartbeat"
                  >
                    <Sparkles className="h-6 w-6 mr-3" />
                    Book Appointment
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Appointments;
