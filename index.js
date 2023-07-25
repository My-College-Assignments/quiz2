const express = require('express');
const bodyParser = require('body-parser');
const ExamModel = require('./examSchema');

const app = express();
const port = 7000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    insertData();

    res.send('Data is inserted!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

async function insertData() {
    try {

        const data = new ExamModel(
          { "name": "Anshdeep Singh", 
          "sid":"300351832"
        });
        
        let response = await data.save();
        console.log("Data : ",response);
        

      } catch (error) {
        console.error('Error:', error);
      }
}