import { useState } from "react";
import axios from "axios";
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




 const config = {     
  headers: { 'content-type': 'multipart/form-data' }
}


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
          <form encType="multipart/form-data"
        onSubmit={(e)=>{
            e.preventDefault();
            setJobid(id);
           const job_id = id;
           const data = new FormData();

           data.append('applicant_name', applicant_name);
           data.append('applicant_email', applicant_email);
           data.append('applicant_contact', applicant_contact);
           data.append('applicant_linkedin', applicant_linkedin);
           data.append('applicant_github', applicant_github);
           data.append('applicant_cv', applicant_cv[0]);
           data.append('job_id', job_id);

            fetch("http://localhost:5000/applyjob",
            {
               // mode: 'cors',
                method: 'POST',
                config,
                // headers: { 'Content-Type':'multipart/form-data' },
                 body: data,
            }).then((response)=>response.json())
            .then(datareturn => 
              { 
                  
                  alert(datareturn.message);
                //  history.push('/#jobs');
                
               
              });

    //         axios.post("http://localhost:5000/applyjob", data)
    // .then(response => {
    //   alert(data.message);
    //     console.log(response);
    // })
    // .catch(error => {
    //     console.log(error);
    // });
         }}
        >



          
            <div className="input-group mb-3">
              <input type="text" className="form-control" required placeholder="First name" 
              value={applicant_name}
              onChange={(e)=>setName(e.target.value)} 
              pattern="[a-zA-Z\s]+" title="Enter Only Alphabats"/>
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user" />
                </div>
              </div>
            </div>


            <div className="input-group mb-3">
              <input type="text" className="form-control" required placeholder="Last name" 
              value={applicant_github}
              onChange={(e)=>setGithub(e.target.value)}
              pattern="[a-zA-Z\s]+" title="Enter Only Alphabats"/> />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-github" />
                </div>
              </div>
            </div>
           


            <div className="input-group mb-3">
              <input type="email" className="form-control" required placeholder="Email"
              value={applicant_email}
              onChange={(e)=>setEmail(e.target.value)}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please Enter Valid Email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>

            <div className="input-group mb-3">
              <input type="text" className="form-control" required placeholder="Contact No" 
              value={applicant_contact}
              onChange={(e)=>setContact(e.target.value)} 
              pattern="[0-9-]+" title="Enter Numeric values" />
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
              <input type="file" className="form-control" name="applicant_cv" required placeholder="CV" 
              //  onChange={(e)=>setCv(e.target.files[0])}
              accept=".pdf"
              onChange={(e)=>setCv(e.target.files)}
                />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span>Only Pdf</span> 
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




