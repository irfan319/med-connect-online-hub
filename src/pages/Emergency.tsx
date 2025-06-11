
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Emergency = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Emergency Services</h1>
        <p className="text-center text-gray-600">
          Coming soon - Emergency contact information and procedures.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Emergency;
