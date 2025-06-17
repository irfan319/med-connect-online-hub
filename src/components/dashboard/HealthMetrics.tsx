
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Heart, Activity, TrendingUp, Zap } from 'lucide-react';

const HealthMetrics = () => {
  const healthMetrics = [
    { label: 'Heart Rate', value: '72', unit: 'bpm', status: 'normal', color: 'text-emerald-500', progress: 85, icon: Heart },
    { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', status: 'normal', color: 'text-blue-500', progress: 90, icon: Activity },
    { label: 'Temperature', value: '98.6', unit: '°F', status: 'normal', color: 'text-orange-500', progress: 95, icon: TrendingUp },
    { label: 'Oxygen Level', value: '98', unit: '%', status: 'excellent', color: 'text-cyan-500', progress: 98, icon: Zap }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {healthMetrics.map((metric, index) => (
        <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${
                metric.color.includes('emerald') ? 'from-emerald-100 to-emerald-200' : 
                metric.color.includes('blue') ? 'from-blue-100 to-blue-200' :
                metric.color.includes('orange') ? 'from-orange-100 to-orange-200' : 'from-cyan-100 to-cyan-200'
              }`}>
                <metric.icon className={`w-5 h-5 ${metric.color}`} />
              </div>
              <Badge className={`${metric.status === 'excellent' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'} border-0`}>
                {metric.status}
              </Badge>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-600">{metric.label}</p>
              <p className="text-2xl font-bold text-gray-900">
                {metric.value}
                <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>
              </p>
              <Progress value={metric.progress} className="h-2" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default HealthMetrics;
