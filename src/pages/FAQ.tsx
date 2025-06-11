
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
        <p className="text-center text-gray-600">
          Coming soon - Common questions and answers about our services.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
