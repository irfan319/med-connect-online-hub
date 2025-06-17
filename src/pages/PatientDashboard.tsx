
import React from 'react';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HealthMetrics from '@/components/dashboard/HealthMetrics';
import QuickActions from '@/components/dashboard/QuickActions';
import AppointmentsList from '@/components/dashboard/AppointmentsList';
import ActivityFeed from '@/components/dashboard/ActivityFeed';
import HealthTip from '@/components/dashboard/HealthTip';
import EmergencyContact from '@/components/dashboard/EmergencyContact';
import { useAuth } from '@/contexts/AuthContext';
import { User, Shield, Sparkles } from 'lucide-react';

const PatientDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
      <Navigation />
      
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Enhanced Professional Welcome Header */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-8 shadow-xl">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tight">
                    Welcome back, {user?.name || 'Patient'}
                  </h1>
                  <p className="text-blue-100 text-lg font-medium">
                    Your health journey continues today
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-white/20 text-white border-0 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                    <Shield className="w-4 h-4 mr-2" />
                    Health Score: 94%
                  </Badge>
                  <Badge className="bg-white/20 text-white border-0 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Premium Care
                  </Badge>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <User className="h-12 w-12 text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Enhanced Health Metrics */}
            <HealthMetrics />

            {/* Enhanced Quick Actions */}
            <QuickActions />

            {/* Enhanced Appointments */}
            <AppointmentsList />
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <ActivityFeed />

            {/* Health Tips */}
            <HealthTip />

            {/* Emergency Contact */}
            <EmergencyContact />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PatientDashboard;
