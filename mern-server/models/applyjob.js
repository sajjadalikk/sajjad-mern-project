const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApplyJobSchema = new Schema({
  applicant_name: {type: String, required: true},
  applicant_email: {type: String, required: true},
  applicant_contact: {type: String, required: true},
  applicant_linkedin: {type: String, required: true},
  applicant_github: {type: String, required: true},
  applicant_cv: {type: String, required: true},
  job_id: {type: String, required: true},
  user_id:{type: String,required: true},
  
}, {
  timestamps: true,
});

module.exports = mongoose.model('ApplyJob', ApplyJobSchema);
