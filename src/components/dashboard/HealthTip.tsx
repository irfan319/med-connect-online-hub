
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const HealthTip = () => {
  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-green-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-emerald-700">
          <Heart className="h-5 w-5" />
          Daily Health Tip
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-sm text-gray-700 leading-relaxed">
            "Stay hydrated! Aim for 8 glasses of water daily to maintain optimal health and energy levels."
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span>💡 Health Tip</span>
            <span>• From Dr. Johnson</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthTip;
