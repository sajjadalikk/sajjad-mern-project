const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobtSchema = new Schema({
  job_title: {type: String, required: true},
  job_type: {type: String, required: true},
  job_exp_type: {type: String, required: true},
  job_salary_range: {type: String, required: true},
  job_quantity: {type: String, required: true},
  job_description: {type: String, required: true},
  job_end_date: {type: Date, required: true},
  status:{type: String,required: true},
  company_name:{type: String,required: true},
  company_email:{type: String,required: true},
  company_website:{type: String,required: true},
  company_contact:{type: String,required: true},
  user_id:{type: String,required: true},

}, {
  timestamps: true,
});

module.exports = mongoose.model('Job', JobtSchema);
