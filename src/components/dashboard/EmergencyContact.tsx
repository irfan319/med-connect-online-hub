
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { AlertTriangle, Phone } from 'lucide-react';

const EmergencyContact = () => {
  const { toast } = useToast();

  const handleEmergencyCall = () => {
    toast({
      title: "Emergency Call Initiated",
      description: "Connecting to emergency services...",
      variant: "destructive"
    });
    
    setTimeout(() => {
      toast({
        title: "Emergency Services Connected",
        description: "You are now connected to emergency medical services.",
        variant: "destructive"
      });
    }, 1500);
  };

  return (
    <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-red-200 shadow-lg">
      <CardHeader>
        <CardTitle className="text-red-700 flex items-center gap-2">
          <Phone className="h-5 w-5" />
          Emergency Contact
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center space-y-3">
          <p className="text-red-600 font-bold text-xl">
            +1 (555) 911-HELP
          </p>
          <p className="text-red-600 text-sm">24/7 Emergency Line</p>
          <Button 
            className="w-full bg-red-600 hover:bg-red-700"
            onClick={handleEmergencyCall}
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            Call Emergency
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyContact;
