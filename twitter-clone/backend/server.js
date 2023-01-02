const express = require('express');

const app = express();
require('./myMiddleware')(app);
const redis = require('redis')

const mongoose = require('mongoose');
require('dotenv').config();
var cookieParser = require('cookie-parser');

const port = process.env.PORT || 5000;



const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true}
);
const cors = require('cors');
app.use(cors());
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const adminRouter = require('./routes/admin');
const usersRouter = require('./routes/users');
const router = require('./routes/users');


app.use(express.json());
app.use(cookieParser());

app.use('/', usersRouter);
app.use('/admin', adminRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});