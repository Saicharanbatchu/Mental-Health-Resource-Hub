import { Search, BookOpen, Users, Shield, ArrowRight, Heart, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface CrisisResource {
  name: string;
  number: string;
  description: string;
}

const Home = () => {
  const [crisisResources, setCrisisResources] = useState<CrisisResource[]>([]);

  useEffect(() => {
    const fetchCrisisResources = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/crisis-resources'); // Assuming an endpoint for crisis resources
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCrisisResources(data);
      } catch (error) {
        console.error('Error fetching crisis resources:', error);
        // Fallback to hardcoded data if API call fails
        setCrisisResources([
          { name: 'AASRA Suicide Prevention', number: '9152987821', description: '24/7 crisis support' },
          { name: 'Vandrevala Foundation', number: '9999666555', description: 'Mental health helpline' },
          { name: 'Sneha India', number: '044-24640050', description: 'Emotional support helpline' },
          { name: 'Emergency Services', number: '100', description: 'Police emergency response' }
        ]);
      }
    };

    fetchCrisisResources();
  }, []);

  const features = [
    {
      icon: Search,
      title: 'Find Resources',
      description: 'Search our comprehensive database of mental health resources, therapists, and crisis hotlines across India.',
      link: '/resources',
      color: 'text-primary-600'
    },
    {
      icon: BookOpen,
      title: 'Articles & Tips',
      description: 'Access evidence-based articles, wellness tips, and educational content about mental health.',
      link: '/articles',
      color: 'text-secondary-600'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with others, share experiences anonymously, and find peer support in a safe space.',
      link: '/community',
      color: 'text-accent-600'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your privacy is our priority. All interactions are encrypted and anonymous when desired.',
      link: '#',
      color: 'text-green-600'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              Your Mental Health
              <span className="block text-secondary-300">Matters</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 animate-slide-up">
              Find resources, connect with support, and take the first step toward wellness. 
              You're not alone in this journey across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link
                to="/resources"
                className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105 flex items-center justify-center"
              >
                Find Resources <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/community"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200 hover:scale-105"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Resources - Prominent Placement */}
      <section className="py-12 bg-red-50 border-t-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Phone className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Need Immediate Help?</h2>
            <p className="text-gray-600">Indian crisis resources available 24/7</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {crisisResources.map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">{resource.name}</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">{resource.number}</p>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Can Help</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mental health support designed to meet you wherever you are in your journey across India
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <feature.icon className={`w-12 h-12 ${feature.color} mb-6 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                  Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Making a Difference in India</h2>
            <p className="text-xl text-gray-600">Our impact in the Indian mental health community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">5K+</div>
              <p className="text-gray-700 text-lg">Indian Resources Available</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary-600 mb-2">24/7</div>
              <p className="text-gray-700 text-lg">Crisis Support</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-600 mb-2">100%</div>
              <p className="text-gray-700 text-lg">Anonymous & Secure</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 text-primary-400 mx-auto mb-8 animate-pulse-gentle" />
          <h2 className="text-4xl font-bold mb-6">Take the First Step Today</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Mental health is a journey, not a destination. Let us be your companion along the way in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/resources"
              className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors hover:scale-105"
            >
              Explore Resources
            </Link>
            <Link
              to="/articles"
              className="px-8 py-4 border-2 border-gray-400 text-gray-300 rounded-lg font-semibold hover:bg-gray-800 hover:border-gray-300 transition-all hover:scale-105"
            >
              Read Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;