import { useState,useEffect } from "react";
import {useHistory} from "react-router-dom";

const CreateStudent = () => {
  const [stu_name, setstu_name]=useState('');
  const [stu_gender, setstu_gender]=useState('');
  const [stu_education, setstu_education]=useState('');
  const [stu_email, setstu_email]=useState('');
  const [stu_contact, setstu_contact]=useState('');
  const [stu_address, setstu_address]=useState('');
  const [stu_dob, setstu_dob]=useState('');
  const [stu_linkedin, setstu_linkedin]=useState('');
  const [stu_github, setstu_github]=useState('');
  const [status, setstatus]=useState('');

  // const [isLoading, setIsLoading]=useState(false);
   const history = useHistory();


   useEffect(() => {

    const myuser = localStorage.getItem("MyUser");
    if(myuser)
    {
     history.push('/backend/addStudent');
    }
    else
    {
     history.push('/adminLogin');
    }
     });
 
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
                <li className="breadcrumb-item active">Student Form</li>
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
                  <h3 className="card-title">Student</h3>
                </div>
                <form  onSubmit={(e)=>{
            e.preventDefault();
            const student = { stu_name,stu_gender,stu_education,stu_email,stu_contact,stu_address,stu_dob,stu_linkedin,stu_github,status }
            
            fetch("http://localhost:5000/createstudent",
            {
                mode: 'cors',
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(student),
            }).then((response)=>{
                history.push('/backend/students');
            })
        }}
        >
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Name</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter name"
                       value={stu_name}
                       onChange={(e)=>setstu_name(e.target.value)} />
                    </div>


                    <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Select Gender</label>
                        <select className="form-control" required 
                        value={stu_gender}
                        onChange={(e)=>setstu_gender(e.target.value)} >
                        <option value="">Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Select Education</label>
                        <select className="form-control" required 
                        value={stu_education}
                        onChange={(e)=>setstu_education(e.target.value)}
                        >
                        <option value="">Select Education</option>
                          <option>Matric</option>
                          <option>Intermediate</option>
                          <option>Bachelor</option>
                          <option>Masters</option>
                          <option>PHD</option>
                        </select>
                      </div>
                    </div>
                  </div>

  
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email</label>
                      <input type="email" className="form-control" required id="exampleInputEmail1" placeholder="Enter email" 
                       value={stu_email}
                       onChange={(e)=>setstu_email(e.target.value)} />
                    </div>


                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Contact No</label>
                      <input type="text" className="form-control" required id="exampleInputEmail1" placeholder="Enter contact no"  
                       value={stu_contact}
                       onChange={(e)=>setstu_contact(e.target.value)}/>
                    </div>
  
  
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Address</label>
                      <input type="text" className="form-control" required id="exampleInputEmail1" placeholder="Enter address" 
                       value={stu_address}
                       onChange={(e)=>setstu_address(e.target.value)} />
                    </div>
  
                   

                 
                
                  <div className="form-group">
                  <label>Date Of Birth:</label>
                     <input type="date" className="form-control"  required  
                       value={stu_dob}
                      onChange={(e)=>setstu_dob(e.target.value)}/> 
                     
                    </div>
                
             
  
  
  
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">LinkedIn Profile</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter linkedin profile"
                        value={stu_linkedin}
                        onChange={(e)=>setstu_linkedin(e.target.value)} />
                    </div>
  
  
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Github Link</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter github link" 
                       value={stu_github}
                       onChange={(e)=>setstu_github(e.target.value)}/>
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

export default CreateStudent;