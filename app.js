const express = require('express');
const mongoose = require('mongoose');

// испортируем из файла authRoutes
const authRoutes = require('./routes/authRoutes');

const app = express();

// middleware
app.use(express.static('public'));
// 
app.use(express.json());


// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://Alexander:1234@cluster0.90ss6.mongodb.net/DB-Auth?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

  
// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));

// используем данные из файла authRoutes
app.use(authRoutes);



