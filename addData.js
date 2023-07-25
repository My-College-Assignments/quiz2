const mongoose = require('./seed');
const ExamModel = require('./examSchema');


async function addData() {
    try {

      const data = new ExamModel(
        { "name": "Anshdeep Singh", 
        "sid":"300351832"
      });
      
      console.log("Data Inserted");
  
      mongoose.connection.close();

      return await data.save();

    } catch (error) {
      console.error('Error:', error);
      mongoose.connection.close();
    }
  }

addData();

module.exports = addData();