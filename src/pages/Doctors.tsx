
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Star, MapPin, Clock, Award, Stethoscope, Heart, Brain, Users, Phone, Mail, Calendar, GraduationCap, Languages, Trophy, Sparkles } from 'lucide-react';

const Doctors = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const departments = [
    { id: 'all', name: 'All Departments', icon: Users, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { id: 'cardiology', name: 'Cardiology', icon: Heart, color: 'bg-gradient-to-r from-red-500 to-pink-500' },
    { id: 'neurology', name: 'Neurology', icon: Brain, color: 'bg-gradient-to-r from-blue-500 to-indigo-500' },
    { id: 'general', name: 'General Medicine', icon: Stethoscope, color: 'bg-gradient-to-r from-green-500 to-emerald-500' },
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      department: 'cardiology',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      rating: 4.9,
      experience: '15 years',
      location: 'Main Hospital - Floor 3',
      availability: 'Available Today',
      about: 'Dr. Sarah Johnson is a leading cardiologist with over 15 years of experience in treating complex heart conditions. She specializes in interventional cardiology and has performed over 2,000 successful procedures.',
      education: ['MD from Harvard Medical School', 'Residency at Mayo Clinic', 'Fellowship in Interventional Cardiology'],
      specializations: ['Interventional Cardiology', 'Heart Surgery', 'Cardiac Catheterization', 'Angioplasty'],
      languages: ['English', 'Spanish', 'French'],
      achievements: ['Best Cardiologist Award 2023', 'Published 50+ Research Papers', 'Speaker at International Conferences']
    },
    {
      id: 2,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Neurology',
      department: 'neurology',
      image: 'https://images.unsplash.com/photo-1594824475280-4e3191a8b2d8?w=400&h=400&fit=crop&crop=faces',
      rating: 4.8,
      experience: '12 years',
      location: 'Neurology Center - Floor 2',
      availability: 'Available Tomorrow',
      about: 'Dr. Emily Rodriguez is a renowned neurologist specializing in brain disorders and neurological conditions. She has extensive experience in treating stroke, epilepsy, and neurodegenerative diseases.',
      education: ['MD from Johns Hopkins University', 'Neurology Residency at Cleveland Clinic', 'Fellowship in Stroke Medicine'],
      specializations: ['Stroke Medicine', 'Epilepsy Treatment', 'Neurodegenerative Diseases', 'Brain Imaging'],
      languages: ['English', 'Spanish', 'Portuguese'],
      achievements: ['Excellence in Neurology Award 2022', 'Lead Researcher in Stroke Prevention', 'Featured in Medical Journals']
    },
    {
      id: 3,
      name: 'Dr. Michael Chen',
      specialty: 'General Medicine',
      department: 'general',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      rating: 4.7,
      experience: '10 years',
      location: 'General Medicine - Floor 1',
      availability: 'Available Now',
      about: 'Dr. Michael Chen is a dedicated general practitioner with a focus on preventive care and family medicine. He believes in building long-term relationships with his patients and providing comprehensive healthcare.',
      education: ['MD from Stanford University', 'Family Medicine Residency', 'Board Certified in Internal Medicine'],
      specializations: ['Preventive Care', 'Chronic Disease Management', 'Family Medicine', 'Health Screenings'],
      languages: ['English', 'Mandarin', 'Cantonese'],
      achievements: ['Outstanding Family Doctor Award', 'Community Health Champion', 'Patient Choice Award 2023']
    }
  ];

  const filteredDoctors = selectedSpecialty === 'All' 
    ? doctors 
    : doctors.filter(doctor => doctor.department === selectedSpecialty.toLowerCase());

  const DoctorDetailDialog = ({ doctor }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          View Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-lg border-0 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-800 mb-2">{doctor.name}</DialogTitle>
          <DialogDescription className="text-lg text-blue-600 font-semibold">
            {doctor.specialty} Specialist
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          {/* Doctor Image and Basic Info */}
          <div className="space-y-6">
            <div className="relative group">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-80 object-cover rounded-2xl shadow-xl ring-4 ring-white group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 shadow-xl animate-pulse">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-2xl font-bold text-gray-800">{doctor.rating}</span>
                <span className="text-gray-600">Rating</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-5 w-5" />
                <span>{doctor.experience} Experience</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>{doctor.location}</span>
              </div>
              
              <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1">
                {doctor.availability}
              </Badge>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="md:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                About Dr. {doctor.name.split(' ')[1]}
              </h3>
              <p className="text-gray-700 leading-relaxed">{doctor.about}</p>
            </div>

            {/* Education */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-purple-600" />
                Education & Training
              </h3>
              <ul className="space-y-2">
                {doctor.education.map((edu, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    {edu}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specializations */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Award className="h-6 w-6 text-emerald-600" />
                Specializations
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {(doctor.specializations || []).map((spec, index) => (
                  <Badge key={index} className="bg-emerald-100 text-emerald-800 justify-start px-3 py-2">
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Languages & Achievements */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Languages className="h-6 w-6 text-orange-600" />
                  Languages
                </h3>
                <div className="space-y-2">
                  {(doctor.languages || []).map((lang, index) => (
                    <Badge key={index} className="bg-orange-100 text-orange-800 mr-2 mb-2">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                  Achievements
                </h3>
                <ul className="space-y-2">
                  {(doctor.achievements || []).map((achievement, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Actions */}
            <div className="flex gap-4 pt-4">
              <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>
              <Button variant="outline" className="flex-1 border-green-300 text-green-700 hover:bg-green-50 shadow-md">
                <Phone className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header with Advanced Animation */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-slide-in-bottom">
              Meet Our Doctors
            </h1>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce-slow opacity-70"></div>
            <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-float opacity-60"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-slide-up" style={{ animationDelay: '0.2s' }}>
            Our team of experienced healthcare professionals is dedicated to providing exceptional medical care with compassion and expertise.
          </p>
        </div>

        {/* Department Filter with Morphing Animation */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-scale-in" style={{ animationDelay: '0.4s' }}>
          {departments.map((dept, index) => (
            <button
              key={dept.id}
              onClick={() => setSelectedSpecialty(dept.id === 'all' ? 'All' : dept.name)}
              className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-110 hover:rotate-2 animate-fade-in ${
                (selectedSpecialty === 'All' && dept.id === 'all') || selectedSpecialty === dept.name
                  ? `${dept.color} text-white shadow-2xl scale-105`
                  : 'bg-white/80 text-gray-700 hover:bg-white shadow-lg hover:shadow-xl backdrop-blur-sm'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3">
                <dept.icon className="h-6 w-6 group-hover:animate-pulse" />
                {dept.name}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent scale-0 group-hover:scale-100 rounded-2xl transition-transform duration-500 animate-shimmer"></div>
            </button>
          ))}
        </div>

        {/* Doctors Grid with Staggered Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor, index) => (
            <Card key={doctor.id} className="group relative overflow-hidden border-0 shadow-2xl bg-white/90 backdrop-blur-lg hover:shadow-3xl transition-all duration-700 animate-scale-in transform hover:scale-105 hover:rotate-1" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
              
              <CardHeader className="relative z-10 pb-4">
                <div className="relative mb-6 group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover rounded-2xl shadow-xl ring-4 ring-white group-hover:ring-blue-200 transition-all duration-500"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 shadow-xl animate-heartbeat group-hover:animate-pulse">
                    <Stethoscope className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-bold text-gray-800">{doctor.rating}</span>
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {doctor.name}
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-purple-600 mb-4">
                  {doctor.specialty}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <span className="font-medium">{doctor.experience} Experience</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                    <MapPin className="h-5 w-5 text-red-500" />
                    <span className="font-medium">{doctor.location}</span>
                  </div>
                </div>
                
                <Badge className="bg-green-100 text-green-800 px-3 py-1 text-sm font-semibold shadow-sm">
                  {doctor.availability}
                </Badge>
                
                <div className="flex gap-3 pt-4">
                  <DoctorDetailDialog doctor={doctor} />
                  <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </CardContent>
              
              {/* Floating Sparkles */}
              <div className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-float opacity-60 group-hover:opacity-100"></div>
              <div className="absolute bottom-8 right-8 w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce-slow opacity-50 group-hover:opacity-80"></div>
            </Card>
          ))}
        </div>

        {/* CTA Section with Pulsing Animation */}
        <div className="mt-20 text-center animate-fade-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/10 backdrop-blur-xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 animate-pulse-gentle">Ready to Schedule Your Appointment?</h2>
              <p className="text-xl mb-8 text-blue-100">Our medical team is here to provide you with the best healthcare experience.</p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 animate-heartbeat">
                <Calendar className="h-6 w-6 mr-3" />
                Book Your Appointment Now
              </Button>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-6 right-24 w-6 h-6 bg-white/20 rounded-full animate-float"></div>
            <div className="absolute bottom-8 left-24 w-4 h-4 bg-white/20 rounded-full animate-bounce-slow"></div>
            <div className="absolute top-1/3 right-12 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Doctors;
