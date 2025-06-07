import { useState } from 'react';
import { Search, Calendar, User, ArrowRight, BookOpen, Heart, Clock } from 'lucide-react';
import SearchBar from '../components/SearchBar';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const categories = [
    'all',
    'anxiety',
    'depression',
    'stress-management',
    'relationships',
    'self-care',
    'therapy',
    'meditation',
    'workplace-wellness'
  ];

  const mockArticles: Article[] = [
    {
      id: 1,
      title: '10 Evidence-Based Strategies for Managing Anxiety',
      excerpt: 'Discover proven techniques to reduce anxiety and regain control of your mental health.',
      content: `Anxiety affects millions of people worldwide, but there are proven strategies that can help manage symptoms and improve quality of life.

## 1. Deep Breathing Exercises
Practice the 4-7-8 breathing technique: inhale for 4 counts, hold for 7, exhale for 8. This activates your parasympathetic nervous system.

## 2. Progressive Muscle Relaxation
Systematically tense and release different muscle groups to reduce physical tension associated with anxiety.

## 3. Mindfulness Meditation
Regular mindfulness practice can help you observe anxious thoughts without judgment and reduce their impact.

## 4. Cognitive Restructuring
Challenge negative thought patterns by examining evidence for and against anxious thoughts.

## 5. Regular Exercise
Physical activity releases endorphins and can be as effective as medication for some people with anxiety disorders.

## 6. Adequate Sleep
Maintain a consistent sleep schedule and practice good sleep hygiene to support mental health.

## 7. Limit Caffeine
Reduce caffeine intake as it can exacerbate anxiety symptoms in sensitive individuals.

## 8. Social Support
Connect with friends, family, or support groups to share experiences and reduce isolation.

## 9. Professional Help
Consider therapy, particularly Cognitive Behavioral Therapy (CBT), which is highly effective for anxiety.

## 10. Healthy Lifestyle
Maintain a balanced diet, stay hydrated, and avoid alcohol and substances that can worsen anxiety.

Remember, if anxiety significantly impacts your daily life, it's important to seek professional help.`,
      author: 'Dr. Sarah Martinez, PsyD',
      date: '2025-01-15',
      readTime: 8,
      category: 'anxiety',
      tags: ['anxiety', 'coping-strategies', 'mental-health'],
      image: 'https://images.pexels.com/photos/3759659/pexels-photo-3759659.jpeg',
      featured: true
    },
    {
      id: 2,
      title: 'Understanding Depression: Signs, Symptoms, and Hope',
      excerpt: 'A comprehensive guide to recognizing depression and finding pathways to recovery.',
      content: `Depression is more than just feeling sad – it's a serious mental health condition that affects how you feel, think, and handle daily activities.

## What is Depression?
Depression is a mood disorder that causes persistent feelings of sadness and loss of interest in activities you once enjoyed.

## Common Signs and Symptoms:
- Persistent sad or empty mood
- Loss of interest in activities
- Changes in appetite or weight
- Sleep disturbances
- Fatigue or loss of energy
- Feelings of worthlessness or guilt
- Difficulty concentrating
- Thoughts of death or suicide

## Types of Depression:
- Major Depressive Disorder
- Persistent Depressive Disorder
- Seasonal Affective Disorder
- Postpartum Depression
- Bipolar Disorder

## Treatment Options:
Depression is highly treatable with:
- Psychotherapy (especially CBT and IPT)
- Medications (antidepressants)
- Lifestyle changes
- Support groups
- Alternative therapies

## Self-Care Strategies:
- Maintain a routine
- Stay connected with others
- Exercise regularly
- Eat a healthy diet
- Get adequate sleep
- Practice relaxation techniques

## When to Seek Help:
If you experience symptoms for more than two weeks, or if you have thoughts of self-harm, it's crucial to seek professional help immediately.

Remember: Depression is not a sign of weakness, and recovery is possible with proper treatment and support.`,
      author: 'Dr. Michael Thompson, MD',
      date: '2025-01-12',
      readTime: 12,
      category: 'depression',
      tags: ['depression', 'symptoms', 'treatment'],
      image: 'https://images.pexels.com/photos/4100420/pexels-photo-4100420.jpeg',
      featured: true
    },
    {
      id: 3,
      title: 'Building Resilience: Strengthening Your Mental Health',
      excerpt: 'Learn how to develop resilience and bounce back from life\'s challenges stronger than before.',
      content: `Resilience is the ability to adapt and bounce back when things don't go as planned. It's a skill that can be developed and strengthened over time.

## What is Resilience?
Resilience doesn't mean avoiding stress or eliminating problems from your life. Instead, it's about learning to navigate through difficulties while maintaining your mental well-being.

## Key Components of Resilience:
1. **Emotional Regulation**: Managing intense emotions effectively
2. **Cognitive Flexibility**: Adapting your thinking to new situations
3. **Social Connection**: Building and maintaining supportive relationships
4. **Self-Efficacy**: Believing in your ability to handle challenges
5. **Meaning-Making**: Finding purpose and meaning in difficult experiences

## Building Resilience:
- **Develop Strong Relationships**: Cultivate supportive connections with family, friends, and community
- **Practice Self-Care**: Prioritize physical health, adequate sleep, and stress management
- **Set Realistic Goals**: Break large goals into manageable steps
- **Learn from Experience**: View challenges as opportunities for growth
- **Maintain Perspective**: Keep problems in context and remember that difficult times are temporary
- **Take Action**: Focus on what you can control rather than dwelling on what you can't

## Resilience in Daily Life:
- Start each day with intention
- Practice gratitude regularly
- Develop problem-solving skills
- Learn to accept change as part of life
- Cultivate optimism while staying realistic

Building resilience is a lifelong journey. Be patient with yourself as you develop these skills, and remember that seeking help when needed is a sign of strength, not weakness.`,
      author: 'Dr. Jennifer Kim, LCSW',
      date: '2025-01-10',
      readTime: 6,
      category: 'self-care',
      tags: ['resilience', 'coping-skills', 'mental-strength'],
      image: 'https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg',
      featured: false
    },
    {
      id: 4,
      title: 'Mindfulness for Beginners: A Practical Guide',
      excerpt: 'Start your mindfulness journey with simple, practical techniques you can use anywhere.',
      content: `Mindfulness is the practice of being fully present and engaged in the current moment, without judgment. It's a powerful tool for reducing stress and improving mental well-being.

## What is Mindfulness?
Mindfulness involves paying attention to your thoughts, feelings, and surroundings in the present moment, without trying to change or judge them.

## Benefits of Mindfulness:
- Reduced stress and anxiety
- Improved emotional regulation
- Better focus and concentration
- Enhanced self-awareness
- Improved relationships
- Better sleep quality
- Reduced symptoms of depression

## Simple Mindfulness Exercises:

### 1. Mindful Breathing
- Find a comfortable position
- Focus on your breath
- Notice the sensation of breathing in and out
- When your mind wanders, gently return to your breath

### 2. Body Scan
- Lie down comfortably
- Start from your toes and work up to your head
- Notice any sensations without trying to change them
- Spend 1-2 minutes on each body part

### 3. Mindful Walking
- Walk slowly and deliberately
- Pay attention to each step
- Notice how your feet feel touching the ground
- Observe your surroundings without judgment

### 4. 5-4-3-2-1 Technique
- Notice 5 things you can see
- Notice 4 things you can touch
- Notice 3 things you can hear
- Notice 2 things you can smell
- Notice 1 thing you can taste

## Getting Started:
- Start with just 5 minutes a day
- Choose a regular time for practice
- Use guided meditations if helpful
- Be patient with yourself
- Remember that wandering thoughts are normal

Mindfulness is a skill that improves with practice. The goal isn't to empty your mind, but to develop a different relationship with your thoughts and experiences.`,
      author: 'Dr. Lisa Chen, PhD',
      date: '2025-01-08',
      readTime: 7,
      category: 'meditation',
      tags: ['mindfulness', 'meditation', 'beginners'],
      image: 'https://images.pexels.com/photos/3759654/pexels-photo-3759654.jpeg',
      featured: false
    },
    {
      id: 5,
      title: 'Healthy Boundaries: Protecting Your Mental Health',
      excerpt: 'Learn how to set and maintain healthy boundaries in relationships and at work.',
      content: `Healthy boundaries are essential for maintaining good mental health and building strong relationships. They help define where you end and others begin.

## What are Boundaries?
Boundaries are guidelines that define how you want to be treated and what you're comfortable with in relationships and situations.

## Types of Boundaries:
- **Physical**: Personal space and physical touch
- **Emotional**: Sharing feelings and taking on others' emotions
- **Mental**: Thoughts, values, and opinions
- **Time**: How you spend your time and energy
- **Digital**: Social media and technology use
- **Financial**: Money and spending decisions

## Signs You Need Better Boundaries:
- Feeling overwhelmed or burned out
- Resentment toward others
- Difficulty saying no
- Taking on others' problems as your own
- Feeling guilty when you prioritize yourself
- Chronic stress or anxiety

## How to Set Healthy Boundaries:
1. **Identify Your Limits**: Know what you're comfortable with
2. **Be Clear and Direct**: Communicate your boundaries clearly
3. **Start Small**: Begin with less challenging situations
4. **Be Consistent**: Maintain your boundaries regularly
5. **Don't Over-Explain**: You don't need to justify your boundaries
6. **Prepare for Pushback**: Some people may resist your boundaries
7. **Practice Self-Care**: Maintain your boundaries even when it's difficult

## Boundary-Setting Scripts:
- "I'm not comfortable with that"
- "I need to think about it"
- "That doesn't work for me"
- "I've already made plans"
- "I'm not available for that"

## Common Boundary Challenges:
- Family expectations
- Workplace demands
- Friend requests
- Social media pressure
- Romantic relationships

Remember: Setting boundaries isn't selfish – it's necessary for your mental health and the health of your relationships.`,
      author: 'Dr. Robert Garcia, MFT',
      date: '2025-01-05',
      readTime: 9,
      category: 'relationships',
      tags: ['boundaries', 'relationships', 'self-care'],
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg',
      featured: false
    }
  ];

  const filteredArticles = mockArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedArticle(null)}
            className="mb-6 flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Back to Articles
          </button>
          
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-64 object-cover"
            />
            
            <div className="p-8">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {selectedArticle.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(selectedArticle.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {selectedArticle.readTime} min read
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedArticle.title}</h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedArticle.tags.map((tag, index) => (
                  <span key={index} className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="prose prose-lg max-w-none">
                {selectedArticle.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                  } else if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                  } else if (paragraph.startsWith('- ')) {
                    return <li key={index} className="text-gray-700 mb-2">{paragraph.replace('- ', '')}</li>;
                  } else if (paragraph.trim() !== '') {
                    return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>;
                  }
                  return null;
                })}
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mental Health Articles & Tips</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evidence-based articles, practical tips, and expert insights to support your mental wellness journey
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Search articles, topics, or keywords..."
          />
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <BookOpen className="w-4 h-4 inline mr-2" />
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="all">All Categories</option>
              <option value="anxiety">Anxiety</option>
              <option value="depression">Depression</option>
              <option value="stress-management">Stress Management</option>
              <option value="relationships">Relationships</option>
              <option value="self-care">Self-Care</option>
              <option value="therapy">Therapy</option>
              <option value="meditation">Meditation</option>
              <option value="workplace-wellness">Workplace Wellness</option>
            </select>
          </div>
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Heart className="w-6 h-6 text-primary-600 mr-2" />
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime} min read
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, index) => (
                        <span key={index} className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Articles */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All Articles ({regularArticles.length} found)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime} min
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;