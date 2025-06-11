
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Blog Post</h1>
        <p className="text-center text-gray-600">
          Coming soon - Individual blog post content.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
