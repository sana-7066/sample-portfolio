require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/${process.env.HOST}`,{useNewUrlParser:true, useUnifiedTopology : true})//,useCreateIndex : true
.then(() => console.log('connection successful'))
.catch((err) => console.log('Error :' +err));