// const { MongoClient } = require('mongodb');
const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const http = require('http').Server(app);
const bcrypt = require('bcrypt');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const User = require('./models/user');
const Employee = require('./models/employee');
const Student = require('./models/student');
const Job = require('./models/job');
const Applyjob = require('./models/applyjob');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createServer({});
const nodemailer = require('nodemailer');
const fileUpload = require('express-fileupload');
const multer  = require('multer');
const path = require('path');
const helpers = require('./helpers');









const uri = 'mongodb+srv://sajjad:123saji321@cluster0.3c6ba.mongodb.net/myFirstDatabase?';

const isAuth = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/');
  }
  next();
};

mongoose.connect(uri).then((result)=>{
  console.log('connected to Mongo');
}).catch((error)=>{
  console.error('error connecting to Mongo', error);
});




app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public/uploads')); 
// app.use('/uploads', express.static('uploads'));

app.use(fileUpload({
  createParentPath: true
}));

const store = new MongoDBStore({
  uri: uri,
  collection: 'mySessions',
});

app.use(session({
  secret: 'a very secret key',
  resave: false,
  saveUninitialized: false,
  store: store,
}));




// Read Users
app.get('/users', (req, res) => {
    User.find().then((data)=>{
     
        res.send(data);
    }).catch((err)=>{
        res.send(err.message);
    });
});

//admin login post
app.post('/loginadmin', async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});
  if (user)
   {
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(isPasswordValid)
    {
     if(user.usertype == "Admin")
     {
      req.session.user = user;
      res.status(200).send({message:"Login Successful",user:user})
     }
     else
     {
      res.status(200).send({
        message:"Invalid User"})      
     }
      
    
      
    }
    else
    {
            res.status(200).send({
            message:"Password Incorrect"})      
    }
  }
  else
  {
      res.status(200).send(
        {
          message:"User Not Found"
        })
  }
});





// // Register Employee and Student
// app.post('/registeremployee', (req, res) => {
//   console.log(req.body);
//   User.create(req.body).then((data)=>{
//     res.send({
//       error:null,
//       status:true,
//     });
//   }).catch((err)=>{
//       res.send({
//         error:true,
//         message:err.message,
//       });
//   });
// });



// Register Employee and Student
app.post('/registeremployee', async (req, res) => {
  
    const hashPassword =  bcrypt.hashSync(req.body.password, 10);
    const {username,email,password,usertype,status} =  req.body;


   // const user =  User.findOne({req.body.email});
   const user = await User.findOne({email});


    if (user) {
     
      return res.send( {message: 'Email already exists'});
    }
    else
    {
      User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
        usertype: req.body.usertype,
        status: req.body.status,
      }).then((data)=>{
        res.send({
          error:null,
          status:true,
          message:'registered successfully'
        });
      }).catch((err)=>{
          res.send({
            error:true,
            message:err.message,
          });
      });
    }
 
});


//For user delete
app.delete('/delete-user/:id', async (req, res) => {
  
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send({
    message:"deleted"})
});


//For user show
app.get('/useredit/:id', (req, res) => {
  User.findById(req.params.id).then((data)=>{
 
      res.send(data);
     
  }).catch((err)=>{
      res.send(err.message);
  });
});


//For user update
app.post('/updateuser', (req, res) =>{
  const hashPassword =  bcrypt.hashSync(req.body.password, 10);
    User.findByIdAndUpdate(req.body._id, {$set: {'username':req.body.username, 'email':req.body.email,'password':hashPassword, 'status':req.body.status}}, (err, result) => {
      if (err) throw err;
      res.redirect('/users');
    });
});




// Create Employee
app.post('/createemployee', (req, res) => {
 console.log(req.body);
  Employee.create(req.body).then((data)=>{
    res.send({
      error:null,
      status:true,
    });
  }).catch((err)=>{
      res.send({
        error:true,
        message:err.message,
      });
  });
});


// Read Employee
app.get('/employees', (req, res) => {
  Employee.find().then((data)=>{
      res.send(data);
  }).catch((err)=>{
      res.send(err.message);
  });
});



// employee show
app.get('/employeeedit/:id', (req, res) => {
  Employee.findById(req.params.id).then((data)=>{
  
      res.send(data);
     
  }).catch((err)=>{
      res.send(err.message);
  });
});


//employee update
app.post('/updateemployee', (req, res) =>{

    Employee.findByIdAndUpdate(req.body._id, {$set: {'emp_name':req.body.emp_name, 'emp_gender':req.body.emp_gender, 'emp_designation':req.body.emp_designation, 'emp_email':req.body.emp_email, 'emp_contact':req.body.emp_contact, 'company_name':req.body.company_name, 'company_url':req.body.company_url, 'company_contact':req.body.company_contact,'status':req.body.status
  }}, (err, result) => {
      if (err) throw err;
      res.redirect('/employees');
    });
});

//For employee delete
app.delete('/delete-employee/:id', async (req, res) => {

  await Employee.findByIdAndDelete(req.params.id);
  res.status(200).send({
    message:"deleted"})
});



// Create Student
app.post('/createstudent', (req, res) => {
  
  Student.create(req.body).then((data)=>{
    res.send({
      error:null,
      status:true,
    });
  }).catch((err)=>{
      res.send({
        error:true,
        message:err.message,
      });
  });
});


// Read Students
app.get('/students', (req, res) => {
  Student.find().then((data)=>{
      res.send(data);
  }).catch((err)=>{
      res.send(err.message);
  });
});


// Students show
app.get('/studentedit/:id', (req, res) => {
  Student.findById(req.params.id).then((data)=>{
   
      res.send(data);
     
  }).catch((err)=>{
      res.send(err.message);
  });
});


//Students update
app.post('/updatestudent', (req, res) =>{
 

  Student.findByIdAndUpdate(req.body._id, {$set: {'stu_name':req.body.stu_name, 'stu_gender':req.body.stu_gender, 'stu_education':req.body.stu_education, 
  'stu_email':req.body.stu_email, 'stu_contact':req.body.stu_contact, 'stu_address':req.body.stu_address, 'stu_dob':req.body.stu_dob,
   'stu_linkedin':req.body.stu_linkedin,'stu_github':req.body.stu_github,'status':req.body.status
  }}, (err, result) => {
      if (err) throw err;
      res.redirect('/students');
    });
});

//For Students delete
app.delete('/delete-student/:id', async (req, res) => {
  
  await Student.findByIdAndDelete(req.params.id);
  res.status(200).send({
    message:"deleted"})
});







// Create Job
app.post('/createjob', (req, res) => {
  
  Job.create(req.body).then((data)=>{
    res.send({
      error:null,
      status:true,
    });
  }).catch((err)=>{
      res.send({
        error:true,
        message:err.message,
      });
  });
});



// Read Jobs
app.get('/jobs', (req, res) => {
  Job.find().where('status').equals('Active').then((data)=>{
      res.send(data);
  }).catch((err)=>{
      res.send(err.message);
  });
});



// Jobs show
app.get('/jobedit/:id', (req, res) => {
  Job.findById(req.params.id).then((data)=>{

      res.send(data);
     
  }).catch((err)=>{
      res.send(err.message);
  });
});


// Jobs update
app.post('/updatejob', (req, res) =>{
 

  Job.findByIdAndUpdate(req.body._id, {$set: {'job_title':req.body.job_title, 'job_type':req.body.job_type, 'job_exp_type':req.body.job_exp_type, 
  'job_salary_range':req.body.job_salary_range, 'job_quantity':req.body.job_quantity, 'job_description':req.body.job_description, 'job_end_date':req.body.job_end_date,
   'status':req.body.status, 'company_name':req.body.company_name , 'company_email':req.body.company_email,'company_website':req.body.company_website , 'company_contact':req.body.company_contact
  }}, (err, result) => {
      if (err) throw err;
      res.redirect('/jobs');
    });
});

//For Jobs delete
app.delete('/delete-job/:id', async (req, res) => {
 
  await Job.findByIdAndDelete(req.params.id);
  res.status(200).send({
    message:"deleted"})
});



// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//       cb(null, 'uploads/');
//   },

//   // By default, multer removes file extensions so let's add them back
//   filename: function(req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });


// Apply job Form
app.post('/applyjob', async (req, res) => {

var file = req.files.applicant_cv;
var fname  = file.name.replace(/\s/g, '');
var filename = Math.floor(Math.random() * 900000)+fname;
file.mv('./public/uploads/'+filename , function(err)
{
  if(err)
  {
   // re.send(err)
   //console.log('error');
  }
  else
  {
  //  console.log('file saved');
  }
})

  

  
  const job = await Job.find().where('_id').equals(req.body.job_id);
  if (job)
  {
   
    var user_id='';
    var job_title='';
    var job_end_date= '';
    var company_name = '';
    var company_email = '';
    var arrayOfStrings = job.map(function(obj) {
    user_id = obj.user_id;
    job_title = obj.job_title;
    job_end_date = obj.job_end_date;
    company_name = obj.company_name;
    company_email = obj.company_email;
   
  });




  Applyjob.create({
    applicant_name: req.body.applicant_name,
    applicant_email: req.body.applicant_email,
    applicant_contact: req.body.applicant_contact,
    applicant_linkedin: req.body.applicant_linkedin,
    applicant_github: req.body.applicant_github,
    applicant_cv: filename,
    job_id: req.body.job_id,
    user_id: user_id,

  }).then((data)=>{
    res.send({
      error:null,
      status:true,
      message:'You have apply for the job successfully'
    });
  }).catch((err)=>{
      res.send({
        error:true,
        message:err.message,
      });
  });


  }
  else
  {
   // console.log('not get job');
  }

  
  //// send email code
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'engineersajjadalikk@gmail.com',
      pass: '123saji321'
    }
  });
  var message = '';
  message = '<table cellpadding="0" cellspacing="1" width="35%" style="font-family:verdana;font-size:11px;border:2px solid;">';

  message +='<tr>';
  message += '<td width="35%">Applicant Name:</td>';
  message += '<td>'+req.body.applicant_name+'</td>';
  message +='</tr>';

  message +='<tr>';
  message += '<td width="35%">Applicant Email:</td>';
  message += '<td>'+req.body.applicant_email+'</td>';
  message +='</tr>';

  message +='<tr>';
  message += '<td width="35%">Applicant Contact No:</td>';
  message += '<td>'+req.body.applicant_contact+'</td>';
  message +='</tr>';

  message +='<tr>';
  message += '<td width="35%">Job Title:</td>';
  message += '<td>'+job_title+'</td>';
  message +='</tr>';

  message +='<tr>';
  message += '<td width="35%">Job End Date:</td>';
  message += '<td>'+job_end_date+'</td>';
  message +='</tr>';

  message +='<tr>';
  message += '<td width="35%">Company Name:</td>';
  message += '<td>'+company_name+'</td>';
  message +='</tr>';

  message +='</table><br><br>';


  var mailOptions = {
    from: 'engineersajjadalikk@gmail.com',
    to: company_email,
    subject: 'Job Application Received',
    html: message,
    attachments: [{
      filename: filename,
      path: `http://localhost:5000/${filename}`,
      contentType: 'application/pdf'
    }]
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });


 ////  email code end


});


// Read Applicants
app.get('/jobapplicants', (req, res) => {
  Applyjob.find().then((data)=>{
 
      res.send(data);
  }).catch((err)=>{
      res.send(err.message);
  });
});



/////////////////////////// employee section start


//employee login post
app.post('/loginemployee', async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});
  if (user)
   {
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(isPasswordValid)
    {
     // req.session.user = user;
     if(user.usertype == "Employee")
     {
      res.status(200).send({message:"login successful",user:user})
     }
     else
     {
      res.status(200).send(
        {
          message:"Invalid User"
        })
     }
     
    }
    else
    {
             res.status(200).send({
            message:"password incorrect"})      
    }
  }
  else
  {
      res.status(200).send(
        {
          message:"user not found"
        })
  }
});






app.get('/employee/employeeedit/:user_id',async (req, res) => {
 // const {user_id} = req.body;
  const user_id =req.params.user_id;
 
  // await Employee.find({user_id : req.params.user_id}).then((data)=>{

  await Employee.find({user_id: req.params.user_id}).then((data)=>{


      res.send(data);
     
  }).catch((err)=>{
      res.send(err.message);
  });

});



//employee update
app.post('/employee/updateemployee',async  (req, res) =>{
 
  const {user_id} = req.body;
 

 // const emp = await Employee.findOne({id});
 const emp = await Employee.find().where('user_id').equals(user_id);

 
  if (emp.length > 0)
  {
   
    const filter = { user_id: req.body.user_id };
    const update = { 'emp_name':req.body.emp_name, 'emp_gender':req.body.emp_gender, 'emp_designation':req.body.emp_designation, 'emp_email':req.body.emp_email, 'emp_contact':req.body.emp_contact, 'company_name':req.body.company_name, 'company_url':req.body.company_url, 'company_contact':req.body.company_contact,'status':req.body.status };
    let doc = await Employee.findOneAndUpdate(filter, update);
    res.redirect('/employee/addemployee');
  
  }
  else
  {
   
      // Create Employee

     
      Employee.create(req.body).then((data)=>{
        res.send({
          error:null,
          status:true,
        });
      }).catch((err)=>{
          res.send({
            error:true,
            message:err.message,
          });
      });
  }
});




// Read employee Jobs
app.get('/employee/jobs/:user_id', (req, res) => {
  
  Job.find().where('user_id').equals(req.params.user_id).then((data)=>{
      res.send(data);
  }).catch((err)=>{
      res.send(err.message);
  });
});



// Read Applicants
app.get('/employee/jobapplicants/:id', (req, res) => {
  Applyjob.find().where('user_id').equals(req.params.id).then((data)=>{
    
      res.send(data);
  }).catch((err)=>{
      res.send(err.message);
  });
});


// Jobs show
app.get('/jobapplicantdetail/:id', (req, res) => {
  Applyjob.findById(req.params.id).then((data)=>{
    
      res.send(data);
     
  }).catch((err)=>{
      res.send(err.message);
  });
});


