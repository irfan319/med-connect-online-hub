
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Brain, Baby, Eye, Bone, Stethoscope, Activity, Shield, Users, Clock } from 'lucide-react';

const Departments = () => {
  const departments = [
    {
      id: 'cardiology',
      name: 'Cardiology',
      description: 'Comprehensive heart care services including diagnostics, treatment, and preventive care for all cardiovascular conditions.',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      services: ['ECG & Echo', 'Cardiac Catheterization', 'Heart Surgery', 'Preventive Cardiology'],
      doctors: 8,
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 'neurology',
      name: 'Neurology',
      description: 'Advanced neurological care for brain, spine, and nervous system disorders with cutting-edge technology.',
      icon: Brain,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      services: ['Brain Imaging', 'Stroke Care', 'Epilepsy Treatment', 'Neurosurgery'],
      doctors: 6,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 'pediatrics',
      name: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents with family-centered approach.',
      icon: Baby,
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop',
      services: ['Well-child Visits', 'Immunizations', 'Pediatric Surgery', 'Child Development'],
      doctors: 12,
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 'ophthalmology',
      name: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to complex surgical procedures for all ages.',
      icon: Eye,
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop',
      services: ['Eye Exams', 'Cataract Surgery', 'Retinal Care', 'LASIK Surgery'],
      doctors: 5,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'orthopedics',
      name: 'Orthopedics',
      description: 'Comprehensive bone, joint, and muscle care including sports medicine and rehabilitation.',
      icon: Bone,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      services: ['Joint Replacement', 'Sports Medicine', 'Spine Surgery', 'Physical Therapy'],
      doctors: 10,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      id: 'general-medicine',
      name: 'General Medicine',
      description: 'Primary healthcare services for adults including preventive care and chronic disease management.',
      icon: Stethoscope,
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=300&fit=crop',
      services: ['Annual Checkups', 'Chronic Care', 'Preventive Medicine', 'Health Screenings'],
      doctors: 15,
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      id: 'emergency',
      name: 'Emergency Medicine',
      description: '24/7 emergency medical services with trauma care and critical care capabilities.',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop',
      services: ['Trauma Care', 'Critical Care', 'Emergency Surgery', '24/7 Availability'],
      doctors: 20,
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 'surgery',
      name: 'General Surgery',
      description: 'Advanced surgical procedures with minimally invasive techniques and expert surgical care.',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      services: ['Laparoscopic Surgery', 'General Surgery', 'Day Surgery', 'Surgical Consultation'],
      doctors: 8,
      color: 'bg-teal-100 text-teal-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Medical Departments</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive healthcare services across multiple specializations 
            with expert medical professionals and state-of-the-art facilities.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <Card key={dept.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="relative">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 ${dept.color} rounded-lg flex items-center justify-center`}>
                      <dept.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{dept.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {dept.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Key Services:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {dept.services.map((service, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-1" />
                        {dept.doctors} Doctors
                      </div>
                      <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Link to={`/departments/${dept.id}`}>
                          Learn More
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Need Emergency Care?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our emergency department is available 24/7 for urgent medical situations. 
              Don't hesitate to seek immediate care when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                <Link to="/emergency">Emergency Services</Link>
              </Button>
              <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3">
                <a href="tel:911">Call 911</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Departments;
