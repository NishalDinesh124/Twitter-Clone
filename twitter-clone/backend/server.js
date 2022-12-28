const express = require('express');
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
var cookieParser = require('cookie-parser');

const port = process.env.PORT || 5000;


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const adminRouter = require('./routes/admin');
const usersRouter = require('./routes/users');

var session = require('express-session')
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'sdlfjljrowuroweu',
  cookie: { secure: false }
}));


app.use('/', usersRouter);
app.use('/admin', adminRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
