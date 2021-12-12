import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

const ListJob = ({prop}) => {

  const [jobs, setJobs] = useState([]);
  const [search, setSeach] = useState("");
  const history = useHistory();
  useEffect(() => {

    const myuser = localStorage.getItem("MyUser");
    if(myuser)
    {
     history.push('/backend/jobs');
    }
    else
    {
     history.push('/adminLogin');
    }


    LoadJobs();
    },[]);

    const LoadJobs = async () =>
    {
        const jobdata = await axios.get("http://localhost:5000/jobs");
       
        setJobs(jobdata.data.reverse());
    }


    
    const deleteJob = async id =>
    {
       alert(search);
       await axios.delete(`http://localhost:5000/delete-job/${id}`);
       setJobs(jobs.filter(item => item._id !== id));
    
    }

        
 


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
             
              
                      <input type="text" className="form-control" required id="exampleInputEmail1" placeholder="Search By Job" 
                       value={search}
                        onChange={(e)=>setSeach(e.target.value)} />
                     
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
                      <th>Job Title</th>
                      <th>Job Type</th>
                      <th>Salary Range</th>
                      <th>Job Count</th>
                      <th>Job Level</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>

                {jobs.filter((job) => {
                  if(search === "")
                  {
                    return job;
                  }
                  else if(job.job_title.toLowerCase().includes(search.toLowerCase()))
                  {
                    return job;
                  }
                }).map((job, key) => {
                  return <tr key={key} >
        
                <td>{job.job_title}</td>
                <td>{job.job_type}</td>
                <td>{job.job_salary_range}</td>
                <td>{job.job_quantity}</td>
                <td>{job.job_exp_type}</td>
                
                <td><Link to={`/backend/editjob/${job._id}`}>Edit</Link></td>
                <td>< a href='javascript:void(0)'  onClick={()=>deleteJob(job._id)}>Delete</a></td>
        
                </tr>
                })}
               
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Job Title</th>
                      <th>Job Type</th>
                      <th>Salary Range</th>
                      <th>Job Count</th>
                      <th>Job Level</th>
                      <th>Edit</th>
                      <th>Delete</th>
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

export default ListJob;
