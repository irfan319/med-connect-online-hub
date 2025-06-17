
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, Plus, Video } from 'lucide-react';

const AppointmentsList = () => {
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

  const handleJoinCall = (meetingId: string, doctorName: string) => {
    toast({
      title: "Joining Video Call",
      description: `Connecting you to ${doctorName}...`,
    });
    
    setTimeout(() => {
      toast({
        title: "Call Connected",
        description: `You are now in a video call with ${doctorName}`,
      });
    }, 2000);
  };

  return (
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
          {upcomingAppointments.map((appointment) => (
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
                <Button 
                  size="sm" 
                  className="bg-green-600 hover:bg-green-700 w-full"
                  onClick={() => handleJoinCall(appointment.meetingId, appointment.doctor)}
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
  );
};

export default AppointmentsList;
