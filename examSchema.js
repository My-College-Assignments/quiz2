const mongoose = require('./seed');

const examSchema = new mongoose.Schema({
    name: String,
    sid: String
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;