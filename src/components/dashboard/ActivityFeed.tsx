
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Calendar, Clock, FileText, Pill } from 'lucide-react';

const ActivityFeed = () => {
  const recentActivities = [
    { id: 1, type: 'appointment', title: 'Completed checkup with Dr. Johnson', time: '2 hours ago', icon: Calendar },
    { id: 2, type: 'medication', title: 'Took morning medication', time: '4 hours ago', icon: Pill },
    { id: 3, type: 'test', title: 'Blood test results available', time: '1 day ago', icon: FileText },
    { id: 4, type: 'appointment', title: 'Scheduled follow-up appointment', time: '2 days ago', icon: Clock }
  ];

  return (
    <Card className="border-0 shadow-lg bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-gray-900">
          <Activity className="h-5 w-5 text-indigo-600" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="p-2 rounded-lg bg-indigo-100">
                <activity.icon className="w-4 h-4 text-indigo-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
