const express = require('express');
const { MongoClient } = require('mongodb');
const mongoose = require('./seed');


const app = express();
const port = 7000;
const mongoURI = 'mongodb+srv://Cluster96150:9oPXm7gKMzDC1U06@cluster0.avb0vss.mongodb.net/Exam'; // Replace this with your MongoDB Atlas connection URI

app.get('/', (req, res) => {

    const data = {
        name: 'Anshdeep Singh',
        sid: '300351832',
      };

  MongoClient.connect(mongoURI, (err, client) => {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      res.status(500).send('Error connecting to the database.');
      return;
    }

    const db = client.db('Exam');
    const collection = db.collection('quizes');

    collection.insertOne(data, (err, result) => {
      if (err) {
        console.error('Error adding document to collection:', err);
        res.status(500).send('Error adding document to collection.');
        return;
      }

      client.close();
      res.send('Document added to the collection successfully.');
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
