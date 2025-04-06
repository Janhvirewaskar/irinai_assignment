const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User'); // Adjust path as necessary
const auth = require('./middleware/auth'); // Adjust path as necessary
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  




// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000',  // Replace with your frontend URL (for local development it's often http://localhost:3000)
  methods: 'GET,POST,PUT,DELETE',  // Allowed methods
  allowedHeaders: 'Content-Type,Authorization',  // Allowed headers
};

// Use CORS middleware with the defined options
app.use(cors(corsOptions));  // Applies CORS configuration to all incoming requests


// MongoDB connection
mongoose.connect('mongodb://localhost:27017/jwt-profile-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.log('❌ MongoDB error:', err));

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
const userRoutes = require('./routes/user');
app.use('/api/user', userRoutes);


// Example Route for fetching all users
app.get('/api/user/all', auth, async (req, res) => {
    try {
      const users = await User.find().select('-password'); // Exclude password
      res.json(users); // Send users as response
    } catch (err) {
      res.status(500).json({ message: 'Error fetching users' }); // Error handling
    }
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
