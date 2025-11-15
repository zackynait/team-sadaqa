require('dotenv').config();
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// View engine setup
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.handlebars',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  helpers: require('./helpers/handlebars')
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
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
