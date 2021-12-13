import { useState,useEffect } from "react";
import axios from "axios";
import {useHistory ,useParams, Link} from "react-router-dom";
import moment from "moment";



const ViewApplicantInfo = () => {
 
const {id} = useParams();
const history = useHistory();
const [jobapplicant,setjobapplicant] = useState({
  applicant_name:"",
  applicant_email:"",
  applicant_contact:"",
  applicant_linkedin:"",
  applicant_github:"",
  applicant_cv:"",

 

});

useEffect(() => {

  const myemployee = localStorage.getItem("MyEmployee");
  if(myemployee)
  {
   history.push(`/employee/viewapplicant/${id}`);
  }
  else
  {
   history.push('/employee/empLogin');
  }

  
  LoadApplicant();
  },[]);

//const { applicant_name ,applicant_email ,applicant_contact ,applicant_linkedin ,applicant_github ,applicant_cv   } = jobapplicant;

const LoadApplicant = async () =>
{
    const jobdata = await axios.get(`http://localhost:5000/jobapplicantdetail/${id}`);
    setjobapplicant(jobdata.data);
}



 
  return (
<div className="wrapper">
<div className="content-wrapper">
    
    <section className="content-header">
  <div className="col-md-6">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Job Applicant Information</h3>
   
      </div>
      <div className="card-body p-0">
        <table className="table">
          <thead>
            <tr>
              <th style={{width: 10}}>#</th>
              <th>Detail</th>
              <th>Values</th>
              <th style={{width: 40}}>Label</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Applicant First Name</td>
              <td>
                { jobapplicant.applicant_name }
                
              </td>
              <td><span className="badge bg-danger">55%</span></td>
            </tr>


            <tr>
              <td>2.</td>
              <td>Applicant Last Name</td>
              <td>
                { jobapplicant.applicant_github }
                
              </td>
              <td><span className="badge bg-danger">55%</span></td>
            </tr>


            <tr>
              <td>3.</td>
              <td>Applicant Email</td>
              <td>
              { jobapplicant.applicant_email }
              </td>
              <td><span className="badge bg-warning">70%</span></td>
            </tr>
            <tr>
              <td>4.</td>
              <td>Applicant Contact No</td>
              <td>
              { jobapplicant.applicant_contact }
              </td>
              <td><span className="badge bg-primary">30%</span></td>
            </tr>
            <tr>
              <td>5.</td>
              <td>Applicant LinkedIn Profile</td>
              <td>
              { jobapplicant.applicant_linkedin }
              </td>
              <td><span className="badge bg-success">90%</span></td>
            </tr>

        

            <tr>
              <td>6.</td>
              <td>Applicant Cv</td>
              <td>
           <a href={`http://localhost:5000/${jobapplicant.applicant_cv}`} download> Download CV</a>
              </td>
              <td><span className="badge bg-success">90%</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </section>
  </div>
</div>

    
    
  );
};

export default ViewApplicantInfo;