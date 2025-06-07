import { useState } from 'react';
import { Heart, MessageCircle, Users, Plus, ThumbsUp, Eye, EyeOff, Calendar } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  anonymous: boolean;
  date: string;
  likes: number;
  replies: number;
  category: string;
  supportive: boolean;
}

interface Reply {
  id: number;
  postId: number;
  content: string;
  author: string;
  anonymous: boolean;
  date: string;
  likes: number;
}

const Community = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: 'general',
    anonymous: true
  });

  const categories = [
    'all',
    'general',
    'anxiety',
    'depression',
    'recovery',
    'relationships',
    'support',
    'success-stories'
  ];

  const mockPosts: Post[] = [
    {
      id: 1,
      title: 'First therapy session went better than expected',
      content: 'I was terrified to start therapy, but my therapist made me feel so comfortable. Just wanted to share for anyone who\'s on the fence - it\'s worth it.',
      author: 'Anonymous User',
      anonymous: true,
      date: '2025-01-15T10:30:00Z',
      likes: 24,
      replies: 8,
      category: 'success-stories',
      supportive: true
    },
    {
      id: 2,
      title: 'Dealing with workplace anxiety',
      content: 'Anyone else struggle with anxiety at work? I get so overwhelmed during meetings and presentations. Looking for tips on how to cope.',
      author: 'Anonymous User',
      anonymous: true,
      date: '2025-01-14T15:45:00Z',
      likes: 12,
      replies: 15,
      category: 'anxiety',
      supportive: false
    },
    {
      id: 3,
      title: 'Three months clean and feeling hopeful',
      content: 'Today marks three months since I last used substances. It\'s been the hardest thing I\'ve ever done, but I\'m starting to see the light. Thank you to everyone in this community for the support.',
      author: 'RecoveryWarrior',
      anonymous: false,
      date: '2025-01-13T09:20:00Z',
      likes: 45,
      replies: 12,
      category: 'recovery',
      supportive: true
    },
    {
      id: 4,
      title: 'How do you tell friends about depression?',
      content: 'I\'ve been struggling with depression for months and my friends keep asking why I\'ve been distant. I want to tell them but I\'m scared they won\'t understand. Has anyone been through this?',
      author: 'Anonymous User',
      anonymous: true,
      date: '2025-01-12T20:15:00Z',
      likes: 18,
      replies: 22,
      category: 'relationships',
      supportive: false
    },
    {
      id: 5,
      title: 'Small wins matter too',
      content: 'Got out of bed, showered, and made breakfast today. Might seem small to others but it feels like a huge victory. Celebrating the little things.',
      author: 'Anonymous User',
      anonymous: true,
      date: '2025-01-11T14:00:00Z',
      likes: 67,
      replies: 25,
      category: 'support',
      supportive: true
    }
  ];

  const mockReplies: Reply[] = [
    {
      id: 1,
      postId: 1,
      content: 'So proud of you for taking that first step! Therapy changed my life too.',
      author: 'Anonymous User',
      anonymous: true,
      date: '2025-01-15T11:15:00Z',
      likes: 5
    },
    {
      id: 2,
      postId: 1,
      content: 'This gives me hope. I have my first session next week and I\'m so nervous.',
      author: 'Anonymous User',
      anonymous: true,
      date: '2025-01-15T12:30:00Z',
      likes: 3
    }
  ];

  const filteredPosts = mockPosts.filter(post => {
    return selectedCategory === 'all' || post.category === selectedCategory;
  });

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    console.log('New post:', newPost);
    setShowNewPostForm(false);
    setNewPost({ title: '', content: '', category: 'general', anonymous: true });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (selectedPost) {
    const postReplies = mockReplies.filter(reply => reply.postId === selectedPost.id);
    
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-6 flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Back to Community
          </button>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-600">
                  {selectedPost.anonymous ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
                  {selectedPost.author}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(selectedPost.date)}
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                selectedPost.supportive 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {selectedPost.category.replace('-', ' ')}
              </span>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{selectedPost.title}</h1>
            <p className="text-gray-700 mb-6 leading-relaxed">{selectedPost.content}</p>
            
            <div className="flex items-center space-x-6 text-gray-600">
              <button className="flex items-center space-x-1 hover:text-primary-600">
                <ThumbsUp className="w-5 h-5" />
                <span>{selectedPost.likes}</span>
              </button>
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-5 h-5" />
                <span>{postReplies.length} replies</span>
              </div>
            </div>
          </div>

          {/* Replies */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Replies ({postReplies.length})</h2>
            
            {postReplies.map((reply) => (
              <div key={reply.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm text-gray-600">
                      {reply.anonymous ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
                      {reply.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(reply.date)}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{reply.content}</p>
                
                <button className="flex items-center space-x-1 text-gray-600 hover:text-primary-600">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{reply.likes}</span>
                </button>
              </div>
            ))}

            {/* Reply Form */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Add a Reply</h3>
              <form className="space-y-4">
                <textarea
                  placeholder="Share your thoughts or support..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  rows={4}
                ></textarea>
                
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm text-gray-600 flex items-center">
                      <EyeOff className="w-4 h-4 mr-1" />
                      Post anonymously
                    </span>
                  </label>
                  
                  <button
                    type="submit"
                    className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Post Reply
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Support</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A safe space to share experiences, find support, and connect with others on similar journeys
          </p>
        </div>

        {/* Community Guidelines */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-lg">
          <div className="flex items-center mb-2">
            <Heart className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-lg font-semibold text-blue-800">Community Guidelines</h2>
          </div>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• Be respectful and supportive to all community members</li>
            <li>• Maintain anonymity when desired - your privacy is important</li>
            <li>• Share experiences and resources, but avoid giving medical advice</li>
            <li>• Report any harmful or inappropriate content</li>
            <li>• Remember: This community is for support, not crisis intervention</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="all">All Categories</option>
              <option value="general">General Discussion</option>
              <option value="anxiety">Anxiety</option>
              <option value="depression">Depression</option>
              <option value="recovery">Recovery</option>
              <option value="relationships">Relationships</option>
              <option value="support">Support</option>
              <option value="success-stories">Success Stories</option>
            </select>
            
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-2" />
              <span className="text-sm">{filteredPosts.length} posts</span>
            </div>
          </div>
          
          <button
            onClick={() => setShowNewPostForm(true)}
            className="flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Post
          </button>
        </div>

        {/* New Post Form */}
        {showNewPostForm && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Share Your Story</h2>
            <form onSubmit={handleSubmitPost} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="What would you like to share?"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  rows={6}
                  placeholder="Share your experience, ask for support, or offer encouragement..."
                  required
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={newPost.category}
                    onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="general">General Discussion</option>
                    <option value="anxiety">Anxiety</option>
                    <option value="depression">Depression</option>
                    <option value="recovery">Recovery</option>
                    <option value="relationships">Relationships</option>
                    <option value="support">Support</option>
                    <option value="success-stories">Success Stories</option>
                  </select>
                </div>
                
                <div className="flex items-center">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={newPost.anonymous}
                      onChange={(e) => setNewPost({ ...newPost, anonymous: e.target.checked })}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-600 flex items-center">
                      <EyeOff className="w-4 h-4 mr-1" />
                      Post anonymously
                    </span>
                  </label>
                </div>
              </div>
              
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowNewPostForm(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Share Post
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Posts */}
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-gray-600">
                    {post.anonymous ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
                    {post.author}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(post.date)}
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  post.supportive 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {post.category.replace('-', ' ')}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.content}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6 text-gray-600">
                  <button className="flex items-center space-x-1 hover:text-primary-600">
                    <ThumbsUp className="w-5 h-5" />
                    <span>{post.likes}</span>
                  </button>
                  <button 
                    onClick={() => setSelectedPost(post)}
                    className="flex items-center space-x-1 hover:text-primary-600"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{post.replies} replies</span>
                  </button>
                </div>
                
                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  Read & Reply
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts in this category</h3>
            <p className="text-gray-600 mb-4">Be the first to share your story or ask for support</p>
            <button
              onClick={() => setShowNewPostForm(true)}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Create First Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;