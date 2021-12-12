import { useState } from "react";
import {useHistory,useParams} from "react-router-dom";


const ApplyJob = () => {

  const {id} = useParams();

  const [applicant_name, setName]=useState('');
  const [applicant_email, setEmail]=useState('');
  const [applicant_contact, setContact]=useState('');
  const [applicant_linkedin, setLinkedin]=useState('');
  const [applicant_github, setGithub]=useState('');
  const [applicant_cv, setCv]=useState('');
  const [job_id, setJobid]=useState('');
 // const [isLoading, setIsLoading]=useState(false);
  const history = useHistory();

   
  return (
    <div>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Admin Registration Page</title>
    {/* Google Font: Source Sans Pro */}
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
    {/* Font Awesome */}
    <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css" />
    {/* icheck bootstrap */}
    <link rel="stylesheet" href="../../plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
    {/* Theme style */}
    <link rel="stylesheet" href="../../dist/css/adminlte.min.css" />
    <div className="hold-transition register-page">
    <div className="register-box">
      <div className="register-logo">
        <a href="../../index2.html"><b>Job</b>Registeration</a>
      </div>



      <div className="card">
        <div className="card-body register-card-body">
          <p className="login-box-msg">Registeration form for Job</p>
          <form 
        onSubmit={(e)=>{
            e.preventDefault();
            setJobid(id);
           const job_id = id;
           // const formData = new FormData();

            // formData.append('applicant_name', applicant_name);
            // formData.append('applicant_email', applicant_email);
            // formData.append('applicant_contact', applicant_contact);
            // formData.append('applicant_linkedin', applicant_linkedin);
            // formData.append('applicant_github', applicant_github);
            // formData.append('applicant_cv', applicant_cv);
            // formData.append('job_id', job_id);

         



            const job_form = { applicant_name, applicant_email, applicant_contact ,applicant_linkedin,applicant_github,applicant_cv,job_id}
          
            fetch("http://localhost:5000/applyjob",
            {
                mode: 'cors',
                method: 'POST',
                 headers: { 'Content-Type':'application/json' },
                //headers: { 'Content-Type':'multipart/form-data' },
                body: JSON.stringify(job_form),
               // body: formData,
            }).then((response)=>response.json())
            .then(data => 
              { 
                 
                  alert(data.message);
                //  history.push('/#jobs');
                
               
              });
        }}
        >
            <div className="input-group mb-3">
              <input type="text" className="form-control" required placeholder="Full name" 
              value={applicant_name}
              onChange={(e)=>setName(e.target.value)} />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user" />
                </div>
              </div>
            </div>


            <div className="input-group mb-3">
              <input type="email" className="form-control" required placeholder="Email"
              value={applicant_email}
              onChange={(e)=>setEmail(e.target.value)}
               />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>

            <div className="input-group mb-3">
              <input type="text" className="form-control" required placeholder="Contact No" 
              value={applicant_contact}
              onChange={(e)=>setContact(e.target.value)} />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-phone" />
                </div>
              </div>
            </div>

            <div className="input-group mb-3">
              <input type="text" className="form-control" required placeholder="Linked In" 
              value={applicant_linkedin}
              onChange={(e)=>setLinkedin(e.target.value)} />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-linkedin" />
                </div>
              </div>
            </div>


            <div className="input-group mb-3">
              <input type="text" className="form-control" required placeholder="Git Hub" 
              value={applicant_github}
              onChange={(e)=>setGithub(e.target.value)} />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-github" />
                </div>
              </div>
            </div>

            
            <div className="input-group mb-3">
              <input type="file" className="form-control" required placeholder="CV" 
             // onChange={(e)=>setCv(e.target.files[0])} />
               onChange={(e)=>setCv(e.target.value)} />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-github" />
                </div>
              </div>
            </div>


            <div className="row">
              
              {/* /.col */}
              <div className="col-4">
                <button type="submit" id="btnSubmit" className="btn btn-primary btn-block">Apply</button>
              </div>
              {/* /.col */}
            </div>
          </form>
      
         
        </div>
        {/* /.form-box */}
      </div>{/* /.card */}
    </div>
    </div>
    {/* /.register-box */}
    {/* jQuery */}
    {/* Bootstrap 4 */}
    {/* AdminLTE App */}
  </div>
  
    
  );
};



export default ApplyJob;




