
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Clock, Search, Heart, Brain, Activity } from 'lucide-react';

const HealthBlog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: '10 Heart-Healthy Foods to Include in Your Diet',
      excerpt: 'Discover the best foods for cardiovascular health and learn how to incorporate them into your daily meals for a stronger heart.',
      content: 'Full article content here...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'cardiology',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop',
      tags: ['Heart Health', 'Nutrition', 'Prevention']
    },
    {
      id: 2,
      title: 'Understanding Pediatric Vaccinations: A Parent\'s Guide',
      excerpt: 'Everything parents need to know about childhood vaccines, including schedules, benefits, and addressing common concerns.',
      content: 'Full article content here...',
      author: 'Dr. Emily Rodriguez',
      date: '2024-01-12',
      readTime: '8 min read',
      category: 'pediatrics',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=250&fit=crop',
      tags: ['Pediatrics', 'Vaccines', 'Child Health']
    },
    {
      id: 3,
      title: 'Mental Health Awareness: Breaking the Stigma',
      excerpt: 'Addressing mental health challenges in our community and promoting open conversations about psychological well-being.',
      content: 'Full article content here...',
      author: 'Dr. Michael Chen',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'mental-health',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
      tags: ['Mental Health', 'Awareness', 'Support']
    },
    {
      id: 4,
      title: 'Exercise and Aging: Staying Active After 50',
      excerpt: 'Learn about safe and effective exercise routines for seniors and how physical activity can improve quality of life.',
      content: 'Full article content here...',
      author: 'Dr. David Thompson',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'wellness',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop',
      tags: ['Exercise', 'Aging', 'Wellness']
    },
    {
      id: 5,
      title: 'Managing Diabetes: Lifestyle Changes That Make a Difference',
      excerpt: 'Practical tips for diabetes management through diet, exercise, and monitoring blood sugar levels effectively.',
      content: 'Full article content here...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'chronic-care',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=250&fit=crop',
      tags: ['Diabetes', 'Chronic Care', 'Lifestyle']
    },
    {
      id: 6,
      title: 'The Importance of Regular Eye Exams',
      excerpt: 'Why routine eye examinations are crucial for maintaining good vision and detecting eye diseases early.',
      content: 'Full article content here...',
      author: 'Dr. Lisa Wang',
      date: '2024-01-03',
      readTime: '4 min read',
      category: 'ophthalmology',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=250&fit=crop',
      tags: ['Eye Health', 'Prevention', 'Vision']
    }
  ];

  const categories = [
    { value: 'all', label: 'All Articles', icon: Activity },
    { value: 'cardiology', label: 'Heart Health', icon: Heart },
    { value: 'pediatrics', label: 'Child Health', icon: User },
    { value: 'mental-health', label: 'Mental Health', icon: Brain },
    { value: 'wellness', label: 'Wellness', icon: Activity },
    { value: 'chronic-care', label: 'Chronic Care', icon: Activity },
    { value: 'ophthalmology', label: 'Eye Health', icon: Activity }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Health Blog & Articles</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay informed with the latest health tips, medical insights, and wellness advice 
            from our team of healthcare professionals.
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className={selectedCategory === category.value ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Article</h2>
              <p className="text-gray-600">Our most recent health insights</p>
            </div>
            
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">Featured</Badge>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {filteredPosts[0].tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {filteredPosts[0].title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {filteredPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-2" />
                      <span>{filteredPosts[0].author}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(filteredPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{filteredPosts[0].readTime}</span>
                    </div>
                  </div>
                  
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 w-fit">
                    <Link to={`/health-blog/${filteredPosts[0].id}`}>
                      Read Article
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Latest Articles</h2>
            <p className="text-gray-600">Explore our collection of health and wellness articles</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <CardTitle className="text-lg text-gray-800 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Link to={`/health-blog/${post.id}`}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No articles found matching your search.</p>
              <p className="text-gray-500 mt-2">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest health tips and medical insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white text-gray-800"
            />
            <Button className="bg-purple-600 hover:bg-purple-700 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthBlog;
