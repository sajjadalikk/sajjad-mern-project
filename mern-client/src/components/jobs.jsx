import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
//import {useHistory} from "react-router-dom";

export const Jobs = ({prop}) => {

  const [jobs, setJobs] = useState([]);
  const [search, setSeach] = useState("");
 // const history = useHistory();
  useEffect(() => {
    LoadJobs();
    },[]);

    const LoadJobs = async () =>
    {
        const jobdata = await axios.get("http://localhost:5000/jobs");
        
        setJobs(jobdata.data.reverse());
    }


    
    // const deleteJob = async id =>
    // {
    //    alert(id);
    //    await axios.delete(`http://localhost:5000/delete-job/${id}`);
    //    setJobs(jobs.filter(item => item._id !== id));
    
    // }


  return (
    <div id="jobs">
    <div className="">
   
 
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h1>Job List</h1>
                <input type="text" className="form-control" required id="exampleInputEmail1" placeholder="Search By Job" 
                       value={search}
                        onChange={(e)=>setSeach(e.target.value)} />
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
                      <th>Company Name</th>
                      <th>Detail</th>
                    
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
                <td>{job.company_name}</td>
                
                <td><Link to={`/viewjob/${job._id}`} target="_blank">View Detail</Link></td>
     
        
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
                      <th>Company Name</th>
                      <th>Detail</th>
                      {/* <th>Delete</th> */}
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
</div>



  );
};


