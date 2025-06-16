
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Shield, Users, Clock, Phone, MapPin, Star, CheckCircle } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-600 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/90 via-purple-500/90 to-indigo-600/90"></div>
        
        {/* Floating medical icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center animate-pulse">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center animate-pulse delay-300">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center animate-pulse delay-700">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div className="absolute bottom-60 right-40 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center animate-pulse delay-500">
            <CheckCircle className="w-7 h-7 text-white" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4" />
                  What's new - MediCare Plus Got ISO 9001 →
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Health
                <br />
                <span className="text-blue-900">Comes First,</span>
                <br />
                Every Time to us.
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Welcome to MediCare Plus Medical Clinic, where we are
                dedicated to revolutionizing the way you healthcare.
              </p>
              
              <Button 
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/appointments">
                  Schedule an Appointment →
                </Link>
              </Button>
            </div>

            {/* Right Content - Doctor Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop&crop=face"
                  alt="Professional Doctor"
                  className="w-full max-w-md mx-auto rounded-full shadow-2xl border-8 border-white/20"
                />
              </div>
              
              {/* Floating elements around doctor */}
              <div className="absolute top-10 -left-5 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg animate-float">
                <Heart className="w-6 h-6 text-purple-600 mb-2" />
                <p className="text-sm font-semibold text-gray-800">Heart Care</p>
              </div>
              
              <div className="absolute bottom-20 -right-5 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg animate-float delay-300">
                <Shield className="w-6 h-6 text-blue-600 mb-2" />
                <p className="text-sm font-semibold text-gray-800">Protection</p>
              </div>
              
              <div className="absolute top-1/2 -right-10 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg animate-float delay-500">
                <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                <p className="text-sm font-semibold text-gray-800">Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600 font-medium">Serving patients weekly</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">95%</div>
              <p className="text-gray-600 font-medium">Patient satisfaction rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-600 font-medium">Expert doctors</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-2">24/7</div>
              <p className="text-gray-600 font-medium">Emergency support</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop"
                alt="Medical professionals"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <div className="mb-4">
                <span className="text-blue-600 font-semibold">MediCare Plus • About Us →</span>
              </div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Your health and happiness are our top priorities.
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At MediCare Plus, we go beyond just treating symptoms — we focus on 
                addressing the underlying causes of illness and promoting holistic well-being. 
                Whether you're seeking preventive care, managing a chronic condition, or in 
                need of specialized treatment, you can trust that you're in good hands with our team.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Medical Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services designed to meet all your medical needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cardiology",
                description: "Complete heart care services with advanced diagnostics",
                icon: Heart,
                color: "bg-red-100 text-red-600"
              },
              {
                title: "Emergency Care",
                description: "24/7 emergency medical services and trauma care",
                icon: Shield,
                color: "bg-blue-100 text-blue-600"
              },
              {
                title: "Pediatrics",
                description: "Specialized healthcare for infants, children, and adolescents",
                icon: Users,
                color: "bg-green-100 text-green-600"
              },
              {
                title: "General Medicine",
                description: "Comprehensive primary healthcare and preventive care",
                icon: CheckCircle,
                color: "bg-purple-100 text-purple-600"
              },
              {
                title: "Surgery",
                description: "Advanced surgical procedures with modern technology",
                icon: Clock,
                color: "bg-orange-100 text-orange-600"
              },
              {
                title: "Orthopedics",
                description: "Bone, joint, and muscle care for all ages",
                icon: Shield,
                color: "bg-indigo-100 text-indigo-600"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule your appointment today and experience the difference in healthcare quality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                <Link to="/appointments">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
