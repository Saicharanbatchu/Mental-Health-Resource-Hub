const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mentalhealthdb';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Basic route
// Basic route
app.get('/', (req, res) => {
  res.send('Mental Health Resource Hub Backend API');
});

// Crisis Resources API
app.get('/api/crisis-resources', (req, res) => {
  const crisisResources = [
    { name: 'AASRA Suicide Prevention', number: '9152987821', description: '24/7 crisis support' },
    { name: 'Vandrevala Foundation', number: '9999666555', description: 'Mental health helpline' },
    { name: 'Sneha India', number: '044-24640050', description: 'Emotional support helpline' },
    { name: 'Emergency Services', number: '100', description: 'Police emergency response' }
  ];
  res.json(crisisResources);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});