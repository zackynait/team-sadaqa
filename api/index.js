require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// API Routes
app.use('/api/stripe', require('./routes/stripe'));
app.use('/api/paypal', require('./routes/paypal'));
app.use('/api/volunteer', require('./routes/volunteer'));

// Handle SPA routing - serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Team Sadaqa - Insieme per chi ha bisogno',
    active: 'home'
  });
});

app.get('/dona-ora', (req, res) => {
  res.render('donate', {
    title: 'Dona Ora - Team Sadaqa',
    active: 'donate',
    stripePublicKey: process.env.STRIPE_PUBLIC_KEY
  });
});

app.get('/diventa-volontario', (req, res) => {
  res.render('volunteer', {
    title: 'Diventa Volontario - Team Sadaqa',
    active: 'volunteer'
  });
});

// Thank you page
app.get('/grazie', (req, res) => {
  // In a real app, you would fetch the donation details from your database
  // using the session_id or transaction_id from the query parameters
  const { session_id, transaction_id } = req.query;
  
  res.render('thank-you', {
    title: 'Grazie per la tua donazione - Team Sadaqa',
    amount: req.query.amount || '10',
    paymentMethod: req.query.method || 'carta di credito',
    transactionId: transaction_id || session_id || 'N/A'
  });
});

// API Routes
app.use('/api/stripe', require('./routes/stripe'));
app.use('/api/paypal', require('./routes/paypal'));

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
