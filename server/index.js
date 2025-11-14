const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.get('/api/company-info', (req, res) => {
  res.json({
    name: 'Pioneer Computer Services',
    location: 'Bhuj, Kutch, Gujarat',
    established: 1993,
    tagline: 'Your Trusted Technology Partner Since 1993',
    phone: '+91-XXXXXXXXXX',
    email: 'info@pioneercomputers.com',
    address: 'Bhuj, Kutch, Gujarat, India',
    coordinates: {
      lat: 23.252617,
      lng: 69.6733174
    },
    googleMapsUrl: 'https://www.google.com/maps/place/PIONEER+COMPUTER+SERVICES/@23.2526169,69.6684465,17z/data=!3m1!4b1!4m6!3m5!1s0x3950e3f714547545:0x34dc6f86bb0a6913!8m2!3d23.252617!4d69.6733174!16s%2Fg%2F1thvwp0x',
    googlePlaceId: '0x3950e3f714547545:0x34dc6f86bb0a6913',
    rating: 4.8,
    totalReviews: 125
  });
});

app.get('/api/services', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Computers & Laptops',
      description: 'Wide range of desktop computers and laptops from leading brands',
      icon: '💻'
    },
    {
      id: 2,
      title: 'CCTV Camera Solutions',
      description: 'Complete surveillance systems with installation and maintenance',
      icon: '📹'
    },
    {
      id: 3,
      title: 'Computer Accessories',
      description: 'All types of computer peripherals and accessories',
      icon: '🖱️'
    },
    {
      id: 4,
      title: 'Software Solutions',
      description: 'Licensed software and custom software solutions',
      icon: '💿'
    },
    {
      id: 5,
      title: 'Antivirus & Security',
      description: 'Enterprise and personal antivirus solutions',
      icon: '🛡️'
    },
    {
      id: 6,
      title: 'Server Solutions',
      description: 'Complete server setup, maintenance, and support',
      icon: '🖥️'
    }
  ]);
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  
  // In production, implement actual email sending with nodemailer
  console.log('Contact form submission:', { name, email, phone, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for contacting us! We will get back to you soon.' 
  });
});

// Serve static files from React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
