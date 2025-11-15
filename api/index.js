require('dotenv').config();
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.get('/api/index', (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(`
    <!DOCTYPE html>
    <html lang="it">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Sadaqa</title>
      <link rel="stylesheet" href="/assets/css/style.css">
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; text-align: center; background: #f9f9f9; }
        header { background: #f5b041; padding: 20px; color: white; }
        nav a { margin: 0 10px; color: white; text-decoration: none; font-weight: bold; }
        main { padding: 40px 20px; }
        .btn { display: inline-block; margin: 10px; padding: 12px 24px; background-color: #f5b041; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; transition: background-color 0.3s ease; }
        .btn:hover { background-color: #d68910; }
        .stats { display: flex; flex-wrap: wrap; justify-content: center; margin-top: 30px; }
        .card { background: white; padding: 20px; margin: 10px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); width: 180px; }
        footer { background: #333; color: white; padding: 20px; margin-top: 40px; }
      </style>
    </head>
    <body>
      <header>
        <h1>Team Sadaqa</h1>
        <nav>
          <a href="/api/dona-ora">Dona Ora</a>
          <a href="/api/diventa-volontario">Diventa Volontario</a>
        </nav>
      </header>
      <main>
        <section class="hero">
          <h2>Insieme per chi ha bisogno</h2>
          <p>Supportiamo le famiglie bisognose con donazioni e volontariato. Unisciti a noi per fare la differenza!</p>
          <a href="/api/dona-ora" class="btn">Dona Ora</a>
          <a href="/api/diventa-volontario" class="btn">Diventa Volontario</a>
        </section>
        <section class="stats">
          <div class="card">Famiglie aiutate: 1200+</div>
          <div class="card">Pasti distribuiti: 5000+</div>
          <div class="card">Donazioni: 50.000€+</div>
          <div class="card">Volontari attivi: 150+</div>
        </section>
      </main>
      <footer>
        <p>&copy; ${new Date().getFullYear()} Team Sadaqa</p>
      </footer>
      <script src="/assets/js/donation.js?v=1"></script>
    </body>
    </html>
  `);
});

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
  helpers: {
    ifEquals: function(arg1, arg2, options) {
      return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
    },
    currentYear: function() {
      return new Date().getFullYear();
    }
  }
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
