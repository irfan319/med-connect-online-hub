
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Calendar, FileText, Pill, Phone, Zap } from 'lucide-react';

const QuickActions = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const actions = [
    { 
      icon: Calendar, 
      label: 'Book Appointment', 
      color: 'from-blue-500 to-blue-600', 
      action: () => navigate('/appointments') 
    },
    { 
      icon: FileText, 
      label: 'View Records', 
      color: 'from-emerald-500 to-emerald-600', 
      action: () => toast({ title: "Medical Records", description: "Opening your medical records..." }) 
    },
    { 
      icon: Pill, 
      label: 'Medications', 
      color: 'from-purple-500 to-purple-600', 
      action: () => toast({ title: "Medications", description: "Loading your medication schedule..." }) 
    },
    { 
      icon: Phone, 
      label: 'Contact Doctor', 
      color: 'from-orange-500 to-orange-600', 
      action: () => toast({ title: "Contacting Doctor", description: "Connecting you to your primary care physician..." }) 
    }
  ];

  return (
    <Card className="border-0 shadow-lg bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
          <Zap className="h-6 w-6 text-blue-600" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-4 gap-4">
          {actions.map((action, index) => (
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
  );
};

export default QuickActions;
