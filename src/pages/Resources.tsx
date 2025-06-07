import { useState } from 'react';
import { Search, MapPin, Phone, Globe, Filter, Heart, Clock, Star } from 'lucide-react';
import SearchBar from '../components/SearchBar';

interface Resource {
  id: number;
  name: string;
  type: string;
  description: string;
  location: string;
  phone: string;
  website: string;
  hours: string;
  rating: number;
  specialties: string[];
  crisis: boolean;
}

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const resourceTypes = [
    'all',
    'therapist',
    'psychiatrist',
    'crisis-hotline',
    'support-group',
    'hospital',
    'clinic',
    'online-therapy'
  ];

  const locations = [
    'all',
    'Mumbai, Maharashtra',
    'Delhi, NCR',
    'Bangalore, Karnataka',
    'Chennai, Tamil Nadu',
    'Kolkata, West Bengal',
    'Hyderabad, Telangana',
    'Pune, Maharashtra',
    'Ahmedabad, Gujarat',
    'Jaipur, Rajasthan',
    'Online'
  ];

  const mockResources: Resource[] = [
    {
      id: 1,
      name: 'AASRA Suicide Prevention Helpline',
      type: 'crisis-hotline',
      description: '24/7 free and confidential support for people in distress, prevention and crisis resources across India.',
      location: 'Mumbai, Maharashtra',
      phone: '9152987821',
      website: 'https://aasra.info',
      hours: '24/7',
      rating: 5,
      specialties: ['Crisis Support', 'Suicide Prevention', 'Mental Health Crisis'],
      crisis: true
    },
    {
      id: 2,
      name: 'Vandrevala Foundation Helpline',
      type: 'crisis-hotline',
      description: 'Free, 24/7 mental health support and crisis intervention services across India.',
      location: 'Nationwide',
      phone: '9999666555',
      website: 'https://vandrevalafoundation.com',
      hours: '24/7',
      rating: 5,
      specialties: ['Crisis Support', 'Mental Health', 'Counseling'],
      crisis: true
    },
    {
      id: 3,
      name: 'Sneha India Foundation',
      type: 'crisis-hotline',
      description: 'Emotional support helpline providing confidential support to those in emotional distress.',
      location: 'Chennai, Tamil Nadu',
      phone: '044-24640050',
      website: 'https://snehaindia.org',
      hours: '24/7',
      rating: 5,
      specialties: ['Emotional Support', 'Crisis Intervention', 'Suicide Prevention'],
      crisis: true
    },
    {
      id: 4,
      name: 'Fortis Healthcare Mental Health',
      type: 'hospital',
      description: 'Leading healthcare provider with comprehensive mental health services and emergency care.',
      location: 'Delhi, NCR',
      phone: '011-4277-6222',
      website: 'https://fortishealthcare.com',
      hours: '24/7 Emergency',
      rating: 4,
      specialties: ['Inpatient Care', 'Bipolar Disorder', 'Depression', 'Anxiety'],
      crisis: true
    },
    {
      id: 5,
      name: 'NIMHANS Bangalore',
      type: 'hospital',
      description: 'National Institute of Mental Health and Neurosciences - Premier mental health institution.',
      location: 'Bangalore, Karnataka',
      phone: '080-2699-5000',
      website: 'https://nimhans.ac.in',
      hours: '24/7 Emergency',
      rating: 5,
      specialties: ['Research', 'Treatment', 'Training', 'Neurosciences'],
      crisis: true
    },
    {
      id: 6,
      name: 'Dr. Priya Sharma, Clinical Psychologist',
      type: 'therapist',
      description: 'Licensed clinical psychologist specializing in anxiety, depression, and trauma therapy.',
      location: 'Mumbai, Maharashtra',
      phone: '022-2654-0123',
      website: 'https://drpriyasharma.com',
      hours: 'Mon-Fri 9AM-6PM',
      rating: 5,
      specialties: ['CBT', 'EMDR', 'Trauma Therapy', 'Anxiety Treatment'],
      crisis: false
    },
    {
      id: 7,
      name: 'Mind Wellness Clinic',
      type: 'clinic',
      description: 'Affordable mental health services for individuals and families with sliding scale fees.',
      location: 'Delhi, NCR',
      phone: '011-4567-0456',
      website: 'https://mindwellness.in',
      hours: 'Mon-Sat 8AM-8PM',
      rating: 4,
      specialties: ['Sliding Scale Fees', 'Family Therapy', 'Group Therapy'],
      crisis: false
    },
    {
      id: 8,
      name: 'Dr. Rajesh Kumar, Psychiatrist',
      type: 'psychiatrist',
      description: 'Board-certified psychiatrist specializing in medication management and therapy.',
      location: 'Bangalore, Karnataka',
      phone: '080-2345-0789',
      website: 'https://drrajeshkumar.in',
      hours: 'Mon-Thu 9AM-5PM',
      rating: 5,
      specialties: ['Medication Management', 'Bipolar Disorder', 'Schizophrenia'],
      crisis: false
    },
    {
      id: 9,
      name: 'YourDOST Online Counseling',
      type: 'online-therapy',
      description: 'Online emotional wellness platform providing counseling and mental health support.',
      location: 'Online',
      phone: '080-4718-8000',
      website: 'https://yourdost.com',
      hours: 'Flexible scheduling',
      rating: 4,
      specialties: ['Online Counseling', 'Student Support', 'Workplace Wellness'],
      crisis: false
    },
    {
      id: 10,
      name: 'Mpower Mental Health',
      type: 'support-group',
      description: 'Mental health organization providing support groups and awareness programs.',
      location: 'Mumbai, Maharashtra',
      phone: '022-2570-3456',
      website: 'https://mpowerminds.com',
      hours: 'Various times',
      rating: 4,
      specialties: ['Support Groups', 'Awareness', 'Community Programs'],
      crisis: false
    }
  ];

  const filteredResources = mockResources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesLocation = selectedLocation === 'all' || 
                           resource.location.includes(selectedLocation) ||
                           (selectedLocation === 'Online' && resource.location === 'Online');
    
    return matchesSearch && matchesType && matchesLocation;
  });

  const crisisResources = filteredResources.filter(resource => resource.crisis);
  const generalResources = filteredResources.filter(resource => !resource.crisis);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mental Health Resources in India</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find therapists, crisis support, support groups, and other mental health resources across India
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Search resources, specialties, or locations in India..."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Filter className="w-4 h-4 inline mr-2" />
                Resource Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="all">All Types</option>
                <option value="crisis-hotline">Crisis Hotlines</option>
                <option value="therapist">Therapists</option>
                <option value="psychiatrist">Psychiatrists</option>
                <option value="support-group">Support Groups</option>
                <option value="hospital">Hospitals</option>
                <option value="clinic">Clinics</option>
                <option value="online-therapy">Online Therapy</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Crisis Resources Section */}
        {crisisResources.length > 0 && (
          <div className="mb-12">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <div className="flex items-center">
                <Heart className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-red-800">Crisis Resources - Available 24/7</h2>
              </div>
              <p className="text-red-700 mt-2">If you're in immediate danger, please call 100 (Police Emergency)</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {crisisResources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{resource.name}</h3>
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                      CRISIS
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-700">
                      <Phone className="w-4 h-4 mr-2 text-red-600" />
                      <span className="font-semibold text-red-600 text-lg">{resource.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{resource.hours}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{resource.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.specialties.map((specialty, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      {[...Array(resource.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">({resource.rating}/5)</span>
                    </div>
                    <a
                      href={resource.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      <Globe className="w-4 h-4 mr-1" />
                      Visit Website
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* General Resources */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            General Resources ({generalResources.length} found)
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {generalResources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{resource.name}</h3>
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full">
                    {resource.type.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>{resource.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{resource.hours}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{resource.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.specialties.map((specialty, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                      {specialty}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {[...Array(resource.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({resource.rating}/5)</span>
                  </div>
                  <a
                    href={resource.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <Globe className="w-4 h-4 mr-1" />
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;