
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, MapPin, Clock, Award, Search } from 'lucide-react';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      department: 'cardiology',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      rating: 4.9,
      experience: '20+ years',
      education: 'MD, Harvard Medical School',
      location: 'Main Campus - Building A',
      availability: 'Mon-Fri: 9AM-5PM',
      languages: ['English', 'Spanish'],
      specializations: ['Interventional Cardiology', 'Heart Disease Prevention', 'Cardiac Surgery']
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      department: 'neurology',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
      rating: 4.8,
      experience: '18+ years',
      education: 'MD, Johns Hopkins University',
      location: 'Main Campus - Building B',
      availability: 'Mon-Thu: 8AM-4PM',
      languages: ['English', 'Mandarin'],
      specializations: ['Stroke Treatment', 'Epilepsy', 'Brain Tumors']
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      department: 'pediatrics',
      image: 'https://images.unsplash.com/photo-1594824375864-87435bfaad3d?w=300&h=300&fit=crop&crop=face',
      rating: 4.9,
      experience: '15+ years',
      education: 'MD, Stanford University',
      location: 'Pediatric Wing',
      availability: 'Mon-Sat: 8AM-6PM',
      languages: ['English', 'Spanish', 'Portuguese'],
      specializations: ['Child Development', 'Pediatric Surgery', 'Immunizations']
    },
    {
      id: 4,
      name: 'Dr. David Thompson',
      specialty: 'Orthopedic Surgeon',
      department: 'orthopedics',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face',
      rating: 4.7,
      experience: '22+ years',
      education: 'MD, Mayo Clinic',
      location: 'Surgical Center',
      availability: 'Tue-Fri: 7AM-3PM',
      languages: ['English'],
      specializations: ['Joint Replacement', 'Sports Medicine', 'Spine Surgery']
    },
    {
      id: 5,
      name: 'Dr. Lisa Wang',
      specialty: 'Ophthalmologist',
      department: 'ophthalmology',
      image: 'https://images.unsplash.com/photo-1594824375864-87435bfaad3d?w=300&h=300&fit=crop&crop=face',
      rating: 4.8,
      experience: '12+ years',
      education: 'MD, UCLA Medical School',
      location: 'Eye Care Center',
      availability: 'Mon-Wed-Fri: 9AM-5PM',
      languages: ['English', 'Mandarin', 'Korean'],
      specializations: ['Cataract Surgery', 'Retinal Diseases', 'LASIK Surgery']
    },
    {
      id: 6,
      name: 'Dr. Robert Martinez',
      specialty: 'Emergency Medicine',
      department: 'emergency',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
      rating: 4.9,
      experience: '25+ years',
      education: 'MD, University of Pennsylvania',
      location: 'Emergency Department',
      availability: '24/7 Rotating Schedule',
      languages: ['English', 'Spanish'],
      specializations: ['Trauma Care', 'Critical Care', 'Emergency Surgery']
    }
  ];

  const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'neurology', label: 'Neurology' },
    { value: 'pediatrics', label: 'Pediatrics' },
    { value: 'orthopedics', label: 'Orthopedics' },
    { value: 'ophthalmology', label: 'Ophthalmology' },
    { value: 'emergency', label: 'Emergency Medicine' }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || doctor.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Medical Experts</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet our team of highly qualified and experienced doctors 
            dedicated to providing exceptional healthcare services.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="w-full md:w-auto min-w-64">
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept.value} value={dept.value}>
                      {dept.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <Card key={doctor.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-semibold">{doctor.rating}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{doctor.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">
                    {doctor.specialty}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="w-4 h-4 mr-2" />
                    <span>{doctor.experience} • {doctor.education}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{doctor.location}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{doctor.availability}</span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specializations.map((spec, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Languages:</h4>
                    <p className="text-sm text-gray-600">{doctor.languages.join(', ')}</p>
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Link to={`/doctors/${doctor.id}`}>View Profile</Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <Link to="/appointments">Book Appointment</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No doctors found matching your criteria.</p>
              <p className="text-gray-500 mt-2">Try adjusting your search or filter options.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule an Appointment?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose from our experienced medical professionals and book your appointment today.
          </p>
          <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
            <Link to="/appointments">Book Appointment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Doctors;
