const mongoose = require('./seed');
const ExamModel = require('./examSchema');


async function addData() {
    try {

      const data = new ExamModel(
        { "name": "Anshdeep Singh", 
        "sid":"300351832"
      });
    
      await data.save();
  
      console.log("Data Inserted");
  
      mongoose.connection.close();
    } catch (error) {
      console.error('Error:', error);
      mongoose.connection.close();
    }
  }
  
addData();