import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Star, MapPin, Clock, Award, Search, Phone, Mail, Calendar, GraduationCap } from 'lucide-react';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      department: 'cardiology',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      rating: 4.9,
      reviews: 245,
      experience: '20+ years',
      education: 'MD, Harvard Medical School',
      location: 'Main Campus - Building A',
      availability: 'Mon-Fri: 9AM-5PM',
      languages: ['English', 'Spanish'],
      specializations: ['Interventional Cardiology', 'Heart Disease Prevention', 'Cardiac Surgery'],
      about: 'Dr. Sarah Johnson is a renowned cardiologist with over 20 years of experience in treating complex heart conditions. She specializes in minimally invasive cardiac procedures and has published numerous research papers in leading medical journals.',
      achievements: ['Best Doctor Award 2023', 'Published 50+ Research Papers', 'Pioneer in Minimally Invasive Surgery'],
      consultationFee: '$200',
      phone: '+1 (555) 123-4567',
      email: 'sarah.johnson@medicare.com'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      department: 'neurology',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      rating: 4.8,
      reviews: 198,
      experience: '18+ years',
      education: 'MD, Johns Hopkins University',
      location: 'Main Campus - Building B',
      availability: 'Mon-Thu: 8AM-4PM',
      languages: ['English', 'Mandarin'],
      specializations: ['Stroke Treatment', 'Epilepsy', 'Brain Tumors'],
      about: 'Dr. Michael Chen is a distinguished neurologist known for his expertise in stroke treatment and brain surgery. He has successfully treated over 1000 patients with complex neurological conditions.',
      achievements: ['Neurological Excellence Award 2022', 'International Speaker', 'Research Grant Recipient'],
      consultationFee: '$250',
      phone: '+1 (555) 234-5678',
      email: 'michael.chen@medicare.com'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      department: 'pediatrics',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=face',
      rating: 4.9,
      reviews: 312,
      experience: '15+ years',
      education: 'MD, Stanford University',
      location: 'Pediatric Wing',
      availability: 'Mon-Sat: 8AM-6PM',
      languages: ['English', 'Spanish', 'Portuguese'],
      specializations: ['Child Development', 'Pediatric Surgery', 'Immunizations'],
      about: 'Dr. Emily Rodriguez is a compassionate pediatrician dedicated to providing comprehensive care for children of all ages. She has a special interest in child development and preventive care.',
      achievements: ['Pediatric Excellence Award 2023', 'Community Service Recognition', 'Child Advocacy Leader'],
      consultationFee: '$150',
      phone: '+1 (555) 345-6789',
      email: 'emily.rodriguez@medicare.com'
    },
    {
      id: 4,
      name: 'Dr. David Thompson',
      specialty: 'Orthopedic Surgeon',
      department: 'orthopedics',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face',
      rating: 4.7,
      reviews: 180,
      experience: '22+ years',
      education: 'MD, Mayo Clinic',
      location: 'Surgical Center',
      availability: 'Tue-Fri: 7AM-3PM',
      languages: ['English'],
      specializations: ['Joint Replacement', 'Sports Medicine', 'Spine Surgery'],
      about: 'Dr. David Thompson is an experienced orthopedic surgeon specializing in joint replacement and sports medicine. He has performed over 2000 successful surgeries.',
      achievements: ['Orthopedic Surgery Excellence Award', 'Sports Medicine Innovation', 'Medical Research Contributor'],
      consultationFee: '$300',
      phone: '+1 (555) 456-7890',
      email: 'david.thompson@medicare.com'
    },
    {
      id: 5,
      name: 'Dr. Lisa Wang',
      specialty: 'Ophthalmologist',
      department: 'ophthalmology',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face',
      rating: 4.8,
      reviews: 225,
      experience: '12+ years',
      education: 'MD, UCLA Medical School',
      location: 'Eye Care Center',
      availability: 'Mon-Wed-Fri: 9AM-5PM',
      languages: ['English', 'Mandarin', 'Korean'],
      specializations: ['Cataract Surgery', 'Retinal Diseases', 'LASIK Surgery'],
      about: 'Dr. Lisa Wang is a skilled ophthalmologist with expertise in advanced eye care and surgical procedures. She has helped thousands of patients improve their vision.',
      achievements: ['Vision Care Excellence Award', 'LASIK Surgery Pioneer', 'Eye Care Research Leader'],
      consultationFee: '$180',
      phone: '+1 (555) 567-8901',
      email: 'lisa.wang@medicare.com'
    },
    {
      id: 6,
      name: 'Dr. Robert Martinez',
      specialty: 'Emergency Medicine',
      department: 'emergency',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      rating: 4.9,
      reviews: 290,
      experience: '25+ years',
      education: 'MD, University of Pennsylvania',
      location: 'Emergency Department',
      availability: '24/7 Rotating Schedule',
      languages: ['English', 'Spanish'],
      specializations: ['Trauma Care', 'Critical Care', 'Emergency Surgery'],
      about: 'Dr. Robert Martinez is a veteran emergency medicine physician with extensive experience in trauma and critical care. He has saved countless lives in emergency situations.',
      achievements: ['Emergency Medicine Hero Award', 'Trauma Care Excellence', 'Life Saving Recognition'],
      consultationFee: '$250',
      phone: '+1 (555) 678-9012',
      email: 'robert.martinez@medicare.com'
    }
  ];

  const departments = [
    { value: 'all', label: 'All Departments', count: doctors.length },
    { value: 'cardiology', label: 'Cardiology', count: doctors.filter(d => d.department === 'cardiology').length },
    { value: 'neurology', label: 'Neurology', count: doctors.filter(d => d.department === 'neurology').length },
    { value: 'pediatrics', label: 'Pediatrics', count: doctors.filter(d => d.department === 'pediatrics').length },
    { value: 'orthopedics', label: 'Orthopedics', count: doctors.filter(d => d.department === 'orthopedics').length },
    { value: 'ophthalmology', label: 'Ophthalmology', count: doctors.filter(d => d.department === 'ophthalmology').length },
    { value: 'emergency', label: 'Emergency Medicine', count: doctors.filter(d => d.department === 'emergency').length }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || doctor.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const DoctorDetailDialog = ({ doctor }: { doctor: typeof doctors[0] }) => (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl text-center">Doctor Profile</DialogTitle>
      </DialogHeader>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Doctor Image & Basic Info */}
        <div className="md:col-span-1">
          <div className="text-center">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
            />
            <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
            <p className="text-cyan-600 font-semibold mb-2">{doctor.specialty}</p>
            <div className="flex items-center justify-center gap-1 mb-4">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="font-semibold">{doctor.rating}</span>
              <span className="text-gray-600">({doctor.reviews || 0} reviews)</span>
            </div>
            <Badge className="bg-cyan-100 text-cyan-800 mb-4">{doctor.experience}</Badge>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="md:col-span-2 space-y-6">
          {/* About */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">About</h4>
            <p className="text-gray-600 leading-relaxed">{doctor.about || 'Professional healthcare provider dedicated to patient care.'}</p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{doctor.phone || 'Available on request'}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>{doctor.email || 'Available on request'}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{doctor.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{doctor.availability}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Professional Details</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <GraduationCap className="w-4 h-4" />
                  <span>{doctor.education}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Award className="w-4 h-4" />
                  <span>Consultation Fee: {doctor.consultationFee || 'Contact for pricing'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-gray-800">Specializations</h4>
            <div className="flex flex-wrap gap-2">
              {(doctor.specializations || []).map((spec, index) => (
                <Badge key={index} variant="outline" className="border-cyan-200 text-cyan-700">
                  {spec}
                </Badge>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-gray-800">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {(doctor.languages || []).map((lang, index) => (
                <Badge key={index} className="bg-gray-100 text-gray-700">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-gray-800">Achievements</h4>
            <ul className="space-y-1">
              {(doctor.achievements || []).map((achievement, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button asChild className="flex-1 bg-cyan-500 hover:bg-cyan-600">
              <Link to="/appointments">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Link>
            </Button>
            <Button variant="outline" className="flex-1">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  );

  return (
    <div className="min-h-screen bg-gray-50 transition-all duration-500 ease-in-out">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-600 py-20 animate-fade-in">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6 animate-pulse-gentle">Our Medical Experts</h1>
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
                className="pl-10 border-cyan-200 focus:border-cyan-500 transition-colors"
              />
            </div>
            <div className="w-full md:w-auto min-w-64">
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="border-cyan-200 focus:border-cyan-500">
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept.value} value={dept.value}>
                      {dept.label} ({dept.count})
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
            {filteredDoctors.map((doctor, index) => (
              <Card 
                key={doctor.id} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-scale-in hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1 fill-current" />
                    <span className="text-sm font-semibold">{doctor.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-cyan-500 text-white">{doctor.department}</Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{doctor.name}</CardTitle>
                  <CardDescription className="text-cyan-600 font-semibol">
                    {doctor.specialty}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="w-4 h-4 mr-2" />
                    <span>{doctor.experience} • {doctor.education.split(',')[0]}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{doctor.location}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{doctor.availability}</span>
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex-1 border-cyan-200 text-cyan-600 hover:bg-cyan-50">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DoctorDetailDialog doctor={doctor} />
                    </Dialog>
                    <Button asChild className="flex-1 bg-cyan-500 hover:bg-cyan-600">
                      <Link to="/appointments">Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredDoctors.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
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
