const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  emp_name: {type: String, required: true},
  emp_gender: {type: String, required: true},
  emp_designation: {type: String, required: true},
  emp_email: {type: String, required: true},
  emp_contact: {type: String, required: true},
  company_name: {type: String, required: true},
  company_url: {type: String, required: true},
  company_contact: {type: String, required: true},
  status:{type: String,required: true},
  user_id:{type: String,required: true},
}, {
  timestamps: true,
});

module.exports = mongoose.model('Employee', EmployeeSchema);
