// const connectionStr = "mongodb://127.0.0.1:27017/Exam";
const connectionStr = "mongodb+srv:// tempuser:123@cluster0.f9d6o.gcp.mongodb.net/Exam";
const mongoose = require('mongoose');



mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  
module.exports = mongoose; 
