import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

const ListApplicants = ({prop}) => {

  const [applicants, setApplicants] = useState([]);
  const history = useHistory();
  useEffect(() => {

    const myuser = localStorage.getItem("MyUser");
    if(myuser)
    {
     history.push('/backend/jobapplicants');
    }
    else
    {
     history.push('/adminLogin');
    }


    LoadApplicants();
    },[]);

    const LoadApplicants = async () =>
    {
        const applicantsdata = await axios.get("http://localhost:5000/jobapplicants");
        console.log(applicantsdata.data);
        setApplicants(applicantsdata.data.reverse());
    }


    
    // const deleteJob = async id =>
    // {
    //    alert(id);
    //    await axios.delete(`http://localhost:5000/delete-job/${id}`);
    //    setJobs(jobs.filter(item => item._id !== id));
    
    // }


  return (
    <div className="content-wrapper">
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Job List</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Job List</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Job List</h3>
              </div>
              <div className="card-body">
                <table id="example1" className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Applicant Name</th>
                      <th>Applicant Email</th>
                      <th>Applicant Contact No</th>
                      <th>Applicant LinkedIn</th>
                      <th>Applicant Github</th>
                      <th>View Detail</th>
                   
                    </tr>
                  </thead>
                  <tbody>
                
                   
                  {applicants.map((applicant, key) => {
                  return <tr key={key} >
        
                <td>{applicant.applicant_name}</td>
                <td>{applicant.applicant_email}</td>
                <td>{applicant.applicant_contact}</td>
                <td>{applicant.applicant_linkedin}</td>
                <td>{applicant.applicant_github}</td>
                
                <td><Link to={`/backend/editjob/${applicant._id}`}>Edit</Link></td>
                {/* <td>< a href='javascript:void(0)'  onClick={()=>deleteJob(job._id)}>Delete</a></td> */}
        
      </tr>
    })}
               
                  </tbody>
                  <tfoot>
                    <tr>
                    <th>Applicant Name</th>
                      <th>Applicant Email</th>
                      <th>Applicant Contact No</th>
                      <th>Applicant LinkedIn</th>
                      <th>Applicant Github</th>
                      <th>View Detail</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>


  );
};

export default ListApplicants;
