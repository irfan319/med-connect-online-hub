
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Heart, Shield, Clock, Users, Award } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Easy Appointment Booking',
      description: 'Book appointments with your preferred doctors online, 24/7'
    },
    {
      icon: Heart,
      title: 'Expert Medical Care',
      description: 'Comprehensive healthcare services from certified professionals'
    },
    {
      icon: Shield,
      title: 'Secure Patient Portal',
      description: 'Access your medical records and test results securely'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Care',
      description: 'Round-the-clock emergency services for critical situations'
    }
  ];

  const stats = [
    { number: '25+', label: 'Years of Excellence' },
    { number: '150+', label: 'Expert Doctors' },
    { number: '50,000+', label: 'Happy Patients' },
    { number: '20+', label: 'Specializations' }
  ];

  const departments = [
    { name: 'Cardiology', description: 'Heart and cardiovascular care', color: 'bg-red-100 text-red-600' },
    { name: 'Pediatrics', description: 'Child healthcare services', color: 'bg-blue-100 text-blue-600' },
    { name: 'Orthopedics', description: 'Bone and joint treatment', color: 'bg-green-100 text-green-600' },
    { name: 'Neurology', description: 'Brain and nervous system', color: 'bg-purple-100 text-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Health, Our
              <span className="text-blue-200"> Priority</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Comprehensive healthcare services with cutting-edge technology and compassionate care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/appointments">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/emergency">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                  Emergency Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose MediCare Plus?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine advanced medical technology with personalized care to provide the best healthcare experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Specializations</h2>
            <p className="text-xl text-gray-600">Comprehensive medical services across multiple specialties</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${dept.color} flex items-center justify-center mb-3`}>
                    <Heart className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                  <CardDescription>{dept.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/departments">
              <Button size="lg" variant="outline">View All Departments</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Take Care of Your Health?</h2>
          <p className="text-xl mb-8 text-blue-100">Join thousands of patients who trust us with their healthcare</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointments">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Schedule Appointment
              </Button>
            </Link>
            <Link to="/patient-portal">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Patient Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
