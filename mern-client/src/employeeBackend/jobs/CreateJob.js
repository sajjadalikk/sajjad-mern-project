import { useState,useEffect } from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

const CreateJob = () => {
  const [job_title, setjob_title]=useState('');
  const [job_type, setjob_type]=useState('');
  const [job_exp_type, setjob_exp_type]=useState('');
  const [job_salary_range, setjob_salary_range]=useState('');
  const [job_quantity, setjob_quantity]=useState('');
  const [job_description, setjob_description]=useState('');
  const [job_end_date, setjob_end_date]=useState('');
  const [status, setstatus]=useState('');
  const [company_name, setcname]=useState('');
  const [company_email, setcemail]=useState('');
  const [company_website, setcwebsite]=useState('');
  const [company_contact, setccontact]=useState('');

  // const [isLoading, setIsLoading]=useState(false);
  const history = useHistory();

  const [companies, setCompany] = useState([]);
 
   useEffect(() => {

    const myemployee = localStorage.getItem("MyEmployee");
    if(myemployee)
    {
     history.push('/employee/addJob');
    }
    else
    {
     history.push('/employee/empLogin');
    }


    LoadCompanies();
     },[]);

     const getemployee = localStorage.getItem("MyEmployee");
     var jsonData = JSON.parse(getemployee);     
     const  user_id =  jsonData._id; 
  
 
     const LoadCompanies = async () =>
     {
         const companydata = await axios.get("http://localhost:5000/employees");
         
         setCompany(companydata.data.reverse());
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
            const job = { job_title, job_type, job_exp_type,job_salary_range ,job_quantity ,
              job_description , job_end_date, status,company_name,company_email,company_website ,company_contact, user_id }
            
            fetch("http://localhost:5000/createjob",
            {
                mode: 'cors',
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(job),
            }).then((response)=>{
                history.push('/employee/jobs');
            })
        }}
        >
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Job Title</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter Job Title"
                       value={job_title}
                       onChange={(e)=>setjob_title(e.target.value)} 
                       pattern="[a-zA-Z\s]+" title="Enter Only Alphabats"/>
                    </div>


                    <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Select Job Type</label>
                        <select className="form-control" required 
                        value={job_type}
                        onChange={(e)=>setjob_type(e.target.value)} >
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
                        onChange={(e)=>setjob_exp_type(e.target.value)}
                        >
                        <option value="">Select Job Level</option>
                          <option>Fresh</option>
                          <option>Experiance</option>
                        
                        </select>
                      </div>
                    </div>
                  </div>

  
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Salary Range ex:(1000pkr-2000pkr)</label>
                      <input type="text" className="form-control" required id="exampleInputEmail1" placeholder="Enter Salary Range" 
                       value={job_salary_range}
                       onChange={(e)=>setjob_salary_range(e.target.value)} 
                       pattern="[0-9-]+" title="Enter Numeric values with dash"  />
                    </div>


                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Total Positions</label>
                      <input type="number" className="form-control" required id="exampleInputEmail1" placeholder="Enter Job Quantity"  
                       value={job_quantity}
                       onChange={(e)=>setjob_quantity(e.target.value)} 
                       pattern="[0-9]+" title="Enter only numeric values"/>
                    </div>
  
  
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Job Description</label>
                      <textarea className="form-control" required id="exampleInputEmail1" placeholder="Enter Job Description" 
                       value={job_description}
                       rows={8}
                       cols={5}
                      style={{resize: 'none'}}
                       onChange={(e)=>setjob_description(e.target.value)} 
                       pattern="[a-zA-Z0-9\s]+" title="Enter Only aplha numeric values"/>
                    </div>
  
                   

                 
                
                  <div className="form-group">
                  <label>Job End Date:</label>
                     <input type="date" className="form-control"  required  name="trip-start"
                       value={job_end_date}
                      onChange={(e)=>setjob_end_date(e.target.value)}/> 
                     
                    </div>
                

                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Company Name</label>
                      <input type="text" className="form-control" required id="exampleInputEmail1" placeholder="Enter Company Name" 
                       value={company_name}
                       onChange={(e)=>setcname(e.target.value)} 
                       pattern="[a-zA-Z0-9\s]+" title="Enter Only aplha numeric values"/>
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Company Email that received email</label>
                      <input type="email" className="form-control"  required id="exampleInputEmail1" placeholder="Enter Company Email" 
                       value={company_email}
                       onChange={(e)=>setcemail(e.target.value)} 
                       pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                     title="Please Enter Valid Email"/>
                    </div>


                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Company Website</label>
                      <input type="text" className="form-control" required id="exampleInputEmail1" placeholder="Enter Company Website" 
                       value={company_website}
                       onChange={(e)=>setcwebsite(e.target.value)} />
                    </div>


                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Company Contact No</label>
                      <input type="text" className="form-control" required id="exampleInputEmail1" placeholder="Enter Company Contact" 
                       value={company_contact}
                       onChange={(e)=>setccontact(e.target.value)} 
                       pattern="[0-9]+" title="Enter only numeric values" />
                    </div>
                    



                


  
                    <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Select Status</label>
                        <select className="form-control" 
                        value={status}
                        onChange={(e)=>setstatus(e.target.value)}>
                        <option value="">Select Status</option>
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                      </div>
                    </div>
                  </div>


                  {/* <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Select Company</label>
                        <select className="form-control" 
                        value={companyid}
                        onChange={(e)=>setcompany(e.target.value)}>
                        <option value="">Select Company</option>

                        {companies.map((company) =>
                        <option key={company._d} value={company._id}>{company.company_name}</option>)}

                        </select>
                      </div>
                    </div>
                  </div> */}
  
                 
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