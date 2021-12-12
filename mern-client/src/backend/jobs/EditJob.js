import { useState,useEffect } from "react";
import axios from "axios";
import {useHistory ,useParams} from "react-router-dom";
import moment from "moment";

const CreateJob = () => {
 
const {id} = useParams();
const history = useHistory();
const [job,setJob] = useState({
  job_title:"",
  job_type:"",
  job_exp_type:"",
  job_salary_range:"",
  job_quantity:"",
  job_description:"",
  job_end_date:"",
  status:"",
  company_name:"",
  company_email:"",
  company_website:"",
  company_contact:""

 

});

useEffect(() => {

  const myuser = localStorage.getItem("MyUser");
  if(myuser)
  {
   history.push(`/backend/editjob/${id}`);
  }
  else
  {
   history.push('/adminLogin');
  }

  
  LoadJob();
  },[]);

const { job_title,job_type ,job_exp_type ,job_salary_range ,job_quantity ,job_description ,job_end_date ,status ,company_name,company_email,company_website,company_contact } = job;

const LoadJob = async () =>
{
    const jobdata = await axios.get(`http://localhost:5000/jobedit/${id}`);
    setJob(jobdata.data);
}

function onInputChange (e)
{
  const {name,value} = e.target;
  setJob({
    ...job,
    [name]: value
  });
  
}

 
  return (

    <div>
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>General Form</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href={() => false}>Home</a></li>
                <li className="breadcrumb-item active">Job Form</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Job</h3>
                </div>
                <form  onSubmit={(e)=>{
            e.preventDefault();
            const updateid = `${id}`;
            const job = {_id:updateid, job_title, job_type, job_exp_type,job_salary_range ,job_quantity ,job_description , job_end_date, status,company_name,company_email,company_website,company_contact}
            
            fetch("http://localhost:5000/updatejob",
            {
                mode: 'cors',
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(job),
            }).then((response)=>{
                history.push('/backend/jobs');
            })
        }}
        >
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Job Title</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter Job Title"
                       value={job_title}
                        name="job_title" 
                       onChange={onInputChange} 
                       pattern="[a-zA-Z\s]+" title="Enter Only Alphabats"/>
                    </div>


                    <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Select Job Type</label>
                        <select className="form-control" required 
                        value={job_type}
                        name="job_type" 
                        onChange={onInputChange} >
                        <option value="">Select Job Type </option>
                          <option>Physical</option>
                          <option>Remote</option>
                        </select>
                      </div>
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Select Job Level</label>
                        <select className="form-control" required 
                        value={job_exp_type}
                        name="job_exp_type" 
                        onChange={onInputChange}
                        >
                        <option value="">Select Job Level</option>
                          <option>Fresh</option>
                          <option>Experiance</option>
                        
                        </select>
                      </div>
                    </div>
                  </div>

  
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Salary Range in PKR ex:(1000-2000)</label>
                      <input type="text" className="form-control" required id="exampleInputEmail1" placeholder="Enter Salary Range" 
                       value={job_salary_range}
                       name="job_salary_range" 
                       onChange={onInputChange}
                       pattern="[0-9-]+" title="Enter Numeric values with dash" />
                    </div>


                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Total Positions</label>
                      <input type="number" className="form-control" required id="exampleInputEmail1" placeholder="Enter Job Quantity"  
                       value={job_quantity}
                       name="job_quantity" 
                       onChange={onInputChange}
                       pattern="[0-9]+" title="Enter only numeric values"/>
                    </div>
  
  
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Job Description</label>
                      <textarea className="form-control" required id="exampleInputEmail1" placeholder="Enter Job Description" 
                       value={job_description}
                       rows={8}
                       cols={5}
                      style={{resize: 'none'}}
                       name="job_description" 
                       onChange={onInputChange} 
                       pattern="[a-zA-Z0-9\s]+" title="Enter Only aplha numeric values"/>
                    </div>
  
                   

                 
                
                  <div className="form-group">
                  <label>Job End Date:</label>
                     <input type="date" className="form-control"  required 
                      value={moment(job_end_date).format("YYYY-MM-DD")} 
                       name="job_end_date" 
                       onChange={onInputChange}/> 
                     
                    </div>


                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Company Name</label>
                      <input type="text" className="form-control" required id="exampleInputEmail1" placeholder="Enter Company Name" 
                       value={company_name}
                       name="company_name" 
                       onChange={onInputChange} 
                       pattern="[a-zA-Z0-9\s]+" title="Enter Only aplha numeric values" />
                    </div>


                    
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Company Email that received email</label>
                      <input type="text" className="form-control" required id="exampleInputEmail1" placeholder="Enter Company Email" 
                       value={company_email}
                       name="company_email" 
                       onChange={onInputChange} 
                       pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                     title="Please Enter Valid Email" />
                    </div>



                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Company Website</label>
                      <input type="text" className="form-control" required id="exampleInputEmail1" placeholder="Enter Company Website" 
                       value={company_website}
                       name="company_website" 
                       onChange={onInputChange} />
                    </div>


                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Company Contact No</label>
                      <input type="text" className="form-control" required id="exampleInputEmail1" placeholder="Enter Company Contact No" 
                       value={company_contact}
                       name="company_contact" 
                       onChange={onInputChange} 
                       pattern="[0-9]+" title="Enter only numeric values"/>
                    </div>
                
  
  
                    <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Select Status</label>
                        <select className="form-control" 
                        value={status}
                        name="status" 
                        onChange={onInputChange}>
                        <option value="">Select Status</option>
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                      </div>
                    </div>
                  </div>
  
                 
                  </div>
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
    
  );
};

export default CreateJob;