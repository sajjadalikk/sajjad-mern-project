const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  stu_name: {type: String, required: true},
  stu_gender: {type: String, required: true},
  stu_education: {type: String, required: true},
  stu_email: {type: String, required: true},
  stu_contact: {type: String, required: true},
  stu_address: {type: String, required: true},
  stu_dob: {type: Date, required: true},
  stu_linkedin: {type: String, required: true},
  stu_github: {type: String, required: true},
  status:{type: String,required: true}
}, {
  timestamps: true,
});

module.exports = mongoose.model('Student', StudentSchema);
